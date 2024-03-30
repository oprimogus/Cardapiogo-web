import { baseApiUrl } from "~/config/env";

export default defineEventHandler(async (event) => {
    try {
        await $fetch('/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        baseURL: baseApiUrl,
        credentials: 'include',
        body: {
          email: form.value.email,
          password: form.value.password
        }
      })
    
        console.warn('Antes do redirect');
        // Nuxt 3 recomenda usar navigateTo para navegação.
        await navigateTo('/home');
        console.warn('Depois do redirect');
      } catch (error) {
        console.error(error);
      }
})