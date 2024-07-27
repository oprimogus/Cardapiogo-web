import { navigateTo } from "nuxt/app"
import { baseApiUrl } from "~/config/env"

export default defineEventHandler(async (event) => {
    const data = event._requestBody
    try {
        const jwt = await $fetch('/api/v1/auth/sign-in', {
            baseURL: baseApiUrl,
            method: 'POST',
            body: data
        })
        sessionStorage.setItem('auth', JSON.stringify(jwt))
        await navigateTo('/home')
    } catch (error) {
        console.log(error)
        console.error('Falaha ao fazer login')
    }
    
})