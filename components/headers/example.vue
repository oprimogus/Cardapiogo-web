<template>
    <header class="w-screen flex flex-row items-center h-[6vh] bg-red">
        <div class="flex-grow-0 h-full flex items-center">
            <img src="/assets/svg/cardapiogo.svg" alt="Logotipo Cardápiogo" class="h-full md:h-full">
        </div>
        <nav class="flex flex-row justify-end items-center flex-grow w-full h-full px-[6vw] space-x-[4vw]">
            <ButtonsLink to="/" variant="red">Criar Conta</ButtonsLink>
            <ButtonsLink to="/" variant="white">Entrar</ButtonsLink>
        </nav>
    </header>
</template>