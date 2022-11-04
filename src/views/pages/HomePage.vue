<script setup>
import Category from "./CategoryById.vue";
</script>

<template>
  <main class="container mx-auto">
    <div class="mb-4 0">
      <ul
        id="main_tabs"
        class="flex flex-wrap -mb-px text-sm font-medium text-center"
        data-tabs-toggle="#tabCategories"
        role="tablist"
      >
        <li class="mr-2" role="presentation">
          <button
            id="uiux-tab"
            class="flex flex-row gap-4 p-4 rounded-xl py-4 px-7 bg-gradient-to-br from-indigo-700 to-violet-700"
            data-tabs-target="#uiux"
            type="button"
            role="tab"
            aria-controls="uiux"
            aria-selected="true"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              ></path>
            </svg>
            {{ $t("categories.uiux") }}
          </button>
        </li>
        <li class="mr-2" role="presentation">
          <button
            id="brand-tab"
            class="flex flex-row gap-4 p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
            data-tabs-target="#brand"
            type="button"
            role="tab"
            aria-controls="brand"
            aria-selected="false"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              ></path>
            </svg>
            {{ $t("categories.brand") }}
          </button>
        </li>
        <li class="mr-2" role="presentation">
          <button
            id="dev-tab"
            class="flex flex-row gap-4 p-4 rounded-t-lg border-b-2 border-transparent active:border-blue-600 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
            data-tabs-target="#dev"
            type="button"
            role="tab"
            aria-controls="dev"
            aria-selected="false"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              ></path>
            </svg>
            {{ $t("categories.dev") }}
          </button>
        </li>
        <li class="mr-2" role="presentation">
          <button
            id="gamedev-tab"
            class="flex flex-row gap-4 p-4 rounded-t-lg border-b-2 border-transparent active:border-blue-600 dark:border-transparent text-gray-500 dark:text-gray-600 border-gray-100 dark:border-gray-700 cursor-not-allowed"
            data-tabs-target="#gamedev"
            type="button"
            role="tab"
            aria-controls="gamedev"
            aria-selected="false"
            disabled
          >
            <svg
              id="mdi-gamepad-variant-outline"
              class="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              viewBox="0 0 24 24"
            >
              <path
                d="M6,9H8V11H10V13H8V15H6V13H4V11H6V9M18.5,9A1.5,1.5 0 0,1 20,10.5A1.5,1.5 0 0,1 18.5,12A1.5,1.5 0 0,1 17,10.5A1.5,1.5 0 0,1 18.5,9M15.5,12A1.5,1.5 0 0,1 17,13.5A1.5,1.5 0 0,1 15.5,15A1.5,1.5 0 0,1 14,13.5A1.5,1.5 0 0,1 15.5,12M17,5A7,7 0 0,1 24,12A7,7 0 0,1 17,19C15.04,19 13.27,18.2 12,16.9C10.73,18.2 8.96,19 7,19A7,7 0 0,1 0,12A7,7 0 0,1 7,5H17M7,7A5,5 0 0,0 2,12A5,5 0 0,0 7,17C8.64,17 10.09,16.21 11,15H13C13.91,16.21 15.36,17 17,17A5,5 0 0,0 22,12A5,5 0 0,0 17,7H7Z"
              />
            </svg>

            {{ $t("categories.gamedev") }}
          </button>
        </li>
        <li role="presentation">
          <button
            id="blog-tab"
            class="flex flex-row gap-4 p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
            data-tabs-target="#blog"
            type="button"
            role="tab"
            aria-controls="blog"
            aria-selected="false"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              ></path>
            </svg>
            {{ $t("categories.blog") }}
          </button>
        </li>
      </ul>
    </div>

    <div id="tabCategoriesContent" class="gap-4 bg-gradient-to-r">
      <div id="uiux" class="p-4" role="tabpanel" aria-labelledby="uiux-tab">
        <KeepAlive>
          <Category :cat="14" />
        </KeepAlive>
      </div>
      <div
        id="brand"
        class="hidden p-4"
        role="tabpanel"
        aria-labelledby="brand-tab"
      >
        <KeepAlive>
          <Category :cat="87" />
        </KeepAlive>
      </div>
      <div
        id="dev"
        class="hidden p-4"
        role="tabpanel"
        aria-labelledby="dev-tab"
      >
        <KeepAlive>
          <Category :cat="13" />
        </KeepAlive>
      </div>
      <div
        id="gamedev"
        class="hidden p-4"
        role="tabpanel"
        aria-labelledby="gamedev-tab"
      >
        {{ $t("categories.gamedev") }}
      </div>
      <div
        id="blog"
        class="hidden p-4"
        role="tabpanel"
        aria-labelledby="blog-tab"
      >
        <KeepAlive>
          <Category :cat="2" />
        </KeepAlive>
      </div>
    </div>
  </main>
</template>
