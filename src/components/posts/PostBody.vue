<script setup>
const props = defineProps({
    page: Object
})
</script>

<template>
    <div class="container mx-auto">
        <div v-html="page.content.rendered" />
    </div>
</template>

