import type { NextApiRequest, NextApiResponse } from 'next';
import { supabaseServer } from '../../lib/supabaseServer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  const { auth_uid, full_name } = req.body;
  const { data, error } = await supabaseServer
    .from('teachers')
    .insert([{ auth_uid, full_name }])
    .select('*')
    .single();
  if (error) return res.status(500).json({ error });
  res.status(200).json({ teacher: data });
}
