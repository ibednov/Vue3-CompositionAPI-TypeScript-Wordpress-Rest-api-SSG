<script setup lang="ts">
const router = useRouter()
const route = useRoute()
console.log(route.name);
</script>

<template>
  <div class="md:mb-26">
    <nav
      class=" bg-stone-100 m-4 md:mt-1 p-2 sm:p-4 rounded-xl dark:bg-gray-900 z-50 fixed bottom-0 left-0 right-0 md:top-0 md:bottom-auto">
      <div class="container-xl flex flex-wrap justify-between mx-auto">

        <button
          :class="route.path === '/' ? 'disable text-gray-800 hover:bg-transparent hover:text-gray-800' : 'active'"
          class="md:hidden hover:bg-gray-700 hover:text-blue-400 p-2 rounded-xl" @click="router.back()"
          @click.prevent="(route.name === 'index')">
          <div class="self-center i-mingcute:arrow-left-fill text-2xl" />
        </button>

        <a href="/" class="flex items-center">
          <div class="md:hidden hover:bg-gray-700 hover:text-blue-400 p-2 rounded-xl">
            <div class="i-mingcute:home-4-fill text-2xl  " />
          </div>
          <span class="hidden md:block self-center text-sm sm:text-xl font-semibold whitespace-nowrap dark:text-white">
            {{ $t('global.site_name') }}
          </span>

        </a>

        <a href="/contacts" type="button" class="md:order-last text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full md:rounded-xl text-sm  p-5 -mt-5 md:mt-0
          md:px-5 md:py-2.5 text-center mr-2 mb-2">
          <span class="hidden md:block">{{ $t('header.contact_me') }}</span>
          <div class="i-mingcute:chat-2-fill text-2xl md:hidden" />
        </a>

        <LangSwitcher />
        <button data-collapse-toggle="mobile-menu-language-select" type="button"
          class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-language-select" aria-expanded="false">
          <span class="sr-only">
            {{ $t('header.open_menu') }}
          </span>

          <div class="md:hidden hover:bg-gray-700 hover:text-blue-400 p-2 rounded-xl">
            <div class="i-mingcute:align-right-fill text-2xl" />
          </div>
        </button>


        <div id="mobile-menu-language-select"
          class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
          <ul
            class="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                {{ $t('categories.cases') }}
                <svg class="ml-1 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </button>

              <!-- Dropdown menu -->
              <div id="dropdownNavbar"
                class="hidden z-10 w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                style="
                  position: absolute;
                  inset: 0px auto auto 0px;
                  margin: 0px;
                  transform: translate(0px, 426px);
                " data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="/category/14"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      {{ $t('categories.uiux-design') }}
                    </a>
                  </li>
                  <li>
                    <a href="/category/87"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      {{ $t('categories.brand-marketing-design') }}
                    </a>
                  </li>
                  <li>
                    <a href="/category/13"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      {{ $t('categories.development') }}
                    </a>
                  </li>

                  <li>
                    <div class="block py-2 px-4 cursor-not-allowed text-gray-300 dark:text-gray-900">
                      {{ $t('categories.gamedev') }}
                    </div>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a href="/category/2"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                {{ $t('categories.blog') }}
              </a>
            </li>

            <li>
              <a href="/team"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                {{ $t('team.team') }}
              </a>
            </li>

            <li>
              <a href="/contacts"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                {{ $t('header.contacts') }}
              </a>
            </li>

            <li>
              <a href="/team/903"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                {{ $t('header.cv') }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
