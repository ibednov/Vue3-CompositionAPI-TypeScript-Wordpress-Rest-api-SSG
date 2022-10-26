<script setup>
// import { computed } from '@vue/reactivity';
// import { useRoute } from 'vue-router';

const props = defineProps({
    member: Object,
});
// const snippet = computed(() => {
//     return props.member + "...";
// });
</script>

<template>
    <router-link :to="{ name: 'TeamFull', params: { id: member.id, member: member } }"
        class="flex flex-row justify-center p-5">
        <div class="basis-1/2 flex flex-col">
            <h3 class="text-xl text-blue-700">
                <div v-html="member.title.rendered" />
            </h3>
            <h1 class="text-3xl font-bold flex flex-col uppercase">
                {{ member.acf.member_name }}
            </h1>
            <h2 class="text-xl text-yellow-500 break-word">
                {{ member.acf.member_job }}
            </h2>
            <h3>
                {{ member.acf.member_city}}
            </h3>
        </div>
        <div class="basis-1/2 ">
            <img :src="member.featured_image_urls.medium[0]" class="w-full rounded-xl" alt="">
        </div>
    </router-link>
</template>