import React from 'react';
import {
    TheoryText,
    TheoryImage,
    CodeSnippet,
    FileDownload,
    InfoPanel,
    ImageGrid
} from '../components/UIComponents';

const Lesson3 = ({ mode }) => {
    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            {/* --- РЕЖИМ ТЕОРИИ --- */}
            {mode === 'theory' && (
                <article>
                    <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                        Лекция 3: Семантика HTML и основы SEO
                    </h2>

                    {/* 1. ЧТО ТАКОЕ SEO */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">1. Что такое SEO?</h3>
                        <TheoryText>
                            SEO (Search Engine Optimization) — это оптимизация сайта для поисковых систем (Google, Яндекс).
                            Поисковик — это робот, который «читает» ваш сайт. Он не видит красивый дизайн из Figma, он видит только код.
                        </TheoryText>
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 mt-6">
                            <p className="text-sm text-slate-300 italic">
                                Если ваш код — это сплошные теги <code className="text-blue-400 font-bold">&lt;div&gt;</code> и <code className="text-blue-400 font-bold">&lt;p&gt;</code>, робот не поймет, о чем этот сайт, и не покажет его пользователям.
                            </p>
                        </div>
                    </section>

                    {/* 2. СЕМАНТИКА */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">2. Семантика: Теги со смыслом</h3>
                        <TheoryText>Семантика — это использование тегов по назначению. Это скелет вашего контента.</TheoryText>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div className="p-6 border-l-2 border-blue-500 bg-blue-500/5">
                                <h4 className="font-bold text-white mb-3 italic">Иерархия заголовков</h4>
                                <ul className="space-y-2 text-xs text-slate-400">
                                    <li><strong className="text-white">&lt;h1&gt;</strong> — Тема страницы. Только ОДИН на страницу!</li>
                                    <li><strong className="text-white">&lt;h2&gt;</strong> — Главы (основные разделы).</li>
                                    <li><strong className="text-white">&lt;h3&gt;</strong> — Подразделы.</li>
                                </ul>
                            </div>
                            <div className="p-6 border-l-2 border-purple-500 bg-purple-500/5">
                                <h4 className="font-bold text-white mb-3 italic">Смысловые контейнеры</h4>
                                <ul className="space-y-2 text-xs text-slate-400">
                                    <li><strong className="text-white">&lt;header&gt; / &lt;footer&gt;</strong> — Шапка и подвал.</li>
                                    <li><strong className="text-white">&lt;nav&gt;</strong> — Навигационное меню.</li>
                                    <li><strong className="text-white">&lt;main&gt;</strong> — Уникальный контент.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 3. АРХИТЕКТУРА И СТРУКТУРА */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">3. Анатомия страницы: Что должно быть где?</h3>
                        <TheoryText>Правильная структура сайта напоминает строение документа. Робот (и диктор для слабовидящих) читает её сверху вниз:</TheoryText>

                        <div className="mt-6 space-y-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-xs leading-relaxed">
                                &lt;header&gt; <span className="text-slate-500">// Логотип, поиск, корзина GreenShop</span><br/>
                                &nbsp;&nbsp;&lt;nav&gt; ...меню... &lt;/nav&gt;<br/>
                                &lt;/header&gt;<br/>
                                &lt;main&gt;<br/>
                                &nbsp;&nbsp;&lt;section&gt; <span className="text-slate-500">// Слайдер или спецпредложения</span> &lt;/section&gt;<br/>
                                &nbsp;&nbsp;&lt;section&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Наши растения&lt;/h2&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;article&gt; ...карточка кактуса... &lt;/article&gt;<br/>
                                &nbsp;&nbsp;&lt;/section&gt;<br/>
                                &lt;/main&gt;
                            </div>
                        </div>

                        <InfoPanel title="Почему нельзя всё делать через <p>?">
                            <ul className="text-sm space-y-2">
                                <li><strong>1. Потеря позиций:</strong> Google не поймет, что "Наши цены" — это заголовок, а не просто текст.</li>
                                <li><strong>2. Доступность (Accessibility):</strong> Программы-экранные дикторы прыгают по тегам h1-h3. Без них сайт — каша.</li>
                            </ul>
                        </InfoPanel>
                    </section>

                    {/* 4. ВАЖНЫЕ ЭЛЕМЕНТЫ */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">4. Мета-данные и изображения</h3>
                        <div className="space-y-6 mt-6">
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-white font-bold mb-2">Атрибут alt у &lt;img&gt;</h4>
                                <TheoryText className="text-sm">
                                    Это "глаза" поисковика. Если картинка не загрузится, пользователь увидит текст. Если робот просканирует сайт — он узнает, что на фото "Комнатная Монстера".
                                </TheoryText>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-white font-bold mb-2">Мета-теги в &lt;head&gt;</h4>
                                <TheoryText className="text-sm italic">
                                    &lt;title&gt; — название вкладки. &lt;meta name="description"&gt; — текст под ссылкой в поиске (сниппет).
                                </TheoryText>
                            </div>
                        </div>
                    </section>
                </article>
            )}

            {/* --- РЕЖИМ ФАЙЛОВ --- */}
            {mode === 'files' && (
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold mb-8 text-white text-center md:text-left">Материалы для скачивания</h2>
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                        <h4 className="text-blue-400 font-bold mb-3 uppercase tracking-wider text-[10px] italic">Полезная ссылка</h4>
                        <TheoryText className="mb-0 italic underline decoration-blue-500/40 underline-offset-4 hover:text-blue-400 transition-colors">
                            <a href="https://web.dev/learn/html/semantic-html/" target="_blank" rel="noopener noreferrer">
                                Гайд по семантике от Google (web.dev)
                            </a>
                        </TheoryText>
                    </div>
                </div>
            )}

            {/* --- РЕЖИМ ПРАКТИКИ --- */}
            {mode === 'practice' && (
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold mb-4 text-white">Практическое задание</h2>
                    <div className="p-8 bg-blue-600/5 border border-blue-500/20 rounded-[2.5rem]">
                        <ul className="space-y-12">
                            {/* Шаг 1 */}
                            <li className="flex flex-col gap-4">
                                <div className="flex items-start gap-4 text-lg text-slate-300">
                                    <div className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">1</div>
                                    <div>
                                        <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг 1</p>
                                        <span>Анализ структуры GreenShop</span>
                                    </div>
                                </div>
                                <div className="ml-14">
                                    <TheoryText className="text-sm">Откройте макет в Figma и выделите логические блоки: где будет header, где nav, а где разделы section.</TheoryText>
                                    <div className="mt-4">
                                        <TheoryImage
                                            src="/img/lesson9/structure-example.png"
                                            alt="Пример разметки блоков"
                                            caption="Пример того, как мы делим макет на семантические зоны"
                                        />
                                    </div>
                                </div>
                            </li>

                            {/* Шаг 2 */}
                            <li className="flex flex-col gap-4">
                                <div className="flex items-start gap-4 text-lg text-slate-300">
                                    <div className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">2</div>
                                    <div>
                                        <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг 2</p>
                                        <span>Написание семантического скелета</span>
                                    </div>
                                </div>
                                <div className="ml-14">
                                    <TheoryText className="text-sm">Создайте файл index.html и пропишите базовую структуру тегами main, section, header и footer без использования CSS.</TheoryText>
                                    <div className="mt-4">
                                        <TheoryImage
                                            src="/img/lesson9/html-skeleton.png"
                                            alt="Скелет кода"
                                            caption="Так должен выглядеть ваш код в редакторе"
                                        />
                                    </div>
                                </div>
                            </li>

                            {/* Шаг 3 */}
                            <li className="flex flex-col gap-4">
                                <div className="flex items-start gap-4 text-lg text-slate-300">
                                    <div className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">3</div>
                                    <div>
                                        <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг 3</p>
                                        <span>SEO-оптимизация</span>
                                    </div>
                                </div>
                                <div className="ml-14">
                                    <TheoryText className="text-sm text-slate-400">Добавьте мета-теги title и description, а также заполните атрибуты alt для всех тестовых картинок растений.</TheoryText>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Lesson3;