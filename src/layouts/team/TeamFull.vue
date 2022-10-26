<script setup>
import { useRoute } from 'vue-router';
import getTeamMember from '../../composibles/getTeamMember'

const route = useRoute();

const { member, load: loadGetTeamMember } = getTeamMember(route.params.id);
loadGetTeamMember();

const props = defineProps({
    member: Object,
});


// console.log(route.params)

// console.log(member.acf)

</script>

<template>
    <article>
        <h1 class="text-6xl text-center font-extrabold ">
            <div v-html="member.title.rendered" />
        </h1>
        <section class="container mx-auto p-10 flex flex-col rounded-xl my-10 bg-white dark:bg-stone-800">
            <h1 class="flex flex-col text-4xl text-light text-center self-center w-1/2 gap-4">
                <div class="text-left">
                    Hi, i'm <span class="font-extrabold text-yellow-400 underline decoration-4">
                        {{ member.acf.member_name ? member.acf.member_name : member.title.rendered }}
                    </span>.
                </div>
                <div v-if="member.acf.member_job" class="text-right">
                    I'm a <span class="font-bold text-blue-500">
                        {{ member.acf.member_job }}
                    </span>.
                </div>
                <div v-if="member.acf.member_city" class="text-left">
                    I'm from
                    <span class="font-bold text-green-500 underline decoration-4">
                        {{ member.acf.member_city }}
                    </span>
                </div>
                <div class="text-right">
                    Let me show you <span class="underline decoration-sky-500">what I can do...</span>
                </div>
            </h1>
            <div class="self-center pt-10 flex flex-row gap-8" v-if="member.acf.member_socials">
                <div v-for="social in member.acf.member_socials" :key="social.key">
                    <a :href="social.social_link" target="_blank"
                        class="text-2xl font-bold uppercase text-indigo-700 hover:text-green-700 ">
                        {{ social.social_name }}
                    </a>
                </div>
            </div>
        </section>

        <section class="container mx-auto flex flex-col py-12">
            <h1
                class="text-3xl uppercase font-bold underline underline-offset-8 decoration-indigo-800 decoration-4 text-center">
                Languages
            </h1>
            <div class="flex flex-row flex-wrap py-10">
                <div class="basis-1/3  grow flex flex-col gap-2" v-for="lang in member.acf.member_langs">
                    <div class="text-xl font-bold uppercase self-center">
                        {{ lang.lang_group__name }}
                    </div>
                    <div class="font-light self-center">
                        {{ lang.lang_group__level }}
                    </div>
                </div>
            </div>
        </section>

        <section class="container mx-auto flex flex-col">
            <h1
                class="text-3xl uppercase font-bold underline underline-offset-8 decoration-green-800 decoration-4 text-center">
                Hard skills
            </h1>
            <div class="flex flex-row flex-wrap py-10">
                <div class="basis-1/3 flex flex-col gap-2 px-10 py-5" v-for="skills in member.acf.member_skills">
                    <div class="text-xl font-bold uppercase self-center">
                        {{ skills.skills_group__name }}
                    </div>
                    <div class="gap-4 flex flex-col">
                        <div v-for="skill in skills.skills_group__skill" class="">
                            <div class="mb-1 text-lg font-medium dark:text-white">
                                {{ skill.skill__name }}
                            </div>
                            <div class="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
                                <div class="h-6 bg-blue-600 rounded-full dark:bg-blue-500"
                                    :style="{ 'width':  skill.skill__persent + '%' }"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </article>

</template>