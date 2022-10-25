<script setup>
import { useStore } from 'vuex';

const store = useStore()
const handleChangeLocaleRu = () => store.dispatch('setLocale', 'ru')
const handleChangeLocaleEn = () => store.dispatch('setLocale', 'en')

</script>

<template>
    <div>
        <a class="text-xl px-3" @click="handleChangeLocaleRu">
            ru
        </a>
        <a class="text-xl px-3" @click="handleChangeLocaleEn">
            en
        </a>
    </div>
</template>