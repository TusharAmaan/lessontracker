import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';


export default function StudentsPage() {
const [students, setStudents] = useState<any[]>([]);
useEffect(()=>{ (async()=>{
const { data } = await supabase.from('students').select('*').order('full_name');
setStudents(data || []);
})(); }, []);
return (
<div className="max-w-4xl mx-auto p-6">
<h1 className="text-xl font-semibold mb-4">Students</h1>
<div className="space-y-2">
{students.map(s => (
<div key={s.id} className="p-3 bg-white rounded shadow-sm">
<div className="font-medium">{s.full_name}</div>
<div className="text-sm text-gray-600">{s.class_no} • {s.batch}</div>
</div>
))}
</div>
</div>
);
}