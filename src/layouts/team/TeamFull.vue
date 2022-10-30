<script setup>
import { useRoute } from "vue-router";
import getTeamMember from "../../composibles/getTeamMember";

const route = useRoute();

const { member, load: loadGetTeamMember } = getTeamMember(route.params.id);
loadGetTeamMember();
</script>

<template>
  <article>
    <h1 class="text-6xl text-center font-extrabold">
      <!-- eslint-disable-next-line vue/no-v-html-->
      <div v-html="member.title.rendered" />
    </h1>
    <section
      class="container mx-auto p-10 flex flex-col rounded-xl my-10 bg-amber-100 dark:bg-stone-800"
    >
      <h1
        class="flex flex-col text-4xl text-light text-center self-center w-1/2 gap-4"
      >
        <div class="text-left">
          Hi, i'm
          <span class="font-extrabold text-yellow-400 underline decoration-4">
            {{
              member.acf.member_name_ru
                ? member.acf.member_name_ru
                : member.title.rendered
            }} </span
          >.
        </div>
        <div v-if="member.acf.member_job" class="text-right">
          I'm a
          <span class="font-bold text-blue-500">
            {{ member.acf.member_job }} </span
          >.
        </div>
        <div v-if="member.acf.member_city" class="text-left">
          I'm from
          <span class="font-bold text-green-500 underline decoration-4">
            {{ member.acf.member_city }}
          </span>
        </div>
        <div class="text-right">
          Let me show you
          <span class="underline decoration-sky-500">what I can do...</span>
        </div>
      </h1>
      <div
        v-if="member.acf.member_socials"
        class="self-center pt-10 flex flex-row gap-8"
      >
        <div v-for="social in member.acf.member_socials" :key="social.key">
          <a
            :href="social.social_link"
            target="_blank"
            class="text-2xl font-bold uppercase text-indigo-700 hover:text-green-700"
          >
            {{ social.social_name }}
          </a>
        </div>
      </div>
      <a
        :href="'mailto:' + member.acf.member_email"
        target="_blank"
        class="text-2xl font-bold text-center pt-4 uppercase text-yellow-700 hover:text-green-700"
      >
        Связаться со мной
      </a>
    </section>

    <section class="container mx-auto flex flex-col py-12">
      <h1
        class="text-3xl uppercase font-bold underline underline-offset-8 decoration-indigo-800 decoration-4 text-center"
      >
        Languages
      </h1>
      <div class="flex flex-row flex-wrap py-10">
        <div
          v-for="lang in member.acf.member_langs"
          :key="lang.id"
          class="basis-1/3 grow flex flex-col gap-2"
        >
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
        class="text-3xl uppercase font-bold underline underline-offset-8 decoration-green-800 decoration-4 text-center"
      >
        Hard skills
      </h1>
      <div class="flex flex-row flex-wrap py-10">
        <div
          v-for="skills in member.acf.member_skills"
          :key="skills.id"
          class="basis-1/3 flex flex-col gap-2 px-10 py-5"
        >
          <div class="text-xl font-bold uppercase self-center">
            {{ skills.skills_group__name }}
          </div>
          <div class="gap-4 flex flex-col">
            <div
              v-for="skill in skills.skills_group__skill"
              :key="skill.id"
              class=""
            >
              <div class="mb-1 text-lg font-medium dark:text-white">
                {{ skill.skill__name }}
              </div>
              <div class="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  class="h-6 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full"
                  :style="{ width: skill.skill__persent + '%' }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto flex flex-col">
      <h1
        class="text-3xl uppercase font-bold underline underline-offset-8 decoration-green-800 decoration-4 text-center"
      >
        Education
      </h1>
      <div class="flex flex-col flex-wrap py-10">
        <div
          v-for="edu in member.acf.member_education"
          :key="edu.id"
          class="basis-1/3 flex flex-col gap-2 px-10 py-5 odd:bg-yellow-700 even:bg-stone-500"
        >
          <div class="w-1/2 gap-2 flex flex-col even:justify-self-end">
            <div class="text-3xl font-extrabold">
              {{ edu.education_degree }}
            </div>
            <div class="text-2xl font-medium text-emerald-800">
              {{ edu.education_spec }}
            </div>
            <div class="text-lg font-light">
              {{ edu.education_place }}
            </div>
            <div class="text-lg font-light">
              {{ edu.education_start }} - {{ edu.education_end }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <?php if( have_rows('member_education') ): ?> -->
    <div class="flex flex-col gap-4 timeline text-center py-3">
      <h1
        class="text-3xl uppercase font-bold underline underline-offset-8 decoration-green-800 decoration-4 text-center"
      >
        Education
      </h1>
      <!-- <?php while ( have_rows('member_education') ) : the_row(); ?> -->
      <div class="flex flex-col gap-4">
        <div
          v-for="edu in member.acf.member_education"
          :key="edu.id"
          class="w-1/2 rounded timeline-parent py-4 flex flex-col"
        >
          <div class="timeline-child px-5 gap-2">
            <div class="text-3xl font-extrabold">
              {{ edu.education_degree }}
            </div>
            <div class="text-2xl font-medium text-emerald-800">
              {{ edu.education_spec }}
            </div>
            <div class="text-lg font-light">
              {{ edu.education_place }}
            </div>
            <div class="text-lg font-light">
              {{ edu.education_start }} - {{ edu.education_end }}
            </div>
          </div>
        </div>
      </div>
      <!-- <?php endwhile; ?> -->
    </div>
    <!-- <?php endif; ?> -->
  </article>
</template>

<style scoped>
/* timeline */
.timeline-parent {
  display: flex;
  position: relative;
  text-align: right;
}

.timeline-parent:nth-child(2n) {
  display: flex;
  flex-direction: row-reverse;
  text-align: left;
}

.timeline-parent:nth-child(2n-1) .timeline-child:before {
  content: "";
  background: #d9d7fd;
  width: 0.6rem;
  position: absolute;
  right: calc(0% - 0.3rem);
  top: 0;
  bottom: 0;
}

.timeline-parent:nth-child(2n) .timeline-child:before {
  content: "";
  background: #d9d7fd;
  width: 0.6rem;
  position: absolute;
  left: calc(0% - 0.3rem);
  top: 0;
  bottom: 0;
}

.timeline-child:after {
  content: "";
  background: linear-gradient(to bottom right, #dfddff, #aafbff);
  padding: 1rem;
  width: 4rem;
  height: 4rem;
  position: absolute;
  right: -2rem;
  top: calc(50% - 2rem);
  border-radius: 2rem;
}

.timeline-parent:nth-child(2n) .timeline-child:after {
  content: "";
  background: linear-gradient(to bottom right, #dfddff, #aafbff);
  padding: 1rem;
  width: 4rem;
  height: 4rem;
  position: absolute;
  left: -2rem;
  top: calc(50% - 2rem);
  border-radius: 2rem;
}

.progress-bar {
  background: linear-gradient(to right, #bfbcf9, #9cb7e8) !important;
}

.timeline-title:after {
  content: "";
  width: 8rem;
  background: #5d5cd8;
  bottom: 0.7rem;
  height: 0.3rem;
  position: absolute;
  right: calc(50% - 4rem);
}

.timeline-title {
  position: relative;
  padding: 2rem 0;
}
</style>
