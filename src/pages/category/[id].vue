<script setup lang="ts">
const route: object = useRoute()
const { category, load: loadCategoryByID } = getCategoryByID(route.params.id)
loadCategoryByID();

const { t } = useI18n()

</script>
<template>
    <div>
        <div class=" flex  flex-col text-center w-full justify-center py-4">
            <div class="">
                <small class="text-2xl font-light">
                    {{ t('categories.name') }}
                </small>

                <div class="text-4xl  font-extrabold" v-html="t('categories.' + category.slug)">
                </div>
            </div>
        </div>
        <PostsByCategory :cat="route.params.id" />
    </div>
</template>