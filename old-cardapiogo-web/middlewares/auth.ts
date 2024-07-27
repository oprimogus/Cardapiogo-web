export default defineNuxtRouteMiddleware((to, from) => {
    const isLoggedIn = useCookie('token')

    if (!isLoggedIn.value) {
      return navigateTo('/login')
    }
    return navigateTo('/home')
  });