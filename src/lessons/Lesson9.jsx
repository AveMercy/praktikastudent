import React from 'react';
import {
    TheoryText,
    InfoPanel,
    CodeSnippet,
    ExternalLinkCard,
    TheoryImage
} from '../components/UIComponents';

const BackendArchitectureLesson = ({ mode }) => {
    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            {/* --- РЕЖИМ ТЕОРИИ --- */}
            {mode === 'theory' && (
                <article>
                    <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                        Лекция 12: Архитектура Backend-приложения (Node.js + Sequelize)
                    </h2>

                    <section className="mb-12">
                        <TheoryText>
                            Когда проект растет, важно, чтобы каждый файл отвечал за свою задачу (<b>Principle of Single Responsibility</b>). Мы будем использовать структуру, где логика отделена от маршрутов, а настройки — от кода.
                        </TheoryText>
                    </section>

                    {/* 1. СТРУКТУРА ПРОЕКТА */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">1. Структура папок и файлов</h3>
                        <div className="bg-[#020617] p-6 rounded-2xl border border-white/5 font-mono text-sm leading-relaxed text-slate-300">
                            <p>server/</p>
                            <p>├── <span className="text-blue-400 font-bold">config/</span> # Настройки (БД, Passport и т.д.)</p>
                            <p>├── <span className="text-blue-400 font-bold">controllers/</span> # Логика обработки запросов (мозг приложения)</p>
                            <p>├── <span className="text-blue-400 font-bold">middleware/</span> # Промежуточные фильтры (проверка авторизации)</p>
                            <p>├── <span className="text-blue-400 font-bold">models/</span> # Описание таблиц базы данных (Sequelize модели)</p>
                            <p>├── <span className="text-blue-400 font-bold">routes/</span> # Маршруты (API Endpoints)</p>
                            <p>├── <span className="text-blue-400 font-bold">seeders/</span> # Первичное заполнение БД (например, Админ)</p>
                            <p>├── <span className="text-blue-400 font-bold">uploads/</span> # Физическое хранение картинок растений</p>
                            <p>├── <span className="text-blue-300">.env</span> # Секретные ключи (не пушим в Git!)</p>
                            <p>├── <span className="text-blue-300">app.js</span> # Сборка Express-приложения</p>
                            <p>└── <span className="text-blue-300">index.js</span> # Точка запуска сервера</p>
                        </div>
                    </section>

                    {/* 2. НАЗНАЧЕНИЕ СЛОЕВ */}
                    <section className="mb-12 space-y-8">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">2. Назначение слоев (Слои приложения)</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-5 bg-white/5 rounded-2xl border border-white/10">
                                <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest text-blue-400">Routes (Пути)</h4>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    Только направления. Например: <code className="text-blue-300 italic">router.post('/login', userController.login)</code>.
                                    Роут не знает, как работает логин, он просто направляет запрос дальше.
                                </p>
                            </div>
                            <div className="p-5 bg-white/5 rounded-2xl border border-white/10">
                                <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest text-blue-400">Controllers (Логика)</h4>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    Здесь живет "мозг". Контроллер достает данные из <code className="text-blue-300 italic">req.body</code>, обращается к модели и отправляет ответ в JSON.
                                </p>
                            </div>
                        </div>

                        <InfoPanel title="Почему нельзя всё в одном файле?">
                            Когда в проекте станет 50 моделей и 200 роутов, один файл будет весить 10 000 строк. В нем невозможно работать командой — вы будете постоянно ловить конфликты в Git.
                        </InfoPanel>
                    </section>

                    {/* 3. СИДЕРЫ */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">3. Сиды (Seeders) — Создаем Админа правильно</h3>
                        <TheoryText>
                            <b>Seeder</b> — это скрипт, который "сеет" начальные данные в пустую базу. Мы будем использовать его, чтобы создать первого администратора с зашифрованным паролем.
                        </TheoryText>
                        <CodeSnippet
                            language="javascript"
                            code={`const bcrypt = require('bcrypt');\nconst User = require('../models/User');\n\nconst seedAdmin = async () => {\n  const adminExists = await User.findOne({ where: { role: 'ADMIN' } });\n  if (!adminExists) {\n    const hashedPassword = await bcrypt.hash('admin123', 10);\n    await User.create({\n      email: 'admin@greenshop.com',\n      password: hashedPassword,\n      role: 'ADMIN'\n    });\n    console.log('Seed: Admin created');\n  }\n};`}
                        />
                    </section>
                </article>
            )}

            {/* --- РЕЖИМ ПРАКТИКИ --- */}
            {mode === 'practice' && (
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold mb-4 text-white">Практика: Инициализация бэкенда</h2>

                    <div className="p-8 bg-blue-600/5 border border-blue-500/20 rounded-[2.5rem] space-y-12">
                        {/* ШАГ 1 */}
                        <li className="flex items-start gap-4 text-slate-300 list-none">
                            <div className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">1</div>
                            <div className="flex-1">
                                <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг 1: Структура и зависимости</p>
                                <p className="mb-4 text-sm">Создайте все папки из раздела "Структура" и установите библиотеку для работы с окружением:</p>
                                <CodeSnippet language="bash" code="npm install dotenv" />
                            </div>
                        </li>

                        {/* ШАГ 2 */}
                        <li className="flex items-start gap-4 text-slate-300 list-none">
                            <div className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">2</div>
                            <div className="flex-1">
                                <p className="font-bold text-white uppercase text-xs tracking-widest mb-1 text-blue-400">Шаг 2: Настройка .env и DB</p>
                                <p className="text-sm mb-4">Создайте файл <code className="text-blue-300">.env</code> и настройте подключение в <code className="text-blue-300">config/db.js</code>:</p>
                                <CodeSnippet
                                    language="javascript"
                                    code={`require('dotenv').config();\nconst { Sequelize } = require('sequelize');\n\nmodule.exports = new Sequelize(\n  process.env.DB_NAME,\n  process.env.DB_USER,\n  process.env.DB_PASSWORD,\n  { dialect: 'mysql', host: process.env.DB_HOST }\n);`}
                                />
                            </div>
                        </li>

                        {/* ШАГ 3 (ПЛАНИРОВАНИЕ) */}
                        <li className="flex items-start gap-4 text-slate-300 list-none border-t border-white/5 pt-8">
                            <div className="w-10 h-10 rounded-full bg-emerald-600 flex-shrink-0 flex items-center justify-center text-white font-bold">3</div>
                            <div className="flex-1">
                                <p className="font-bold text-white uppercase text-xs tracking-widest mb-1 text-emerald-400 font-mono">Шаг 3: Проектирование API (GreenShop)</p>
                                <p className="text-sm mb-6">Исходя из нашей БД, вам нужно подготовить следующие роуты и контроллеры:</p>

                                <div className="space-y-4">
                                    <div className="p-4 bg-white/[0.03] rounded-xl border border-white/5">
                                        <h5 className="text-white font-bold text-sm mb-2 italic">Маршруты Пользователей (UserRoutes):</h5>
                                        <ul className="text-xs text-slate-400 space-y-2">
                                            <li>• <code className="text-blue-300">POST /api/user/registration</code> → Регистрация клиента</li>
                                            <li>• <code className="text-blue-300">POST /api/user/login</code> → Вход и получение JWT-токена</li>
                                            <li>• <code className="text-blue-300">GET /api/user/auth</code> → Проверка авторизации</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 bg-white/[0.03] rounded-xl border border-white/5">
                                        <h5 className="text-white font-bold text-sm mb-2 italic">Маршруты Товаров (ProductRoutes):</h5>
                                        <ul className="text-xs text-slate-400 space-y-2">
                                            <li>• <code className="text-blue-300">GET /api/product</code> → Получить список всех растений</li>
                                            <li>• <code className="text-blue-300">GET /api/product/:id</code> → Получить инфо об одном растении</li>
                                            <li>• <code className="text-blue-300 font-bold text-red-400/70">POST /api/product (ADMIN ONLY)</code> → Добавить новое растение</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>

                </div>
            )}
        </div>
    );
};

export default BackendArchitectureLesson;