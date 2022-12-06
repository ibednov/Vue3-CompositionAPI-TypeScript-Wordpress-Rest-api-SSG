<script setup lang="ts">
import { ref } from 'vue'
defineOptions({
  name: 'IndexPage',
})

const { t } = useI18n()

</script>

<template>
  <main class="container mx-auto">
    <TabsList>
      <TabSingle :title="'categories.uiux-design'" name="uiux" icon="
      <svg
            class='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
            ></path>
          </svg>
      ">

        <PostsByCategory :cat="14" />

      </TabSingle>
      <TabSingle :title="'categories.brand-marketing-design'" name="brand" icon="<svg
      class='w-6 h-6'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='2'
        d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
      ></path>
    </svg>">
        <PostsByCategory :cat="87" />
      </TabSingle>
      <TabSingle :title="'categories.development'" name="dev" icon="<svg
      class='w-6 h-6'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='2'
        d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
      ></path>
    </svg>">

        <PostsByCategory :cat="13" />

      </TabSingle>
      <TabSingle :title="'categories.gamedev'" name="gamedev" disabled="true" icon=" <svg
      id='mdi-gamepad-variant-outline'
      class='w-6 h-6'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      xmlns:xlink='http://www.w3.org/1999/xlink'
      version='1.1'
      viewBox='0 0 24 24'
    >
      <path
        d='M6,9H8V11H10V13H8V15H6V13H4V11H6V9M18.5,9A1.5,1.5 0 0,1 20,10.5A1.5,1.5 0 0,1 18.5,12A1.5,1.5 0 0,1 17,10.5A1.5,1.5 0 0,1 18.5,9M15.5,12A1.5,1.5 0 0,1 17,13.5A1.5,1.5 0 0,1 15.5,15A1.5,1.5 0 0,1 14,13.5A1.5,1.5 0 0,1 15.5,12M17,5A7,7 0 0,1 24,12A7,7 0 0,1 17,19C15.04,19 13.27,18.2 12,16.9C10.73,18.2 8.96,19 7,19A7,7 0 0,1 0,12A7,7 0 0,1 7,5H17M7,7A5,5 0 0,0 2,12A5,5 0 0,0 7,17C8.64,17 10.09,16.21 11,15H13C13.91,16.21 15.36,17 17,17A5,5 0 0,0 22,12A5,5 0 0,0 17,7H7Z'
      />
    </svg>">
      </TabSingle>
      <TabSingle :title="'categories.blog'" name="blog" icon="<svg
      class='w-6 h-6'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='2'
        d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
      ></path>
    </svg>">
        <PostsByCategory :cat="2" />

      </TabSingle>
    </TabsList>
  </main>
</template>


<route lang="yaml">
meta:
  layout: home
</route>
