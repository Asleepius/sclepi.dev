---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "The Docs"
  text: "An Educational Blog"
  tagline: Generated with VitePress
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Build-Along on Twitch
    details: Find me at Twitch.TV/Asleepius
  - title: What's That Tool?
    details: I try to keep everything I use onstream linked here
  - title: As Seen on Github
    details: https://GitHub.com/Asleepius/Sclepi.dev
---


<script setup>
import Citations from './components/CitationPicker.vue'
import {reactive} from 'vue'
const citations = reactive([{
  type: "YouTube",
  url: "_M4o0ExLQCs", 
  title: "Get Kata", 
  author: "Kevlin Henney"
}, {
  type:"Medium",
  url:"https://kevlinhenney.medium.com/need-something-sorted-sleep-on-it-11fdf8453914",   title:"Need Something Sorted? Sleep on it!",
  author: "Kevlin Henney"
}])
</script>

<Citations :citations="citations" />