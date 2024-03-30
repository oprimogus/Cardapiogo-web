<template>
  <div class="overflow-hidden bg-gray py-24 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto flex justify-items-center items-center grid max-w-2xl grid-cols-1 gap-x-8 gap-y-24 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="text-base font-semibold leading-7 text-black">{{ title }}</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-red sm:text-4xl">{{ subtitle }}</p>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              {{ description }}
            </p>
            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                <dt class="inline font-semibold text-gray-900">
                  <component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-red-600" aria-hidden="true" />
                  {{ feature.name }}: 
                </dt>
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
        <img v-if="imageSrc" :src="imageSrc" alt="App screenshot" class="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10" />
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  title: String,
  subtitle: String,
  description: String,
  features: Array,
  imageSrc: String,
})
</script>