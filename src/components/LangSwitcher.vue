<script>
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore()
        // console.log(store)
        return {
            handleChangeLocaleRu: () => store.dispatch('setLocale', 'ru'),
            handleChangeLocaleEn: () => store.dispatch('setLocale', 'en')
        }
    }
}
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