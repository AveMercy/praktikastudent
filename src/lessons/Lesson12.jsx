import React from 'react';
import {
    TheoryText,
    InfoPanel,
    CodeSnippet,
    TheoryImage, ExternalLinkCard, FileDownload
} from '../components/UIComponents';

const Lesson10BackendFull = ({ mode }) => {
    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            {/* --- РЕЖИМ ТЕОРИИ --- */}
            {mode === 'theory' && (
                <article className="space-y-12 animate-in fade-in duration-700">
                    <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                        Лекция 12: Фронтенд-инфраструктура и мост к Backend
                    </h2>

                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div
                            className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">
                            <span className="text-sm">!</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Зачем нам интерфейс?</h3>
                        <TheoryText>
                            Мы уже знаем, что <b>Backend</b> — это мозг нашего проекта. Он хранит данные, проверяет
                            пароли и раздает картинки. Но для обычного пользователя бэк «невидим». Вы не можете
                            заставить покупателя заходить в Postman, чтобы купить фикус.
                        </TheoryText>
                        <TheoryText>
                            <b>Frontend</b> — это лицо проекта. Это визуальный слой, который превращает скучные
                            JSON-ответы сервера в красивые карточки товаров, кнопки и анимации. На этом этапе мы строим
                            «мост», по которому данные из нашей базы данных MySQL потекут прямо в браузер пользователя.
                        </TheoryText>
                    </section>

                    {/* Выбор стека: Vite + SWC */}
                    <section className="space-y-6">
                        <h3 className="text-2xl font-bold text-blue-400 mb-4">Наш выбор: Vite + React (JS + SWC)</h3>
                        <TheoryText>
                            Для разработки нашего фронтенда мы будем использовать современную связку <b>Vite</b> с
                            компилятором <b>SWC</b>.
                        </TheoryText>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                <h4 className="text-yellow-400 font-bold mb-3">JavaScript + SWC</h4>
                                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                                    <b>SWC (Speedy Web Compiler)</b> — это сверхбыстрый инструмент, написанный на языке
                                    Rust. Он мгновенно превращает ваш код в то, что понимает браузер. Это идеальный
                                    вариант для быстрого старта: минимум лишних настроек и максимум скорости работы.
                                </p>
                            </div>
                            <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl">
                                <h4 className="text-blue-400 font-bold mb-3">А что дальше? (Next.js)</h4>
                                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                                    Для более сложной и профессиональной разработки часто используют <b>Next.js</b>. Он
                                    умеет делать серверный рендеринг (SSR) и лучше подходит для SEO. Но чтобы его
                                    освоить, нужно сначала крепко подружиться с базовым React, чем мы и займемся.
                                </p>
                            </div>
                        </div>
                        <InfoPanel title="Важно">
                            Мы начинаем с классики современного веба: <b>Vite + React</b>. Это база, которая позволит
                            вам понять механику работы компонентов и запросов, не перегружая себя лишней архитектурой на
                            старте.
                        </InfoPanel>
                    </section>

                    {/* Наш стек */}
                    <section className="relative pl-12 border-l-2 border-emerald-500/30">
                        <div
                            className="absolute -left-4 top-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">
                            <span className="text-sm">⚙</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Пример технологического стека</h3>
                        <TheoryText>
                            Я в своем проекте буду использовать следюущие библотеки. Можете использовать их, можете
                            добавтиь еще, если это требуется. Вы можете добалвять их в ходе работы, не критично, если вы
                            захотите позже добавить еще.
                        </TheoryText>

                        <div className="space-y-4">
                            <div className="flex gap-4 p-5 bg-[#020617] rounded-2xl border border-white/5 items-start">
                                <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg"><b>Axios</b></div>
                                <div>
                                    <h5 className="text-white font-bold text-sm">Доступ к API</h5>
                                    <p className="text-xs text-slate-500">Библиотека для запросов к API. Она берет наши
                                        данные и доставляет их на сервер (и обратно).</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-5 bg-[#020617] rounded-2xl border border-white/5 items-start">
                                <div
                                    className="p-2 bg-purple-500/10 text-purple-400 rounded-lg text-[10px] py-3 uppercase">
                                    <b>Router</b></div>
                                <div>
                                    <h5 className="text-white font-bold text-sm">Навигатор (React Router Dom)</h5>
                                    <p className="text-xs text-slate-500">Позволяет создавать многостраничность:
                                        главная, корзина, личный кабинет — всё это работает без перезагрузки
                                        браузера.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-5 bg-[#020617] rounded-2xl border border-white/5 items-start">
                                <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg"><b>Zustand</b></div>
                                <div>
                                    <h5 className="text-white font-bold text-sm">Глобальный склад (State
                                        Management)</h5>
                                    <p className="text-xs text-slate-500">Хранит данные о товарах и авторизации так,
                                        чтобы любая кнопка на любой странице знала, залогинен пользователь или нет.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-5 bg-[#020617] rounded-2xl border border-white/5 items-start">
                                <div className="p-2 bg-pink-500/10 text-pink-400 rounded-lg text-[10px] py-3 uppercase">
                                    <b>Motion</b></div>
                                <div>
                                    <h5 className="text-white font-bold text-sm">Аниматор (Framer Motion)</h5>
                                    <p className="text-xs text-slate-500">Отвечает за плавные появления, выезжающие меню
                                        и красивые переходы между страницами.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-5 bg-[#020617] rounded-2xl border border-white/5 items-start">
                                <div className="p-2 bg-cyan-500/10 text-cyan-400 rounded-lg text-[10px] py-3 uppercase">
                                    <b>Lucide</b></div>
                                <div>
                                    <h5 className="text-white font-bold text-sm">Дизайнер иконок (Lucide React)</h5>
                                    <p className="text-xs text-slate-500">Огромная библиотека современных и легких
                                        иконок для кнопок, меню и поиска.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="relative pl-12 border-l-2 border-cyan-500/30">
                        <div
                            className="absolute -left-4 top-0 w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">
                            <span className="text-sm">🎨</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Стилизация: Почему Tailwind CSS?</h3>
                        <TheoryText>
                            Вы уже должны были изучать css. Так вот, это почти то же самое.
                            В современной разработке (и в нашем проекте в частности) мы будем использовать <b>Tailwind
                            CSS</b>. Это фреймворк, который позволяет стилизовать элементы, не выходя из HTML-кода,
                            используя готовые служебные классы.
                        </TheoryText>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                <h4 className="text-cyan-400 font-bold mb-3 italic">Преимущества (Почему это
                                    удобно)</h4>
                                <ul className="text-xs text-slate-400 space-y-3">
                                    <li>
                                        <b className="text-slate-200 block">1. Скорость разработки:</b>
                                        Вам не нужно постоянно переключаться между файлами и придумывать названия
                                        классов (вроде <code
                                        className="text-cyan-300">.product-card-container-inner-v2</code>).
                                    </li>
                                    <li>
                                        <b className="text-slate-200 block">2. Атомарный подход:</b>
                                        Вы видите стили прямо на элементе. Нужно сделать кнопку синей и скруглить углы?
                                        Просто пишем: <code className="text-cyan-300">bg-blue-500 rounded-xl</code>.
                                    </li>
                                    <li>
                                        <b className="text-slate-200 block">3. Адаптивность "из коробки":</b>
                                        Сделать дизайн для мобилок проще простого через префиксы, например: <code
                                        className="text-cyan-300">w-full md:w-1/2</code>.
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                <h4 className="text-red-400 font-bold mb-3 italic">Недостатки (К чему нужно
                                    привыкнуть)</h4>
                                <ul className="text-xs text-slate-400 space-y-3">
                                    <li>
                                        <b className="text-slate-200 block">1. "Грязная" разметка:</b>
                                        Если у элемента много стилей, строка классов может стать очень длинной. Это
                                        пугает новичков.
                                    </li>
                                    <li>
                                        <b className="text-slate-200 block">2. Порог вхождения:</b>
                                        Нужно выучить (или подглядывать в шпаргалку) названия классов. Но они
                                        логичны: <i>p-4</i> — это padding, <i>m-2</i> — margin.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <h4 className="text-white font-bold mb-4 flex items-center gap-2">Сравнение на практике:</h4>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Обычный
                                    CSS</p>
                                <CodeSnippet
                                    code={`.btn {\n  background-color: #3b82f6;\n  padding: 1rem;\n  border-radius: 0.5rem;\n  color: white;\n}\n\n<button class="btn">Кнопка</button>`}/>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[10px] text-cyan-500 uppercase tracking-widest font-bold">Tailwind
                                    CSS</p>
                                <CodeSnippet
                                    code={`<button class="bg-blue-500 p-4 rounded-lg text-white">\n  Кнопка\n</button>`}/>
                            </div>
                        </div>


                        <InfoPanel title="Вердикт" className="mt-8">
                            Tailwind — это стандарт индустрии для React-проектов. Он позволяет создавать уникальные
                            интерфейсы невероятно быстро, не создавая при этом гигантских и запутанных CSS-файлов,
                            которые со временем превращаются в "спагетти".
                        </InfoPanel>
                    </section>


                    <InfoPanel title="Итоговая цель">
                        К концу этого блока лекций мы получим живой интерфейс, который будет «стучаться» в написанный
                        вами ранее Backend, забирать оттуда данные о растениях и выводить их в виде красивой сетки
                        товаров.
                    </InfoPanel>
                </article>
            )}
            {/* --- РЕЖИМ ФАЙЛОВ --- */}
            {mode === 'files' && (
                <div className="space-y-6">


                </div>
            )}
            {/* --- РЕЖИМ ПРАКТИКИ --- */}
            {mode === 'practice' && (
                <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-700">
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Практика: Подготовка Frontend-среды</h2>
                        <TheoryText>
                            На этом этапе мы развернем базу нашего клиентского приложения. Работать будем все в том же <b>IntelliJ IDEA</b>. Создайте новый проект (Empty Project), дайте ему название (например, <i>GreenShop-Frontend</i>).
                        </TheoryText>
                    </section>

                    {/* ШАГ 1: УСТАНОВКА VITE */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">1</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Создание проекта Vite</h3>
                        <TheoryText>
                            Мы будем использовать <b>Vite</b> — самый быстрый сборщик на данный момент. Введите команду в терминале корня вашего проекта:
                        </TheoryText>

                        <CodeSnippet code={`npm create vite@latest client -- --template react-swc`} />

                        <div className="p-6 bg-[#020617] rounded-2xl border border-white/5 my-6">
                            <p className="text-sm text-slate-300 mb-4 font-bold">После ввода команды следуйте инструкциям в терминале:</p>
                            <ul className="space-y-3 text-xs text-slate-400">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                    Выберите фреймворк: <b className="text-white">React</b> (используйте стрелки и Enter).
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                    Выберите вариант: <b className="text-white">JavaScript + SWC</b>.
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                    На все остальные вопросы жмите просто <b>Enter</b>, ничего не меняя.
                                </li>
                            </ul>
                        </div>

                        <InfoPanel title="Локальный адрес">
                            После завершения установки ваш проект будет доступен по адресу <code className="text-blue-300 text-xs">http://localhost:5173/</code> (если порт не занят другим приложением).
                        </InfoPanel>
                    </section>

                    {/* ШАГ 2: УСТАНОВКА ЗАВИСИМОСТЕЙ */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">2</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Установка библиотек и инструментов</h3>
                        <TheoryText>
                            Теперь нам нужно установить дополнительные инструменты. <b>Внимание:</b> выполняйте команды по отдельности и строго в указанном порядке. Прочитать про все бибилиотеки ниже можете в разделе теории.
                        </TheoryText>

                        <div className="space-y-6">
                            <div>
                                <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider font-bold italic">Шаг 2.1: Переход в папку клиента</p>
                                <CodeSnippet code={`cd client`} />
                            </div>

                            <div>
                                <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider font-bold italic">Шаг 2.2: Установка базовых зависимостей Vite</p>
                                <CodeSnippet code={`npm install`} />
                            </div>

                            <div>
                                <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider font-bold italic">Шаг 2.3: Установка стека (Axios, Router, Zustand, и др.)</p>
                                <CodeSnippet code={`npm install axios react-router-dom zustand lucide-react framer-motion`} />
                            </div>

                            <div>
                                <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider font-bold italic">Шаг 2.4: Установка Tailwind CSS</p>
                                <CodeSnippet code={`npm install -D @tailwindcss/vite`} />
                            </div>
                        </div>
                    </section>

                    {/* ШАГ 3: НАСТРОЙКА КОНФИГУРАЦИИ */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div
                            className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">3
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Настройка конфигурации и стилей</h3>
                        <TheoryText>
                            Чтобы фронтенд мог "общаться" с бэкендом и корректно отображать стили, нужно внести
                            изменения в два файла.
                        </TheoryText>

                        <div className="space-y-8">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span
                                        className="text-[16px] font-mono text-slate-500">Файл: client/vite.config.js</span>
                                </div>
                                <InfoPanel title="Настройка Proxy" className="mb-4">
                                    Мы добавляем <b>proxy</b>, чтобы запросы из React (порт 5173) автоматически
                                    перенаправлялись на сервер Express (порт 5000). Это избавит нас от ошибок CORS.
                                </InfoPanel>
                                <CodeSnippet language="javascript"
                                             code={`import { defineConfig } from 'vite'\nimport react from '@vitejs/plugin-react-swc'\nimport tailwindcss from '@tailwindcss/vite'\n\nexport default defineConfig({\n  plugins: [\n    tailwindcss(), // Tailwind должен быть ПЕРЕД react() или ПЕРВЫМ в списке\n    react(),\n  ],\n  server: {\n    port: 5173,\n    proxy: {\n      '/api': 'http://localhost:5000',\n      '/uploads': 'http://localhost:5000'\n    }\n  }\n})`}/>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span
                                        className="text-[16px] font-mono text-slate-500">Файл: client/src/index.css</span>
                                </div>
                                <div
                                    className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-xl mb-4 text-xs text-slate-400">
                                    Удалите всё содержимое файла и замените его одной строчкой для подключения Tailwind
                                    CSS:
                                </div>
                                <CodeSnippet language="css" code={`@import "tailwindcss";`}/>
                            </div>
                        </div>
                    </section>

                    {/* ШАГ 4: ИТОГ */}
                    <section className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-3xl">

                        <p className="text-sm text-slate-300 max-w-2xl mx-auto">
                            Теперь у вас есть готовый "скелет" проекта. Мы установили все нужные библиотеки, настроили
                            сверхбыструю сборку через SWC и подключили Tailwind для стилизации. В следующей части мы
                            перейдем к созданию архитектуры.
                        </p>
                    </section>
                </div>
            )}
        </div>
    );
};

export default Lesson10BackendFull;