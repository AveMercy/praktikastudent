import React from 'react';
import {
    TheoryText,
    TheoryImage,
    CodeSnippet,
    FileDownload,
    InfoPanel,
    ImageGrid
} from '../components/UIComponents';

const Lesson8 = ({ mode }) => {
    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            {/* --- РЕЖИМ ТЕОРИИ --- */}
            {mode === 'theory' && (
                <article>
                    <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                        Лекция 6: Работа с данными. PostgreSQL и Sequelize
                    </h2>

                    {/* 1. ЧТО ТАКОЕ РЕЛЯЦИОННАЯ БД */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">1. Что такое Реляционная БД и SQL?</h3>
                        <TheoryText>
                            В PostgreSQL данные хранятся в строгих структурах — таблицах. Это позволяет нам строить надежные связи между данными.
                        </TheoryText>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-blue-400 font-bold mb-2 italic">Таблица</h4>
                                <p className="text-xs text-slate-400">Это как лист в Excel (например, «Plants» или «Users»).</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-purple-400 font-bold mb-2 italic">Строка</h4>
                                <p className="text-xs text-slate-400">Одна конкретная запись: информация об одном растении.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-emerald-400 font-bold mb-2 italic">Связи</h4>
                                <p className="text-xs text-slate-400">Главная фишка. Связь «Заказ» → «Пользователь», чтобы знать, кто купил товар.</p>
                            </div>
                        </div>
                    </section>

                    {/* 2. ЗАЧЕМ НАМ SEQUELIZE */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">2. Зачем нам Sequelize?</h3>
                        <TheoryText>
                            Писать чистые SQL-запросы в коде бывает сложно и небезопасно. <strong>Sequelize (ORM)</strong> берет это на себя:
                        </TheoryText>

                        <div className="space-y-4 mt-6">
                            <div className="p-6 border-l-2 border-blue-500 bg-blue-500/5">
                                <p className="text-sm text-slate-300"><strong>Модели:</strong> Вы описываете, как должен выглядеть объект (юзер или товар) на JavaScript.</p>
                            </div>
                            <div className="p-6 border-l-2 border-purple-500 bg-purple-500/5">
                                <p className="text-sm text-slate-300"><strong>Автоматизация:</strong> Библиотека сама создает таблицы в Postgres на основе ваших моделей.</p>
                            </div>
                            <div className="p-6 border-l-2 border-emerald-500 bg-emerald-500/5">
                                <p className="text-sm text-slate-300"><strong>Удобство:</strong> Создать запись можно одной командой: <code>User.create()</code>.</p>
                            </div>
                        </div>
                    </section>

                    {/* 3. ОБНОВЛЕННАЯ ЛОГИКА */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">3. Обновленная логика Контроллеров</h3>
                        <TheoryText>Теперь наши функции работают с реальной базой данных через асинхронные запросы:</TheoryText>



                        <div className="mt-6">
                            <CodeSnippet language="javascript" code={`const User = require('../models/User');\n\nconst getUsers = async (req, res) => {\n    try {\n        const users = await User.findAll(); // Достаем всех из БД\n        res.json(users);\n    } catch (e) {\n        res.status(500).json({ message: "Ошибка сервера" });\n    }\n};`} />
                        </div>
                    </section>
                </article>
            )}

            {/* --- РЕЖИМ ФАЙЛОВ --- */}
            {mode === 'files' && (
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold mb-8 text-white text-center md:text-left">Материалы для работы</h2>
                    <FileDownload name="PostgreSQL_Installation_Guide.pdf" size="1.8 MB" url="#" />
                    <FileDownload name="Sequelize_CheatSheet.pdf" size="950 KB" url="#" />
                </div>
            )}

            {/* --- РЕЖИМ ПРАКТИКИ --- */}
            {mode === 'practice' && (
                <div className="space-y-10">
                    <h2 className="text-3xl font-bold text-white tracking-tight">Практика: Подключение БД к GreenShop</h2>

                    <div className="p-8 bg-blue-600/5 border border-blue-500/20 rounded-[2.5rem]">
                        <div className="space-y-12">
                            {/* Шаг 1 */}
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-black shadow-lg shadow-blue-600/20">1</div>
                                <div className="flex-1">
                                    <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-sm italic">Установка зависимостей</h4>
                                    <CodeSnippet language="bash" code="npm install sequelize pg pg-hstore" />
                                </div>
                            </div>

                            {/* Шаг 2 */}
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-black shadow-lg shadow-blue-600/20">2</div>
                                <div className="flex-1">
                                    <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-sm italic">Конфигурация (config/db.js)</h4>
                                    <CodeSnippet language="javascript" code={`const { Sequelize } = require('sequelize');\n\nmodule.exports = new Sequelize('greenshop_db', 'postgres', 'password', {\n    host: 'localhost',\n    dialect: 'postgres',\n    logging: false\n});`} />
                                </div>
                            </div>

                            {/* Шаг 3 */}
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-black shadow-lg shadow-blue-600/20">3</div>
                                <div className="flex-1">
                                    <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-sm italic text-blue-400">Модель растения (models/Plant.js)</h4>
                                    <CodeSnippet language="javascript" code={`const { DataTypes } = require('sequelize');\nconst sequelize = require('../config/db');\n\nconst Plant = sequelize.define('Plant', {\n    name: { type: DataTypes.STRING, allowNull: false },\n    price: { type: DataTypes.INTEGER },\n    category: { type: DataTypes.STRING }\n});\n\nmodule.exports = Plant;`} />
                                </div>
                            </div>

                            {/* Шаг 4 */}
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-black shadow-lg shadow-blue-600/20">4</div>
                                <div className="flex-1">
                                    <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-sm italic">Синхронизация в server.js</h4>
                                    <CodeSnippet language="javascript" code={`const sequelize = require('./config/db');\n\nconst start = async () => {\n    try {\n        await sequelize.authenticate();\n        await sequelize.sync(); // Создает таблицы\n        app.listen(PORT, () => console.log('DB Connected & Server Started'));\n    } catch (e) { console.log(e) }\n};`} />
                                </div>
                            </div>
                        </div>

                        <InfoPanel title="Задание для команд">
                            <ul className="text-sm space-y-2">
                                <li>• Создать пустую базу данных в <strong>pgAdmin 4</strong>.</li>
                                <li>• Описать модель для главной сущности вашего проекта.</li>
                                <li>• Через <strong>Postman</strong> отправить POST запрос и убедиться, что данные появились в базе.</li>
                            </ul>
                        </InfoPanel>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Lesson8;