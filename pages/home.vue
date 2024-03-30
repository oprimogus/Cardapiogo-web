<template>
    <div>
      <h1>Exemplo de Fetch</h1>
      <p>Página protegida com autenticação</p>
      <pre>{{ data }}</pre>
    </div>
  </template>
  
  <script setup lang="ts">
import auth from '~/middlewares/auth';

  definePageMeta({
    middleware: auth
  })
  const { data } = await useFetch('https://jsonplaceholder.typicode.com/todos/1')
  </script>