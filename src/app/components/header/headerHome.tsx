"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Menu, type MenuItem } from "../menu/menu";

export function HeaderHome() {
	const [isOpen, setIsOpen] = useState(false);

	const items: MenuItem[] = [
		{ href: "/search", text: "Buscar lojas e restaurantes" },
		{ href: "/sign-up-store", text: "Anuncie sua empresa" },
		{ href: "/sign-in", text: "Entrar" },
		{ href: "/sign-up", text: "Criar Conta" },
	];

	return (
		<nav className="fixed w-full bg-red-600 shadow">
			<div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center md:px-0">
				<div className="flex items-center justify-between">
					<a href="/">
						<img
							className="w-auto h-12 sm:h-9"
							src="/cardapiogo/cardapiogo-white.svg"
							alt="Logo"
						/>
					</a>
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
				<Menu isOpen={isOpen} items={items} />
			</div>
		</nav>
	);
}
