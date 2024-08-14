export const env = {
	api: {
		baseURL: process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8080",
	},
	keycloak: {
		baseURL: process.env.KEYCLOAK_BASE_URL ?? "http://localhost:8081",
		realm: process.env.KEYCLOAK_REALM ?? "cardapiogo",
		clientId: process.env.KEYCLOAK_CLIENT_ID ?? "cardapiogo",
		clientSecret: process.env.KEYCLOAK_CLIENT_SECRET ?? "cardapiogo",
	},
};
