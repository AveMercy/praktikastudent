import React from 'react';
import {
    TheoryText,
    TheoryImage,
    CodeSnippet,
    FileDownload,
    InfoPanel,
    ImageGrid
} from '../components/UIComponents';

const Lesson1 = ({ mode }) => {
    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            {/* --- РЕЖИМ ТЕОРИИ --- */}
            {mode === 'theory' && (
                <article>
                    <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                        Лекция 1: Веб-приложения и инструменты разработки
                    </h2>

                    {/* 1. КАК РАБОТАЕТ ВЕБ */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">1. Как работает веб: Трехуровневая архитектура</h3>
                        <TheoryText>
                            Прежде чем писать код, нужно понять, что происходит, когда вы вводите адрес сайта в браузере. Современное приложение состоит из трех основных частей:
                        </TheoryText>

                        <div className="space-y-6 mt-6">
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-blue-400 font-bold mb-2">Frontend (Клиентская часть)</h4>
                                <TheoryText>
                                    Это всё, что пользователь видит на экране и с чем взаимодействует. Кнопки, формы, анимации. Frontend выполняется в браузере пользователя.
                                    <br /><strong>Технологии:</strong> HTML, CSS, JavaScript (React).
                                </TheoryText>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-purple-400 font-bold mb-2">Backend (Серверная часть)</h4>
                                <TheoryText>
                                    «Мозг» приложения. Он живет на удаленном компьютере (сервере). Backend обрабатывает запросы от фронтенда, проверяет пароли, делает расчеты и общается с базой данных.
                                    <br /><strong>Технологии:</strong> Node.js, Express.
                                </TheoryText>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-emerald-400 font-bold mb-2">Database (База данных)</h4>
                                <TheoryText>
                                    «Память» приложения. Место, где информация хранится постоянно (пользователи, товары, сообщения). Если сервер выключится, данные в БД останутся.
                                </TheoryText>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h4 className="text-xl font-bold text-white mb-4">Что такое API? (Связующее звено)</h4>
                            <TheoryText>
                                API (Application Programming Interface) — это набор правил, по которым фронтенд общается с бэкендом. Представьте ресторан:
                            </TheoryText>
                            <InfoPanel title="Аналогия с рестораном">
                                <ul className="space-y-2">
                                    <li><strong>Вы (пользователь)</strong> — Frontend.</li>
                                    <li><strong>Повар на кухне</strong> — Backend.</li>
                                    <li><strong>Официант</strong> — это API. Он берет ваш заказ (запрос), несет его на кухню и возвращает вам еду (данные).</li>
                                </ul>
                            </InfoPanel>
                        </div>
                    </section>

                    {/* 2. БИБЛИОТЕКА VS ФРЕЙМВОРК */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6">2. Что такое Фреймворк и Библиотека?</h3>
                        <TheoryText>Часто эти понятия путают. Давайте внесем ясность:</TheoryText>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                            <div className="p-6 border-l-2 border-blue-500 bg-blue-500/5">
                                <h4 className="font-bold text-white mb-2">Библиотека (напр. React)</h4>
                                <p className="text-sm text-slate-400">Это набор инструментов. Вы сами решаете, когда и как их вызывать. Вы — главный, библиотека — ваш помощник.</p>
                            </div>
                            <div className="p-6 border-l-2 border-purple-500 bg-purple-500/5">
                                <h4 className="font-bold text-white mb-2">Фреймворк (напр. Angular, Next.js)</h4>
                                <p className="text-sm text-slate-400">Это «каркас» или правила игры. Фреймворк диктует вам, как строить приложение. Вы работаете внутри фреймворка.</p>
                            </div>
                        </div>

                        <TheoryText>
                            <strong>Зачем они нужны?</strong> Без них мы бы писали в 10 раз больше кода. Они решают типовые задачи: как обновить текст на странице без перезагрузки, как отправить форму, как защитить сайт от взлома.
                        </TheoryText>
                    </section>

                    {/* 3. ЭКОСИСТЕМА JS (РАСШИРЕННАЯ) */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6">3. Экосистема JavaScript: Кто есть кто?</h3>
                        <TheoryText>
                            JavaScript — самый популярный язык, потому что он везде. Но сам по себе JS «голый», поэтому мы используем надстройки:
                        </TheoryText>

                        {/* Runtime & Build Tools */}
                        <div className="space-y-6 my-8">
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                                    <span className="text-blue-500">#</span> Среда исполнения (Runtime): Node.js
                                </h4>
                                <TheoryText className="text-sm mt-2">
                                    Позволяет запускать JS на компьютере/сервере. Без неё JS жил бы только внутри браузера. Именно Node.js дает нам возможность работать с файлами на диске и базами данных.
                                </TheoryText>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                                    <span className="text-orange-500">#</span> Инструменты сборки: Vite
                                </h4>
                                <TheoryText className="text-sm mt-2">
                                    Это сборщик. Представьте, что ваш проект — это тысячи деталей LEGO (файлов). Vite — это быстрый робот, который за доли секунды собирает их в готовую модель, которую понимает браузер. Раньше это делал Webpack, но он был медленным и сложным.
                                </TheoryText>
                            </div>
                        </div>

                        {/* Frontend Solutions */}
                        <div className="my-10">
                            <h4 className="text-xl font-bold text-white mb-4">Frontend-решения (Интерфейс)</h4>
                            <div className="grid gap-4">
                                <div className="p-4 rounded-xl bg-white/5 border-l-4 border-blue-400">
                                    <p className="text-sm"><strong>React:</strong> Самый востребованный инструмент в мире. Основан на компонентах (кнопка, шапка, карточка — это отдельные файлы).</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border-l-4 border-emerald-400">
                                    <p className="text-sm"><strong>Vue.js:</strong> Альтернатива Реакту. Более мягкий порог входа, популярен в Европе и Азии.</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border-l-4 border-red-500">
                                    <p className="text-sm"><strong>Angular:</strong> Мощный фреймворк от Google. Очень строгий, используется в огромных корпоративных системах (банках).</p>
                                </div>
                            </div>
                        </div>

                        {/* Backend Solutions */}
                        <div className="my-10">
                            <h4 className="text-xl font-bold text-white mb-4">Backend-решения (Логика)</h4>
                            <div className="grid gap-4">
                                <div className="p-4 rounded-xl bg-white/5 border-l-4 border-slate-300">
                                    <p className="text-sm"><strong>Express.js:</strong> Минималистичный стандарт. Легкий, быстрый, на нем мы будем учиться основам.</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border-l-4 border-yellow-400">
                                    <p className="text-sm"><strong>Fastify:</strong> Очень быстрый современный фреймворк, ориентированный на производительность.</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border-l-4 border-red-400">
                                    <p className="text-sm"><strong>NestJS:</strong> «Тяжелая артиллерия» для бэкенда. Написан на TypeScript, копирует архитектуру Angular.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 4. РАЗБОР ИНСТРУМЕНТОВ */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6">4. Подробный разбор инструментов</h3>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-lg font-bold text-white">Среда разработки: WebStorm</h4>
                                <TheoryText>Это не просто блокнот, это мощный аналитический инструмент. Он подсказывает ошибки еще до того, как вы запустили код, помогает быстро переходить между файлами и имеет встроенные инструменты для работы с Git и БД.</TheoryText>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white">Дизайн: Figma</h4>
                                <TheoryText>Прошли те времена, когда разработчик рисовал сайт «на глаз». В Figma вы увидите точные размеры отступов, коды цветов и шрифты. Вы будете верстать строго по макету, что отличает профессионала от любителя.</TheoryText>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white">Контроль версий: GitHub</h4>
                                <TheoryText>Ваша «машина времени» и страховка. Позволяет работать в группах над одним проектом и возвращаться к любой версии кода, если что-то сломалось.</TheoryText>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white">Тестирование API: Postman</h4>
                                <TheoryText>Позволяет имитировать запросы от фронтенда к бэкенду. Вы проверяете работу сервера еще до того, как написали визуальную часть приложения.</TheoryText>
                            </div>
                        </div>
                    </section>

                    {/* 5. ROADMAP */}
                    <section className="mb-12 p-8 rounded-[2.5rem] bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20">
                        <h3 className="text-2xl font-bold text-white mb-6">5. Наш учебный стек (Roadmap курса)</h3>
                        <TheoryText>Мы будем изучать MERN-стек (с вариациями), так как это самый короткий путь к готовому проекту:</TheoryText>
                        <div className="flex flex-wrap gap-3 mt-6">
                            {['Node.js', 'Vite', 'React', 'Express.js', 'Postgres'].map(tech => (
                                <span key={tech} className="px-6 py-3 rounded-xl bg-blue-600/20 text-blue-300 text-sm font-bold border border-blue-500/20">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </section>
                </article>
            )}

            {/* --- РЕЖИМ ФАЙЛОВ --- */}
            {mode === 'files' && (
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold mb-8 text-white">Материалы</h2>
                    <FileDownload name="Пример_практического_задания.pdf" size="1.4 MB" url="/downloads/example.pdf" />
                </div>
            )}

            {/* --- РЕЖИМ ПРАКТИКИ --- */}
            {mode === 'practice' && (
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold mb-4 text-white">Практическое задание</h2>
                    <div className="p-8 bg-blue-600/5 border border-blue-500/20 rounded-[2.5rem]">
                        <ul className="space-y-6">
                            <li className="flex items-center gap-4 text-lg text-slate-300">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold">1</div>
                                Разбиться на команды
                            </li>
                            <li className="flex items-center gap-4 text-lg text-slate-300">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold">2</div>
                                Придумать тему проекта
                            </li>
                            <li className="flex items-center gap-4 text-lg text-slate-300">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold">3</div>
                                Определить основную цель проекта и функции
                            </li>
                        </ul>
                        <div className="mt-10 p-4 bg-white/5 rounded-xl italic text-slate-400 text-sm">
                            Подробный пример выполнения можно найти во вкладке "Файлы".
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Lesson1;