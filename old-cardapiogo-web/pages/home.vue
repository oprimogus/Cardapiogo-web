<template>
  <div>
    <h1>Exemplo de Fetch</h1>
    <p>Página protegida com autenticação</p>
    <!-- <pre>{{ data }}</pre> -->
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'auth' })
</script>