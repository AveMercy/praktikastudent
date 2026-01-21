import React from 'react';
import {
    TheoryText,
    TheoryImage,
    CodeSnippet,
    FileDownload,
    InfoPanel,
    ImageGrid
} from '../components/UIComponents';

const Lesson4 = ({ mode }) => {
    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            {/* --- РЕЖИМ ТЕОРИИ --- */}
            {mode === 'theory' && (
                <article>
                    <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                        Лекция 4: Семантика HTML и основы SEO
                    </h2>

                    {/* 1. ЧТО ТАКОЕ SEO И КАРТА САЙТА */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">1. Что такое SEO и Карта сайта?</h3>
                        <TheoryText>
                            SEO (Search Engine Optimization) — это искусство делать сайт понятным для роботов (Google, Яндекс).
                            Робот не видит цвета, он сканирует связи.
                        </TheoryText>

                        <div className="mt-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 border-l-blue-500 border-l-4">
                            <h4 className="text-white font-bold mb-2">Карта сайта (Sitemap)</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Это путеводитель для поисковика. Она показывает иерархию: Главная → Категории → Товары.
                                Если страницы не связаны логически, робот может "заблудиться" и не проиндексировать ваш проект.
                            </p>
                        </div>
                    </section>

                    {/* 2. СЕМАНТИЧЕСКАЯ РАЗМЕТКА */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">2. Семантика: Теги со смыслом</h3>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                                    <code className="text-blue-400 font-bold">&lt;header&gt;</code>
                                    <p className="text-[11px] text-slate-400 mt-2">Шапка страницы: логотип и навигация.</p>
                                </div>
                                <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                                    <code className="text-purple-400 font-bold">&lt;main&gt;</code>
                                    <p className="text-[11px] text-slate-400 mt-2">Основной уникальный контент страницы.</p>
                                </div>
                                <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                                    <code className="text-emerald-400 font-bold">&lt;footer&gt;</code>
                                    <p className="text-[11px] text-slate-400 mt-2">Подвал: авторские права, контакты.</p>
                                </div>
                            </div>

                            <InfoPanel title="Структурные теги (Контейнеры)">
                                <ul className="text-xs space-y-2 text-slate-300">
                                    <li><b className="text-white">&lt;nav&gt;</b> — Навигация (меню).</li>
                                    <li><b className="text-white">&lt;section&gt;</b> — Крупный смысловой раздел.</li>
                                    <li><b className="text-white">&lt;article&gt;</b> — Независимый контент (карточка товара, пост).</li>
                                    <li><b className="text-white">&lt;aside&gt;</b> — Сайдбар или побочный контент.</li>
                                    <li><b className="text-white">&lt;div&gt;</b> — Стилистический контейнер (не несет смысла).</li>
                                </ul>
                            </InfoPanel>
                        </div>
                    </section>

                    {/* 3. ТЕКСТОВЫЕ ТЕГИ И СПИСКИ */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">3. Наполнение контентом</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                    <span className="text-blue-500">#</span> Заголовки и текст
                                </h4>
                                <ul className="space-y-3 text-xs text-slate-400">
                                    <li><b className="text-white">&lt;h1&gt; – &lt;h6&gt;</b> — Иерархия важности. h1 — только один!</li>
                                    <li><b className="text-white">&lt;p&gt;</b> — Абзац обычного текста.</li>
                                    <li><b className="text-white">&lt;address&gt;</b> — Контактная информация автора/организации.</li>
                                    <li><b className="text-white">&lt;button&gt;</b> — Интерактивный элемент (кнопка).</li>
                                </ul>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                    <span className="text-blue-500">#</span> Списки
                                </h4>
                                <ul className="space-y-3 text-xs text-slate-400">
                                    <li><b className="text-white">&lt;ul&gt;</b> — Маркированный (ненумерованный) список.</li>
                                    <li><b className="text-white">&lt;ol&gt;</b> — Нумерованный список.</li>
                                    <li><b className="text-white">&lt;li&gt;</b> — Пункт любого из списков выше.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 4. ИЗОБРАЖЕНИЯ И МЕТА-ДАННЫЕ */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">4. SEO-атрибуты</h3>
                        <div className="grid gap-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                                    <code className="text-blue-400 font-bold">alt</code>
                                    <p className="text-[10px] text-slate-500 mt-2 italic">Описание картинки для робота и доступности.</p>
                                </div>
                                <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                                    <code className="text-purple-400 font-bold">title</code>
                                    <p className="text-[10px] text-slate-500 mt-2 italic">Заголовок страницы (вкладка браузера).</p>
                                </div>
                                <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                                    <code className="text-red-400 font-bold">description</code>
                                    <p className="text-[10px] text-slate-500 mt-2 italic">Краткий анонс страницы в поисковике.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 5. ЧЕК-ЛИСТ САМОПРОВЕРКИ */}
                    <section className="mb-12 p-8 rounded-[2.5rem] bg-blue-600/5 border border-blue-500/20">
                        <h3 className="text-xl font-bold text-white mb-6">Чек-лист идеальной семантики:</h3>
                        <div className="space-y-4">
                            {[
                                "На странице только один тег <h1>",
                                "Все <img> имеют осмысленный атрибут alt",
                                "Навигационное меню обернуто в <nav> и список <ul>/<li>",
                                "Кнопки реализованы через <button>, а не <div>",
                                "Контактная информация в футере обернута в <address>"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                                    <div className="w-5 h-5 rounded border border-blue-500/50 flex items-center justify-center text-blue-400">✓</div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </section>
                </article>
            )}

            {/* --- РЕЖИМ ФАЙЛОВ --- */}
            {mode === 'files' && (
                <div className="space-y-6 text-center lg:text-left">
                    <h2 className="text-3xl font-bold mb-8 text-white">Материалы</h2>
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                        <p className="text-blue-400 font-bold mb-4 uppercase tracking-widest text-xs">Практика</p>
                        <ul className="space-y-3">
                            <li><FileDownload name="bad_example.html" url="/downloads/bad_example.html" /></li>
                            <li><FileDownload name="good_example.html" url="/downloads/good_example.html" /></li>
                            <li><FileDownload name="Презентация.pdf" url="/downloads/pres/less4.pdf"/></li>

                        </ul>
                    </div>
                </div>
            )}

            {/* --- РЕЖИМ ПРАКТИКИ --- */}
            {mode === 'practice' && (
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold mb-4 text-white">Практическое задание: Рефакторинг GreenShop</h2>
                    <div className="p-8 bg-blue-600/5 border border-blue-500/20 rounded-[2.5rem]">
                        <p className="text-slate-300 mb-10 italic border-l-2 border-blue-500 pl-4">
                            "Ваша задача — переписать GreenShop (bad_example), используя TechNews (good_example) как эталон качества."
                        </p>

                        <ul className="space-y-16">
                            {/* ШАГ 1: ПОДГОТОВКА */}
                            <li className="flex flex-col gap-4">
                                <div className="flex items-start gap-4 text-lg text-slate-300">
                                    <div
                                        className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">1
                                    </div>
                                    <div>
                                        <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг
                                            1</p>
                                        <span>Анализ и подготовка</span>
                                    </div>
                                </div>
                                <div className="ml-14">
                                    <TheoryText className="text-sm">
                                        Откройте <b>bad_example.html</b>. Обратите внимание, что всё содержимое (шапка,
                                        меню, товары) обернуто в бессмысленные <code>div</code>. Наша цель — дать
                                        браузеру понять, где что находится.
                                    </TheoryText>
                                </div>
                            </li>

                            {/* ШАГ 2: КАРКАС */}
                            <li className="flex flex-col gap-4">
                                <div className="flex items-start gap-4 text-lg text-slate-300">
                                    <div
                                        className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold">2
                                    </div>
                                    <div>
                                        <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг
                                            2</p>
                                        <span>Глобальная разметка (Скелет)</span>
                                    </div>
                                </div>
                                <div className="ml-14 space-y-4">
                                    <TheoryText className="text-sm">Замените внешние контейнеры
                                        на <code>header</code>, <code>main</code> и <code>footer</code>. Сайдбар
                                        оберните в <code>aside</code>.</TheoryText>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        <CodeSnippet title="TechNews: ДО"
                                                     code={`<div class="top-box">...</div>\n<div class="main-content">...</div>\n<div class="bottom-area">...</div>`}
                                                     language="html"/>
                                        <CodeSnippet title="TechNews: ПОСЛЕ"
                                                     code={`<header>...</header>\n<main>...</main>\n<footer>...</footer>`}
                                                     language="html"/>
                                    </div>
                                </div>
                            </li>

                            {/* ШАГ 3: НАВИГАЦИЯ И СПИСКИ */}
                            <li className="flex flex-col gap-4">
                                <div className="flex items-start gap-4 text-lg text-slate-300">
                                    <div
                                        className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold">3
                                    </div>
                                    <div>
                                        <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг
                                            3</p>
                                        <span>Навигация и списки</span>
                                    </div>
                                </div>
                                <div className="ml-14 space-y-4">
                                    <TheoryText className="text-sm">В GreenShop ссылки меню просто лежат
                                        в <code>div</code>. Оформите их через <code>nav</code> и маркированный
                                        список <code>ul - li</code>.</TheoryText>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        <CodeSnippet title="TechNews: ДО"
                                                     code={`<div class="menu">\n  <a href="#">Новости</a>\n  <a href="#">Статьи</a>\n</div>`}
                                                     language="html"/>
                                        <CodeSnippet title="TechNews: ПОСЛЕ"
                                                     code={`<nav>\n  <ul>\n    <li><a href="#">Новости</a></li>\n    <li><a href="#">Статьи</a></li>\n  </ul>\n</nav>`}
                                                     language="html"/>
                                    </div>
                                </div>
                            </li>

                            {/* ШАГ 4: КАРТОЧКИ ТОВАРОВ */}
                            <li className="flex flex-col gap-4">
                                <div className="flex items-start gap-4 text-lg text-slate-300">
                                    <div
                                        className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold">4
                                    </div>
                                    <div>
                                        <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг
                                            4</p>
                                        <span>Карточки и Кнопки</span>
                                    </div>
                                </div>
                                <div className="ml-14 space-y-4">
                                    <TheoryText className="text-sm">Каждое растение в магазине — это автономная единица.
                                        Используйте <code>article</code>. Кнопки «В корзину» должны стать
                                        тегом <code>button</code>.</TheoryText>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        <CodeSnippet title="TechNews: ДО"
                                                     code={`<div class="post">\n  <div class="title">Заголовок</div>\n  <div class="buy">Читать</div>\n</div>`}
                                                     language="html"/>
                                        <CodeSnippet title="TechNews: ПОСЛЕ"
                                                     code={`<article>\n  <h2>Заголовок</h2>\n  <button type="button">Читать</button>\n</article>`}
                                                     language="html"/>
                                    </div>
                                </div>
                            </li>

                            {/* ШАГ 5: SEO И КОНТАКТЫ */}
                            <li className="flex flex-col gap-4">
                                <div className="flex items-start gap-4 text-lg text-slate-300">
                                    <div
                                        className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold">5
                                    </div>
                                    <div>
                                        <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг
                                            5</p>
                                        <span>SEO-атрибуты и Контакты</span>
                                    </div>
                                </div>
                                <div className="ml-14 space-y-4">
                                    <TheoryText className="text-sm">Добавьте описания <code>alt</code> для фото растений
                                        и оберните Email в футере в тег <code>address</code>.</TheoryText>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        <CodeSnippet title="TechNews: ДО"
                                                     code={`<img src="pic.jpg">\n<div class="mail">admin@news.com</div>`}
                                                     language="html"/>
                                        <CodeSnippet title="TechNews: ПОСЛЕ"
                                                     code={`<img src="pic.jpg" alt="Описание">\n<address>admin@news.com</address>`}
                                                     language="html"/>
                                    </div>
                                </div>
                            </li>
                            <li className="flex flex-col gap-4">
                                <div className="flex items-start gap-4 text-lg text-slate-300">
                                    <div
                                        className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold">6
                                    </div>
                                    <div>
                                        <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг
                                            6</p>
                                        <span>Выслать результаты файлом или скришнотами.</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Lesson4;

