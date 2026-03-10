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
                {/* --- РЕЖИМ ТЕОРИИ: АРХИТЕКТУРА --- */}
                {mode === 'theory' && (
                    <article className="space-y-12 animate-in fade-in duration-700">
                        <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                            Фронтенд Часть 2: Анатомия проекта
                        </h2>

                        <section className="relative pl-12 border-l-2 border-blue-500/30">
                            <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg italic">
                                ?
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6">Зачем нужно такое строгое разделение?</h3>
                            <TheoryText>
                                Когда проект разрастается до десятков страниц и сотен компонентов, сваливать всё в одну кучу — верный путь к багам. Мы используем архитектуру, где каждая папка имеет <b>строгую зону ответственности</b>. Это делает код предсказуемым: вы всегда знаете, где искать логику корзины, а где — стили кнопки.
                            </TheoryText>
                            <TheoryImage src="/img/less13/1.png"/>

                        </section>

                        {/* ПОДРОБНЫЙ РАЗБОР СТРУКТУРЫ */}
                        <section className="space-y-8">
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <span className="text-blue-500">src/</span> — Сердце вашего кода
                            </h3>

                            <div className="grid grid-cols-1 gap-6">

                                {/* API */}
                                <div className="group p-6 bg-[#020617] rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-blue-500/10 text-blue-400 rounded-2xl font-mono text-sm">/api</div>
                                        <h4 className="text-lg font-bold text-white italic">Слой сетевых запросов</h4>
                                    </div>
                                    <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                                        Здесь должен быть файл <b>axios.js</b>. Мы не пишем URL сервера в каждом компоненте. Мы настраиваем его один раз здесь, чтобы потом просто вызывать удобные функции. Если адрес сервера изменится — мы поменяем его только в одном месте.
                                    </p>
                                </div>

                                {/* COMPONENTS */}
                                <div className="group p-6 bg-[#020617] rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-all">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-2xl font-mono text-sm">/components</div>
                                        <h4 className="text-lg font-bold text-white italic">Конструктор интерфейса</h4>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                            <b className="text-xs text-emerald-400 block mb-1">layout/</b>
                                            <p className="text-[10px] text-slate-500">Общие элементы для всех страниц: Шапка (Navbar) и Подвал (Footer).</p>
                                        </div>
                                        <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                            <b className="text-xs text-emerald-400 block mb-1">ui/</b>
                                            <p className="text-[10px] text-slate-500">Мелкие "кирпичики": карточки товаров (ProductCard), кнопки, инпуты.</p>
                                        </div>
                                        <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                            <b className="text-xs text-emerald-400 block mb-1">utils/</b>
                                            <p className="text-[10px] text-slate-500">Логические компоненты. Например, <b>ProtectedRoute</b> — он проверяет, залогинен ли юзер, прежде чем пустить его в админку.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* PAGES */}
                                <div className="group p-6 bg-[#020617] rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-purple-500/10 text-purple-400 rounded-2xl font-mono text-sm">/pages</div>
                                        <h4 className="text-lg font-bold text-white italic">Маршруты и экраны</h4>
                                    </div>
                                    <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                                        Это полноценные страницы вашего сайта. Обратите внимание на вложенную папку <b>admin/</b>: мы отделяем функционал обычного магазина от панели управления товарами. Это упрощает контроль доступа.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {['Home.jsx', 'Shop.jsx', 'Login.jsx', 'AdminProducts.jsx'].map(file => (
                                            <span key={file} className="px-3 py-1 bg-purple-500/5 border border-purple-500/10 rounded-full text-[10px] text-purple-300 italic">{file}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* STORE */}
                                <div className="group p-6 bg-[#020617] rounded-3xl border border-white/5 hover:border-yellow-500/30 transition-all">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-yellow-500/10 text-yellow-400 rounded-2xl font-mono text-sm">/store</div>
                                        <h4 className="text-lg font-bold text-white italic">Состояние (Zustand)</h4>
                                    </div>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        Глобальное "облако" данных. <b>useAuthStore.js</b> следит за тем, кто сейчас на сайте, а <b>useCartStore.js</b> помнит, какие фикусы вы положили в корзину, даже если вы перейдете на другую страницу.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* КОРНЕВЫЕ ФАЙЛЫ */}
                        <section className="p-8 bg-blue-600/5 border border-blue-500/20 rounded-3xl">
                            <h3 className="text-xl font-bold text-white mb-6">Файлы конфигурации</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-3 bg-black/40 rounded-xl border border-white/5">
                                    <code className="text-blue-300 text-xs">package.json</code>
                                    <span className="text-[10px] text-slate-500 italic">Список всех установленных библиотек (Axios, Lucide и т.д.)</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-black/40 rounded-xl border border-white/5">
                                    <code className="text-blue-300 text-xs">vite.config.js</code>
                                    <span className="text-[10px] text-slate-500 italic">Главные настройки проекта (порт, плагины, прокси к бэкенду)</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-black/40 rounded-xl border border-white/5">
                                    <code className="text-blue-300 text-xs">main.jsx</code>
                                    <span className="text-[10px] text-slate-500 italic">Точка входа: именно отсюда "просыпается" всё приложение</span>
                                </div>
                            </div>
                        </section>

                        <InfoPanel title="Совет по разработке">
                            Придерживайтесь правила: <b>один файл — одна задача</b>. Не пишите стили, запросы к серверу и верстку страницы в одном огромном файле. Используйте созданную структуру, чтобы ваш проект оставался чистым и профессиональным.
                        </InfoPanel>
                    </article>
            )}
            {/* --- РЕЖИМ ФАЙЛОВ --- */}
            {mode === 'files' && (
                <div className="space-y-6">


                </div>
            )}
            {/* --- РЕЖИМ ПРАКТИКИ: ФУНДАМЕНТ --- */}
            {mode === 'practice' && (
                <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-700">
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div
                            className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">
                            <span className="text-sm">!</span>
                        </div>

                        <h2 className="text-3xl font-bold text-white mb-6">Практика: Создание фундамента</h2>

                        <div className="space-y-6">
                            <TheoryText>
                                На этом этапе мы закладываем «нервную систему» приложения. Мы создадим структуру папок и
                                базовые файлы.
                                <b className="text-blue-400"> Важно:</b> создавайте директории строго по путям,
                                указанным в заголовках.
                            </TheoryText>

                            <div className="p-6 bg-[#020617] rounded-2xl border border-white/5">
                                <h4 className="text-white font-bold mb-4 italic text-lg text-blue-400">Планирование
                                    архитектуры</h4>
                                <TheoryText>
                                    Прежде чем писать код, определите состав вашего приложения. В моем проекте выделены
                                    следующие уровни:
                                </TheoryText>

                                <ul className="space-y-4 mt-4">
                                    <li className="flex items-start gap-3 text-sm text-slate-300">
                                        <span className="text-blue-500 font-bold mt-1">●</span>
                                        <span>
                        <b className="text-white">Основные страницы (pages):</b> Главная, Каталог (Shop) и карточка конкретного товара.
                    </span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-slate-300">
                                        <span className="text-blue-500 font-bold mt-1">●</span>
                                        <span>
                        <b className="text-white">Админ-панель:</b> Страница логина и защищенный дашборд управления.
                    </span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-slate-300">
                                        <span className="text-blue-500 font-bold mt-1">●</span>
                                        <span>
                        <b className="text-white">Компоненты (components):</b> Навбар и футер (в папке <code
                                            className="text-blue-300 italic">layout</code>), а также универсальная карточка товара (в папке <code
                                            className="text-blue-300 italic">ui</code>).
                    </span>
                                    </li>
                                </ul>
                            </div>

                            <InfoPanel title="Ваш  минимальный набор">
                                Для работы проекта вам необходимо создать как минимум 5 страниц и базовые UI-компоненты.
                                Мы создаем <b>одну</b> универсальную карточку товара, которая будет автоматически
                                наполняться данными из базы — это и есть преимущество React.
                            </InfoPanel>

                            <TheoryText>
                                Соответствие моим названиям файлов желательно, но не обязательно. Главное — чтобы
                                структура была понятной, а связи между файлами работали. Дополнительные страницы
                                (например, «О нас») добавляйте только после того, как запустите основной функционал.
                            </TheoryText>
                        </div>

                            <TheoryImage src="/img/less13/1.png"/>


                    </section>

                    {/* ШАГ 1: API */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div
                            className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">1
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Связь с сервером (Axios)</h3>
                        <div className="mb-4">
                            <span className="text-[16px] font-mono text-slate-500 italic">Файл: src/api/axios.js</span>
                        </div>
                        <TheoryText>
                            Чтобы не прописывать полный URL сервера в каждом запросе, мы настраиваем один экземпляр
                            Axios. Он будет автоматически добавлять токен авторизации в заголовки.
                        </TheoryText>

                        <CodeSnippet language="javascript"
                                     code={`import axios from 'axios';\n\nconst api = axios.create({\n  baseURL: '/api',\n});\n\n// Добавляем токен в каждый запрос автоматически\napi.interceptors.request.use((config) => {\n  const token = localStorage.getItem('token');\n  if (token) {\n    config.headers.Authorization = \`Bearer \${token}\`;\n  }\n  return config;\n});\n\nexport default api;`}/>
                    </section>

                    {/* ШАГ 2: ZUSTAND */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div
                            className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">2
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Глобальное хранилище (Zustand)</h3>
                        <div className="mb-4">
                            <span className="text-[16px] font-mono text-slate-500 italic">Файл: src/store/useAuthStore.js</span>
                        </div>
                        <TheoryText>
                            Даже если мы пока не делаем логин, нам нужно место, где будет храниться информация: "Кто
                            зашел на сайт?".
                        </TheoryText>

                        <CodeSnippet language="javascript"
                                     code={`import { create } from 'zustand';\n\nexport const useAuthStore = create((set) => ({\n  user: null,\n  isAuthenticated: false,\n  setUser: (user) => set({ user, isAuthenticated: !!user }),\n  logout: () => set({ user: null, isAuthenticated: false }),\n}));`}/>
                    </section>

                    {/* ШАГ 3: ROUTING */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div
                            className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">3
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Подготовка главного Роутинга</h3>
                        <div className="mb-4">
                            <span className="text-[16px] font-mono text-slate-500 italic">Файл: src/App.jsx</span>
                        </div>
                        <TheoryText>
                            <b>Роутинг</b> — это система навигации. Она позволяет нам менять содержимое страницы в
                            зависимости от URL в адресной строке, не перезагружая браузер полностью.
                        </TheoryText>

                        <CodeSnippet language="jsx" code={`import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'; // Шапка сайта
import Footer from './components/layout/Footer'; // Подвал сайта
import Home from './pages/Home'; // Главная страница
import Shop from './pages/Shop'; // Страница магазина со всеми товарами
import ProductPage from './pages/ProductPage'; // Страница одного конкретного товара
import Login from './pages/Login'; // Страница входа
import AdminLayout from './pages/admin/AdminLayout'; // Общая оболочка для админ-панели
import ProtectedRoute from './components/utils/ProtectedRoute'; // Компонент-проверка прав доступа

function App() {
  return (
    /* Router — должен оборачивать все приложение, чтобы работала навигация */
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar и Footer находятся ВНЕ Routes, поэтому они видны на каждой странице */}
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            {/* path="/" — это главная страница (корень сайта) */}
            <Route path="/" element={<Home />} />
            
            {/* path="/shop" — страница каталога */}
            <Route path="/shop" element={<Shop />} />
            
            {/* :id — это динамический параметр. Сюда попадет ID товара из ссылки */}
            <Route path="/product/:id" element={<ProductPage />} />
            
            <Route path="/login" element={<Login />} />

            {/* ЗАЩИЩЕННАЯ АДМИНКА */}
            {/* path="/admin/*" — звездочка означает, что все вложенные пути (напр. /admin/add) 
                будут обрабатываться внутри AdminLayout */}
            <Route
              path="/admin/*"
              element={
                /* ProtectedRoute проверяет: залогинен ли юзер и является ли он админом */
                <ProtectedRoute adminOnly={true}>
                  <AdminLayout />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;`}/>

                        <div
                            className="p-5 bg-blue-600/5 border border-blue-500/20 rounded-2xl mt-6 text-xs text-slate-400 leading-relaxed">
                            <p>
                                <b>Что можно менять:</b> <br/>
                                1. Названия путей в <code>path</code> (например, вместо <i>/login</i> можно
                                сделать <i>/signin</i>). <br/>
                                2. Структуру обертки (добавлять свои классы
                                в <code>main</code> или <code>div</code>). <br/>
                                3. Уровни защиты — вы можете добавить <code>ProtectedRoute</code> для обычных
                                пользователей без <code>adminOnly</code>.
                            </p>
                        </div>
                        <div className="p-5 bg-blue-600/5 border border-blue-500/20 rounded-2xl mt-6">
                            <div className="flex items-start gap-4">
                                <div className="text-blue-400 text-lg mt-0.5">⚠️</div>
                                <div className="space-y-3">
                                    <p className="text-xs text-slate-400 leading-relaxed font-bold text-white">
                                        Почему сейчас возникла ошибка?
                                    </p>
                                    <p className="text-xs text-slate-400 leading-relaxed">
                                        На данном этапе ваше приложение «упадет» с ошибкой в консоли. Это нормально: мы
                                        уже импортировали страницы и компоненты в файле <b>App.jsx</b>, но физически их
                                        еще не создали. Ошибка исчезнет, как только мы добавим файлы страниц.
                                    </p>
                                    <div className="pt-2 border-t border-blue-500/10">
                                        <p className="text-xs text-slate-400 leading-relaxed">
                                            <b className="text-blue-400">Важное условие для работы:</b> <br/>
                                            Чтобы фронтенд корректно отображал данные и не выдавал ошибок связи,
                                            убедитесь, что:
                                        </p>
                                        <ul className="list-disc list-inside text-[11px] text-slate-500 mt-2 ml-2 space-y-1">
                                            <li>Запущен <b>OpenServer</b> и база данных активна.</li>
                                            <li>Ваш <b>Backend</b> запущен и работает без ошибок.</li>
                                            <li>Vite-сервер запущен командой <code className="text-blue-300">npm run
                                                dev</code>.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
};

export default Lesson10BackendFull;