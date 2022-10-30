<script setup>
const currentDate = new Date();
</script>

<template>
  <footer class="pb-28 p-8 md:p-12">
    <div class="p-4 md:px-10 md:py-6 rounded-xl bg-white dark:bg-stone-800">
      <div
        class="flex flex-col md:flex-row text-center justify-center md:justify-between"
      >
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <router-link
            :to="{ name: 'Home' }"
            class="hover:underline font-extrabold text-indigo-700"
          >
            {{ $t("global.site_name") }}.
          </router-link>
          ©2018 – {{ currentDate.getFullYear() }}.
          {{ $t("footer.rights") }}
        </span>
        <ul
          class="flex flex-wrap items-center self-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
        >
          <li>
            <a href="/" class="mr-4 hover:underline md:mr-6">
              {{ $t("header.cases") }}
            </a>
          </li>
          <li>
            <a href="/" class="mr-4 hover:underline md:mr-6">
              {{ $t("header.blog") }}
            </a>
          </li>
          <li>
            <a href="/team/alepsios" class="mr-4 hover:underline md:mr-6">
              {{ $t("header.cv") }}
            </a>
          </li>
          <li>
            <a href="/contacts" class="hover:underline">
              {{ $t("header.contacts") }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
