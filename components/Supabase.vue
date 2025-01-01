<script setup>
import {supabase} from '../supabase/client.js'

const data = await supabase(
  import.meta.env.VITE_SUPABASE_API_URL,
  import.meta.env.VITE_SUPABASE_PUBLIC_KEY
).rpc("all_citations")
</script>

<template>
    <div>{{data}}</div>
</template>