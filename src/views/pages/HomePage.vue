<script setup>
import Category from "./CategoryById.vue";

import { ref } from 'vue'
import { Tabs, Tab } from 'flowbite-vue'

const activeTab = ref('uiux')

// // create an array of objects with the id, trigger element (eg. button), and the content element
// const tabElements = [
//     {
//         id: 'profile',
//         triggerEl: document.querySelector('#profile-tab-example'),
//         targetEl: document.querySelector('#profile-example')
//     },
//     {
//         id: 'dashboard',
//         triggerEl: document.querySelector('#dashboard-tab-example'),
//         targetEl: document.querySelector('#dashboard-example')
//     },
//     {
//         id: 'settings',
//         triggerEl: document.querySelector('#settings-tab-example'),
//         targetEl: document.querySelector('#settings-example')
//     },
//     {
//         id: 'contacts',
//         triggerEl: document.querySelector('#contacts-tab-example'),
//         targetEl: document.querySelector('#contacts-example')
//     }
// ];

// // options with default values
// const options = {
//     defaultTabId: 'settings',
//     activeClasses: 'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
//     inactiveClasses: 'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
//     onShow: () => {
//         console.log('tab is shown');
//     }
// };

// /*
// * tabElements: array of tab objects
// * options: optional
// */
// const tabs = new Tabs(tabElements, options);
// // shows another tab element
// tabs.show('dashboard');

// // get the tab object based on ID
// tabs.getTab('contacts')

// // get the current active tab object
// tabs.getActiveTab()
</script>

<template>
  <!-- 
  <div>

    <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
      <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400" id="tabExample"
        role="tablist">
        <li class="mr-2" role="presentation">
          <button
            class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="profile-tab-example" type="button" role="tab" aria-controls="profile-example"
            aria-selected="false">Profile</button>
        </li>
        <li class="mr-2" role="presentation">
          <button
            class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="dashboard-tab-example" type="button" role="tab" aria-controls="dashboard-example"
            aria-selected="false">Dashboard</button>
        </li>
        <li class="mr-2" role="presentation">
          <button
            class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="settings-tab-example" type="button" role="tab" aria-controls="settings-example"
            aria-selected="false">Settings</button>
        </li>
        <li role="presentation">
          <button
            class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="contacts-tab-example" type="button" role="tab" aria-controls="contacts-example"
            aria-selected="false">Contacts</button>
        </li>
      </ul>
    </div>
    <div id="tabContentExample">
      <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="profile-example" role="tabpanel"
        aria-labelledby="profile-tab-example">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong
            class="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking
          another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control
          the content visibility and styling.</p>
      </div>
      <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="dashboard-example" role="tabpanel"
        aria-labelledby="dashboard-tab-example">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong
            class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking
          another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control
          the content visibility and styling.</p>
      </div>
      <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="settings-example" role="tabpanel"
        aria-labelledby="settings-tab-example">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong
            class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking
          another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control
          the content visibility and styling.</p>
      </div>
      <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="contacts-example" role="tabpanel"
        aria-labelledby="contacts-tab-example">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong
            class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking
          another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control
          the content visibility and styling.</p>
      </div>
    </div>

  </div> -->

  <main class="container mx-auto p-4">
    <tabs variant="pills" v-model="activeTab" class="py-5 justify-center content-center">
      <tab name="uiux" title="UI/UX design">
        <KeepAlive>
          <Category :cat="14" />
        </KeepAlive>
      </tab>
      <tab name="brand" title="Brand & marketing design">
        <KeepAlive>
          <Category :cat="87" />
        </KeepAlive>
      </tab>
      <tab name="front" title="Frontend & backend development">
        <KeepAlive>
          <Category :cat="13" />
        </KeepAlive>
      </tab>
      <tab name="gamedev" title="GameDev" :disabled="true">

      </tab>
      <tab name="blog" title="Blog">
        <KeepAlive>
          <Category :cat="2" />
        </KeepAlive>
      </tab>
    </tabs>
  </main>

  <!-- <section class="flex flex-row">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z">
      </path>
    </svg>
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
      </path>
    </svg>
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
      </path>
    </svg>
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
      </path>
    </svg>
  </section> -->



</template>

