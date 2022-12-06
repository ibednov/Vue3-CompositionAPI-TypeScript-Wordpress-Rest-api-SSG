<script setup lang="ts">
const props = defineProps<{ post: object }>()

const { tags, load: loadTags } = getTags();
loadTags();

const { team, load: loadTeam } = getTeam();
loadTeam();

const { categories, load: loadCategories } = getCategories();
loadCategories();
</script>

<template>
  <div>
    <div class="text-4xl md:text-7xl text-center uppercase font-extrabold py-6 px-2">
      <div v-html="props.post?.title?.rendered" />
    </div>

    <!-- full_header -->
    <div class="container mx-auto pb-10">
      <div
        class="bg-gradient-to-br from-sky-200 to-fuchsia-200 dark:from-pink-900 dark:to-fuchsia-900 px-10 md:py-4 rounded-xl">
        <div class="flex flex-col py-4 gap-y-4 gap-x-8">
          <div v-if="!(props?.post?.categories[0] === 2)" class="flex flex-row">
            <div class="text-lg font-light pr-2">
              {{ $t('posts.full.project.cat') }}
            </div>
            <div class="text-lg font-bold">
              <div v-for="category in categories" :key="category.id">
                <a v-if="category.id === props?.post.categories[0]"
                  class="text-fuchsia-700 dark:text-violet-400 hover:text-purple-900">
                  <!-- eslint-disable-next-line vue/no-v-html -->
                  <div v-html="category.name" />
                </a>
              </div>
            </div>
          </div>

          <!-- project theory -->
          <div v-if="!(props?.post?.categories[0] === 2)">
            <div v-if="
              props?.post?.acf?.project_year ||
              props?.post?.acf?.project_client ||
              props?.post?.acf?.project_purpose
            " class="flex flex-col md:flex-row gap-8 justify-start">
              <div
                class="md:w-1/6 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-400 dark:from-pink-300 dark:to-violet-300 dark:mix-blend-color-dodge">
                {{ $t('posts.full.project.theory') }}
              </div>
              <div class="md:w-5/6 flex flex-col md:flex-row grow gap-4">
                <PostHeaderField :field-value="props?.post?.acf?.project_year[0]" prop-class="basis-1/3"
                  :field-name="$t('posts.full.project.date')" />
                <PostHeaderField :field-value="props?.post?.acf?.project_client" prop-class="basis-1/3"
                  :field-name="$t('posts.full.project.client')" />
                <PostHeaderField :field-value="props?.post?.acf?.project_purpose" prop-class="basis-1/3"
                  :field-name="$t('posts.full.project.purpose')" />
              </div>
            </div>
          </div>

          <!-- project practice -->
          <div v-if="!(props?.post.categories[0] === 2)">
            <div v-if="props?.post?.acf?.project_stack || props?.post?.acf?.project_team"
              class="flex flex-col md:flex-row gap-8 justify-start">
              <div
                class="md:w-1/6 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-cyan-700 dark:from-lime-300 dark:to-cyan-300 dark:mix-blend-color-dodge">
                {{ $t('posts.full.project.practice') }}
              </div>
              <div class="md:w-5/6 flex flex-col md:flex-row grow gap-4">
                <div class="md:w-1/3 flex flex-col">
                  <div class="text-lg font-extralight">
                    {{ $t('posts.full.project.stack') }}
                  </div>
                  <div v-for="stack in props?.post?.acf?.project_stack" :key="stack.id" class="text-lg font-semibold">
                    {{ stack.project_stack }}
                  </div>
                </div>

                <div class="md:w-2/3 flex flex-col md:self-end">
                  <div class="text-lg font-extralight">
                    {{ $t('posts.full.project.team') }}
                  </div>
                  <div class="flex flex-col pb-3 text-lg gap-4">
                    <div v-for="stack in props?.post?.acf?.project_team" :key="stack.id" class="flex flex-col">
                      <div class="font-bold">
                        <div v-for="member in team" :key="member.id">
                          <div v-if="stack.team_member[0] === member.id">
                            <a
                              :href="'/team/' + member.id"
                              class="text-fuchsia-700 dark:text-violet-400 hover:text-purple-900"
                            >
                              {{ member.title.rendered }}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="font-extralight">
                        {{ stack.work_skope }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- project result -->
          <div v-if="!(props?.post.categories[0] === 2)">
            <div v-if="props?.post?.acf?.project_behance || props?.post?.acf?.project_link"
              class="flex flex-col md:flex-row gap-8 justify-start">
              <div
                class="md:w-1/6 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-indigo-400 dark:from-fuchsia-300 dark:to-indigo-400 dark:mix-blend-color-dodge">
                {{ $t('posts.full.project.result') }}
              </div>

              <div class="md:w-5/6 flex flex-col md:flex-row grow gap-4 content-center">
                <div v-if="props?.post?.acf?.project_link" class="basis-1/3 flex flex-col content-center">
                  <a :href="props?.post?.acf?.project_link" target="_blank"
                    class="flex flex-row gap-x-4 text-fuchsia-700 dark:text-violet-400 hover:text-purple-800">
                    <div>
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </div>
                    <div class="text-lg font-semibold">
                      <div v-if="props.post?.acf?.project_link_name">
                        {{ props?.post?.acf?.project_link_name }}
                      </div>
                      <div v-else>
                        {{ $t('posts.full.project.link') }}
                      </div>
                    </div>
                  </a>
                </div>

                <div v-if="props?.post?.acf?.project_behance" class="basis-1/3 flex flex-col content-center">
                  <a :href="props?.post?.acf?.project_behance" target="_blank"
                    class="flex flex-row gap-x-4 content-center text-fuchsia-700 dark:text-violet-400 hover:text-purple-900">
                    <div class="content-center">
                      <svg class="w-6 h-6" viewBox="0 0 2048 1792" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1848 339h-511v124h511v-124zm-252 426q-90 0-146 52.5t-62 142.5h408q-18-195-200-195zm16 585q63 0 122-32t76-87h221q-100 307-427 307-214 0-340.5-132t-126.5-347q0-208 130.5-345.5t336.5-137.5q138 0 240.5 68t153 179 50.5 248q0 17-2 47h-658q0 111 57.5 171.5t166.5 60.5zm-1335-50h296q205 0 205-167 0-180-199-180h-302v347zm0-537h281q78 0 123.5-36.5t45.5-113.5q0-144-190-144h-260v294zm-277-509h594q87 0 155 14t126.5 47.5 90 96.5 31.5 154q0 181-172 263 114 32 172 115t58 204q0 75-24.5 136.5t-66 103.5-98.5 71-121 42-134 13h-611v-1260z" />
                      </svg>
                    </div>
                    <div class="text-lg font-semibold">
                      <div>
                        {{ $t('posts.full.project.behance') }}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- page.info for cat#2 -->
          <div v-if="props?.post.categories[0] === 2" class="flex flex-col">
            <div v-for="category in categories" :key="category.id" class="">
              <a v-if="category.id === props?.post.categories[0]"
                class="text-fuchsia-700 dark:text-violet-400 hover:text-purple-900">
                <!-- eslint-disable vue/no-v-html -->
                <div
                  class="md:w-1/6 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-cyan-700 dark:from-lime-300 dark:to-cyan-300 dark:mix-blend-color-dodge"
                  v-html="category.name" />
              </a>
            </div>

            <div class="md:w-5/6 flex flex-col md:flex-row grow gap-2 py-4">
              <div v-if="props?.post?.tags?.length" class="md:w-1/3 flex flex-col">
                <div class="text-lg font-extralight">
                  {{ $t('posts.full.blog.tags') }}
                </div>
                <div v-for="tag in props?.post.tags" :key="tag">
                  <div v-for="i in tags" :key="i">
                    <div v-if="i.id === tag" class="text-lg font-semibold">
                      {{ i.name }}
                    </div>
                  </div>
                </div>
              </div>

              <div class="md:w-1/3 flex flex-col">
                <div class="text-lg font-extralight">
                  {{ $t('posts.full.blog.type_label') }}
                </div>

                <div class="text-lg font-semibold">
                  {{
    $t('posts.full.blog.type_value.' + `${props?.post.acf?.blog_type}`)
                  }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
