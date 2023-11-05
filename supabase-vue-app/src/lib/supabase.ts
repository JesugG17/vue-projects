import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const supabase = createClient(supabaseUrl, apiKey);