import React, { useState } from 'react';
// Добавляем импорт Link
import { BrowserRouter, Routes, Route, Navigate, useParams, useNavigate, Link } from 'react-router-dom';
import Lesson1 from './lessons/Lesson1';
import Lesson2 from './lessons/Lesson2';
import Lesson3 from './lessons/Lesson3.jsx';

import Lesson4 from './lessons/Lesson4.jsx';
import Lesson5 from './lessons/Lesson5.jsx';
import Lesson6 from './lessons/Lesson6.jsx';
import Lesson7 from './lessons/Lesson7.jsx';
import Lesson8 from './lessons/Lesson8.jsx';
import Lesson9 from './lessons/Lesson9.jsx';
import Lesson10 from './lessons/Lesson10.jsx';
import Lesson11 from './lessons/Lesson11.jsx';
import Lesson12 from './lessons/Lesson12.jsx';
import Lesson13 from './lessons/Lesson13.jsx';
import Lesson14 from './lessons/Lesson14.jsx';
import Lesson15 from './lessons/Lesson15.jsx';
import Lesson16 from './lessons/Lesson16.jsx';
import Lesson17 from './lessons/Lesson17.jsx';
import Lesson18 from './lessons/Lesson18.jsx';
import Lesson19 from './lessons/Lesson19.jsx';
import Lesson20 from './lessons/Lesson20.jsx';





// Импортируем твой новый компонент Home
import Home from './components/Home';

import {
    ChevronDown, ChevronRight, BookOpen, FolderOpen, Terminal, Layers, Menu, X
} from 'lucide-react';

const lessons = [
    { id: 1, title: 'Введение' },
    { id: 2, title: 'Техническое задание' },
    { id: 3, title: 'Архитектура страницы' },

    { id: 4, title: 'SEO и структура' },
    { id: 5, title: 'Дизайн в Figma' },
    { id: 6, title: 'Git' },
    { id: 7, title: 'JS' },
    { id: 8, title: 'БД' },
    { id: 9, title: 'Создание проекта' },
    { id: 10, title: 'Backend' },
    { id: 11, title: 'Тестирование в Postman' },
    { id: 12, title: 'Фронтенд: Часть 1' },
    { id: 13, title: 'Фронтенд: Часть 2' },
    { id: 14, title: 'Фронтенд: Часть 3' },
    { id: 15, title: 'Фронтенд: Часть 4' },

    { id: 16, title: 'Фронтенд: Часть 5' },
    { id: 17, title: 'Презетация проекта' },
    { id: 18, title: '2ИСИП: Часть 1' },
    { id: 19, title: '2ИСИП: Часть 2' },
    { id: 20, title: '2ИСИП: Часть 3' },






];

const ContentWrapper = () => {
    const { id, mode } = useParams();
    const activeLesson = parseInt(id);

    return (
        <>
            <header className="mb-12">
                <div className="flex items-center gap-2 text-blue-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                    <span>Занятие {activeLesson}</span>
                    <span className="text-slate-700">/</span>
                    <span className="text-slate-400">{mode}</span>
                </div>
            </header>

            <div className="animate-in fade-in slide-in-from-right-8 duration-700">
                {activeLesson === 1 && <Lesson1 mode={mode} />}
                {activeLesson === 2 && <Lesson2 mode={mode} />}
                {activeLesson === 3 && <Lesson3 mode={mode} />}

                {activeLesson === 4 && <Lesson4 mode={mode} />}
                {activeLesson === 5 && <Lesson5 mode={mode} />}
                {activeLesson === 6 && <Lesson6 mode={mode} />}
                {activeLesson === 7 && <Lesson7 mode={mode} />}
                {activeLesson === 8 && <Lesson8 mode={mode} />}
                {activeLesson === 9 && <Lesson9 mode={mode} />}
                {activeLesson === 10 && <Lesson10 mode={mode} />}
                {activeLesson === 11 && <Lesson11 mode={mode} />}
                {activeLesson === 12 && <Lesson12 mode={mode} />}
                {activeLesson === 13 && <Lesson13 mode={mode} />}
                {activeLesson === 14 && <Lesson14 mode={mode} />}
                {activeLesson === 15 && <Lesson15 mode={mode} />}
                {activeLesson === 16 && <Lesson16 mode={mode} />}
                {activeLesson === 17 && <Lesson17 mode={mode} />}
                {activeLesson === 18 && <Lesson18 mode={mode} />}
                {activeLesson === 19 && <Lesson19 mode={mode} />}
                {activeLesson === 20 && <Lesson20 mode={mode} />}




            </div>
        </>
    );
};

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Теперь передаем Home как контент для главного пути */}
                <Route path="/" element={<MainLayout content={<Home />} />} />
                {/* Передаем ContentWrapper для лекций */}
                <Route path="/lesson/:id/:mode" element={<MainLayout content={<ContentWrapper />} />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
};

// Принимаем пропс content
const MainLayout = ({ content }) => {
    const { id, mode } = useParams();
    const navigate = useNavigate();

    // Если id нет (мы на главной), активная лекция будет null
    const activeLesson = id ? parseInt(id) : null;
    const activeMode = mode;

    const [expandedLesson, setExpandedLesson] = useState(activeLesson);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const changeRoute = (newId, newMode) => {
        navigate(`/lesson/${newId}/${newMode}`);
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="flex h-screen w-full bg-[#070b14] overflow-hidden p-4 md:p-6 gap-4 md:gap-6 antialiased text-slate-300">
            {/* МОБИЛЬНАЯ КНОПКА МЕНЮ */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="fixed bottom-6 right-6 z-50 p-4 bg-blue-600 rounded-full md:hidden text-white shadow-2xl"
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* САЙДБАР */}
            <aside className={`
                fixed inset-y-6 left-4 z-40 w-[280px] md:relative md:inset-0
                bg-[#0a1120]/80 backdrop-blur-xl border border-white/5 
                rounded-[2rem] flex flex-col shadow-2xl transition-all duration-500
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-[120%] md:translate-x-0'}
            `}>
                <div className="p-8 border-b border-white/5">
                    {/* ЛОГОТИП С СЫЛКОЙ НА ГЛАВНУЮ */}
                    <Link
                        to="/"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 group"
                    >
                        <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                            <Layers size={22} className="text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold tracking-tight text-white uppercase leading-none">JS </h1>
                        </div>
                    </Link>
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
                                        onClick={() => changeRoute(lesson.id, 'theory')}
                                    />
                                    <SideMenuItem
                                        icon={<FolderOpen size={16}/>}
                                        label="Файлы"
                                        active={activeLesson === lesson.id && activeMode === 'files'}
                                        onClick={() => changeRoute(lesson.id, 'files')}
                                    />
                                    <SideMenuItem
                                        icon={<Terminal size={16}/>}
                                        label="Практика"
                                        active={activeLesson === lesson.id && activeMode === 'practice'}
                                        onClick={() => changeRoute(lesson.id, 'practice')}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </aside>

            {/* КОНТЕНТ */}
            <main className="flex-1 h-full overflow-hidden bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-[2.5rem] relative">
                <div className="h-full overflow-y-auto custom-scrollbar p-6 md:p-12 lg:p-16">
                    <div className="max-w-4xl mx-auto relative z-10">
                        {/* Здесь рендерится либо Home, либо ContentWrapper */}
                        {content}
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