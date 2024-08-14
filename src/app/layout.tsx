import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import { Providers } from "../context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Cardapiogo",
	description: "Compre de suas lojas favoritas",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		// <Providers><html lang="en">
		// 	<body className={inter.className}>
		// 		{children}
		// 	</body>
		// </html></Providers>

		<html lang="en">
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
