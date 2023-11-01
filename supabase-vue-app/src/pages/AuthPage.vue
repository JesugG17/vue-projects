<script setup lang="ts">
import Button from '../components/ui/Button.vue'
</script>

<template>
    <section class="w-full h-screen bg-zinc-600 flex justify-center items-center">
        <article class="bg-zinc-200 w-[90%] max-w-[300px] p-2 rounded flex flex-col gap-5 h-[200px] items-center">
            <h1 class="font-bold text-2xl">Sign in</h1>
            <Button class="w-4/5 flex justify-center items-center text-lg bg-white font-bold rounded shadow hover:brightness-90 transition-all duration-200" src="/img/github.svg">
                Github
            </Button>
            <Button class="bg-white w-4/5 flex justify-center items-center text-lg font-bold rounded shadow hover:brightness-90 transition-all duration-200" src="/img/google.svg">
                Google
            </Button>
        </article>
    </section>
</template>
