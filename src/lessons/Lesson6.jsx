import React from 'react';
import {
    TheoryText,
    TheoryImage,
    CodeSnippet,
    FileDownload,
    InfoPanel,
    ImageGrid
} from '../components/UIComponents';

const Lesson6 = ({ mode }) => {
    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            {/* --- РЕЖИМ ТЕОРИИ --- */}
            {mode === 'theory' && (
                <article>
                    <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                        Лекция 5: Backend-разработка на Express.js
                    </h2>

                    {/* 1. ЧТО ТАКОЕ EXPRESS */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">1. Что такое Express?</h3>
                        <TheoryText>
                            Express.js — это минималистичный фреймворк для Node.js. Если сама Node.js — это двигатель, то Express — это кузов и приборная панель автомобиля. Он позволяет легко обрабатывать HTTP-запросы и строить масштабируемые API.
                        </TheoryText>
                    </section>

                    {/* 2. АНАТОМИЯ ПРОЕКТА */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">2. Анатомия проекта: Архитектура</h3>
                        <TheoryText>Мы используем слоистую архитектуру, чтобы код был чистым и поддерживаемым:</TheoryText>

                        <div className="space-y-4 mt-6">
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-blue-400 font-bold mb-2 italic">server.js</h4>
                                <p className="text-sm text-slate-300">Точка входа. Здесь конфигурируется и запускается сервер.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-purple-400 font-bold mb-2 italic text-sm uppercase tracking-widest">routes/</h4>
                                <p className="text-sm text-slate-300">Папка для маршрутов. Отвечает на вопрос: «Куда пришел запрос?» (например, /api/plants).</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-emerald-400 font-bold mb-2 italic text-sm uppercase tracking-widest">controllers/</h4>
                                <p className="text-sm text-slate-300">Логика приложения. Отвечает на вопрос: «Что сделать с данными?».</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-orange-400 font-bold mb-2 italic text-sm uppercase tracking-widest">models/</h4>
                                <p className="text-sm text-slate-300">Описание данных. Схемы того, как выглядят наши товары или пользователи в базе.</p>
                            </div>
                        </div>
                    </section>

                    {/* 3. ГЛАВНЫЕ КОНЦЕПЦИИ */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">3. Методы API и Маршрутизация</h3>
                        <TheoryText>Общение между фронтендом (React) и бэкендом (Express) идет через REST API:</TheoryText>



                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div className="p-6 border-l-2 border-blue-500 bg-blue-500/5 text-sm text-slate-400">
                                <strong className="text-white">GET</strong> — Получить список растений или детали конкретного цветка.
                            </div>
                            <div className="p-6 border-l-2 border-purple-500 bg-purple-500/5 text-sm text-slate-400">
                                <strong className="text-white">POST</strong> — Добавить новый товар в магазин или создать заказ.
                            </div>
                            <div className="p-6 border-l-2 border-emerald-500 bg-emerald-500/5 text-sm text-slate-400">
                                <strong className="text-white">PUT/PATCH</strong> — Обновить цену или описание растения.
                            </div>
                            <div className="p-6 border-l-2 border-orange-500 bg-orange-500/5 text-sm text-slate-400">
                                <strong className="text-white">DELETE</strong> — Удалить товар из каталога.
                            </div>
                        </div>
                    </section>

                    <InfoPanel title="Middleware (Промежуточное ПО)">
                        Это функции, которые выполняются перед основным кодом. Например, <strong>CORS</strong> позволяет вашему React-приложению обращаться к серверу, а <strong>express.json()</strong> учит сервер понимать данные в формате JSON.
                    </InfoPanel>
                </article>
            )}

            {/* --- РЕЖИМ ФАЙЛОВ --- */}
            {mode === 'files' && (
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold mb-8 text-white text-center md:text-left">Шаблоны кода</h2>
                    <FileDownload name="Express_Boilerplate.zip" size="450 KB" url="#" />
                    <FileDownload name="Postman_Collection_GreenShop.json" size="12 KB" url="#" />
                </div>
            )}

            {/* --- РЕЖИМ ПРАКТИКИ --- */}
            {mode === 'practice' && (
                <div className="space-y-10">
                    <h2 className="text-3xl font-bold text-white tracking-tight">Практика: Каркас сервера GreenShop</h2>

                    <div className="p-8 bg-blue-600/5 border border-blue-500/20 rounded-[2.5rem]">
                        <TheoryText className="mb-8 font-bold text-blue-300 underline underline-offset-8 decoration-blue-500/30">
                            Создаем базу для бэкенда нашего магазина растений.
                        </TheoryText>

                        <div className="space-y-12">
                            {/* Шаг 1 */}
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-black shadow-lg shadow-blue-600/20">1</div>
                                <div className="flex-1">
                                    <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-sm italic">Инициализация и зависимости</h4>
                                    <TheoryText className="text-sm mb-4 text-slate-400">В терминале проекта установите необходимые пакеты:</TheoryText>
                                    <CodeSnippet language="bash" code="npm init -y&#10;npm install express nodemon cors" />
                                    <div className="mt-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-500 italic">
                                        Nodemon позволит серверу перезагружаться автоматически при правках.
                                    </div>
                                </div>
                            </div>

                            {/* Шаг 2 */}
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-black shadow-lg shadow-blue-600/20">2</div>
                                <div className="flex-1">
                                    <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-sm italic">Настройка скриптов</h4>
                                    <TheoryText className="text-sm mb-4 text-slate-400">В файле package.json добавьте скрипт запуска:</TheoryText>
                                    <CodeSnippet language="json" code={`"scripts": {\n  "dev": "nodemon server.js"\n}`} />
                                </div>
                            </div>

                            {/* Шаг 3 */}
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-black shadow-lg shadow-blue-600/20">3</div>
                                <div className="flex-1">
                                    <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-sm italic">Создание server.js</h4>
                                    <CodeSnippet language="javascript" code={`const express = require('express');\nconst cors = require('cors');\nconst app = express();\n\napp.use(cors());\napp.use(express.json());\n\napp.get('/', (req, res) => {\n    res.send('GreenShop API запущен!');\n});\n\napp.listen(5000, () => console.log('Server on port 5000'));`} />
                                </div>
                            </div>

                            {/* Шаг 4 */}
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-black shadow-lg shadow-blue-600/20">4</div>
                                <div className="flex-1">
                                    <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-sm italic text-blue-400">Маршруты для GreenShop</h4>
                                    <TheoryText className="text-sm mb-4 text-slate-400">Создайте <code>routes/plantRoutes.js</code> и выведите список растений:</TheoryText>
                                    <CodeSnippet language="javascript" code={`const express = require('express');\nconst router = express.Router();\n\nrouter.get('/plants', (req, res) => {\n    res.json([\n        { id: 1, name: 'Монстера', price: 1200 },\n        { id: 2, name: 'Фикус', price: 850 }\n    ]);\n});\n\nmodule.exports = router;`} />
                                    <p className="mt-4 text-xs text-slate-500 italic">Не забудьте подключить роутер в server.js через <code>app.use('/api', plantRoutes);</code></p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                            <h5 className="text-white font-bold mb-2">Контрольная точка:</h5>
                            <p className="text-sm text-slate-400">
                                Запустите сервер (<code>npm run dev</code>) и отправьте GET-запрос в Postman на <code>http://localhost:5000/api/plants</code>.
                                Если вы увидели JSON с растениями — ваш бэкенд ожил!
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Lesson6;