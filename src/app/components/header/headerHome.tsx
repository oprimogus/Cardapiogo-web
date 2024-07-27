'use client'
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { DialogMenu, type DialogMenuItem } from "../menu/dialogMenu";

export function HeaderHome() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const items: DialogMenuItem[] = [
    { href: "/sign-in", text: "Entrar" },
    { href: "/sign-up", text: "Criar Conta" },
    { href: "/search", text: "Buscar lojas e restaurantes" },
    { href: "/sign-up-store", text: "Anuncie sua loja e restaurante" }
  ]

  return (
    <header className="bg-red-600 h-12 flex flex-row items-center justify-between text-white">
      <nav className="flex flex-row items-center justify-end p-4">
        <a href="/">
        <img src="./cardapiogo/cardapiogo-white.svg" alt="Logo Cardapiogo" className="h-8 w-8" />
        </a>
      </nav>
      <nav className="flex flex-row items-center justify-end p-4">
        <button type="button" onClick={() => setMobileMenu(!mobileMenu)}>
          <Bars3Icon className="h-8 w-8 transform transition-transform hover:scale-110" />
        </button>
      </nav>
      <DialogMenu isOpen={mobileMenu} items={items}/>
    </header>
  );
}