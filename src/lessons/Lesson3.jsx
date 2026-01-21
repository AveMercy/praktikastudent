import React from 'react';
import {
    TheoryText,
    InfoPanel,
    ImageGrid,
    TheoryImage,
    FileDownload
} from '../components/UIComponents';

const LessonArchitecture = ({ mode }) => {
    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            {/* --- РЕЖИМ ТЕОРИИ --- */}
            {mode === 'theory' && (
                <article>
                    <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                        Лекция 3: Анатомия и архитектура веб-страницы
                    </h2>

                    <section className="mb-12">
                        <TheoryText>
                            Когда мы смотрим на сайт, мы видим картинки и текст. Когда разработчик смотрит на сайт, он видит <b>иерархию стандартных блоков</b>. У каждого блока есть свое имя и роль.
                        </TheoryText>
                    </section>

                    {/* 1. ГЛОБАЛЬНЫЕ БЛОКИ */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">1. Глобальные блоки (Layout)</h3>
                        <TheoryText className="mb-6">Это «каркас», который обычно повторяется на всех страницах сайта.</TheoryText>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-white font-bold mb-2">Header & Nav</h4>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    <b>Header (Шапка):</b> Верхняя часть. Логотип, поиск, профиль.<br/>
                                    <b>Nav (Навигация):</b> Меню со ссылками на главные разделы.
                                </p>
                                <div className="mt-4">
                                    <TheoryImage src="/img/les3/1.png" />
                                </div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-white font-bold mb-2">Main & Footer</h4>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    <b>Main:</b> Центральная часть, которая меняется при переходах.<br/>
                                    <b>Footer (Подвал):</b> Контакты, соцсети и юридическая информация.
                                </p>
                                <div className="mt-4">
                                    <TheoryImage src="/img/les3/2.png" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 2. АНАТОМИЯ ГЛАВНОЙ */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">2. Анатомия Главной страницы</h3>
                        <div className="space-y-4">
                            <div className="p-6 rounded-[2rem] bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20">
                                <h4 className="text-xl font-bold text-white mb-2">Hero Section (Первый экран)</h4>
                                <p className="text-sm text-slate-300">
                                    Самый важный блок. Содержит <b>H1</b> (главный заголовок) и <b>CTA-кнопку</b> (Call to Action — призыв к действию).
                                </p>
                                <div className="mt-4">
                                    <TheoryImage src="/img/les3/3.png" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                                    <b className="text-white block mb-1">Features</b> Преимущества продукта в виде сетки иконок.
                                    <div className="mt-4">
                                        <TheoryImage src="/img/les3/4.png" />
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                                    <b className="text-white block mb-1">Newsletter</b> Форма подписки на рассылку.
                                    <div className="mt-4">
                                        <TheoryImage src="/img/les3/5.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 3. КОМПОНЕНТЫ ИНТЕРФЕЙСА */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">3. Компоненты интерфейса (Микро-архитектура)</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ul className="space-y-4 text-sm text-slate-300">
                                <li className="flex gap-3"><span className="text-blue-500 font-bold">Card:</span> Карточка товара или поста.</li>
                                <li className="flex gap-3"><span className="text-blue-500 font-bold">Modal:</span> Всплывающее окно поверх контента.</li>
                                <li className="flex gap-3"><span className="text-blue-500 font-bold">Accordion:</span> Раскрывающиеся списки (FAQ).</li>
                            </ul>
                            <ul className="space-y-4 text-sm text-slate-300">
                                <li className="flex gap-3"><span className="text-blue-500 font-bold">Sidebar:</span> Боковая колонка с фильтрами.</li>
                                <li className="flex gap-3"><span className="text-blue-500 font-bold">Breadcrumbs:</span> Путь: Главная {'>'} Каталог {'>'} Кактус.</li>
                            </ul>
                        </div>
                    </section>

                    {/* 4. РАССТОЯНИЯ И СЕТКА */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">4. Расстояния и сетка (Layout Terms)</h3>
                        <div className="mt-6 space-y-6">
                            <InfoPanel title="Основные понятия верстки">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed">
                                    <div>
                                        <p className="mb-2"><b className="text-white">Container:</b> Ограничитель ширины (обычно 1200px).</p>
                                        <p><b className="text-white">Grid (Сетка):</b> Система из 12 колонок для выравнивания.</p>
                                    </div>
                                    <div>
                                        <p className="mb-2"><b className="text-white">Whitespace:</b> «Воздух» между блоками.</p>
                                        <p><b className="text-white">Sticky:</b> Липкий блок, зафиксированный при скролле.</p>
                                    </div>
                                </div>
                            </InfoPanel>
                        </div>
                    </section>

                    {/* 5. АДАПТИВНОСТЬ */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">5. Адаптивность (Responsive Design)</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                            <div className="p-4 border-l border-blue-500 bg-blue-500/5">
                                <h5 className="text-white font-bold text-xs">Breakpoints</h5>
                                <p className="text-[10px] text-slate-400 mt-1">Точки (напр. 768px), где дизайн меняется.</p>
                            </div>
                            <div className="p-4 border-l border-purple-500 bg-purple-500/5">
                                <h5 className="text-white font-bold text-xs">Burger Menu</h5>
                                <p className="text-[10px] text-slate-400 mt-1">Иконка меню для мобильной версии.</p>
                            </div>
                            <div className="p-4 border-l border-emerald-500 bg-emerald-500/5">
                                <h5 className="text-white font-bold text-xs">Mobile First</h5>
                                <p className="text-[10px] text-slate-400 mt-1">Приоритет проектирования под смартфоны.</p>
                            </div>
                        </div>
                    </section>
                </article>
            )}

            {/* --- РЕЖИМ ФАЙЛОВ --- */}
            {mode === 'files' && (
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold mb-8 text-white">Материалы к лекции</h2>
                    <div className="grid gap-4">
                        <FileDownload
                            name="Презентация.pdf"
                            url="/downloads/pres/less3.pdf"
                        />
                    </div>
                </div>
            )}

            {/* --- РЕЖИМ ПРАКТИКИ --- */}
            {mode === 'practice' && (
                <div className="flex flex-col items-center justify-center min-h-[300px] border-2 border-dashed border-white/5 rounded-[2.5rem]">
                    <p className="text-slate-500 italic">Для этой лекции практическое задание не предусмотрено.</p>
                </div>
            )}
        </div>
    );
};

export default LessonArchitecture;