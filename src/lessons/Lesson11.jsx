import React from 'react';
import {
    TheoryText,
    InfoPanel,
    CodeSnippet,
    TheoryImage, ExternalLinkCard
} from '../components/UIComponents';

const Lesson10BackendFull = ({ mode }) => {
    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            {/* --- РЕЖИМ ТЕОРИИ --- */}
            {mode === 'theory' && (
                <article className="space-y-12">
                    <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                        Лекция 11: Тестирование API через Postman
                    </h2>

                    {/* 1. Что такое Postman */}
                    <section>
                        <h3 className="text-2xl font-bold text-blue-400 mb-4">1. Интерфейс Postman</h3>
                        <TheoryText>
                            Postman — это главный инструмент Backend-разработчика. Он позволяет отправлять запросы к вашему серверу еще до того, как вы написали фронтенд (интерфейс).
                        </TheoryText>
                        <TheoryImage src="/img/less11/6.png" alt="Интерфейс Postman"/>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                            <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                                <b className="text-blue-300 block mb-2 text-sm italic">Sidebar (Слева)</b>
                                <p className="text-xs text-slate-400 leading-relaxed">Здесь хранятся ваши коллекции (папки с запросами). Рекомендуется создать коллекцию <b>GreenShop</b>.</p>
                            </div>
                            <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                                <b className="text-blue-300 block mb-2 text-sm italic">Request Tab (Центр)</b>
                                <p className="text-xs text-slate-400 leading-relaxed">Выбор метода (GET/POST), ввод URL-адреса и кнопка <b>Send</b> для отправки запроса.</p>
                            </div>
                            <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                                <b className="text-blue-300 block mb-2 text-sm italic">Response (Снизу)</b>
                                <p className="text-xs text-slate-400 leading-relaxed">Результат работы сервера: данные (JSON), статус-код и время выполнения.</p>
                            </div>
                        </div>
                    </section>

                    {/* 2. HTTP Методы */}
                    <section>
                        <h3 className="text-2xl font-bold text-blue-400 mb-4">2. HTTP Методы: Что мы просим?</h3>
                        <TheoryText>
                            Каждый запрос начинается с выбора метода. Это действие, которое мы хотим совершить:
                        </TheoryText>
                        <table className="w-full border-collapse bg-white/5 rounded-2xl overflow-hidden shadow-2xl">
                            <thead>
                            <tr className="bg-white/10 text-blue-300 text-left">
                                <th className="p-4">Метод</th>
                                <th className="p-4">Действие</th>
                                <th className="p-4">Пример в нашем проекте</th>
                            </tr>
                            </thead>
                            <tbody className="text-slate-300">
                            <tr className="border-b border-white/5 hover:bg-white/5">
                                <td className="p-4 font-bold text-emerald-400">GET</td>
                                <td className="p-4">Получение данных</td>
                                <td className="p-4 italic">Просмотр всех растений</td>
                            </tr>
                            <tr className="border-b border-white/5 hover:bg-white/5">
                                <td className="p-4 font-bold text-yellow-400">POST</td>
                                <td className="p-4">Отправка новых данных</td>
                                <td className="p-4 italic">Добавление товара / Регистрация</td>
                            </tr>
                            <tr className="border-b border-white/5 hover:bg-white/5">
                                <td className="p-4 font-bold text-blue-400">PUT</td>
                                <td className="p-4">Полная замена данных</td>
                                <td className="p-4 italic">Редактирование карточки товара</td>
                            </tr>
                            <tr className="border-b border-white/5 hover:bg-white/5">
                                <td className="p-4 font-bold text-red-400">DELETE</td>
                                <td className="p-4">Удаление данных</td>
                                <td className="p-4 italic">Удаление растения из базы</td>
                            </tr>
                            </tbody>
                        </table>
                    </section>

                    {/* 3. Основные вкладки */}
                    <section>
                        <h3 className="text-2xl font-bold text-blue-400 mb-4">3. Вкладки запроса (Params, Auth, Body)</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-white font-bold flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Params
                                </h4>
                                <p className="text-sm text-slate-400 ml-4 italic">Используются для фильтрации. Например: <code className="text-blue-300">?category=flowers</code>.</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold flex items-center gap-2">
                                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span> Authorization
                                </h4>
                                <p className="text-sm text-slate-400 ml-4 italic">Здесь мы выбираем <b>Bearer Token</b> и вставляем JWT-токен админа, чтобы получить права на создание/удаление.</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold flex items-center gap-2">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span> Body
                                </h4>
                                <p className="text-sm text-slate-400 ml-4 mb-2">Самая важная часть для POST/PUT запросов. Здесь лежат данные.</p>
                                <div className="ml-4 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                                    <ul className="text-xs text-slate-300 space-y-2">
                                        <li>• <b>raw (JSON):</b> Для регистрации/логина. Пишем в формате <code className="text-blue-300">{"{ \"email\": \"...\" }"}</code>.</li>
                                        <li>• <b>form-data:</b> Используется для товаров, так как там есть картинки (File).</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 4. Коды ответов */}
                    <section>
                        <h3 className="text-2xl font-bold text-blue-400 mb-4">4. Коды состояния (Status Codes)</h3>
                        <TheoryText>
                            Сервер всегда отвечает кодом, который говорит о результате операции:
                        </TheoryText>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                                <b className="text-emerald-400 block mb-2 underline">2xx Успех</b>
                                <ul className="text-xs text-slate-300 space-y-1">
                                    <li><b>200 OK:</b> Запрос выполнен успешно.</li>
                                    <li><b>201 Created:</b> Товар или юзер успешно создан.</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl">
                                <b className="text-red-400 block mb-2 underline">4xx Ошибки клиента</b>
                                <ul className="text-xs text-slate-300 space-y-1">
                                    <li><b>400 Bad Request:</b> Ошибка в данных (забыли поле).</li>
                                    <li><b>401 Unauthorized:</b> Неверный или пустой токен.</li>
                                    <li><b>403 Forbidden:</b> Вы не Админ. Доступ закрыт.</li>
                                    <li><b>404 Not Found:</b> Неверный URL или ID.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 5. Роуты нашего проекта */}
                    <section>
                        <h3 className="text-2xl font-bold text-blue-400 mb-4">5. Карта путей (URL Routes)</h3>
                        <TheoryText>
                            Базовый URL: <code className="text-blue-300">http://localhost:5000/api</code>
                        </TheoryText>
                        <div className="space-y-4">
                            <InfoPanel title="Пути Товаров">
                                <ul className="text-sm font-mono space-y-2">
                                    <li><span className="text-emerald-400">GET</span> /products — Все товары</li>
                                    <li><span className="text-yellow-400">POST</span> /products — Создать (Нужен Token + form-data)</li>
                                    <li><span className="text-red-400">DELETE</span> /products/:id — Удалить (Нужен Token)</li>
                                </ul>
                            </InfoPanel>
                            <InfoPanel title="Пути Авторизации">
                                <ul className="text-sm font-mono space-y-2">
                                    <li><span className="text-yellow-400">POST</span> /auth/register — Регистрация (JSON)</li>
                                    <li><span className="text-yellow-400">POST</span> /auth/login — Логин (JSON - Получаем Токен)</li>
                                </ul>
                            </InfoPanel>
                        </div>
                    </section>
                </article>
            )}

            {/* --- РЕЖИМ ПРАКТИКИ --- */}
            {mode === 'practice' && (
                <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-700">
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Практическая часть</h2>
                        <TheoryText>
                            Все следующие шаги тестирования оформить в отчет в ворде, с приложенными скриншотами. Описанием шагов.
                            Требований к оформлению – нет. В начале файла/названии подписать фамилии. Отправить на проверку.
                        </TheoryText>
                        <InfoPanel title="Важно">
                            Разберем на примере создания товара с правами админа. Проделать этот шаг и вставить в отчет, остальные шаги сделать самостоятельно и так же вставить в отчет.
                            <b> Предусловие для тестирования:</b> запущена бд, запущен сервер.
                        </InfoPanel>
                    </section>

                    {/* ШАГ: АВТОРИЗАЦИЯ */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">1</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Авторизация Админа</h3>
                        <TheoryText>
                            Используйте данные из вашего сидера (Шаг 11 прошлой лекции), чтобы войти в систему и получить токен.
                        </TheoryText>

                        <div className="space-y-4 text-slate-300 text-sm mb-6">
                            <p>1. Добавляем новую вкладку в постман (нажимаем на «+»)</p>
                            <p>2. Вводим наш роут для логина, метод <b>POST</b>.</p>
                            <p>3. Далее переходим на вкладку <b>Body</b>, выбираем <b>raw</b> и формат <b>JSON</b>.</p>
                        </div>

                        <p className="text-xs text-slate-500 mb-2 italic">Пример JSON запроса:</p>
                        <CodeSnippet code={`{\n  "email": "admin@green.com",\n  "password": "admin123"\n}`} />

                        <TheoryImage src="/img/less11/1.png" alt="Изображение 1: Логин и получение токена"/>

                        <InfoPanel title="Результат">
                            Итак, если все успешно, мы получаем код 200(ок) и наш токен. Копируем его (без кавычек).
                        </InfoPanel>
                    </section>

                    {/* ШАГ: СОЗДАНИЕ ТОВАРА */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">2</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Создание товара (Защищенный маршрут)</h3>
                        <TheoryText>
                            Теперь перейдем к созданию. Но, так как создание у нас защищенный маршрут, нам нужно иметь права администратора для этого. Создаем новую вкладку.
                        </TheoryText>

                        <div className="space-y-4 mb-6">
                            <p className="text-slate-300 text-sm">1. Переходим во вкладку <b>Authorization</b>.</p>
                            <p className="text-slate-300 text-sm">2. В Type выбираем <b>Bearer Token</b>.</p>
                            <TheoryImage src="/img/less11/2.png" alt="Изображение 2: Настройка Authorization"/>
                            <p className="text-slate-300 text-sm">3. Вставляем токен из предыдущего запроса в соответствующее место.</p>
                        </div>

                        <h4 className="text-xl font-bold text-blue-400 mb-4">Вариант 1: Чистый JSON</h4>
                        <TheoryText>
                            Этот способ подходит, если вы не загружаете файл физически, а просто указываете путь (что и является правдой для нашего проекта).
                        </TheoryText>
                        <ul className="text-sm text-slate-400 mb-4 list-disc list-inside">
                            <li>Метод: <b>POST</b></li>
                            <li>URL: <code>http://localhost:5000/api/products</code></li>
                            <li>Вкладка: <b>Body – raw (JSON)</b></li>
                        </ul>
                        <CodeSnippet code={`{\n  "name": "Фикус",\n  "price": 1200,\n  "category": "Комнатные",\n  "stock": 15,\n  "image_url": "/uploads/ficus.jpg"\n}`} />
                        <p className="text-xs text-slate-500 mb-4">Image url оставляем как здесь. В этом варианте вам придется самим найти картинку, вставить ее в папку uploads (в бэкенде) и назвать ее точно так, как прописали.</p>
                        <TheoryImage src="/img/less11/3.png" alt="Изображение 3: Создание через JSON"/>

                        <h4 className="text-xl font-bold text-emerald-400 mt-10 mb-4">Вариант 2: Multipart Form-Data</h4>
                        <TheoryText>
                            При создании товара с картинкой чаще используется именно этот формат. В Postman это делается во вкладке <b>Body - form-data</b>. Для строки <b>image</b> обязательно выбрать файл, а не текст.
                        </TheoryText>

                        <div className="overflow-x-auto mb-6">
                            <table className="w-full text-sm text-left text-slate-300 border border-white/10">
                                <thead className="bg-white/5 text-xs uppercase">
                                <tr>
                                    <th className="p-3 border-b border-white/10">Key</th>
                                    <th className="p-3 border-b border-white/10">Value</th>
                                    <th className="p-3 border-b border-white/10">Type</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="border-b border-white/5">
                                    <td className="p-3">name</td>
                                    <td className="p-3 text-blue-300">Кактус</td>
                                    <td className="p-3">Text</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="p-3">price</td>
                                    <td className="p-3 text-blue-300">450</td>
                                    <td className="p-3">Text</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="p-3">image</td>
                                    <td className="p-3 text-emerald-400 italic">(выберите файл на диске)</td>
                                    <td className="p-3 font-bold">File</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <TheoryImage src="/img/less11/4.png" alt="Изображение 4: Создание через form-data"/>

                        <TheoryText className="mt-6">
                            Теперь попробуем получить эту картинку, можете нажать на строку, которая теперь подсвечивается. Вас перекинет на новую вкладку, нажимаем send и получаем изображение.
                        </TheoryText>
                        <TheoryImage src="/img/less11/5.png" alt="Изображение 5: Проверка загруженной картинки"/>
                    </section>

                    {/* ШАГ: САМОСТОЯТЕЛЬНАЯ РАБОТА */}
                    <section className="relative pl-12 border-l-2 border-emerald-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">3</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Самостоятельная работа</h3>
                        <TheoryText>
                            Теперь вам нужно сделать следующие шаги самим. Скриншоты с описанием вставить в отчет.
                        </TheoryText>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
                                <b className="text-emerald-400 block mb-2">1. Регистрация клиента</b>
                                <p className="text-xs text-slate-400">Создать пользователя с ролью клиента (метод post. url: http://localhost:5000/api/auth/register). Скриншот с описанием в отчет.</p>
                            </div>
                            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
                                <b className="text-emerald-400 block mb-2">2. Создание товара + БД</b>
                                <p className="text-xs text-slate-400">Повторить создание из примера. Дополнительно вставить скрин из бд (phpMyAdmin), что товар действительно добавился.</p>
                            </div>
                            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
                                <b className="text-blue-400 block mb-2">3. Список всех товаров</b>
                                <p className="text-xs text-slate-400">Метод GET. Обращайтесь к вашему файлу app.js для определения путей.</p>
                            </div>
                            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
                                <b className="text-blue-400 block mb-2">4. Товар по ID</b>
                                <p className="text-xs text-slate-400">Получить список только одного товара (любого, по айди).</p>
                            </div>
                            <div className="p-5 bg-red-500/10 border border-red-500/20 rounded-2xl">
                                <b className="text-red-400 block mb-2">5. Проверка прав (403/401)</b>
                                <p className="text-xs text-slate-400">Попробовать создать товар без прав админа и убедиться, что в доступе отказано (новая вкладка без токена).</p>
                            </div>
                            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
                                <b className="text-yellow-400 block mb-2">6. Редактирование (PUT)</b>
                                <p className="text-xs text-slate-400">Изменить данные уже созданного товара.</p>
                            </div>
                            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
                                <b className="text-red-400 block mb-2">7. Удаление</b>
                                <p className="text-xs text-slate-400">Удалить один из товаров из базы данных.</p>
                            </div>
                            <div className="p-5 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                                <b className="text-emerald-400 block mb-2">8. Наполнение контентом</b>
                                <p className="text-xs text-slate-400">Добавить 5-10 товаров с изображениями для дальнейшей разработки фронтенда.</p>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
};

export default Lesson10BackendFull;