<template>
  <NuxtLink :to="to" :class="buttonClass">
    <slot></slot> <!-- Permite a inserção de conteúdo customizado -->
  </NuxtLink>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    buttonClass() {
      const baseClasses = 'p-[0.5vw] font-bold rounded-md flex flex-row justify-center items-center ';
      if (this.variant === 'secondary') {
        return `${baseClasses} bg-secondary text-primary`;
      }
      return `${baseClasses} text-secondary`;
    },
  },
}
</script>