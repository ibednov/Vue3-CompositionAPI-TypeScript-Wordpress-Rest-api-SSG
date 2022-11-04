<script setup>
import LangSwitcher from "./LangSwitcher.vue";
</script>
<template>
  <div>
    <nav
      class="bg-stone-100 m-4 md:mt-1 p-2 sm:p-4 rounded-xl dark:bg-gray-900 z-50 fixed bottom-0 left-0 right-0 sm:top-0 sm:bottom-auto"
    >
      <div
        class="container-xl flex flex-wrap justify-between items-center mx-auto"
      >
        <router-link :to="{ name: 'Home' }" class="flex items-center">
          <span
            class="self-center text-sm sm:text-xl font-semibold whitespace-nowrap dark:text-white"
          >
            {{ $t("global.site_name") }}
          </span>
        </router-link>

        <LangSwitcher />

        <router-link
          :to="{ name: 'Contacts' }"
          type="button"
          class="font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 md:order-last text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onclick="replain_show(event)"
        >
          {{ $t("header.contact_me") }}
        </router-link>

        <div
          id="mobile-menu-language-select"
          class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
        >
          <ul
            class="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0"
          >
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                {{ $t("header.cases") }}
                <svg
                  class="ml-1 w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>

              <!-- Dropdown menu -->
              <div
                id="dropdownNavbar"
                class="hidden z-10 w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                style="
                  position: absolute;
                  inset: 0px auto auto 0px;
                  margin: 0px;
                  transform: translate(0px, 426px);
                "
                data-popper-reference-hidden=""
                data-popper-escaped=""
                data-popper-placement="bottom"
              >
                <ul
                  class="py-1 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="/category/14"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {{ $t("categories.uiux") }}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/category/87"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {{ $t("categories.brand") }}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/category/13"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {{ $t("categories.dev") }}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 cursor-not-allowed text-gray-300 dark:text-gray-900"
                    >
                      {{ $t("categories.gamedev") }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a
                href="/category/2"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {{ $t("categories.blog") }}
              </a>
            </li>

            <li>
              <router-link
                :to="{ name: 'Contacts' }"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {{ $t("header.contacts") }}
              </router-link>
            </li>

            <li>
              <a
                href="/team/903"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {{ $t("header.cv") }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <!-- {{ $t('header.home') }} -->
      </div>
    </nav>
  </div>
</template>
