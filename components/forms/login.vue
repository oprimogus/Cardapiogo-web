<template>
  <div class="bg-red flex flex-1 min-h-screen flex-col justify-center items-center px-6 py-12 lg:px-8">
    <div class="bg-white p-8 rounded-lg shadow-lg sm:mx-auto sm:w-full sm:max-w-md">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-32 w-auto" src="/assets/svg/cardapiogo-red.svg" alt="Your Company" />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Acesse sua conta
        </h2>
      </div>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit.prevent="handleSubmit">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
            <div class="mt-2">
              <input v-model="form.email" id="email" name="email" type="email" autocomplete="email" required="true"
                class="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
            </div>
          </div>
  
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Senha</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-black hover:text-red">Esqueceu a senha? Faz o L (não
                  implementado)</a>
              </div>
            </div>
            <div class="mt-2">
              <input v-model="form.password" id="password" name="password" type="password" autocomplete="current-password" required="true"
                class="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
            </div>
          </div>
  
          <div>
            <button type="submit"
              class="flex w-full justify-center rounded-md bg-red px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Entrar</button>
          </div>
        </form>
  
        <p class="mt-10 text-center text-sm text-gray-500">
          Não possui cadastro?
          {{ ' ' }}
          <a href="#" class="font-semibold leading-6 text-red hover:text-red">Crie uma conta</a>
        </p>
      </div>

    </div>
    
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios';
import { baseApiUrl } from '../../config/env';

const form = ref({
  email: '',
  password: ''
})

async function handleSubmit() {
  try {
    const response = await axios.post(`${baseApiUrl}/v1/login`, {
        email: form.value.email,
        password: form.value.password
    })
  } catch (error) {
    console.error('Failed to submit form', error)
    // Handle error
  }
}
</script>
