<template>
  <div class="overflow-hidden bg-gray py-24">
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-base font-semibold leading-7 text-black">{{ title }}</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-red sm:text-4xl">{{ subtitle }}</p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          {{ description }}
        </p>
        <!-- Container for features, utilizing grid layout for 2-column layout -->
        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          <div v-for="feature in features" :key="feature.name" class="flex flex-col items-center md:items-center">
            <dl class="font-semibold text-gray-900 flex justify-items-center items-center">
              <component :is="feature.icon" class="h-6 w-6 text-red-600 mr-2" aria-hidden="true" />
              {{ feature.name }}:
            </dl>
            <dd class="mt-2 text-base text-gray-600">{{ feature.description }}</dd>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  title: String,
  subtitle: String,
  description: String,
  features: Array
})
</script>