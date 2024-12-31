<script setup>
    const props = defineProps({
        title: String,
        url: String,
    })
</script>

<template>
    <h3>{{title}}</h3>
    <iframe width="560" height="315" 
        :src="`https://www.youtube.com/embed/${url}`"
        :title="`YouTube video player: ${title}`"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
    </iframe>
</template>