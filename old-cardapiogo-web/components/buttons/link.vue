<template>
  <NuxtLink :to="to" :class="buttonClass">
    <slot></slot>
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
      if (this.variant === 'red') {
        return `${baseClasses} bg-white text-red`;
      }
      return `${baseClasses} text-white`;
    },
  },
}
</script>