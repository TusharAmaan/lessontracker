import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useRouter } from 'next/router';


export default function NewLesson() {
const [date, setDate] = useState('');
const [studentId, setStudentId] = useState('');
const [topic, setTopic] = useState('');
const [description, setDescription] = useState('');
const router = useRouter();


async function handleSubmit(e: any) {
e.preventDefault();
const payload = {
lesson_date: date,
student_id: studentId,
topic,
description
};
const res = await fetch('/api/lessons/create', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(payload) });
if (res.ok) router.push('/');
else alert('Error saving');
}


return (
<div className="max-w-2xl mx-auto p-6">
<h1 className="text-xl font-semibold mb-4">Add Lesson</h1>
<form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
<div>
<label className="block text-sm">Date</label>
<input required value={date} onChange={e=>setDate(e.target.value)} type="date" className="mt-1 block w-full" />
</div>
<div>
<label className="block text-sm">Student ID (paste UUID)</label>
<input value={studentId} onChange={e=>setStudentId(e.target.value)} className="mt-1 block w-full" />
</div>
<div>
<label className="block text-sm">Topic</label>
<input required value={topic} onChange={e=>setTopic(e.target.value)} className="mt-1 block w-full" />
</div>
<div>
<label className="block text-sm">Description</label>
<textarea value={description} onChange={e=>setDescription(e.target.value)} className="mt-1 block w-full" />
</div>
<div className="flex gap-2">
<button className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
</div>
</form>
</div>
);
}