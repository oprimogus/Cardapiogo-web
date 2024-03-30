export default defineNuxtRouteMiddleware((to, from) => {
    const isLoggedIn = useCookie('token')

    if (!isLoggedIn.value) {
      console.warn('NAO LOGADO')
      console.log('AQUI: ', JSON.stringify(isLoggedIn))
      return navigateTo('/login')
    }
    console.warn('LOGADO')
  });