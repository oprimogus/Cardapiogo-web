"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { AuthProvider } from "../context/authentication";

export const Providers = ({ children }: { children: ReactNode }) => {
	const client = new QueryClient();
	return (
		<QueryClientProvider client={client}>
			<AuthProvider>{children}</AuthProvider>
		</QueryClientProvider>
	);
};
