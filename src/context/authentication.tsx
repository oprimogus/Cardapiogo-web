"use client";
import { cardapiogoService } from "@/services/cardapiogo-api/service";
import type { User } from "@/services/cardapiogo-api/types";
import { type UseMutationResult, useMutation } from "@tanstack/react-query";
import { DateTime } from "luxon";
import { useRouter } from "next/navigation";
import { parseCookies, setCookie } from "nookies";
import {
	type ReactNode,
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";

export type AuthContextType = {
	signIn: UseMutationResult<
		User,
		Error,
		{
			email: string;
			password: string;
		},
		unknown
	>;
	user: User | null;
	isAuthenticated: boolean;
	logout: () => void;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: Readonly<{ children: ReactNode }>) {
	const router = useRouter();
	const [user, setUser] = useState<User | null>(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	function setCookies(user: User) {
		if (user.jwt) {
			setCookie(undefined, "cardapiogo_refresh_token", user.jwt?.refreshToken, {
				expires: DateTime.now()
					.plus({ seconds: user.jwt?.refreshExpiresIn })
					.toJSDate(),
				secure: process.env.NODE_ENV === "production",
				httpOnly: false,
				sameSite: "strict",
				path: "/",
			});
			setCookie(undefined, "cardapiogo_access_token", user.jwt.accessToken, {
				expires: DateTime.now()
					.plus({ seconds: user.jwt.expiresIn })
					.toJSDate(),
				secure: process.env.NODE_ENV === "production",
				httpOnly: false,
				sameSite: "strict",
				path: "/",
			});
		}
	}

	function getTokens() {
		const cookies = parseCookies();
		return {
			accessToken: cookies.cardapiogo_access_token,
			refreshToken: cookies.cardapiogo_refresh_token,
		};
	}

	function clearTokens() {
		setCookie(undefined, "cardapiogo_access_token", "", {
			expires: new Date(0),
		});
		setCookie(undefined, "cardapiogo_refresh_token", "", {
			expires: new Date(0),
		});
	}

	useEffect(() => {
		const { accessToken, refreshToken } = getTokens();

		if (!refreshToken) {
			setIsAuthenticated(false);
			return;
		}

		if (refreshToken && !accessToken) {
			refreshmutation.mutate({ refreshToken });
		}

		if (refreshToken && accessToken && !isAuthenticated) {
			const user = cardapiogoService.mapUser(accessToken);
			setUser(user);
			setIsAuthenticated(true);
		}
	}, [isAuthenticated]);

	const signInmutation = useMutation({
		mutationFn: ({ email, password }: { email: string; password: string }) => {
			return cardapiogoService.signIn(email, password);
		},
		onSuccess: (data) => {
			console.log("deu bom no login");
			setUser(data);
			setCookies(data);
			setIsAuthenticated(true);
			router.push("/home");
		},
		onError: (error) => {
			console.log("deu ruim no login");
			setIsAuthenticated(false);
		},
	});

	const refreshmutation = useMutation({
		mutationFn: ({ refreshToken }: { refreshToken: string }) => {
			return cardapiogoService.refresh(refreshToken);
		},
		onSuccess: (data) => {
			console.log("deu bom no refresh");
			setUser(data);
			setCookies(data);
			setIsAuthenticated(true);
			router.push("/home");
		},
		onError: (error) => {
			console.log("deu ruim no refresh");
		},
	});

	const logout = () => {
		console.log("Funcao de logout foi executada");
		clearTokens();
		setIsAuthenticated(false);
	};

	const contextValue = useMemo(() => {
		return {
			signIn: signInmutation,
			user,
			isAuthenticated,
			logout,
		};
	}, [signInmutation, user, isAuthenticated]);

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
}

export const useAuthContext = () => useContext(AuthContext);
