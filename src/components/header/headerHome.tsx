"use client";
import { useAuthContext } from "@/context";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, type MenuItem } from "../menu/menu";

export function HeaderHome() {
	const [isOpen, setIsOpen] = useState(false);
	const { isAuthenticated, logout } = useAuthContext();
	const router = useRouter();

	function handleLogout() {
		logout();
		router.replace("/");
	}

	const items: MenuItem[] = [
		{ href: "/home", text: "Buscar lojas e restaurantes" },
		{ href: "/sign-up-store", text: "Anuncie sua empresa" },
		{ href: "/sign-in", text: "Entrar" },
		{ href: "/sign-up", text: "Criar Conta" },
	];

	const itemsWhenLogged: MenuItem[] = [
		{ href: "/home", text: "Buscar lojas e restaurantes" },
		{ href: "/sign-up", text: "Meu perfil" },
		{ href: "/sign-up", text: "Sair", action: handleLogout },
	];

	return (
		<nav className="fixed w-full bg-red-600 shadow">
			<div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center md:px-0">
				<div className="flex items-center justify-between">
					<Link href="/">
						<img
							className="w-auto h-12 sm:h-9"
							src="/cardapiogo/cardapiogo-white.svg"
							alt="Logo"
						/>
					</Link>
					<div className="flex md:hidden">
						<button
							type="button"
							aria-label="toggle menu"
							onClick={() => setIsOpen(!isOpen)}
							className="text-white h-8 w-8 transform transition-transform hover:scale-110"
						>
							{!isOpen ? (
								<Bars3Icon className="h-8 w-8 transform transition-transform hover:scale-110" />
							) : (
								<XMarkIcon className="h-8 w-8 transform transition-transform hover:scale-110" />
							)}
						</button>
					</div>
				</div>
				<Menu
					isOpen={isOpen}
					items={isAuthenticated ? itemsWhenLogged : items}
				/>
			</div>
		</nav>
	);
}
