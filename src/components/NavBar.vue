<script setup>
const txt = ({
    text: 'info',
    locales: ["ru", "en"]
})
</script>
<template>
    <div class="p-10 pb-20">
        <nav
            class=" bg-stone-100 m-4 md:mt-1 p-2 sm:p-4 rounded-xl dark:bg-gray-900 z-50 fixed bottom-0 left-0 right-0 sm:top-0 sm:bottom-auto">
            <div class="container-xl flex flex-wrap justify-between items-center mx-auto">

                <router-link :to="{ name: 'Home' }" class="flex items-center">
                    <span class="self-center text-sm sm:text-xl font-semibold whitespace-nowrap dark:text-white">
                        alexbednov.work
                    </span>
                </router-link>

                <!-- <select v-model="$i18n.locale">
                    <option v-for="(locale, i) in locales" :key="`locale-${i}`" :value="locale">
                        {{ locale }}
                    </option>
                </select> -->

                <router-link :to="{ name: 'Contacts' }" type="button"
                    class="font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 md:order-last text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onclick="replain_show(event)">
                    {{ $t('header.contact_me') }}
                </router-link>

                <div class="flex items-center md:order-2">
                    <button type="button" data-dropdown-toggle="language-dropdown-menu"
                        class="inline-flex justify-center items-center p-2 text-sm text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg class="mr-2 w-5 h-5 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900">
                            <path fill="#b22234" d="M0 0h7410v3900H0z"></path>
                            <path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff"
                                stroke-width="300"></path>
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
                        <span class="hidden sm:block">English</span>
                    </button>

                    <!-- Dropdown -->
                    <div class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                        id="language-dropdown-menu"
                        style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 12653px);"
                        data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
                        <ul class="py-1" role="none">
                            <li>
                                <a href="#"
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
                                        Русский
                                    </div>
                                </a>
                            </li>

                        </ul>
                    </div>
                    <button data-collapse-toggle="mobile-menu-language-select" type="button"
                        class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-language-select" aria-expanded="false">
                        <span class="sr-only">Open menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                    id="mobile-menu-language-select">
                    <ul
                        class="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">

                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                                class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Cases
                                <svg class="ml-1 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg></button>

                            <!-- Dropdown menu -->
                            <div id="dropdownNavbar"
                                class="hidden z-10 w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                                style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 426px);"
                                data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">

                                <ul class="py-1 text-sm text-gray-700 dark:text-gray-400"
                                    aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="/work/design"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">UI/UX
                                            Design</a>
                                    </li>
                                    <li>
                                        <a href="/work/layout"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Development
                                            <br> (front / back)</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Game-dev</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <a href="/blog"
                                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blog</a>
                        </li>

                        <li>
                            <router-link :to="{ name : 'Contacts' }"
                                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Contacts
                            </router-link>
                        </li>

                        <li>
                            <a href="/team/alepsios"
                                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CV</a>
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
