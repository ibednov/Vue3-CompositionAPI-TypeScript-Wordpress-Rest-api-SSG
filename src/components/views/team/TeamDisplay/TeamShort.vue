<script setup>
import { useStore } from "vuex";

const store = useStore();
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  member: Object,
});
</script>

<template>
  <div class="p-4 md:p-0">
    <router-link
      :to="{ name: 'TeamFull', params: { id: member.id, member: member } }"
      class="flex flex-col md:flex-row justify-center gap-4 bg-slate-50 dark:bg-stone-800 rounded-xl py-10 px-4"
    >
      <div class="w-1/2 md:w-2/3 flex flex-col self-center text">
        <h3 class="text-xl text-blue-700">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div v-html="member.title.rendered" />
        </h3>
        <h1 class="text-3xl font-bold flex flex-col uppercase">
          <span v-show="store.state.locale === 'ru'" class="font-extrabold">
            {{
              member.acf.member_name_ru
                ? member.acf.member_name_ru
                : member.title.rendered
            }}
          </span>
          <span v-show="store.state.locale === 'en'" class="font-extrabold">
            {{
              member.acf.member_name_en
                ? member.acf.member_name_en
                : member.title.rendered
            }}
          </span>
        </h1>
        <h2 class="text-xl text-green-600 break-word">
          {{ member.acf.member_job }}
        </h2>
        <h3>
          {{ member.acf.member_city }}
        </h3>
      </div>
      <div
        v-if="member.featured_image_urls.medium[0]"
        class="w-1/2 md:w-1/3 self-center"
      >
        <img
          :src="member.featured_image_urls.medium[0]"
          class="w-full rounded-xl"
          alt=""
        />
      </div>
    </router-link>
  </div>
</template>
