export const config = {
  apiUrl: import.meta.env.PROD 
    ? 'https://teyaba-api.railway.app' 
    : 'http://localhost:3000',
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  stripePublicKey: import.meta.env.VITE_STRIPE_PUBLIC_KEY
};