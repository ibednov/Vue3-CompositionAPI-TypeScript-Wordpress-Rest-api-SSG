<script setup>
import { useStore } from 'vuex';

const store = useStore()
const handleChangeLocaleRu = () => store.dispatch('setLocale', 'ru')
const handleChangeLocaleEn = () => store.dispatch('setLocale', 'en')
</script>

<template>
    <div class="flex items-center md:order-2">
        <button v-show="store.state.locale === 'en'" type="button" data-dropdown-toggle="language-dropdown-menu-ru"
            class="inline-flex justify-center items-center p-2 text-sm text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <svg class="mr-2 w-5 h-5 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900">
                <path fill="#b22234" d="M0 0h7410v3900H0z"></path>
                <path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300">
                </path>
                <path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path>
                <g fill="#fff">
                    <g id="d">
                        <g id="c">
                            <g id="e">
                                <g id="b">
                                    <path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z">
                                    </path>
                                    <use xlink:href="#a" y="420"></use>
                                    <use xlink:href="#a" y="840"></use>
                                    <use xlink:href="#a" y="1260"></use>
                                </g>
                                <use xlink:href="#a" y="1680"></use>
                            </g>
                            <use xlink:href="#b" x="247" y="210"></use>
                        </g>
                        <use xlink:href="#c" x="494"></use>
                    </g>
                    <use xlink:href="#d" x="988"></use>
                    <use xlink:href="#c" x="1976"></use>
                    <use xlink:href="#e" x="2470"></use>
                </g>
            </svg>
            <span class="hidden sm:block">
                {{ $t('langs.en') }}
            </span>
        </button>
        <button v-show="store.state.locale === 'ru'" type="button" data-dropdown-toggle="language-dropdown-menu-en"
            class="inline-flex justify-center items-center p-2 text-sm text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <svg class="mr-2 w-5 h-5 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                id="flag-icon-css-ru" viewBox="0 0 512 512">
                <g fill-rule="evenodd" stroke-width="1pt">
                    <path fill="#fff" d="M0 0h512v512H0z" />
                    <path fill="#0039a6" d="M0 170.7h512V512H0z" />
                    <path fill="#d52b1e" d="M0 341.3h512V512H0z" />
                </g>
            </svg>
            <span class="hidden sm:block">
                {{ $t('langs.ru') }}
            </span>

        </button>

        <!-- Dropdown -->
        <div id="language-dropdown-menu-en" data-popper-reference-hidden="" data-popper-escaped=""
            data-popper-placement="bottom"
            class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
            style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 12653px);">

            <ul class="py-1" role="none">
                <li>
                    <button @click="handleChangeLocaleEn"
                        class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem">
                        <div class="inline-flex items-center">
                            <svg class="mr-2 w-5 h-5 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900">
                                <path fill="#b22234" d="M0 0h7410v3900H0z"></path>
                                <path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff"
                                    stroke-width="300">
                                </path>
                                <path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path>
                                <g fill="#fff">
                                    <g id="d">
                                        <g id="c">
                                            <g id="e">
                                                <g id="b">
                                                    <path id="a"
                                                        d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z">
                                                    </path>
                                                    <use xlink:href="#a" y="420"></use>
                                                    <use xlink:href="#a" y="840"></use>
                                                    <use xlink:href="#a" y="1260"></use>
                                                </g>
                                                <use xlink:href="#a" y="1680"></use>
                                            </g>
                                            <use xlink:href="#b" x="247" y="210"></use>
                                        </g>
                                        <use xlink:href="#c" x="494"></use>
                                    </g>
                                    <use xlink:href="#d" x="988"></use>
                                    <use xlink:href="#c" x="1976"></use>
                                    <use xlink:href="#e" x="2470"></use>
                                </g>
                            </svg>
                            {{ $t('langs.en') }}
                        </div>
                    </button>
                </li>

            </ul>
        </div>

        <!-- Dropdown -->
        <div id="language-dropdown-menu-ru" data-popper-reference-hidden="" data-popper-escaped=""
            data-popper-placement="bottom"
            class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
            style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 12653px);">
            <ul class="py-1" role="none">
                <li>
                    <button @click="handleChangeLocaleRu"
                        class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem">
                        <div class="inline-flex items-center">
                            <svg class="mr-2 w-5 h-5 rounded-full" xmlns="http://www.w3.org/2000/svg"
                                id="flag-icon-css-ru" viewBox="0 0 512 512">
                                <g fill-rule="evenodd" stroke-width="1pt">
                                    <path fill="#fff" d="M0 0h512v512H0z" />
                                    <path fill="#0039a6" d="M0 170.7h512V512H0z" />
                                    <path fill="#d52b1e" d="M0 341.3h512V512H0z" />
                                </g>
                            </svg>
                            {{ $t('langs.ru') }}
                        </div>
                    </button>
                </li>
            </ul>
        </div>

        <button data-collapse-toggle="mobile-menu-language-select" type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-language-select" aria-expanded="false">
            <span class="sr-only">
                {{ $t('header.open_menu') }}
            </span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"></path>
            </svg>
        </button>
    </div>
</template>