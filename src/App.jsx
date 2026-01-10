import React, { useState } from 'react';
import Lesson1 from './lessons/Lesson1';
import {
    ChevronDown, ChevronRight, BookOpen, FolderOpen, Terminal, Layers, Menu, X
} from 'lucide-react';

const App = () => {
    const [activeLesson, setActiveLesson] = useState(1);
    const [activeMode, setActiveMode] = useState('theory');
    const [expandedLesson, setExpandedLesson] = useState(1);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const lessons = [
        { id: 1, title: 'Введение и ТЗ' },
        { id: 2, title: 'Backend на Node.js' },
        { id: 3, title: 'Frontend на React' },
    ];

    return (
        <div className="flex h-screen w-full bg-[#070b14] overflow-hidden p-4 md:p-6 gap-4 md:gap-6 antialiased">

            {/* МОБИЛЬНАЯ КНОПКА МЕНЮ */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="fixed bottom-6 right-6 z-50 p-4 bg-blue-600 rounded-full shadow-2xl md:hidden text-white"
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* ЛЕВАЯ ПАНЕЛЬ (САЙДБАР) */}
            <aside className={`
        fixed inset-y-6 left-4 z-40 w-[280px] md:relative md:inset-0
        bg-[#0a1120]/80 backdrop-blur-xl border border-white/5 
        rounded-[2rem] flex flex-col shadow-2xl transition-all duration-500
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-[120%] md:translate-x-0'}
      `}>
                <div className="p-8 border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                            <Layers size={22} className="text-white" />
                        </div>
                        <h1 className="text-xl font-bold tracking-tight text-white uppercase italic">Praktika</h1>
                    </div>
                </div>

                <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2 custom-scrollbar">
                    {lessons.map((lesson) => (
                        <div key={lesson.id} className="mb-2">
                            <button
                                onClick={() => setExpandedLesson(expandedLesson === lesson.id ? null : lesson.id)}
                                className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${activeLesson === lesson.id ? 'bg-white/5 text-white' : 'hover:bg-white/5 text-slate-500'}`}
                            >
                                <span className="text-sm font-semibold">{lesson.id}. {lesson.title}</span>
                                {expandedLesson === lesson.id ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                            </button>

                            {expandedLesson === lesson.id && (
                                <div className="mt-2 space-y-1 ml-2 border-l border-white/5 pl-2">
                                    <SideMenuItem
                                        icon={<BookOpen size={16}/>}
                                        label="Теория"
                                        active={activeLesson === lesson.id && activeMode === 'theory'}
                                        onClick={() => { setActiveLesson(lesson.id); setActiveMode('theory'); setIsMobileMenuOpen(false); }}
                                    />
                                    <SideMenuItem
                                        icon={<FolderOpen size={16}/>}
                                        label="Файлы"
                                        active={activeLesson === lesson.id && activeMode === 'files'}
                                        onClick={() => { setActiveLesson(lesson.id); setActiveMode('files'); setIsMobileMenuOpen(false); }}
                                    />
                                    <SideMenuItem
                                        icon={<Terminal size={16}/>}
                                        label="Практика"
                                        active={activeLesson === lesson.id && activeMode === 'practice'}
                                        onClick={() => { setActiveLesson(lesson.id); setActiveMode('practice'); setIsMobileMenuOpen(false); }}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </aside>

            {/* ПРАВАЯ ЧАСТЬ (КОНТЕНТ) */}
            <main className="flex-1 h-full overflow-hidden bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-[2.5rem] relative">
                <div className="h-full overflow-y-auto custom-scrollbar p-6 md:p-12 lg:p-16">
                    <div className="max-w-4xl mx-auto relative z-10">
                        {/* Header контента */}
                        <header className="mb-12">
                            <div className="flex items-center gap-2 text-blue-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                                <span>Занятие {activeLesson}</span>
                                <span className="text-slate-700">/</span>
                                <span className="text-slate-400">{activeMode}</span>
                            </div>
                        </header>

                        <div className="animate-in fade-in slide-in-from-right-8 duration-700">
                            {activeLesson === 1 && <Lesson1 mode={activeMode} />}
                        </div>
                    </div>
                </div>

                {/* Декоративный свет */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />
            </main>
        </div>
    );
};

const SideMenuItem = ({ icon, label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center gap-4 py-3 px-5 rounded-xl text-[11px] uppercase tracking-wider transition-all ${
            active
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 font-bold'
                : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
        }`}
    >
        {icon}
        {label}
    </button>
);

export default App;