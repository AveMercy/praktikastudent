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
            {mode === 'theory' && (
                <article className="space-y-12 animate-in fade-in duration-700">
                    <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                        Фронтенд Часть 3: Полное руководство по Tailwind CSS
                    </h2>

                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">1</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Философия и Единицы измерения</h3>
                        <TheoryText>
                            Tailwind CSS — это utility-first фреймворк. Мы не пишем отдельный CSS-файл, мы собираем дизайн из готовых классов-кирпичиков прямо в разметке.
                            <b>Главное правило:</b> в Tailwind почти всё измеряется в относительных единицах (rem). Базовый шаг сетки: <b>1 единица = 0.25rem (4px)</b>.
                            То есть класс <code className="text-blue-300">4</code> означает <code className="text-blue-300">16px</code>, а класс <code className="text-blue-300">10</code> — это <code className="text-blue-300">40px</code>.
                        </TheoryText>
                    </section>

                    {/* 2. ТИПОГРАФИКА */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">2</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Типографика: Размеры, Начертание и Выравнивание</h3>

                        <div className="space-y-6">
                            <div className="p-6 bg-[#020617] rounded-3xl border border-white/5">
                                <h4 className="text-blue-400 font-bold mb-4 italic text-lg">Полная шкала размеров текста</h4>
                                <div className="space-y-3">
                                    <div className="text-xs text-slate-300"><code className="text-blue-300 inline-block w-24">text-xs</code> (12px) — Подписи, мелкие детали в футере</div>
                                    <div className="text-sm text-slate-300"><code className="text-blue-300 inline-block w-24">text-sm</code> (14px) — Второстепенный текст, карточки</div>
                                    <div className="text-base text-slate-300"><code className="text-blue-300 inline-block w-24">text-base</code> (16px) — <b>Стандартный текст по умолчанию</b></div>
                                    <div className="text-lg text-slate-300"><code className="text-blue-300 inline-block w-24">text-lg</code> (18px) — Крупный текст, лиды</div>
                                    <div className="text-xl text-slate-300"><code className="text-blue-300 inline-block w-24">text-xl</code> (20px) — Заголовки 3-го уровня</div>
                                    <div className="text-2xl text-slate-300"><code className="text-blue-300 inline-block w-24">text-2xl</code> (24px) — Заголовки 2-го уровня</div>
                                    <div className="text-3xl text-slate-300"><code className="text-blue-300 inline-block w-24">text-3xl</code> (30px) — Заголовки 1-го уровня</div>
                                    <div className="text-4xl text-slate-300"><code className="text-blue-300 inline-block w-24">text-4xl</code> (36px) — Главные баннеры (Hero)</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 bg-[#020617] rounded-3xl border border-white/5">
                                    <h4 className="text-blue-400 font-bold mb-4 italic text-lg">Начертание (Вес шрифта)</h4>
                                    <div className="space-y-2 text-slate-300">
                                        <div className="font-light"><code>font-light</code> (300) — Легкий текст</div>
                                        <div className="font-normal"><code>font-normal</code> (400) — Обычный текст</div>
                                        <div className="font-medium"><code>font-medium</code> (500) — Полужирный</div>
                                        <div className="font-bold"><code>font-bold</code> (700) — Жирный акцент</div>
                                        <div className="font-black"><code>font-black</code> (900) — Максимально жирный</div>
                                    </div>
                                </div>

                                <div className="p-6 bg-[#020617] rounded-3xl border border-white/5">
                                    <h4 className="text-blue-400 font-bold mb-4 italic text-lg">Выравнивание (Text Align)</h4>
                                    <div className="space-y-4 text-slate-300 w-full">
                                        <div className="text-left bg-blue-600/10 p-2"><code>text-left</code> (Слева)</div>
                                        <div className="text-center bg-blue-600/10 p-2"><code>text-center</code> (По центру)</div>
                                        <div className="text-right bg-blue-600/10 p-2"><code>text-right</code> (Справа)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 3. ОТСТУПЫ */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">3</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Отступы: Margin (Внешние) и Padding (Внутренние)</h3>
                        <TheoryText>
                            Это фундамент коробочной модели. <b>Padding (p)</b> — это "подушка" внутри блока (расширяет блок). <b>Margin (m)</b> — это дистанция снаружи блока (отталкивает соседей). Буквы-модификаторы указывают направление: <b>t</b> (top), <b>b</b> (bottom), <b>l</b> (left), <b>r</b> (right), <b>x</b> (по горизонтали), <b>y</b> (по вертикали).
                        </TheoryText>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div className="p-6 bg-[#020617] rounded-3xl border border-white/5 text-sm text-slate-300">
                                <h4 className="text-blue-400 font-bold mb-4 italic text-lg">Внутренние (Padding - p)</h4>
                                <ul className="space-y-2">
                                    <li><code>p-4</code>: Отступ внутри со всех 4-х сторон (16px).</li>
                                    <li><code>px-6</code>: Слева и справа (ось X). Идеально для кнопок.</li>
                                    <li><code>py-2</code>: Сверху и снизу (ось Y).</li>
                                    <li><code>pt-10</code>: Только сверху (padding-top).</li>
                                    <li><code>pb-10</code>: Только снизу (padding-bottom).</li>
                                </ul>
                                {/* Визуальный пример Padding */}
                                <div className="mt-4 border-2 border-blue-500/50 bg-blue-500/10 p-6 text-center">
                                    <span className="bg-blue-500 text-white p-2 rounded text-xs">Контент (p-6 вокруг меня)</span>
                                </div>
                            </div>

                            <div className="p-6 bg-[#020617] rounded-3xl border border-white/5 text-sm text-slate-300">
                                <h4 className="text-blue-400 font-bold mb-4 italic text-lg">Внешние (Margin - m)</h4>
                                <ul className="space-y-2">
                                    <li><code>m-4</code>: Дистанция снаружи со всех сторон.</li>
                                    <li><code>mx-auto</code>: <b>Важнейший класс!</b> Центрирует блок по горизонтали (margin: 0 auto).</li>
                                    <li><code>mt-8</code>: Оттолкнуть элемент сверху (margin-top: 32px).</li>
                                    <li><code>mb-4</code>: Оттолкнуть соседа снизу.</li>
                                    <li><code>ml-auto</code>: Прижать элемент к правому краю.</li>
                                </ul>
                                {/* Визуальный пример Margin */}
                                <div className="mt-4 border-2 border-slate-700 bg-[#020617] p-2 flex flex-col items-center">
                                    <div className="bg-blue-500 text-white p-2 rounded text-xs w-full text-center mb-4">Блок 1 (mb-4)</div>
                                    <div className="bg-blue-600 text-white p-2 rounded text-xs w-full text-center">Блок 2 (Оттолкнут)</div>
                                </div>
                            </div>
                        </div>

                    </section>

                    {/* 4. FLEXBOX */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">4</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Flexbox-система: Построение макетов</h3>
                        <TheoryText>Вам больше не нужно мучиться с <code>float</code> или таблицами. Весь современный UI строится на <code>flex</code>.</TheoryText>

                        <div className="space-y-4 mt-6">
                            <div className="p-6 bg-[#020617] rounded-3xl border border-white/5 text-slate-300 text-sm">
                                <h4 className="text-blue-400 font-bold mb-2 italic">Ось направления:</h4>
                                <p className="mb-2"><code>flex</code> (по умолчанию в строку) vs <code>flex-col</code> (в колонку).</p>
                                <h4 className="text-blue-400 font-bold mb-2 italic mt-4">Выравнивание (когда flex в строку):</h4>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li><code>justify-start</code> / <code>justify-center</code> / <code>justify-end</code> — по горизонтали.</li>
                                    <li><code>justify-between</code> — расталкивает элементы по краям (Логотип ... Меню).</li>
                                    <li><code>items-start</code> / <code>items-center</code> / <code>items-end</code> — по вертикали (чтобы иконка и текст были на одной линии).</li>
                                    <li><code>gap-4</code> — расстояние между элементами. <b>Не задавайте margin каждому элементу списка! Дайте родителю gap!</b></li>
                                </ul>
                            </div>

                            {/* Интерактивный пример Flex */}
                            <div className="p-4 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex justify-between items-center">
                                <div className="font-bold text-blue-400">Логотип</div>
                                <div className="flex gap-6 items-center">
                                    <span className="text-sm cursor-pointer hover:text-white transition-colors">Главная</span>
                                    <span className="text-sm cursor-pointer hover:text-white transition-colors">Магазин</span>
                                    <button className="bg-blue-600 px-4 py-2 rounded-lg text-white text-sm font-bold">Войти</button>
                                </div>
                            </div>
                            <p className="text-[11px] text-slate-500 font-mono">Код выше: {`<div className="flex justify-between items-center">...<div className="flex gap-6 items-center">...</div></div>`}</p>
                        </div>
                    </section>

                    {/* 5. РАЗМЕРЫ, ЦВЕТА И ЭФФЕКТЫ */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">5</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Формы, Цвета и Позиционирование</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-[#020617] rounded-3xl border border-white/5 text-sm text-slate-300">
                                <h4 className="text-blue-400 font-bold mb-4 italic text-lg">Ширина (w) и Высота (h)</h4>
                                <ul className="space-y-2">
                                    <li><code>w-full</code>: 100% ширины родителя.</li>
                                    <li><code>w-1/2</code>: 50% ширины.</li>
                                    <li><code>w-screen</code> / <code>h-screen</code>: 100% ширины/высоты экрана.</li>
                                    <li><code>rounded-md</code> / <code>rounded-2xl</code> / <code>rounded-full</code>: Скругление углов (от легкого до полного круга).</li>
                                </ul>
                            </div>

                            <div className="p-6 bg-[#020617] rounded-3xl border border-white/5 text-sm text-slate-300">
                                <h4 className="text-blue-400 font-bold mb-4 italic text-lg">Слои и Стекло (Z-index)</h4>
                                <ul className="space-y-2">
                                    <li><code>relative</code> и <code>absolute</code>: позиционирование элементов друг внутри друга.</li>
                                    <li><code>z-50</code>: Шапка всегда сверху. Без этого карточки товаров будут перекрывать меню при скролле.</li>
                                    <li><code>bg-black/50</code>: Черный цвет с прозрачностью 50%.</li>
                                    <li><code>backdrop-blur-md</code>: Размытие фона под элементом (эффект стекла).</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 6. СОСТОЯНИЯ И АДАПТИВНОСТЬ */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">6</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Интерактив и Mobile First</h3>

                        <div className="space-y-6">
                            <div className="p-6 bg-[#020617] rounded-3xl border border-white/5 text-sm text-slate-300">
                                <h4 className="text-blue-400 font-bold mb-4 italic text-lg">Состояния (States)</h4>
                                <TheoryText>Делайте интерфейс отзывчивым через префиксы:</TheoryText>
                                <ul className="space-y-3 mt-4">
                                    <li><code className="text-blue-300">hover:</code> — При наведении (например, <code>hover:bg-blue-700</code>).</li>
                                    <li><code className="text-blue-300">active:</code> — Эффект клика (например, <code>active:scale-95</code> сжимает кнопку).</li>
                                    <li><code className="text-blue-300">focus:</code> — Когда элемент активен для ввода (например, <code>focus:border-blue-500</code> для инпута).</li>
                                    <li><code className="text-blue-300">group-hover:</code> — Укажите родителю класс <code>group</code>, а ребенку <code>group-hover:text-blue-400</code>, чтобы дочерний элемент менялся при наведении на родительскую карточку.</li>
                                </ul>
                            </div>

                            <div className="p-6 bg-[#020617] rounded-3xl border border-white/5 text-sm text-slate-300">
                                <h4 className="text-blue-400 font-bold mb-4 italic text-lg">Адаптивность (Responsive Design)</h4>
                                <TheoryText>Tailwind использует подход <b>Mobile First</b>. Вы пишете классы для телефона, а затем добавляете префиксы для больших экранов:</TheoryText>
                                <ul className="space-y-2 mt-4">
                                    <li><code>sm:</code> — Планшеты (от 640px)</li>
                                    <li><code>md:</code> — Горизонтальные планшеты/ноутбуки (от 768px)</li>
                                    <li><code>lg:</code> — Десктопы (от 1024px)</li>
                                </ul>
                                <div className="mt-4 p-4 bg-blue-600/10 border border-blue-500/20 rounded-xl">
                                    <code className="text-blue-300">className="hidden md:flex"</code>
                                    <p className="text-xs text-slate-400 mt-2">Читается так: "Скрой этот элемент на мобильных (hidden), но начиная с ширины ноутбука (md) сделай его видимым (flex)". Так делают мобильное меню!</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <InfoPanel title="Итог теории">
                        Вам не нужно учить все классы наизусть. Главное — понять логику: <b>направление, отступы, сетка, состояния</b>. В практической части мы соберем Navbar и Footer, где вы увидите, как эти правила работают вместе.
                    </InfoPanel>
                </article>
            )}
            {/* --- РЕЖИМ ФАЙЛОВ --- */}
            {mode === 'files' && (
                <div className="space-y-6">


                </div>
            )}
            {mode === 'practice' && (
                <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-700">
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">
                            <span className="text-sm">!</span>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-6">Практика: Админ-панель и авторизация</h2>
                        <TheoryText>
                            Разработаем админку с доступом только для администратора. Логика работы: Пользователь логинится ➔ Сервер выдает токен ➔ Фронтенд сохраняет его в памяти и проверяет роль. Если роль не <code className="text-blue-300">ADMIN</code> — доступ закрыт.
                        </TheoryText>

                    </section>

                    {/* ШАГ 1: ЛОГИН */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">1</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Создаем страницу входа</h3>
                        <div className="mb-4">
                            <span className="text-[16px] font-mono text-slate-500 italic">Файл: src/pages/Login.jsx</span>
                        </div>
                        <TheoryText>
                            Регистрацию делать необязательно, но логин необходим, чтобы получить токен доступа к защищенным маршрутам.
                        </TheoryText>
                        <TheoryImage src="/img/less16/1.png"/>


                        <CodeSnippet language="jsx" code={`import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { useAuthStore } from '../store/useAuthStore';
import { LogIn, Loader2 } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await api.post('/auth/login', { email, password });

      // Сохраняем пользователя в глобальную память (Zustand) и токен в браузер
      setUser(response.data.user);
      localStorage.setItem('token', response.data.token);

      // Если админ — кидаем в админку, если обычный юзер — на главную
      if (response.data.user.role === 'ADMIN') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Ошибка входа');
    } finally {
      setLoading(false);
    }
  };

  return (
    /* ДИЗАЙН: min-h-[80vh] центрирует форму по вертикали. bg-white и shadow-2xl создают эффект карточки */
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-[40px] p-10 border border-slate-100 shadow-2xl">
        <h2 className="text-3xl font-black text-slate-800 mb-2">Добро пожаловать!</h2>
        <p className="text-slate-400 mb-8 font-medium">Войдите в свой аккаунт</p>

        {error && <div className="bg-red-50 text-red-500 p-4 rounded-2xl mb-6 text-sm font-bold">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Email</label>
            {/* ДИЗАЙН: focus:ring-green-500 делает зеленую обводку при клике. Можете поменять на свой цвет */}
            <input
              type="email"
              required
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-green-500 outline-none transition-all"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Пароль</label>
            <input
              type="password"
              required
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-green-500 outline-none transition-all"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            disabled={loading}
            /* ДИЗАЙН: Кнопка. bg-green-500 можно заменить на свой фирменный цвет. shadow-green-200 дает цветную тень */
            className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-green-200 transition-all flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="animate-spin" /> : <LogIn size={20} />}
            {loading ? 'Вход...' : 'Войти'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;`} />
                    </section>

                    {/* ШАГ 2: ОХРАННИК (PROTECTED ROUTE) */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">2</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Защита роутов (админки)</h3>
                        <div className="mb-4">
                            <span className="text-[16px] font-mono text-slate-500 italic">Файл: src/components/utils/ProtectedRoute.jsx</span>
                        </div>
                        <TheoryText>
                            Этот компонент-обертка проверит права пользователя, прежде чем отрендерить админку. Если прав нет — молча перекинет на страницу логина.
                        </TheoryText>

                        <CodeSnippet language="jsx" code={`import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user, isAuthenticated } = useAuthStore();

  // Если не вошел в систему -> выгоняем на логин
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Если маршрут только для админа, а юзер не админ -> выгоняем на главную
  if (adminOnly && user?.role !== 'ADMIN') {
    return <Navigate to="/" replace />;
  }

  // Если проверки пройдены, показываем контент (children)
  return children;
};

export default ProtectedRoute;`} />
                    </section>

                    {/* ШАГ 3: МАКЕТ АДМИНКИ */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">3</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Структура админки (Оболочка)</h3>
                        <div className="mb-4">
                            <span className="text-[16px] font-mono text-slate-500 italic">Файл: src/pages/admin/AdminLayout.jsx</span>
                        </div>
                        <TheoryText>
                            Поскольку админка — это рабочая зона, здесь мы делаем строгое боковое меню и область контента.
                        </TheoryText>
                        <TheoryImage src="/img/less16/2.png"/>

                        <CodeSnippet language="jsx" code={`import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { LayoutDashboard, PackagePlus, List, LogOut, ChevronLeft } from 'lucide-react';
import AdminProducts from './AdminProducts'; 
import AddProduct from './AddProduct';     

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    /* ДИЗАЙН: min-h-screen занимает всю высоту. bg-slate-50 задает светло-серый фон всей админке */
    <div className="flex min-h-screen bg-slate-50">
      
      {/* SIDEBAR: Боковое меню */}
      {/* ДИЗАЙН: w-72 фиксирует ширину 288px. bg-slate-900 делает его темно-синим/почти черным */}
      <aside className="w-72 bg-slate-900 text-white p-6 flex flex-col shrink-0">
        <div className="flex items-center gap-2 mb-10 px-2">
          <div className="bg-green-500 p-1.5 rounded-lg">
            <LayoutDashboard size={20} />
          </div>
          <span className="text-xl font-black">ADMIN<span className="text-green-500">PANEL</span></span>
        </div>

        <nav className="flex-grow space-y-2">
          {/* ДИЗАЙН: hover:bg-white/10 создает эффект легкой подсветки пункта меню при наведении */}
          <Link to="/admin" className="flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl transition-colors font-bold">
            <List size={20} />
            Все товары
          </Link>
          <Link to="/admin/add" className="flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl transition-colors font-bold">
            <PackagePlus size={20} />
            Добавить товар
          </Link>
        </nav>

        {/* НИЖНЯЯ ЧАСТЬ МЕНЮ (Выход) */}
        <div className="pt-6 border-t border-white/10">
          <Link to="/" className="flex items-center gap-3 p-3 text-slate-400 hover:text-white transition-colors mb-2">
            <ChevronLeft size={20} />
            На сайт
          </Link>
          <button
            onClick={handleLogout}
            /* ДИЗАЙН: text-red-400 выделяет кнопку выхода опасным красным цветом */
            className="w-full flex items-center gap-3 p-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-colors font-bold"
          >
            <LogOut size={20} />
            Выйти
          </button>
        </div>
      </aside>

      {/* ОСНОВНОЙ КОНТЕНТ */}
      <main className="flex-grow p-10 overflow-y-auto">
        <Routes>
          <Route path="/" element={<AdminProducts />} />
          <Route path="/add" element={<AddProduct />} />
          {/* Тот же компонент AddProduct используем для редактирования, передавая ID в URL */}
          <Route path="/edit/:id" element={<AddProduct />} /> 
        </Routes>
      </main>
    </div>
  );
};

export default AdminLayout;`} />
                    </section>

                    {/* ШАГ 4: ФОРМА ДОБАВЛЕНИЯ/РЕДАКТИРОВАНИЯ */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">4</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Форма товара (с загрузкой фото)</h3>
                        <div className="mb-4">
                            <span className="text-[16px] font-mono text-slate-500 italic">Файл: src/pages/admin/AddProduct.jsx</span>
                        </div>
                        <TheoryText>
                            Это самая важная часть. Для передачи картинки на сервер (в Multer) мы используем класс <code className="text-blue-300">FormData</code>, а не обычный JSON.
                        </TheoryText>
                        <TheoryImage src="/img/less16/3.png"/>

                        <CodeSnippet language="jsx" code={`import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Upload, Save, X, ArrowLeft, Loader2 } from 'lucide-react';
import api from '../../api/axios';

const AddProduct = () => {
  const { id } = useParams(); // Если id есть, значит мы в режиме редактирования
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState({
    name: '', price: '', category: 'Домашние', stock: 10, description: ''
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // 1. Если это редактирование, загружаем данные товара с бэкенда
  useEffect(() => {
    if (isEditMode) {
      api.get(\`/products/\${id}\`)
        .then(res => {
          setFormData({
            name: res.data.name, price: res.data.price,
            category: res.data.category, stock: res.data.stock || 10,
            description: res.data.description || ''
          });
          if (res.data.image_url) setPreview(res.data.image_url);
        })
        .catch(err => console.error("Ошибка при загрузке:", err));
    }
  }, [id, isEditMode]);

  // Генерация превью картинки до отправки на сервер
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Важно: Собираем FormData для отправки файлов!
    const data = new FormData();
    data.append('name', formData.name);
    data.append('price', formData.price);
    data.append('category', formData.category);
    data.append('stock', formData.stock);
    data.append('description', formData.description);

    // Имя поля 'image' должно строго совпадать с тем, что ждет Multer на сервере
    if (image) data.append('image', image);

    try {
      if (isEditMode) {
        await api.put(\`/products/\${id}\`, data);
      } else {
        await api.post('/products', data);
      }
      navigate('/admin');
    } catch (err) {
      alert('Ошибка при сохранении: ' + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <button onClick={() => navigate('/admin')} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 mb-6 font-bold transition-colors">
        <ArrowLeft size={20} /> Назад к списку
      </button>

      <h1 className="text-3xl font-black text-slate-800 mb-8">
        {isEditMode ? 'Редактировать товар' : 'Добавить новый товар'}
      </h1>

      {/* ДИЗАЙН: grid-cols-1 md:grid-cols-2 делит форму на 2 колонки. Слева фото, справа поля */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-[40px] shadow-sm border border-slate-100">

        {/* СЕКЦИЯ ФОТО */}
        <div className="space-y-4">
          <label className="block text-sm font-black text-slate-700 ml-1">Изображение растения</label>
          
          {/* ДИЗАЙН: border-dashed создает прерывистую рамку для зоны загрузки */}
          <div className="relative aspect-square rounded-[32px] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center overflow-hidden bg-slate-50 group hover:border-green-500 transition-all">
            {preview ? (
              <>
                <img src={preview} className="w-full h-full object-contain p-6" alt="Preview" />
                <button type="button" onClick={() => {setPreview(null); setImage(null)}} className="absolute top-4 right-4 bg-white/90 backdrop-blur shadow-md text-red-500 p-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <X size={20} />
                </button>
              </>
            ) : (
              <label className="cursor-pointer flex flex-col items-center p-10 text-center">
                <div className="bg-green-100 p-4 rounded-2xl text-green-600 mb-4">
                  <Upload size={32} />
                </div>
                <span className="text-slate-800 font-bold">Загрузить фото</span>
                <span className="text-slate-400 text-xs mt-1">PNG, JPG до 5MB</span>
                <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
              </label>
            )}
          </div>
        </div>

        {/* СЕКЦИЯ ПОЛЕЙ */}
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-black text-slate-700 mb-2 ml-1">Название</label>
            <input type="text" required className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-green-500 transition-all" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-black text-slate-700 mb-2 ml-1">Цена (₽)</label>
              <input type="number" required className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-green-500" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-black text-slate-700 mb-2 ml-1">В наличии</label>
              <input type="number" className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-green-500" value={formData.stock} onChange={(e) => setFormData({...formData, stock: e.target.value})} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-black text-slate-700 mb-2 ml-1">Категория</label>
            {/* ДИЗАЙН: appearance-none убирает стандартную стрелочку селекта браузера */}
            {/* Категории замените на соотвествующие вашему проекту */}

            <select className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-green-500 appearance-none" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
              <option>Домашние</option>
              <option>Офисные</option>
              <option>Суккуленты</option>
              <option>Крупномеры</option>
            </select>
          </div>

          <button disabled={loading} className="w-full bg-slate-900 hover:bg-green-600 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all shadow-xl disabled:opacity-50 mt-4">
            {loading ? <Loader2 className="animate-spin" /> : <Save size={22} />}
            {isEditMode ? 'Сохранить изменения' : 'Опубликовать товар'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;`} />
                    </section>

                    {/* ШАГ 5: ТАБЛИЦА ТОВАРОВ */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">5</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Список товаров (Главная админки)</h3>
                        <div className="mb-4">
                            <span className="text-[16px] font-mono text-slate-500 italic">Файл: src/pages/admin/AdminProducts.jsx</span>
                        </div>
                        <TheoryImage src="/img/less16/4.png"/>

                        <CodeSnippet language="jsx" code={`import { useState, useEffect } from 'react';
import { Edit2, Trash2, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import api from '../../api/axios';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await api.get('/products');
      setProducts(res.data);
    } catch (err) {
      console.error("Ошибка загрузки:", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Вы уверены, что хотите удалить этот товар?')) {
      try {
        await api.delete(\`/products/\${id}\`);
        // Обновляем список локально, чтобы не делать лишний запрос к БД
        setProducts(products.filter(p => p.id !== id)); 
      } catch (err) {
        alert('Ошибка при удалении');
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-black text-slate-800">Управление товарами</h1>
        <Link to="/admin/add" className="bg-green-500 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-900 transition-all shadow-lg shadow-green-100">
          <Plus size={20} />
          Добавить растение
        </Link>
      </div>

      {/* ДИЗАЙН: Обертка таблицы с белым фоном и скруглением */}
      <div className="bg-white rounded-[32px] border border-slate-100 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              {/* ДИЗАЙН: uppercase tracking-wider делает заголовки таблицы аккуратными и читаемыми */}
              <th className="p-6 text-sm font-bold text-slate-500 uppercase tracking-wider">Товар</th>
              <th className="p-6 text-sm font-bold text-slate-500 uppercase tracking-wider">Категория</th>
              <th className="p-6 text-sm font-bold text-slate-500 uppercase tracking-wider">Цена</th>
              <th className="p-6 text-sm font-bold text-slate-500 uppercase tracking-wider">Действия</th>
            </tr>
          </thead>
          
          {/* ДИЗАЙН: divide-y divide-slate-50 автоматически рисует тонкие линии между строками */}
          <tbody className="divide-y divide-slate-50">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="p-6">
                  <div className="flex items-center gap-4">
                    {/* Миниатюра товара */}
                    <img src={product.image_url} className="w-12 h-12 rounded-xl object-cover bg-slate-100" alt={product.name} />
                    <span className="font-bold text-slate-800">{product.name}</span>
                  </div>
                </td>
                <td className="p-6 text-slate-500 font-medium">{product.category}</td>
                <td className="p-6 font-black text-green-600">{product.price} ₽</td>
                <td className="p-6">
                  <div className="flex items-center gap-3">
                    <Link to={\`/admin/edit/\${product.id}\`} className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all">
                      <Edit2 size={18} />
                    </Link>
                    <button onClick={() => handleDelete(product.id)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {products.length === 0 && (
          <div className="p-20 text-center text-slate-400 font-medium">Товаров пока нет.</div>
        )}
      </div>
    </div>
  );
};

export default AdminProducts;`} />
                    </section>

                    {/* ШАГ 6: ОБНОВЛЕНИЕ APP.JSX */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">6</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Финальная сборка (App.jsx)</h3>
                        <div className="mb-4">
                            <span className="text-[16px] font-mono text-slate-500 italic">Файл: src/App.jsx</span>
                        </div>
                        <TheoryText>
                            Теперь мы собираем весь наш проект в едином файле запуска. Мы импортируем новые страницы логина и админки, и защищаем маршрут <code className="text-blue-300">/admin/*</code> с помощью созданного <code className="text-blue-300">ProtectedRoute</code>.
                        </TheoryText>

                        <CodeSnippet language="jsx" code={`import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop'; 
import ProductPage from './pages/ProductPage'; 
import Login from './pages/Login'; // Импорт страницы входа
import AdminLayout from './pages/admin/AdminLayout'; // Импорт оболочки админки
import ProtectedRoute from './components/utils/ProtectedRoute'; // Наш охранник маршрутов

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/login" element={<Login />} />

            {/* ЗАЩИЩЕННАЯ АДМИНКА */}
            <Route
              path="/admin/*"
              element={
                /* Обертка требует, чтобы пользователь был залогинен и имел роль ADMIN */
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

export default App;`} />
                    </section>

                    {/* ШАГ 7: ТЕСТИРОВАНИЕ И ЗАПУСК */}
                    <section className="p-8 bg-blue-600/5 border border-blue-500/20 rounded-3xl mt-8">
                        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                            Тестирование и Запуск
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="p-5 bg-[#020617] rounded-2xl border border-white/5">
                                <h4 className="text-blue-400 font-bold mb-3">1. Серверная часть</h4>
                                <ul className="text-xs text-slate-400 space-y-2">
                                    <li>Запустите <b>OpenServer</b> (MySQL должен работать).</li>
                                    <li>Откройте терминал в папке бэкенда и запустите сервер: <code className="bg-slate-800 text-blue-300 px-2 py-1 rounded">node index.js</code></li>
                                </ul>
                            </div>
                            <div className="p-5 bg-[#020617] rounded-2xl border border-white/5">
                                <h4 className="text-blue-400 font-bold mb-3">2. Клиентская часть</h4>
                                <ul className="text-xs text-slate-400 space-y-2">
                                    <li>Откройте терминал в папке <code className="text-white">client</code>.</li>
                                    <li>Запустите React-приложение: <code className="bg-slate-800 text-blue-300 px-2 py-1 rounded">npm run dev</code></li>
                                </ul>
                            </div>
                        </div>

                        <InfoPanel title="Что делать, если не работает? (F12 — ваш главный инструмент)">
                            Если товары не грузятся или картинки не сохраняются, не паникуйте. Откройте консоль браузера (нажмите <b>F12</b>) и перейдите во вкладку <b>Network (Сеть)</b>.
                            <br/><br/>
                            Попробуйте выполнить действие (например, добавить товар). В списке появится красная строка запроса. Нажмите на нее и посмотрите вкладку <b>Response (Ответ)</b> — там сервер пишет точную причину ошибки (например, <i>"Неверный токен"</i> или <i>"Поле name не может быть пустым"</i>).
                        </InfoPanel>

                        <div className="mt-8 pt-6 border-t border-blue-500/10">
                            <h4 className="text-white font-bold mb-4 text-lg ">Готово! Ваш Fullstack-проект готов.</h4>
                            <TheoryText>
                                У вас есть полностью рабочий сайт. Вы можете просматривать каталог товаров (вытягивая их из БД), переходить на детальные страницы и управлять ассортиментом через закрытую админку с загрузкой реальных фотографий. На данном этапе вы можете отполировать дизайн, доработать главную страницу или реализовать логику корзины покупок.
                            </TheoryText>
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
};

export default Lesson10BackendFull;