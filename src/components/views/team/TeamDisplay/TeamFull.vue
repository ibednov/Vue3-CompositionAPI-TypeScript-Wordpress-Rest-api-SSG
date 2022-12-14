<script setup lang="ts">
const lang = useLangStore()
defineProps<{ member: object, }>()
const { t } = useI18n()
</script>

<template>
  <article>
    <h1 class="text-6xl text-center font-extrabold">
      <!-- eslint-disable-next-line vue/no-v-html-->
      <div v-html="member.title?.rendered" />
    </h1>

    <section class="container mx-auto p-10 flex flex-col rounded-xl my-10 bg-amber-100 dark:bg-stone-800">
      <h1 class="flex flex-col text-4xl  text-center self-center md:w-2/3 xl:w-1/2 gap-4">
        <div class="text-left">
          {{ t('team.full.hi') }}
          <span v-show="lang.lang === 'ru'" class="font-extrabold text-yellow-400">
            {{
                member.acf?.member_name_ru
                  ? member.acf?.member_name_ru
                  : member.title?.rendered
            }}
          </span>
          <span v-show="lang.lang === 'en'" class="font-extrabold text-yellow-400">
            {{
                member.acf?.member_name_en
                  ? member.acf?.member_name_en
                  : member.title?.rendered
            }}
          </span>
          .
        </div>
        <div v-if="member.acf?.member_job" class="text-right">
          {{ t('team.full.im') }}
          <span class="font-bold text-blue-500">
            {{ member.acf?.member_job }} </span>.
        </div>
        <div v-if="member.acf?.member_city_ru" class="text-left">
          {{ t('team.full.from') }}
          <span v-show="lang.lang === 'ru'" class="font-bold text-green-500">
            {{ member.acf?.member_city_ru }}
          </span>
          <span v-show="lang.lang === 'en'" class="font-bold text-green-500">
            {{ member.acf?.member_city_en }}
          </span>
        </div>
        <div class="text-right">
          {{ t('team.full.letme') }}
          <span class="underline decoration-sky-500">
            {{ t('team.full.whaticando') }}
          </span>
        </div>
      </h1>

      <div v-if="member.acf?.member_socials" class="self-center items-center pt-10 flex flex-col md:flex-row gap-8">
        <div v-for="social in member.acf?.member_socials" :key="social.key">
          <a :href="social.social_link" target="_blank"
            class="items-center text-2xl font-bold uppercase text-indigo-700 hover:text-green-700 underline decoration-4">
            {{ social.social_name }}
          </a>
        </div>

        <a :href="'mailto:' + member.acf?.member_email" target="_blank"
          class="flex flex-row gap-4 self-center items-center text-2xl font-bold text-center uppercase text-cyan-600 dark:text-cyan-400 hover:text-green-700 underline decoration-4">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76">
            </path>
          </svg>
          {{ t('team.full.contact') }}
        </a>
      </div>
    </section>

    <section v-if="member.acf?.member_langs" class="container mx-auto flex flex-col py-12">
      <h1
        class="text-3xl uppercase font-bold underline underline-offset-8 decoration-indigo-800 decoration-4 text-center">
        {{ t('team.full.lang') }}
      </h1>
      <div class="flex flex-col gap-y-8 sm:flex-row flex-wrap py-10">
        <div v-for="item in member.acf?.member_langs" :key="item.id" class="basis-1/3 grow">
          <div v-show="lang.lang === 'ru'" class="flex flex-col gap-2">
            <div class="text-xl font-bold uppercase self-center">
              {{ item.lang_group__name_ru }}
            </div>
            <div class="font-light self-center">
              {{ item.lang_group__level_ru }}
            </div>
          </div>
          <div v-show="lang.lang === 'en'" class="flex flex-col gap-2">
            <div class="text-xl font-bold uppercase self-center">
              {{ item.lang_group__name_en }}
            </div>
            <div class="font-light self-center">
              {{ item.lang_group__level_en }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="member.acf?.member_skills" class="container mx-auto flex flex-col">
      <h1
        class="text-3xl uppercase font-bold underline underline-offset-8 decoration-green-800 decoration-4 text-center">
        {{ t('team.full.hardskills') }}
      </h1>
      <div class="flex flex-col sm:flex-row flex-wrap py-10 justify-center">
        <div v-for="skills in member.acf?.member_skills" :key="skills.id"
          class="sm:w-1/2 lg:w-1/3 flex flex-col gap-2 px-10 py-5">
          <div v-show="lang.lang === 'ru'" class="text-2xl font-bold uppercase text-center">
            {{ skills.skills_group__name }}
          </div>
          <div v-show="lang.lang === 'en'" class="text-2xl font-bold uppercase text-center">
            {{ skills.skills_group__name_en }}
          </div>
          <div class="gap-4 flex flex-col">
            <div v-for="skill in skills.skills_group__skill" :key="skill.id" class="">
              <div class="mb-1 text-lg font-medium dark:text-white">
                {{ skill.skill__name }}
              </div>
              <div class="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
                <div class="h-6 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full"
                  :style="{ width: skill.skill__persent + '%' }" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="member.acf?.member_education" class="container mx-auto flex flex-col">
      <h1
        class="text-3xl uppercase font-bold underline underline-offset-8 decoration-indigo-400 decoration-4 text-center">
        {{ t('team.full.education') }}
      </h1>
      <div class="flex flex-col flex-wrap py-10">
        <div v-for="edu in member.acf?.member_education" id="dots_parent" :key="edu.id"
          class="md:w-1/2 flex flex-col mx-1 p-10 relative md:odd:self-start md:odd:text-right md:even:self-end md:even:text-left border-l-8 md:border-l-0 odd:md:border-r-8 even:md:border-l-8 border-indigo-300">
          <div id="edu_dots"
            class="flex gap-2 flex-col before:bg-gradient-to-br before:from-blue-400 before:to-indigo-400">
            <div v-show="lang.lang === 'ru'" class="text-3xl font-extrabold">
              {{ edu.education_degree }}
            </div>
            <div v-show="lang.lang === 'en'" class="text-3xl font-extrabold">
              {{ edu.education_degree_en }}
            </div>
            <div v-show="lang.lang === 'ru'" class="text-2xl font-medium text-indigo-700 dark:text-indigo-500">
              {{ edu.education_spec }}
            </div>
            <div v-show="lang.lang === 'en'" class="text-2xl font-medium text-indigo-700 dark:text-indigo-500">
              {{ edu.education_spec_en }}
            </div>
            <div v-show="lang.lang === 'ru'" class="text-lg font-light">
              {{ edu.education_place }}
            </div>
            <div v-show="lang.lang === 'en'" class="text-lg font-light">
              {{ edu.education_place_en }}
            </div>
            <div class="text-lg font-light">
              {{ edu.education_start }} - {{ edu.education_end }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="member.acf?.member_work" class="container mx-auto flex flex-col">
      <h1
        class="text-3xl uppercase font-bold underline underline-offset-8 decoration-fuchsia-400 decoration-4 text-center">
        {{ t('team.full.workexp') }}
      </h1>
      <div class="flex flex-col flex-wrap py-10">
        <div v-for="work in member.acf?.member_work" id="dots_parent" :key="work.id"
          class="md:w-1/2 flex flex-col mx-1 p-10 relative md:odd:self-start md:odd:text-right md:even:self-end md:even:text-left border-l-8 md:border-l-0 odd:md:border-r-8 even:md:border-l-8 border-fuchsia-300">
          <div id="edu_dots"
            class="flex gap-2 flex-col before:bg-gradient-to-br before:from-blue-400 before:to-fuchsia-400">
            <div v-show="lang.lang === 'ru'" class="text-3xl font-extrabold">
              {{ work.work_place }}
            </div>
            <div v-show="lang.lang === 'en'" class="text-3xl font-extrabold">
              {{ work.work_place_en }}
            </div>

            <div v-show="lang.lang === 'ru'" class="text-2xl font-medium text-fuchsia-700 dark:text-fuchsia-400">
              {{ work.work_job }}
            </div>
            <div v-show="lang.lang === 'en'" class="text-2xl font-medium text-fuchsia-700 dark:text-fuchsia-400">
              {{ work.work_job_en }}
            </div>

            <div class="text-lg font-medium">
              {{ work.work_start }} - {{ work.work_end }}
            </div>

            <div v-if="work.work_tasks" v-show="lang.lang === 'ru'"
              class="bg-fuchsia-100 dark:bg-stone-800 p-4 rounded-xl">
              <!-- eslint-disable-next-line vue/no-v-html -->
              <div class="text-lg font-light" v-html="work.work_tasks"></div>
            </div>
            <div v-if="work.work_tasks_en" v-show="lang.lang === 'en'"
              class="bg-fuchsia-100 dark:bg-stone-800 p-4 rounded-xl">
              <!-- eslint-disable-next-line vue/no-v-html -->
              <div class="text-lg font-light" v-html="work.work_tasks_en"></div>
            </div>

            <div v-if="work.work_repeater" class="bg-stone-300 dark:bg-stone-800 p-4 rounded-xl">
              <div v-for="item in work.work_repeater" v-show="lang.lang === 'ru'" :key="item.id"
                class="text-md font-light">
                <!-- eslint-disable-next-line vue/no-v-html -->
                <p v-html="item.repeat" />
              </div>
            </div>

            <div v-if="work.work_repeater_en" class="bg-stone-300 dark:bg-stone-800 p-4 rounded-xl">
              <div v-for="item in work.work_repeater" v-show="lang.lang === 'en'" :key="item.id"
                class="text-md font-light">
                <!-- eslint-disable-next-line vue/no-v-html -->
                <p v-html="item.repeat" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto p-10 flex flex-col rounded-xl my-10 bg-amber-100 dark:bg-stone-800">
      <h1 class="flex flex-col text-4xl      ????1 ??????????=?????????? ????????-?????? ????????-4???? ????????-???????????? ????????-???????????? ????????-2/3 ????????-1/2 ??????-4????
      text-center self-center md:w-2/3 xl:w-1/2 gap-4">
        <div class="text-center">
          {{ t('team.full.well') }}
          <span v-show="lang.lang === 'ru'" class="font-extrabold text-yellow-400">
            {{
                member.acf?.member_name_ru
                  ? member.acf?.member_name_ru
                  : member.title?.rendered
            }}
          </span>
          <span v-show="lang.lang === 'en'" class="font-extrabold text-yellow-400">
            {{
                member.acf?.member_name_en
                  ? member.acf?.member_name_en
                  : member.title?.rendered
            }}
          </span>
          .
        </div>
        <div>
          {{ t('team.full.youshould') }}
          <span class="underline decoration-sky-500">
            {{ t('team.full.writetome') }}
          </span>
        </div>
      </h1>
      <div v-if="member.acf?.member_socials" class="self-center items-center pt-10 flex flex-col md:flex-row gap-8">
        <div v-for="social in member.acf?.member_socials" :key="social.key">
          <a :href="social.social_link" target="_blank"
            class="items-center text-2xl font-bold uppercase text-indigo-700 hover:text-green-700 underline decoration-4">
            {{ social.social_name }}
          </a>
        </div>

        <a :href="'mailto:' + member.acf?.member_email" target="_blank"
          class="flex flex-row gap-4 self-center items-center text-2xl font-bold text-center uppercase text-cyan-600 dark:text-cyan-400 hover:text-green-700 underline decoration-4">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76">
            </path>
          </svg>
          {{ t('team.full.contact') }}
        </a>
      </div>
    </section>
  </article>
</template>

<style scoped>
@media (min-width: 768px) {
  #dots_parent:nth-child(odd) #edu_dots:before {
    content: '';
    position: absolute;
    width: 4rem;
    height: 4rem;
    /* background: #fff; */
    border-radius: 100%;
    right: -2.2rem;
    top: 10%;
  }

  #dots_parent:nth-child(even) #edu_dots:before {
    content: '';
    position: absolute;
    width: 4rem;
    height: 4rem;
    /* background: #fff; */
    border-radius: 100%;
    left: -2.2rem;
    top: 10%;
  }
}
</style>