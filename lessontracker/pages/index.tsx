import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';


type Lesson = any;


const Home: NextPage = () => {
const [lessons, setLessons] = useState<Lesson[]>([]);
const [studentsCount, setStudentsCount] = useState<number>(0);


useEffect(() => {
async function fetchData() {
const { data: l } = await supabase.from('lessons').select('*').limit(10).order('lesson_date', { ascending: false });
const { data: s } = await supabase.from('students').select('id', { count: 'exact' });
setLessons(l || []);
setStudentsCount((s as any)?.length || 0);
}
fetchData();
}, []);


return (
<div className="max-w-4xl mx-auto p-6">
<h1 className="text-2xl font-semibold mb-4">LessonTracker — Dashboard</h1>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="p-4 bg-white rounded shadow">Students<br/><span className="text-3xl">{studentsCount}</span></div>
<div className="p-4 bg-white rounded shadow">Recent lessons<br/><span className="text-3xl">{lessons.length}</span></div>
</div>


<section>
<h2 className="text-lg font-medium mb-2">Recent lessons</h2>
<div className="space-y-2">
{lessons.map((L: any) => (
<div key={L.id} className="p-3 bg-white rounded shadow-sm">
<div className="text-sm text-gray-600">{L.lesson_date}</div>
<div className="font-medium">{L.topic}</div>
<div className="text-sm text-gray-700">{L.description}</div>
</div>
))}
</div>
</section>
</div>
);
};
export default Home;