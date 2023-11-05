<script setup lang="ts">
import { OAuthResponse } from '@supabase/supabase-js';
import Button from '../components/ui/Button.vue'
import { signInWithGithub, signInWithGoogle } from '../lib/oauth';

const signIn = async(callback: () => Promise<OAuthResponse>) => {
    const { error } = await callback();
    console.log(error);
    if (error) return;
}

</script>

<template>
    <section class="w-full h-screen bg-zinc-600 flex justify-center items-center">
        <article class="bg-zinc-200 w-[90%] max-w-[300px] p-2 rounded flex flex-col gap-5 h-[200px] items-center">
            <h1 class="font-bold text-2xl">Sign in</h1>
            <Button 
                class="w-4/5 flex justify-center items-center text-lg bg-white font-bold rounded shadow hover:brightness-90 transition-all duration-200" 
                src="/img/github.svg"
                @click="signIn(signInWithGithub)"
            >
                Github
            </Button>
            <Button 
                class="bg-white w-4/5 flex justify-center items-center text-lg font-bold rounded shadow hover:brightness-90 transition-all duration-200" 
                src="/img/google.svg"
                @click="signIn(signInWithGoogle)"
            >
                Google
            </Button>
        </article>
    </section>
</template>
../lib/oauth