<script setup>
    const props = defineProps({
        title: String,
        author: String,
        url: String
    })
</script>

<template>
    <a :href="url">
        <hgroup>
            <h3>{{title}}</h3>
            <h4>By: {{author}}</h4>
        </hgroup>
    </a>
</template>
