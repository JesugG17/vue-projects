import { supabase } from "./supabase"

export const signInWithGithub = async() => {
    const data = await supabase.auth.signInWithOAuth({
        provider: 'github'
    });

    return data;
}

export const signInWithGoogle = async() => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
    });
    console.log({data, error});
    return data;
}