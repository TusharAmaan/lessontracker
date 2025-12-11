// pages/api/auth-signup.ts (or call from client directly)
import { supabase } from '../../lib/supabaseClient';

export async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  return { data, error };
}
