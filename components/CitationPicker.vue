<script setup>
    import Citation from './Citation.vue'
    import {ref, computed} from 'vue'

    const props = defineProps(['citations'])

    const index = ref(0)

    function increment () { index.value = Math.min(index.value + 1, props.citations.length - 1) }

    function decrement () { index.value = Math.max(index.value - 1, 0) }

    const citation = computed(() => props.citations[index.value])
</script>
<template>
    <button @click="decrement">
        Previous
    </button>
    <button @click="increment">
        Next
    </button>
    <Citation :="citation" />
</template>

<style scoped>
    button {
        border-radius: 20px;
        padding: 0 20px;
        line-height: 38px;
        font-size: 14px;    
        border-color: var(--vp-button-brand-border);
        color: var(--vp-button-brand-text);
        background-color: var(--vp-button-brand-bg);
    }
</style>