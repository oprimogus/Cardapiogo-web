<template>
    <footer class="bg-red font-sans">
        <div class="container px-6 py-12 mx-auto text-center">

            <div>
                <p class="font-semibold text-white pb-2 md:pb-4">Acesso Rápido</p>

                <div class="flex flex-row justify-center items-center gap-2 md:gap-4">
                    <p class="text-white transition-colors duration-300 hover:underline cursor-pointer hover:text-blue-500">
                        Home
                    </p>
                    <p class="text-white transition-colors duration-300 hover:underline cursor-pointer hover:text-blue-500">
                        Quem somos
                    </p>
                    <p class="text-white transition-colors duration-300 hover:underline cursor-pointer hover:text-blue-500">
                        Nossa filosofia
                    </p>
                </div>
            </div>

            <hr class="my-6 border-gray-200 dark:border-gray-700 h-2" />

            <div class="flex flex-col sm:flex-row justify-between items-center gap-2">
                <div class="flex gap-2 sm:gap-4 justify-center">
                    <img class="cursor-pointer" src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" width="130" height="40" alt="" />
                    <img class="cursor-pointer" src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" width="130" height="40" alt="" />
                </div>

                <div class="flex gap-2 sm:gap-4 justify-center">
                    <img class="cursor-pointer" src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                    <img class="cursor-pointer" src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                    <img class="cursor-pointer" src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                    <img class="cursor-pointer" src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
                </div>
            </div>
            <p class="text-white text-lg p-4">© {{ year }} Cardapiogo. All rights reserved.</p>
        </div>
    </footer>
</template>
<script setup lang="ts">
const year = new Date().getFullYear()
</script>