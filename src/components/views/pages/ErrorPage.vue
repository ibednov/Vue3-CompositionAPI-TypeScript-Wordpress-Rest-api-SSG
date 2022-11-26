<template>
  <div
    class="container mx-auto flex flex-col gap-8 p-10 bg-blue-100 dark:bg-blue-900 rounded-xl"
  >
    <h1
      class="text-8xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-blue-400"
    >
      404
      <small>
        {{ $t("error.error") }}
      </small>
    </h1>
    <h1 class="text-6xl text-center font-extrabold uppercase">
      {{ $t("error.not_found") }}
    </h1>
    <h1 class="text-xl text-center font-light">
      {{ $t("error.try_else") }}
    </h1>

    <router-link
      :to="{ name: 'Home' }"
      type="button"
      class="md:w-1/4 self-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    >
      {{ $t("error.maybe_main") }}
    </router-link>
  </div>
</template>
