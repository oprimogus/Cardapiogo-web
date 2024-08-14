export type JWT = {
	idToken: string;
	accessToken: string;
	expiresIn: number;
	refreshToken: string;
	refreshExpiresIn: number;
	tokenType: string;
	notBeforePolicy: number;
	sessionState: string;
	scope: string;
};

export type User = {
	email: string;
	emailVerified: boolean;
	firstName: string;
	lastName: string;
	fullName: string;
	sessionState: string;
	roles: UserRole[];
	jwt?: JWT;
};

export enum UserRole {
	CONSUMER = "consumer",
	OWNER = "owner",
	EMPLOYEE = "employee",
	DELIVERY_MAN = "delivery_man",
}

export type CreateUser = {
	email: string;
	password: string;
	profile: {
		name: string;
		lastName: string;
		phone: string;
		document: string;
	};
};
