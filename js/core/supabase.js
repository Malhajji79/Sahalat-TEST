const SUPABASE_URL = 'https://sqtlfwhwjctdbsdvuprq.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_f_CQrb7MBkFNPc_evUaqyQ_2v3JPjYs';
const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  }
);
