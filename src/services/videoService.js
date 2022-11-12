import { createClient } from '@supabase/supabase-js';

const PROJECT_URL = "https://phbalwncokaegahodshk.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoYmFsd25jb2thZWdhaG9kc2hrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyNzQ3ODAsImV4cCI6MTk4Mzg1MDc4MH0.ABVtbEU1ZtBsn1826jx4M4MzPRg5I_qRmoqj7lLgyW0";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video").select("*");

        }
    }
}