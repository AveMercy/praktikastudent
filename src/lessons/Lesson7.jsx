import React from 'react';
import {
    TheoryText,
    InfoPanel,
    CodeSnippet,
    TheoryImage,
    ExternalLinkCard,
    FileDownload
} from '../components/UIComponents';

const LessonDatabaseDesign = ({ mode }) => {
    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            {/* --- РЕЖИМ ТЕОРИИ --- */}
            {mode === 'theory' && (
                <article>
                    <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                        Лекция 7: Проектирование БД
                    </h2>

                    <section className="mb-12">
                        <TheoryText>
                            Следующим шагом для проекта является создание базы данных (БД). Мы не будем проектировать огромную архитектуру, а создадим <b>минимум 2 таблицы</b>. Этого достаточно, чтобы понять принципы связи данных с проектом.
                        </TheoryText>
                        <TheoryText>
                            На примере магазина <b>GreenShop</b> моя БД будет включать таблицы пользователей и продуктов (растений). В вашем случае это может быть любой товар или услуга.
                        </TheoryText>
                    </section>

                    {/* 1. ТАБЛИЦА USERS */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">1. Таблица users (Персонал и Клиенты)</h3>
                        <TheoryText>
                            В профессиональной разработке редко создают отдельные таблицы для админов и клиентов. Вместо этого используют одну таблицу с полем <code className="text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded">role</code>.
                        </TheoryText>

                        <InfoPanel title="Зачем нужна роль?">
                            Так проще реализовать систему входа (Login). Сервер проверяет логин/пароль в одной таблице, а затем смотрит на роль:
                            <ul className="mt-2 space-y-1 text-slate-400 italic">
                                <li>— «Ты админ — тебе можно в панель управления»</li>
                                <li>— «Ты клиент — тебе доступна только корзина»</li>
                            </ul>
                        </InfoPanel>
                    </section>

                    {/* 2. ТАБЛИЦА PRODUCTS */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">2. Таблица products (Товары)</h3>
                        <TheoryText>
                            Здесь хранится всё, что мы продаем. Для каждого товара (растения) нам понадобятся поля: название, цена, описание и ссылка на изображение.
                        </TheoryText>
                    </section>

                    {/* 3. НАСТРОЙКИ СВЯЗИ */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">Как мы будем работать с БД</h3>
                        <TheoryText>
                            Библиотека <b>Sequelize</b> на бэкенде «свяжется» с этими таблицами. Для этого нам понадобится файл конфигурации настроек <code className="text-blue-300">.env</code>.
                        </TheoryText>

                        <CodeSnippet
                            title=".env конфигурация"
                            language="bash"
                            code={`# Ссылка на БД: mysql://логин:пароль@хост:порт/имя_бд\nDATABASE_URL="mysql://root@127.0.1.29:3306/greenshop_db"\n`}
                        />
                    </section>
                </article>
            )}

            {/* --- РЕЖИМ ФАЙЛОВ --- */}
            {mode === 'files' && (
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold mb-8 text-white">Инструменты</h2>
                    <div className="grid gap-4">
                        <ExternalLinkCard
                            name="phpMyAdmin"
                            description="Локальный веб-интерфейс для управления базой данных MySQL"
                            url="http://localhost/phpmyadmin"
                        />
                    </div>
                </div>
            )}

            {/* --- РЕЖИМ ПРАКТИКИ --- */}
            {mode === 'practice' && (
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold mb-4 text-white">Практика: Создание БД в phpMyAdmin</h2>
                    <div className="p-8 bg-blue-600/5 border border-blue-500/20 rounded-[2.5rem]">

                        <ul className="space-y-12">
                            {/* ШАГ 1 */}
                            <li className="flex items-start gap-4 text-slate-300">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">
                                    1
                                </div>
                                <div>
                                    <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг 1: Подготовка</p>
                                    Запустите <b>OSPanel</b> и откройте <b>phpMyAdmin</b> через меню или по адресу в браузере.
                                </div>
                            </li>

                            {/* ШАГ 2 */}
                            <li className="flex items-start gap-4 text-slate-300">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">
                                    2
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-white uppercase text-xs tracking-widest mb-1 text-blue-400">Шаг 2: Создание структуры</p>
                                    <ul className="list-disc ml-5 mt-2 space-y-2 text-sm text-slate-400">
                                        <li>Создайте БД с именем вашего проекта (например: <code className="text-blue-300">greenshop_db</code>).</li>
                                        <li>Создайте таблицы <b>users</b> и <b>products</b> (минимум по 4-5 столбцов в каждой).</li>
                                        <li>Добавьте вручную 5 записей в таблицу с товарами через вкладку «Вставить».</li>
                                    </ul>

                                    <div className="mt-8 space-y-6">
                                        <div>
                                            <h4 className="text-white font-bold mb-2">Пример таблицы пользователей:</h4>
                                            <p className="text-sm mb-4">
                                                Для <code className="text-blue-400">id</code> обязательно указываем автозаполнение <b className="text-blue-400">(A_I)</b> и индекс <b className="text-blue-400">PRIMARY</b>.
                                                Для остальных столбцов указываем тип и длину. Для роли указываем дефолтное значение — <span className="italic text-slate-400 text-xs">клиент</span>.
                                            </p>
                                            <TheoryImage src="/img/less7/1.png" alt="Структура таблицы users" />
                                        </div>

                                        <div>
                                            <h4 className="text-white font-bold mb-2">Пример таблицы товаров:</h4>
                                            <p className="text-sm mb-4">
                                                Здесь тоже указываем везде правильные типы (например, VARCHAR для строк, INT для чисел) и длину. Для цены лучше использовать DECIMAL или INT.
                                            </p>
                                            <TheoryImage src="/img/less7/2.png" alt="Структура таблицы products" />
                                        </div>

                                        <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                                            <h4 className="text-white font-bold mb-2">Заполнение данными:</h4>
                                            <p className="text-sm mb-4">
                                                Заполняем таблицу записями (пока таблицу пользователей не трогаем).
                                                <b> Про изображения:</b> мы позже будем хранить их внутри проекта, поэтому в базе данных в поле картинки можете указывать путь <code className="text-blue-300">/uploads/название.png</code>, либо пока оставить пустым.
                                            </p>
                                            <TheoryImage src="/img/less7/3.png" alt="Заполнение таблицы записями" />
                                        </div>
                                    </div>

                                    <InfoPanel title="Важно: Про пароли">
                                        Мы никогда не храним пароли в чистом виде (например, "12345"). Мы храним <b>«хэш»</b>, который генерирует библиотека <code className="text-blue-300">bcrypt</code> на бэкенде.
                                        <br/><br/>
                                        <b>Записи для таблицы пользователей пока не создавайте вручную!</b> Мы сделаем это позже через код.
                                    </InfoPanel>
                                </div>
                            </li>

                            {/* ШАГ 3 */}
                            <li className="flex items-start gap-4 text-slate-300">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">
                                    3
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг 3: Экспорт</p>
                                    <p className="mb-4">
                                        Нажмите кнопку <b>«Экспорт»</b> в верхнем меню phpMyAdmin и сохраните <code className="text-blue-300">.sql</code> файл к себе на компьютер.
                                    </p>
                                    <TheoryImage src="/img/less7/4.png" alt="Процесс экспорта БД" />

                                    <p className="mt-6 text-sm bg-white/5 p-4 rounded-xl italic text-slate-400 border-l-2 border-blue-500/30">
                                        <b>Примечание:</b> Экспорт удобен, если вы работаете за разными устройствами — вы всегда сможете импортировать готовую структуру в один клик, а не переделывать её с нуля.
                                    </p>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-10 p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <p className="text-emerald-400 text-sm font-medium">
                                Экспортированный .sql файл отправить на проверку или показать созданную БД на паре.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LessonDatabaseDesign;