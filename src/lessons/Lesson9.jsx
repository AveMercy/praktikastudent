import React from 'react';
import {
    TheoryText,
    InfoPanel,
    CodeSnippet,
    FileDownload,
    ExternalLinkCard, TheoryImage
} from '../components/UIComponents';

const Lesson9 = ({ mode }) => {
    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            {/* --- РЕЖИМ ТЕОРИИ --- */}
            {mode === 'theory' && (
                <article>
                    <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                        Лекция 9: Архитектура Backend-приложения
                    </h2>

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

                </article>
            )}


            {/* --- РЕЖИМ ПРАКТИКИ --- */}
            {mode === 'practice' && (
                <div className="space-y-12">
                    <h2 className="text-3xl font-bold text-white mb-8">Практика: Создание проекта и установка зависимостей</h2>

                    {/* ШАГ 1 */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg shadow-blue-600/40">1</div>
                        <h4 className="text-xl font-bold text-white mb-4 italic">Подготовка в IntelliJ IDEA</h4>
                        <TheoryText>
                            Запустите IntelliJ IDEA и создайте новый пустой проект. Назовите его <code className="text-blue-400">vashe-nazvanie-backend</code>. Мы начинаем с серверной части, поэтому весь код будет жить в этой папке.
                        </TheoryText>
                        <TheoryImage src="/img/less9/1.png" />

                    </section>

                    {/* ШАГ 2 */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg shadow-blue-600/40">2</div>
                        <h4 className="text-xl font-bold text-white mb-4 italic">Работа с Git (Необязательный шаг)</h4>
                        <TheoryText>
                            Чтобы иметь доступ к коду из дома или с другого ПК, используйте GitHub.
                        </TheoryText>
                        <div className="space-y-4 mb-6">
                            <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-sm">
                                <span className="text-blue-400 font-bold tracking-tight">Как зашэрить:</span> В верхней
                                панели найдите <b>Git (или Version Control)</b> → <b>GitHub</b> → <b>Share Project on
                                GitHub</b>.
                                Вам, скорее всего, предложат связать аккаунт на гитхаб (если работаете не со своего
                                устройства, то рекомендую создать чистый аккаунт, чтобы избежать потери данных).
                                <TheoryImage src="/img/less9/2.png"/>
                                <span className="text-blue-400 font-bold tracking-tight"></span> Вы также можете
                                привязать несколько аккаунтов и делиться проектом только на тот аккаунт, который нужен.
                                Перейдите в настройки, нажав 3 полоски слева сверху, найдите пункт Version Control -
                                GitHub.
                                <TheoryImage src="/img/less9/3.png"/>

                            </div>
                            <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-sm">
                                <span className="text-blue-400 font-bold tracking-tight">Как открыть на другом устройстве:</span> Выбираем панель сверху с проектами. Нажимаем clone repository. Выбираем аккаунт с которого хотим скопироать репозиторий и название репоизатория на гите.
                                <TheoryImage src="/img/less9/4.png"/>
                            </div>
                            <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-sm">
                                <span className="text-blue-400 font-bold">Как сохранять прогресс:</span> После каждой пары делайте
                                коммиты. Нажмите <kbd className="bg-slate-700 px-1 rounded">Ctrl+K</kbd> (либо в панели слева, линия с кругом), напишите
                                описание изменений и выберите <b>Commit and Push</b>.

                            </div>
                        </div>
                    </section>

                    {/* ШАГ 3 */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div
                            className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg shadow-blue-600/40">3
                        </div>
                        <h4 className="text-xl font-bold text-white mb-4 italic">Настройка окружения</h4>
                        <TheoryText>
                            Откройте терминал в IDEA снизу слева(<kbd className="bg-slate-700 px-1 rounded text-xs">Alt + F12</kbd>)
                            и инициализируйте проект, затем установите зависимости:
                        </TheoryText>

                        <CodeSnippet language="bash" code="npm init -y" />
                        <CodeSnippet language="bash" code="npm install express sequelize mysql2 dotenv cors bcryptjs jsonwebtoken multer nodemon" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            <ul className="text-xs text-slate-400 space-y-2">
                                <li>• <b className="text-blue-300">express:</b> Фреймворк для создания сервера.</li>
                                <li>• <b className="text-blue-300">sequelize / mysql2:</b> Работа с базой данных.</li>
                                <li>• <b className="text-blue-300">dotenv:</b> Работа с секретными ключами в .env.</li>
                                <li>• <b className="text-blue-300">cors:</b> Разрешение запросов с другого адреса (фронтенда).</li>
                            </ul>
                            <ul className="text-xs text-slate-400 space-y-2">
                                <li>• <b className="text-blue-300">bcryptjs:</b> Шифрование паролей.</li>
                                <li>• <b className="text-blue-300">jsonwebtoken:</b> Создание токенов авторизации.</li>
                                <li>• <b className="text-blue-300">multer:</b> Загрузка картинок на сервер.</li>
                                <li>• <b className="text-blue-300">nodemon:</b> Авто-перезагрузка сервера при изменениях.</li>
                            </ul>
                        </div>

                        <InfoPanel title="Важное замечание: Клонирование">
                            Если вы скачали проект с GitHub (Clone) на другом компьютере, папка <code className="text-red-400">node_modules</code> будет отсутствовать. Вам <b>всегда</b> нужно сначала прописать команду для установки зависимостей, указанных в package.json:
                            <CodeSnippet language="bash" code="npm install" />
                        </InfoPanel>
                    </section>

                    {/* ШАГ 4 */}
                    <section className="relative pl-12 border-l-2 border-emerald-500/30 pb-12">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg shadow-emerald-600/40">4</div>
                        <h4 className="text-xl font-bold text-white mb-4 italic">Создание структуры папок</h4>
                        <TheoryText>
                            Внутри корневой папки создайте все директории, указанные в теории лекции, либо со скришнота. (Для вашего проекта может отличаться).
                            Итоговая структура должна быть пока что примерно такой.  В зависимости от того, сколько и каких у вас таблиц в БД.
                        </TheoryText>
                        <TheoryImage src="/img/less9/6.png"/>

                        <ul className="space-y-4 text-sm text-slate-300">
                            <li className="flex items-start gap-3">
                                <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                                <span><b>В папке models:</b> создайте соотвествующие файлы <code className="text-blue-400">Product.js</code> и <code className="text-blue-400">User.js</code>. (Если у вас только 2 таблицы в БД) </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                                <span><b>В папке controllers:</b> здесь мы будем писать логику добавления и удаления продуктов (в моем случае растений).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                                <span><b>В папке routes:</b> пропишем пути, по которым фронтенд будет стучаться к нам за данными.</span>
                            </li>
                        </ul>
                        <div className="mt-8 p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
                            <p className="text-emerald-400 font-medium flex items-center gap-2">
                                <span className="text-xl"></span> Результат: Пустой каркас проекта с установленными библиотеками. Сами файлы (.js) пока можно оставить пустыми.
                            </p>
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
};

export default Lesson9;