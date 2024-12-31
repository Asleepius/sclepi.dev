<script setup>
    import YouTube from './YouTube.vue'
    import Medium from './Medium.vue'
    
    const props = defineProps({
        url: String,
        title: String,
        type: String,
        author: String
    })
</script>

<template>
    <YouTube v-if="type === 'YouTube'" 
        :title="title" 
        :url="url" 
    />
    
    <Medium v-else 
        :title="title" 
        :url="url" 
        :author="author" 
    />
</template>