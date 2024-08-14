import { env } from "../../config/env";
import { JwtService } from "../utils/jwt";
import { type CreateUser, type JWT, type User, UserRole } from "./types";

export class CardapiogoService {
	private baseURL = env.api.baseURL;
	private readonly jwtService = new JwtService();

	private isValidUserRole(value: string): boolean {
		return Object.values(UserRole).includes(value as UserRole);
	}

	public mapUser(token: string): User {
		const decodedToken = this.jwtService.decodeJWT(token) as any;

		const roles = (decodedToken.realm_access.roles as string[]).filter((role) =>
			this.isValidUserRole(role),
		) as UserRole[];

		return {
			firstName: decodedToken.given_name,
			lastName: decodedToken.family_name,
			fullName: decodedToken.name,
			email: decodedToken.email,
			emailVerified: decodedToken.email_verified,
			roles: roles,
			sessionState: decodedToken.session_state,
		};
	}

	private mapJwt(token: JWT): User {
		const decodedToken = this.jwtService.decodeJWT(token.accessToken) as any;

		const roles = (decodedToken.realm_access.roles as string[]).filter((role) =>
			this.isValidUserRole(role),
		) as UserRole[];

		return {
			firstName: decodedToken.given_name,
			lastName: decodedToken.family_name,
			fullName: decodedToken.name,
			email: decodedToken.email,
			emailVerified: decodedToken.email_verified,
			roles: roles,
			sessionState: decodedToken.session_state,
			jwt: token,
		};
	}

	private delay(ms: number): Promise<void> {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
	async signIn(email: string, password: string): Promise<User> {
		await this.delay(60000);
		const response = await fetch(`${this.baseURL}/api/v1/auth/sign-in`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		});

		if (!response.ok) {
			const error = await response.json();
			throw new Error(`Falha ao fazer login: ${error.error}`);
		}

		const data: JWT = await response.json();
		return this.mapJwt(data);
	}

	async refresh(token: string): Promise<User> {
		const response = await fetch(`${this.baseURL}/api/v1/auth/refresh`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ refreshToken: token }),
		});

		if (!response.ok) {
			const error = await response.json();
			console.log(`Falha ao recuperar JWT: ${error.error}`);
			throw new Error(`Falha ao recuperar JWT: ${error.error}`);
		}

		const data: JWT = await response.json();
		return this.mapJwt(data);
	}

	async signUp(params: CreateUser): Promise<void> {
		const response = await fetch(`${this.baseURL}/api/v1/auth/sign-up`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(params),
		});

		if (!response.ok) {
			const error = await response.json();
			throw new Error(`Ocorreu um erro ao criar o usuário: ${error}`);
		}
	}
}

export const cardapiogoService = new CardapiogoService();
