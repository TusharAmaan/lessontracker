import type { NextApiRequest, NextApiResponse } from 'next';
import { supabaseServer } from '../../../lib/supabaseServer';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
const payload = req.body;
if (!payload.lesson_date || !payload.student_id || !payload.topic) return res.status(400).json({ error: 'Missing fields' });
const { data, error } = await supabaseServer.from('lessons').insert([payload]).select('*').single();
if (error) return res.status(500).json({ error });
res.status(201).json({ lesson: data });
}