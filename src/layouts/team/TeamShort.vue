<script setup>
// import { computed } from '@vue/reactivity';
// import { useRoute } from 'vue-router';

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  member: Object,
});
// const snippet = computed(() => {
//     return props.member + "...";
// });
</script>

<template>
  <router-link
    :to="{ name: 'TeamFull', params: { id: member.id, member: member } }"
    class="flex flex-col md:flex-row justify-center items-center gap-4 bg-white dark:bg-stone-800 rounded-xl py-10 px-4"
  >
    <div class="w-2/3 flex flex-col">
      <h3 class="text-xl text-blue-700">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-html="member.title.rendered" />
      </h3>
      <h1 class="text-3xl font-bold flex flex-col uppercase">
        {{ member.acf.member_name_ru }}
      </h1>
      <h2 class="text-xl text-yellow-500 break-word">
        {{ member.acf.member_job }}
      </h2>
      <h3>
        {{ member.acf.member_city }}
      </h3>
    </div>
    <div v-if="member.featured_image_urls.medium[0]" class="w-1/3">
      <img
        :src="member.featured_image_urls.medium[0]"
        class="w-full rounded-xl"
        alt=""
      />
    </div>
  </router-link>
</template>
