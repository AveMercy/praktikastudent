// LessonReactIntro.jsx
import React from 'react';
import {
    TheoryText,
    InfoPanel,
    CodeSnippet,
    TheoryImage,
    ExternalLinkCard,
    FileDownload
} from '../components/UIComponents';

const LessonReactIntro = ({ mode }) => {
    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            {/* --- РЕЖИМ ТЕОРИИ --- */}
            {mode === 'theory' && (
                <article className="space-y-16">
                    <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                        Введение в React и синтаксис JSX
                    </h2>

                    {/* 1. ЧТО ТАКОЕ REACT */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">1</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Что такое React и почему мы его используем?</h3>

                        <TheoryText>
                            React — это <b>JavaScript-библиотека</b> для создания пользовательских интерфейсов. Её создала компания Meta (Facebook), и сегодня это один из самых востребованных инструментов в веб-разработке.
                        </TheoryText>

                        <div className="p-6 bg-[#020617] rounded-3xl border border-white/5 mt-6">
                            <h4 className="text-blue-400 font-bold mb-4 text-lg">Ключевая идея: Компонентный подход</h4>
                            <TheoryText>
                                Представьте, что сайт — это конструктор LEGO. Каждая деталька (кнопка, карточка товара, шапка) — это отдельный <b className="text-white">компонент</b>. Вы создаете компонент один раз, а потом используете его где угодно и сколько угодно раз.
                            </TheoryText>
                            <div className="bg-slate-900 p-5 rounded-xl text-sm mt-4">
                                <p className="text-slate-300"><b className="text-white">Раньше (без React):</b> Чтобы сделать 10 карточек товара, нужно было 10 раз скопировать один и тот же HTML-код. При изменении дизайна — править все 10 мест.</p>
                                <p className="text-slate-300 mt-3"><b className="text-green-400">С React:</b> Вы создаете компонент один раз. Чтобы отобразить 10 товаров — просто передаете в него разные данные. Изменили компонент — изменились все 10 карточек автоматически.</p>
                            </div>
                        </div>
                    </section>

                    {/* 2. JSX */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">2</div>
                        <h3 className="text-2xl font-bold text-white mb-6">JSX: JavaScript + HTML = JSX</h3>

                        <TheoryText>
                            JSX (JavaScript XML) — это расширение синтаксиса JavaScript, которое позволяет писать HTML-подобный код прямо в JavaScript. На первый взгляд это выглядит как обычный HTML, но внутри тегов можно использовать любые JavaScript-выражения через фигурные скобки.
                        </TheoryText>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                            <div>
                                <h4 className="text-red-400 font-bold mb-3 text-sm uppercase tracking-wider">Обычный HTML</h4>
                                <CodeSnippet language="html" code={`<div class="greeting">
  <h1>Привет, мир!</h1>
  <p>Сегодня хороший день</p>
</div>`} />
                            </div>
                            <div>
                                <h4 className="text-green-400 font-bold mb-3 text-sm uppercase tracking-wider">React JSX</h4>
                                <CodeSnippet language="jsx" code={`function Greeting() {
  const name = "Мир";
  const isGoodDay = true;
  
  return (
    <div className="greeting">
      <h1>Привет, {name}!</h1>
      <p>
        {isGoodDay 
          ? "Сегодня хороший день" 
          : "Сегодня так себе"}
      </p>
    </div>
  );
}`} />
                            </div>
                        </div>

                        <div className="mt-6">
                            <InfoPanel title="Важные правила JSX">
                                <ul className="space-y-3 text-sm text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <span className="text-yellow-400 mt-1">1.</span>
                                        <span><b className="text-white">Один корневой элемент:</b> Компонент должен возвращать <b>один</b> родительский элемент. Если нужно несколько — оберните их в пустой тег <code className="text-yellow-400">&lt;&gt; ... &lt;/&gt;</code> (фрагмент) или <code className="text-yellow-400">&lt;div&gt;...&lt;/div&gt;</code>.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-yellow-400 mt-1">2.</span>
                                        <span><b className="text-white">Все теги должны быть закрыты:</b> Даже одиночные, например <code className="text-yellow-400">&lt;img /&gt;</code>, <code className="text-yellow-400">&lt;br /&gt;</code>, <code className="text-yellow-400">&lt;input /&gt;</code>.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-yellow-400 mt-1">3.</span>
                                        <span><b className="text-white">JavaScript в фигурных скобках:</b> Всё, что внутри фигурных скобок — это чистый JavaScript. Можно вставлять переменные, вызывать функции, использовать тернарные операторы.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-yellow-400 mt-1">4.</span>
                                        <span><b className="text-white">className вместо class:</b> В JSX для CSS-классов используется <code className="text-yellow-400">className</code>, а не <code className="text-white">class</code> (потому что class — зарезервированное слово в JavaScript).</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-yellow-400 mt-1">5.</span>
                                        <span><b className="text-white">camelCase для атрибутов:</b> В HTML пишем <code className="text-white">onclick</code>, в JSX — <code className="text-yellow-400">onClick</code>. <code className="text-white">tabindex</code> → <code className="text-yellow-400">tabIndex</code>. <code className="text-white">stroke-width</code> → <code className="text-yellow-400">strokeWidth</code>.</span>
                                    </li>
                                </ul>
                            </InfoPanel>
                        </div>
                    </section>

                    {/* 3. КОМПОНЕНТЫ */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">3</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Компоненты: Сердце React</h3>

                        <TheoryText>
                            Компонент в React — это <b>функция</b> (или класс, но функции — современный стандарт), которая возвращает JSX. Имя компонента <b>обязательно с большой буквы</b> — так React отличает пользовательские компоненты от обычных HTML-тегов.
                        </TheoryText>

                        <div className="mt-6">
                            <h4 className="text-blue-400 font-bold mb-4 text-lg">Анатомия простого компонента:</h4>
                            <CodeSnippet language="jsx" code={`// 1. Импорт (если нужно)
// import { useState } from 'react';

// 2. Объявление функции-компонента (с большой буквы!)
function MyButton() {
  // 3. JavaScript-логика (переменные, функции, хуки)
  const handleClick = () => {
    alert('Кнопка нажата!');
  };

  // 4. Возвращаем JSX (разметку)
  return (
    <button onClick={handleClick}>
      Нажми меня
    </button>
  );
}

// 5. Экспорт, чтобы использовать в других файлах
export default MyButton;`} />
                        </div>

                        <div className="mt-6">
                            <InfoPanel title="Использование компонента в другом файле">
                                <CodeSnippet language="jsx" code={`// App.jsx
import MyButton from './components/MyButton'; // Импортируем

function App() {
  return (
    <div>
      <h1>Мой сайт</h1>
      <MyButton /> {/* Используем как HTML-тег */}
      <MyButton />
      <MyButton />
    </div>
  );
}`} />
                                <p className="text-xs text-slate-500 mt-3 ml-1">Результат: на странице появится три кнопки. Один компонент — три экземпляра.</p>
                            </InfoPanel>
                        </div>
                    </section>

                    {/* 4. PROPS */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">4</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Props: Как передавать данные в компонент</h3>

                        <TheoryText>
                            <b>Props (свойства)</b> — это способ передать данные от родительского компонента к дочернему. Они работают как <b>аргументы функции</b>: вы передаете что-то при вызове, а компонент получает это через параметр <code className="text-blue-400">props</code>.
                        </TheoryText>

                        <div className="mt-6">
                            <h4 className="text-blue-400 font-bold mb-4 text-lg">Пример: Компонент с props</h4>
                            <CodeSnippet language="jsx" code={`// UserCard.jsx
function UserCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Возраст: {props.age}</p>
      <p>Город: {props.city}</p>
    </div>
  );
}

// Либо с деструктуризацией (удобнее!):
function UserCard({ name, age, city }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Возраст: {age}</p>
      <p>Город: {city}</p>
    </div>
  );
}

// Использование:
<UserCard name="Анна" age={25} city="Москва" />
<UserCard name="Иван" age={30} city="Питер" />`} />
                        </div>

                        <div className="mt-6">
                            <InfoPanel title="Важные моменты">
                                <ul className="space-y-2 text-sm text-slate-300">
                                    <li>• <b className="text-white">Props доступны только для чтения.</b> Компонент не может изменять свои props.</li>
                                    <li>• <b className="text-white">Числа и выражения</b> передаются в фигурных скобках.</li>
                                    <li>• <b className="text-white">Строки</b> можно передавать как в кавычках, так и в фигурных скобках.</li>
                                    <li>• <b className="text-white">Функции тоже можно передавать как props!</b> Это основа для обработчиков событий.</li>
                                    <li>• <b className="text-white">Children</b> — специальный prop. Всё, что между открывающим и закрывающим тегом компонента, попадает в <code className="text-yellow-400">props.children</code>.</li>
                                </ul>
                            </InfoPanel>
                        </div>
                    </section>

                    {/* 5. STATE */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">5</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Состояние (State): Динамические данные</h3>

                        <TheoryText>
                            Если props — это "входящие" данные от родителя, то <b>state (состояние)</b> — это внутренняя память компонента, которая может меняться. Когда состояние меняется — React <b>автоматически перерисовывает</b> компонент.
                        </TheoryText>

                        <div className="mt-6">
                            <h4 className="text-blue-400 font-bold mb-4 text-lg">useState — хук для работы с состоянием:</h4>
                            <CodeSnippet language="jsx" code={`import { useState } from 'react';

function Counter() {
  // [текущее_значение, функция_для_изменения]
  const [count, setCount] = useState(0); // 0 — начальное значение

  return (
    <div>
      <p>Вы нажали {count} раз(а)</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми меня
      </button>
    </div>
  );
}`} />
                            <div className="mt-4 p-4 bg-slate-900 rounded-xl text-sm text-slate-400">
                                <p><b className="text-white">Как это работает:</b></p>
                                <ul className="space-y-1 mt-2 ml-4 list-disc">
                                    <li><code className="text-green-400">count</code> — текущее значение (0).</li>
                                    <li><code className="text-green-400">setCount(count + 1)</code> — функция для обновления. Когда она вызывается, React "знает", что нужно перерисовать компонент.</li>
                                    <li><b>Напрямую менять count нельзя!</b> Только через <code className="text-green-400">setCount()</code>.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h4 className="text-blue-400 font-bold mb-4 text-lg">useState может хранить что угодно:</h4>
                            <CodeSnippet language="jsx" code={`const [name, setName] = useState('');         // Строка
const [age, setAge] = useState(0);              // Число
const [isOpen, setIsOpen] = useState(false);    // Булево значение
const [items, setItems] = useState([]);         // Массив
const [user, setUser] = useState(null);         // Объект или null`} />
                        </div>
                    </section>

                    {/* 6. ФИЛОСОФИЯ ВЕРСТКИ */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">6</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Философия верстки: Всё — это контейнеры</h3>

                        <TheoryText>
                            Вся веб-страница — это <b>прямоугольники внутри прямоугольников</b>. Любой макет строится по принципу вложенных контейнеров.
                        </TheoryText>

                        <div className="p-6 bg-[#020617] rounded-3xl border border-white/5 mt-6">
                            <pre className="text-sm text-slate-400 font-mono leading-relaxed">
                                {`Страница
├── Шапка (Header / Navbar)
│   ├── Логотип
│   ├── Меню (ссылки)
│   └── Кнопка входа
├── Основной контент (Main)
│   ├── Баннер (Hero Section)
│   │   ├── Заголовок
│   │   ├── Описание
│   │   └── Кнопка
│   ├── Секция "Преимущества"
│   │   ├── Карточка 1
│   │   ├── Карточка 2
│   │   └── Карточка 3
│   └── Секция "Каталог"
│       ├── Карточка товара 1
│       ├── Карточка товара 2
│       └── ...
└── Подвал (Footer)
    ├── Логотип
    └── Копирайт`}
                            </pre>
                        </div>

                        <TheoryText>
                            Каждый "прямоугольник" на этом дереве — это <b>div или семантический тег</b>. Мы используем семантические теги для доступности и читаемости, но их роль та же — <b>быть контейнером</b>.
                        </TheoryText>

                        <div className="mt-6">
                            <h4 className="text-blue-400 font-bold mb-4 text-lg">Как строится типичный компонент:</h4>
                            <CodeSnippet language="jsx" code={`function ProductCard() {
  return (
    // 1. Внешний контейнер (определяет границы карточки)
    <div className="bg-white rounded-2xl p-4">
      
      // 2. Контейнер для картинки
      <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden">
        <img src="..." alt="..." />
      </div>
      
      // 3. Контейнер для текстовой информации
      <div className="mt-4 space-y-2">
        <h3 className="font-bold">Название</h3>
        <p className="text-slate-500">Описание</p>
        
        // 4. Контейнер для цены и кнопки (прижимаем к низу)
        <div className="flex items-center justify-between pt-4 border-t">
          <span className="text-lg font-black">999 ₽</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
}`} />
                        </div>

                        <div className="mt-6">
                            <InfoPanel title="Золотое правило">
                                <p className="text-slate-300 leading-relaxed">
                                    Если элементы должны располагаться <b className="text-white">в ряд</b> — дайте их родителю класс <code className="text-yellow-400">flex</code> или <code className="text-yellow-400">grid</code>.<br />
                                    Если элементы должны располагаться <b className="text-white">в колонку</b> — дайте родителю класс <code className="text-yellow-400">flex-col</code> (или просто используйте блочную модель — div'ы по умолчанию в колонку).
                                </p>
                            </InfoPanel>
                        </div>
                    </section>

                    {/* 7. TAILWIND */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">7</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Tailwind CSS: Стили прямо в JSX</h3>

                        <TheoryText>
                            Tailwind CSS — это <b>utility-first CSS-фреймворк</b>. Вместо того чтобы создавать отдельный CSS-файл с классами, вы используете готовые "атомарные" классы прямо в JSX. Каждый класс делает что-то одно: задает цвет, отступ, размер шрифта, скругление и т.д.
                        </TheoryText>

                        <div className="mt-6 space-y-6">
                            <div className="p-6 bg-[#020617] rounded-3xl border border-white/5">
                                <h4 className="text-blue-400 font-bold mb-4 text-lg">Цвета (Background & Text)</h4>
                                <p className="text-xs text-slate-500 mb-4">Число в конце (50, 100, 200...900) — оттенок. Больше число = темнее для серых, ярче для цветных.</p>
                                <div className="flex flex-wrap gap-3">
                                    <span className="px-3 py-1 bg-slate-100 text-slate-900 rounded text-xs font-medium">bg-slate-100</span>
                                    <span className="px-3 py-1 bg-blue-500 text-white rounded text-xs font-medium">bg-blue-500</span>
                                    <span className="px-3 py-1 bg-green-500 text-white rounded text-xs font-medium">bg-green-500</span>
                                    <span className="px-3 py-1 bg-red-500 text-white rounded text-xs font-medium">bg-red-500</span>
                                    <span className="px-3 py-1 bg-yellow-500 text-white rounded text-xs font-medium">bg-yellow-500</span>
                                    <span className="px-3 py-1 bg-white text-slate-900 border rounded text-xs font-medium">bg-white</span>
                                    <span className="px-3 py-1 bg-black text-white rounded text-xs font-medium">bg-black</span>
                                    <span className="px-3 py-1 bg-transparent text-white border border-white/20 rounded text-xs font-medium">bg-transparent</span>
                                </div>
                            </div>

                            <div className="p-6 bg-[#020617] rounded-3xl border border-white/5">
                                <h4 className="text-blue-400 font-bold mb-4 text-lg">Отступы (Padding & Margin)</h4>
                                <p className="text-xs text-slate-500 mb-4">1 единица = 0.25rem = 4px. p-4 = 16px, p-10 = 40px.</p>
                                <div className="flex flex-wrap gap-3">
                                    <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded text-xs">p-4 = 16px</span>
                                    <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded text-xs">px-6 = 24px ↔</span>
                                    <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded text-xs">py-2 = 8px ↕</span>
                                    <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded text-xs">m-4 = 16px</span>
                                    <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded text-xs">mt-8 = 32px ↑</span>
                                    <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded text-xs">mb-4 = 16px ↓</span>
                                    <span className="px-3 py-1 bg-slate-800 text-yellow-400 rounded text-xs font-bold">mx-auto = центр</span>
                                </div>
                            </div>

                            <div className="p-6 bg-[#020617] rounded-3xl border border-white/5">
                                <h4 className="text-blue-400 font-bold mb-4 text-lg">Текст (Typography)</h4>
                                <div className="flex flex-wrap gap-3">
                                    <span className="text-xs text-slate-300">text-xs (12px)</span>
                                    <span className="text-sm text-slate-300">text-sm (14px)</span>
                                    <span className="text-base text-slate-300">text-base (16px)</span>
                                    <span className="text-lg text-slate-300">text-lg (18px)</span>
                                    <span className="text-xl text-slate-300">text-xl (20px)</span>
                                    <span className="text-2xl text-slate-300">text-2xl (24px)</span>
                                    <span className="text-3xl text-slate-300">text-3xl (30px)</span>
                                </div>
                                <p className="text-xs text-slate-500 mt-3">Начертание: font-light, font-normal, font-medium, font-bold, font-black.</p>
                            </div>

                            <div className="p-6 bg-[#020617] rounded-3xl border border-white/5">
                                <h4 className="text-blue-400 font-bold mb-4 text-lg">Скругление (Border Radius)</h4>
                                <div className="flex flex-wrap gap-3 items-center">
                                    <span className="px-3 py-2 bg-blue-500 text-white rounded text-xs">rounded</span>
                                    <span className="px-3 py-2 bg-blue-500 text-white rounded-md text-xs">rounded-md</span>
                                    <span className="px-3 py-2 bg-blue-500 text-white rounded-lg text-xs">rounded-lg</span>
                                    <span className="px-3 py-2 bg-blue-500 text-white rounded-xl text-xs">rounded-xl</span>
                                    <span className="px-3 py-2 bg-blue-500 text-white rounded-2xl text-xs">rounded-2xl</span>
                                    <span className="px-3 py-2 bg-blue-500 text-white rounded-3xl text-xs">rounded-3xl</span>
                                    <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-xs">rounded-full</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 8. FLEXBOX */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">8</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Flexbox: Как управлять расположением</h3>

                        <TheoryText>
                            Flexbox — это <b>основной инструмент</b> для расположения элементов на странице. 95% всех макетов можно построить с помощью flex-контейнеров.
                        </TheoryText>

                        <div className="mt-6 space-y-6">
                            <div>
                                <h4 className="text-white font-bold mb-3">Направление (ось):</h4>
                                <div className="flex flex-wrap gap-3">
                                    <span className="px-3 py-2 bg-slate-800 text-slate-300 rounded text-sm">flex = в строку (→)</span>
                                    <span className="px-3 py-2 bg-slate-800 text-slate-300 rounded text-sm">flex-col = в колонку (↓)</span>
                                    <span className="px-3 py-2 bg-slate-800 text-slate-300 rounded text-sm">flex-row = в строку (явно)</span>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-white font-bold mb-3">Выравнивание по главной оси (justify):</h4>
                                <div className="flex flex-wrap gap-3">
                                    <span className="px-3 py-2 bg-slate-800 text-slate-300 rounded text-sm">justify-start</span>
                                    <span className="px-3 py-2 bg-slate-800 text-slate-300 rounded text-sm">justify-center</span>
                                    <span className="px-3 py-2 bg-slate-800 text-slate-300 rounded text-sm">justify-end</span>
                                    <span className="px-3 py-2 bg-slate-800 text-yellow-400 rounded text-sm font-bold">justify-between</span>
                                    <span className="px-3 py-2 bg-slate-800 text-slate-300 rounded text-sm">justify-around</span>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-white font-bold mb-3">Выравнивание по поперечной оси (items):</h4>
                                <div className="flex flex-wrap gap-3">
                                    <span className="px-3 py-2 bg-slate-800 text-slate-300 rounded text-sm">items-start</span>
                                    <span className="px-3 py-2 bg-slate-800 text-yellow-400 rounded text-sm font-bold">items-center</span>
                                    <span className="px-3 py-2 bg-slate-800 text-slate-300 rounded text-sm">items-end</span>
                                    <span className="px-3 py-2 bg-slate-800 text-slate-300 rounded text-sm">items-stretch</span>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-white font-bold mb-3">Промежутки (gap):</h4>
                                <div className="flex flex-wrap gap-3">
                                    <span className="px-3 py-2 bg-slate-800 text-slate-300 rounded text-sm">gap-2 = 8px</span>
                                    <span className="px-3 py-2 bg-slate-800 text-slate-300 rounded text-sm">gap-4 = 16px</span>
                                    <span className="px-3 py-2 bg-slate-800 text-slate-300 rounded text-sm">gap-6 = 24px</span>
                                    <span className="px-3 py-2 bg-slate-800 text-slate-300 rounded text-sm">gap-8 = 32px</span>
                                </div>
                                <p className="text-xs text-slate-500 mt-2"><b className="text-yellow-400">Важно:</b> Используйте gap у родителя, а не margin у каждого ребенка по отдельности!</p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <InfoPanel title="Живой пример: flex justify-between items-center">
                                <div className="bg-slate-900 p-4 rounded-xl flex justify-between items-center mb-4">
                                    <div className="font-bold text-blue-400">ЛОГО</div>
                                    <div className="flex gap-6 items-center">
                                        <span className="text-sm text-slate-300">Главная</span>
                                        <span className="text-sm text-slate-300">Каталог</span>
                                        <span className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-bold">Войти</span>
                                    </div>
                                </div>
                                <CodeSnippet language="jsx" code={`<div className="flex justify-between items-center">
  <div>ЛОГО</div>
  <div className="flex gap-6 items-center">
    <span>Главная</span>
    <span>Каталог</span>
    <button>Войти</button>
  </div>
</div>`} />
                                <p className="text-xs text-slate-500 mt-3">Так строится любая шапка сайта: логотип слева, меню и кнопка справа, все по центру вертикали.</p>
                            </InfoPanel>
                        </div>
                    </section>

                    {/* 9. РАЗБОР КНОПКИ */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">9</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Разбор элемента: Кнопка от идеи до кода</h3>

                        <TheoryText>
                            Давайте спроектируем кнопку "Войти" из шапки сайта. Мы пойдем по шагам — от пустого тега до полностью стилизованного компонента. <b>Обратите внимание:</b> под каждым блоком кода показан живой результат — как кнопка выглядит в браузере на данном шаге.
                        </TheoryText>

                        <div className="mt-6 space-y-10">
                            {/* Шаг 0 */}
                            <div className="p-6 bg-[#020617] rounded-3xl border border-white/5">
                                <h4 className="text-blue-400 font-bold mb-3 text-lg">Шаг 0: Пустая кнопка</h4>
                                <TheoryText>
                                    Начинаем с чистого HTML-тега <code className="text-blue-300">&lt;button&gt;</code>. Браузер применяет к нему свои стандартные стили: серый фон, рамку, системный шрифт.
                                </TheoryText>
                                <CodeSnippet language="html" code={`<button>Войти</button>`} />
                                <div className="mt-4 p-4 bg-slate-400/50 rounded-xl flex items-center gap-4">
                                    <span className="text-xs text-slate-200 shrink-0">Результат:</span>
                                    <button>Войти</button>
                                </div>
                                <p className="text-xs text-slate-500 mt-3">Стандартная браузерная кнопка. Никакого дизайна — она серая, с рамкой и выглядит скучно.</p>
                            </div>

                            {/* Шаг 1 */}
                            <div className="p-6 bg-[#020617] rounded-3xl border border-white/5">
                                <h4 className="text-blue-400 font-bold mb-3 text-lg">Шаг 1: Добавляем фон и цвет текста</h4>
                                <TheoryText>
                                    Первое, что мы делаем — задаем <b>фон</b> и <b>цвет текста</b>. Класс <code className="text-blue-300">bg-slate-900</code> делает фон очень темным (почти черным), а <code className="text-blue-300">text-white</code> делает текст белым. Это создает контраст и кнопка сразу выглядит "дороже".
                                </TheoryText>
                                <CodeSnippet language="jsx" code={`<button className="bg-slate-900 text-white">Войти</button>`} />
                                <div className="mt-4 p-4 bg-slate-400/50 rounded-xl flex items-center gap-4">
                                    <span className="text-xs text-slate-200 shrink-0">Результат:</span>
                                    <button className="bg-slate-900 text-white">Войти</button>
                                </div>
                                <p className="text-xs text-slate-500 mt-3">Кнопка стала темной с белым текстом, но текст "прилип" к краям — нет воздуха внутри.</p>
                            </div>

                            {/* Шаг 2 */}
                            <div className="p-6 bg-[#020617] rounded-3xl border border-white/5">
                                <h4 className="text-blue-400 font-bold mb-3 text-lg">Шаг 2: Внутренние отступы (padding) — делаем "воздух"</h4>
                                <TheoryText>
                                    Теперь добавляем <b>padding</b> — внутренние отступы. <code className="text-blue-300">px-6</code> задает горизонтальный отступ 24px (слева и справа), а <code className="text-blue-300">py-2.5</code> — вертикальный отступ 10px (сверху и снизу). Текст перестает "слипаться" с границами кнопки.
                                </TheoryText>
                                <CodeSnippet language="jsx" code={`<button className="bg-slate-900 text-white px-6 py-2.5">Войти</button>`} />
                                <div className="mt-4 p-4 bg-slate-400/50 rounded-xl flex items-center gap-4">
                                    <span className="text-xs text-slate-200 shrink-0">Результат:</span>
                                    <button className="bg-slate-900 text-white px-6 py-2.5">Войти</button>
                                </div>
                                <p className="text-xs text-slate-500 mt-3">Теперь у кнопки есть "подушка" внутри: 24px слева и справа, 10px сверху и снизу. Текст дышит.</p>
                            </div>

                            {/* Шаг 3 */}
                            <div className="p-6 bg-[#020617] rounded-3xl border border-white/5">
                                <h4 className="text-blue-400 font-bold mb-3 text-lg">Шаг 3: Скругляем углы</h4>
                                <TheoryText>
                                    Острые углы делают кнопку "агрессивной". Добавляем скругление через <code className="text-blue-300">rounded-xl</code> (12px). Доступны варианты от <code className="text-blue-300">rounded-sm</code> до <code className="text-blue-300">rounded-3xl</code>, а также <code className="text-blue-300">rounded-full</code> для полностью круглых кнопок.
                                </TheoryText>
                                <CodeSnippet language="jsx" code={`<button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl">Войти</button>`} />
                                <div className="mt-4 p-4 bg-slate-400/50 rounded-xl flex items-center gap-4">
                                    <span className="text-xs text-slate-200 shrink-0">Результат:</span>
                                    <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl">Войти</button>
                                </div>
                                <p className="text-xs text-slate-500 mt-3">rounded-xl добавляет скругление 12px. Кнопка стала мягче и приятнее визуально.</p>
                            </div>

                            {/* Шаг 4 */}
                            <div className="p-6 bg-[#020617] rounded-3xl border border-white/5">
                                <h4 className="text-blue-400 font-bold mb-3 text-lg">Шаг 4: Жирный шрифт</h4>
                                <TheoryText>
                                    Обычный текст (weight 400) выглядит блекло на кнопках. <code className="text-blue-300">font-bold</code> увеличивает жирность до 700, делая надпись более заметной и уверенной. Для максимальной жирности используйте <code className="text-blue-300">font-black</code> (900).
                                </TheoryText>
                                <CodeSnippet language="jsx" code={`<button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold">Войти</button>`} />
                                <div className="mt-4 p-4 bg-slate-400/50 rounded-xl flex items-center gap-4">
                                    <span className="text-xs text-slate-200 shrink-0">Результат:</span>
                                    <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold">Войти</button>
                                </div>
                                <p className="text-xs text-slate-500 mt-3">font-bold делает текст выразительнее. Сравните с предыдущим шагом — надпись стала "увереннее".</p>
                            </div>

                            {/* Шаг 5 */}
                            <div className="p-6 bg-[#020617] rounded-3xl border border-white/5">
                                <h4 className="text-blue-400 font-bold mb-3 text-lg">Шаг 5: Эффекты при наведении и нажатии</h4>
                                <TheoryText>
                                    Самая важная часть — <b>интерактивность</b>. Пользователь должен понимать, что кнопка "живая". Мы добавляем четыре класса:
                                </TheoryText>
                                <ul className="space-y-2 text-sm text-slate-300 mt-3 mb-4 ml-4 list-disc">
                                    <li><code className="text-green-400">hover:bg-green-600</code> — при наведении мыши фон меняется на зеленый. Префикс <code className="text-green-400">hover:</code> означает "применить стиль только когда курсор над элементом".</li>
                                    <li><code className="text-green-400">active:scale-95</code> — при клике кнопка уменьшается до 95% размера. Это имитирует физическое нажатие. Префикс <code className="text-green-400">active:</code> срабатывает в момент клика.</li>
                                    <li><code className="text-green-400">transition-all</code> — все изменения (цвет, размер) происходят плавно с анимацией, а не мгновенно.</li>
                                    <li><code className="text-green-400">shadow-md</code> — добавляет среднюю тень, кнопка "приподнимается" над страницей.</li>
                                </ul>
                                <CodeSnippet language="jsx" code={`<button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-green-600 active:scale-95 transition-all shadow-md">Войти</button>`} />
                                <div className="mt-4 p-4 bg-slate-400/50 rounded-xl flex items-center gap-4">
                                    <span className="text-xs text-slate-200 shrink-0">Результат:</span>
                                    <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-green-600 active:scale-95 transition-all shadow-md">Войти</button>
                                </div>
                                <p className="text-xs text-slate-500 mt-3"><b className="text-yellow-400">Попробуйте:</b> наведите курсор на кнопку выше — она станет зеленой. Нажмите — она сожмется. Это и есть интерактивность.</p>
                            </div>

                            {/* Шаг 6 */}
                            <div className="p-6 bg-[#020617] rounded-3xl border border-white/5">
                                <h4 className="text-blue-400 font-bold mb-3 text-lg">Шаг 6: Добавляем иконку (Lucide React)</h4>
                                <TheoryText>
                                    Иконка делает кнопку понятнее. Мы используем библиотеку <b>Lucide React</b>. Чтобы иконка и текст шли в одну строку, добавляем три класса:
                                </TheoryText>
                                <ul className="space-y-2 text-sm text-slate-300 mt-3 mb-4 ml-4 list-disc">
                                    <li><code className="text-green-400">flex</code> — превращает кнопку во flex-контейнер. Дочерние элементы (иконка и текст) встают в строку, а не друг под другом.</li>
                                    <li><code className="text-green-400">items-center</code> — выравнивает иконку и текст по центру вертикали, чтобы они были на одной линии.</li>
                                    <li><code className="text-green-400">gap-2</code> — задает расстояние 8px между иконкой и текстом. Без него они "склеятся".</li>
                                </ul>
                                <CodeSnippet language="jsx" code={`import { User } from 'lucide-react';

<button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-green-600 active:scale-95 transition-all shadow-md">
  <User size={18} />
  Войти
</button>`} />
                                <div className="mt-4 p-4 bg-slate-400/50 rounded-xl flex items-center gap-4">
                                    <span className="text-xs text-slate-200 shrink-0">Результат:</span>
                                    <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-green-600 active:scale-95 transition-all shadow-md">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                        Войти
                                    </button>
                                </div>
                                <p className="text-xs text-slate-500 mt-3">Иконка + текст = понятная кнопка. Пользователь сразу видит, что это вход в профиль.</p>
                            </div>

                            {/* Итоговая таблица */}
                            <div className="mt-6">
                                <InfoPanel title="Итоговый разбор каждого класса">
                                    <TheoryText>
                                        Ниже — полная таблица всех классов, которые мы применили к кнопке. Это ваш справочник: что каждый класс делает и как его использовать в других элементах.
                                    </TheoryText>
                                    <div className="overflow-x-auto mt-4">
                                        <table className="w-full text-xs text-slate-400">
                                            <thead>
                                            <tr className="border-b border-slate-800">
                                                <th className="text-left py-2 pr-4 text-white">Класс</th>
                                                <th className="text-left py-2 text-white">Что делает</th>
                                            </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-800">
                                            <tr><td className="py-2 pr-4"><code className="text-green-400">flex</code></td><td className="py-2">Включает flex-контейнер (дочерние элементы встают в строку)</td></tr>
                                            <tr><td className="py-2 pr-4"><code className="text-green-400">items-center</code></td><td className="py-2">Центрирует дочерние элементы по вертикали</td></tr>
                                            <tr><td className="py-2 pr-4"><code className="text-green-400">gap-2</code></td><td className="py-2">Отступ 8px между дочерними элементами</td></tr>
                                            <tr><td className="py-2 pr-4"><code className="text-green-400">bg-slate-900</code></td><td className="py-2">Темно-синий/черный фон кнопки</td></tr>
                                            <tr><td className="py-2 pr-4"><code className="text-green-400">text-white</code></td><td className="py-2">Белый цвет текста</td></tr>
                                            <tr><td className="py-2 pr-4"><code className="text-green-400">px-6</code></td><td className="py-2">Горизонтальный внутренний отступ 24px (← →)</td></tr>
                                            <tr><td className="py-2 pr-4"><code className="text-green-400">py-2.5</code></td><td className="py-2">Вертикальный внутренний отступ 10px (↑ ↓)</td></tr>
                                            <tr><td className="py-2 pr-4"><code className="text-green-400">rounded-xl</code></td><td className="py-2">Скругление углов 12px</td></tr>
                                            <tr><td className="py-2 pr-4"><code className="text-green-400">font-bold</code></td><td className="py-2">Жирный текст (вес 700)</td></tr>
                                            <tr><td className="py-2 pr-4"><code className="text-green-400">hover:bg-green-600</code></td><td className="py-2">При наведении мыши фон становится зеленым</td></tr>
                                            <tr><td className="py-2 pr-4"><code className="text-green-400">active:scale-95</code></td><td className="py-2">При клике кнопка уменьшается до 95% (эффект нажатия)</td></tr>
                                            <tr><td className="py-2 pr-4"><code className="text-green-400">transition-all</code></td><td className="py-2">Все изменения происходят плавно (анимация)</td></tr>
                                            <tr><td className="py-2 pr-4"><code className="text-green-400">shadow-md</code></td><td className="py-2">Средняя тень под кнопкой</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </InfoPanel>
                            </div>
                        </div>
                    </section>

                    {/* 10. ТЕКСТ */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">10</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Текст: От простого абзаца до сложного блока</h3>

                        <TheoryText>
                            Текст — это не просто буквы. Это иерархия: заголовки, подзаголовки, описания, цена, подписи. Каждый тип текста имеет свой размер, вес, цвет и отступы.
                        </TheoryText>

                        <div className="mt-6">
                            <h4 className="text-blue-400 font-bold mb-4 text-lg">Текстовая иерархия на карточке товара:</h4>

                            <div className="bg-white p-6 rounded-2xl max-w-xs mb-6">
                                <p className="text-[10px] text-orange-500 font-black uppercase tracking-wider mb-2">Sale</p>
                                <h3 className="text-lg font-black text-slate-800 mb-1">Монстера Деликатесная</h3>
                                <p className="text-slate-400 text-sm font-medium mb-3">Комнатное растение</p>
                                <div className="border-t border-slate-100 pt-3">
                                    <span className="text-xs font-bold text-slate-400 uppercase">Цена</span>
                                    <p className="text-xl font-black text-green-600">2 500 ₽</p>
                                </div>
                            </div>

                            <div className="p-4 bg-slate-900 rounded-xl text-xs space-y-2">
                                <p className="text-slate-500">Разбор каждого текстового элемента:</p>
                                <p><code className="text-green-400">text-[10px] text-orange-500 font-black uppercase tracking-wider</code> — <b className="text-white">Бейдж "Sale"</b>: самый мелкий текст (10px), оранжевый, максимально жирный, все заглавные, увеличенное межбуквенное расстояние.</p>
                                <p><code className="text-green-400">text-lg font-black text-slate-800</code> — <b className="text-white">Название товара</b>: увеличенный текст (18px), максимально жирный, очень темный.</p>
                                <p><code className="text-green-400">text-slate-400 text-sm font-medium</code> — <b className="text-white">Категория</b>: маленький текст (14px), серый цвет, средний вес.</p>
                                <p><code className="text-green-400">text-xs font-bold text-slate-400 uppercase</code> — <b className="text-white">Подпись "Цена"</b>: очень маленький текст (12px), жирный, серый, все заглавные.</p>
                                <p><code className="text-green-400">text-xl font-black text-green-600</code> — <b className="text-white">Цена</b>: крупный текст (20px), максимально жирный, зеленый.</p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h4 className="text-blue-400 font-bold mb-4 text-lg">Полезные текстовые классы:</h4>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded text-xs">text-left</span>
                                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded text-xs">text-center</span>
                                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded text-xs">text-right</span>
                                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded text-xs">leading-relaxed</span>
                                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded text-xs">leading-tight</span>
                                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded text-xs">tracking-wider</span>
                                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded text-xs">tracking-tighter</span>
                                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded text-xs">line-clamp-1</span>
                                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded text-xs">line-clamp-2</span>
                            </div>
                        </div>
                    </section>

                    {/* 11. КАРТОЧКА ТОВАРА */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">11</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Карточка товара: Собираем всё вместе</h3>

                        <TheoryText>
                            Карточка товара — это самый показательный пример компонента. В ней есть всё: вложенные контейнеры, изображение, текст разных уровней, кнопка и состояние.
                        </TheoryText>

                        <div className="mt-6">
                            <h4 className="text-blue-400 font-bold mb-4 text-lg">Послойный разбор карточки:</h4>
                            <CodeSnippet language="jsx" code={`function ProductCard({ product }) {
  return (
    // СЛОЙ 1: Внешняя оболочка
    <div className="group bg-white rounded-3xl p-4 border 
                    border-transparent hover:border-green-100 
                    hover:shadow-xl transition-all duration-500">
      
      // СЛОЙ 2: Контейнер для картинки
      <div className="relative aspect-square mb-5 
                      overflow-hidden rounded-2xl bg-slate-100">
        <img 
          src={product.image_url} 
          alt={product.name}
          className="w-full h-full object-cover 
                     group-hover:scale-110 transition-transform 
                     duration-700"
        />
        
        // СЛОЙ 2.1: Бейдж поверх картинки
        {product.price < 500 && (
          <div className="absolute top-4 left-4 
                          bg-orange-500 text-white 
                          text-[10px] font-black 
                          px-3 py-1 rounded-lg uppercase">
            Sale
          </div>
        )}
      </div>

      // СЛОЙ 3: Контейнер для текста
      <div className="flex flex-col flex-grow px-2">
        <h3 className="font-black text-slate-800 text-lg 
                       hover:text-green-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-slate-400 text-sm font-medium mb-4">
          {product.category}
        </p>

        // СЛОЙ 4: Нижний блок с ценой и кнопкой
        <div className="mt-auto flex items-center 
                        justify-between border-t 
                        border-slate-50 pt-4">
          <div>
            <span className="text-xs font-bold 
                             text-slate-400 uppercase">
              Цена
            </span>
            <span className="text-xl font-black 
                             text-green-600 block">
              {product.price} ₽
            </span>
          </div>
          
          <button className="bg-slate-100 p-3 rounded-2xl 
                             hover:bg-green-500 hover:text-white 
                             transition-all active:scale-90">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}`} />

                            <div className="mt-6 p-4 bg-slate-900 rounded-xl text-xs space-y-3">
                                <p className="text-white font-bold mb-2">Почему это работает (каждый класс объяснен):</p>
                                <p><b className="text-blue-400">group</b> — специальный класс-маркер. Позволяет дочерним элементам реагировать на наведение на родителя через group-hover (например, картинка увеличивается, когда мы наводим на всю карточку).</p>
                                <p><b className="text-blue-400">aspect-square</b> — делает контейнер квадратным (ширина = высота). Без этого высота может "схлопнуться".</p>
                                <p><b className="text-blue-400">overflow-hidden</b> — обрезает всё, что выходит за границы (важно для эффекта увеличения картинки).</p>
                                <p><b className="text-blue-400">object-cover</b> — картинка заполняет весь контейнер без искажений, обрезая лишнее.</p>
                                <p><b className="text-blue-400">group-hover:scale-110</b> — при наведении на карточку (group) картинка увеличивается до 110%.</p>
                                <p><b className="text-blue-400">absolute top-4 left-4</b> — бейдж позиционируется относительно картинки: 16px от верха и 16px слева.</p>
                                <p><b className="text-blue-400">mt-auto</b> — волшебный класс! В flex-контейнере он "выталкивает" этот элемент в самый низ, оставляя всё остальное наверху.</p>
                            </div>
                        </div>
                    </section>

                    {/* 12. ИЗОБРАЖЕНИЯ И ИКОНКИ */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">12</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Изображения и иконки: Добавляем визуал</h3>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-blue-400 font-bold mb-4 text-lg">Картинки (img)</h4>
                                <TheoryText>
                                    В React картинки можно использовать двумя способами: как локальные файлы (через импорт) или как внешние ссылки (URL). Для картинок из базы данных всегда используется второй способ — просто указываем URL.
                                </TheoryText>
                                <CodeSnippet language="jsx" code={`// Способ 1: Локальная картинка (импорт)
import heroImage from '../assets/home/hero-banner.png';
<img src={heroImage} alt="Баннер" />

// Способ 2: URL (из базы данных или интернета)
<img src="https://example.com/photo.jpg" alt="Описание" />
<img src={product.image_url} alt={product.name} />`} />
                                <div className="mt-4 p-4 bg-slate-900 rounded-xl text-xs space-y-2">
                                    <p className="text-white font-bold">Важные классы для картинок:</p>
                                    <p><code className="text-green-400">object-cover</code> — заполнить контейнер, обрезая лишнее</p>
                                    <p><code className="text-green-400">object-contain</code> — вместить картинку целиком без обрезания</p>
                                    <p><code className="text-green-400">w-full h-full</code> — растянуть на весь родительский контейнер</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-blue-400 font-bold mb-4 text-lg">Иконки (Lucide React)</h4>
                                <TheoryText>
                                    Lucide React — это библиотека иконок. Каждая иконка — это React-компонент, который можно стилизовать через пропсы (size, color, strokeWidth) и className.
                                </TheoryText>
                                <CodeSnippet language="jsx" code={`// 1. Импортируем нужные иконки
import { ShoppingCart, User, Heart, Star, ArrowRight, Search } from 'lucide-react';

// 2. Используем как компоненты
<ShoppingCart size={20} />
<User size={18} className="text-slate-700" />
<Star size={16} fill="currentColor" className="text-yellow-500" />
<Heart size={24} strokeWidth={1.5} className="text-red-500" />
<ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />`} />
                                <div className="mt-4 p-4 bg-slate-900 rounded-xl text-xs space-y-2">
                                    <p className="text-white font-bold">Пропсы иконок Lucide:</p>
                                    <p><code className="text-green-400">size</code> — размер в пикселях</p>
                                    <p><code className="text-green-400">className</code> — Tailwind-классы (цвет, тень, анимации)</p>
                                    <p><code className="text-green-400">strokeWidth</code> — толщина линии (по умолчанию 2)</p>
                                    <p><code className="text-green-400">fill="currentColor"</code> — залить иконку цветом (для Star, Heart)</p>
                                    <p className="text-yellow-400 mt-2">Не нужно скачивать SVG-файлы! Просто импортируете иконку и используете.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 13. ШАПКА САЙТА */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">13</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Шапка сайта (Navbar): Раскладываем по косточкам</h3>

                        <TheoryText>
                            Шапка сайта — это самый сложный элемент интерфейса. В ней сочетаются: логотип с иконкой, навигационные ссылки, кнопка входа и иконка корзины.
                        </TheoryText>

                        <div className="mt-6">
                            <h4 className="text-blue-400 font-bold mb-4 text-lg">Структура Navbar в коде:</h4>
                            <CodeSnippet language="jsx" code={`function Navbar() {
  return (
    // СЛОЙ 1: Прилипающая шапка
    <nav className="sticky top-0 z-50 
                    bg-white/80 backdrop-blur-md 
                    border-b border-gray-100">
      
      // СЛОЙ 2: Ограничитель ширины и высоты
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          
          // СЛОЙ 3 (ЛЕВО): Логотип
          <Link to="/" className="flex items-center gap-2">
            <Leaf className="text-green-500 w-6 h-6" />
            <span className="text-2xl font-black">LOGO</span>
          </Link>
          
          // СЛОЙ 3 (ЦЕНТР): Меню
          <div className="hidden md:flex items-center gap-10">
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/shop">Каталог</NavLink>
            <NavLink to="/about">О нас</NavLink>
          </div>
          
          // СЛОЙ 3 (ПРАВО): Действия
          <div className="flex items-center gap-6">
            <ShoppingCart size={22} />
            <button>Войти</button>
          </div>
          
        </div>
      </div>
    </nav>
  );
}`} />

                            <div className="mt-6 p-4 bg-slate-900 rounded-xl text-xs space-y-2">
                                <p className="text-white font-bold mb-2">Ключевые моменты Navbar:</p>
                                <p><code className="text-green-400">sticky top-0</code> — шапка "прилипает" к верху при прокрутке</p>
                                <p><code className="text-green-400">z-50</code> — шапка всегда поверх остального контента (иначе карточки будут перекрывать меню)</p>
                                <p><code className="text-green-400">bg-white/80 backdrop-blur-md</code> — полупрозрачный фон + размытие (эффект матового стекла)</p>
                                <p><code className="text-green-400">max-w-7xl mx-auto</code> — ограничение максимальной ширины + центрирование</p>
                                <p><code className="text-green-400">flex justify-between items-center</code> — три блока (логотип, меню, кнопка) равномерно распределены и выровнены по центру вертикали</p>
                                <p><code className="text-green-400">hidden md:flex</code> — меню скрыто на мобильных, появляется на планшетах и шире</p>
                            </div>
                        </div>
                    </section>

                    {/* ИТОГ */}
                    <section className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-3xl">
                        <h3 className="text-2xl font-bold text-white mb-6">Итог: Что мы изучили</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div className="p-4 bg-[#020617] rounded-xl">
                                <p className="text-emerald-400 font-bold mb-2">Базовые концепции:</p>
                                <ul className="space-y-1 text-slate-300">
                                    <li>• Компонент — это функция, возвращающая JSX</li>
                                    <li>• JSX — HTML внутри JavaScript (с правилами!)</li>
                                    <li>• Props — передача данных от родителя к ребенку</li>
                                    <li>• State — внутренняя память компонента (useState)</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-[#020617] rounded-xl">
                                <p className="text-emerald-400 font-bold mb-2">Дизайн и верстка:</p>
                                <ul className="space-y-1 text-slate-300">
                                    <li>• Всё — это контейнеры (div'ы внутри div'ов)</li>
                                    <li>• Flexbox — главный инструмент расположения</li>
                                    <li>• Tailwind — стили через классы прямо в JSX</li>
                                    <li>• Каждый класс делает что-то одно</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </article>
            )}

            {/* --- РЕЖИМ ФАЙЛОВ --- */}
            {mode === 'files' && (
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold mb-8 text-white">Материалы и файлы</h2>


                </div>
            )}

            {/* --- РЕЖИМ ПРАКТИКИ --- */}
            {mode === 'practice' && (
                <div className="space-y-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Практика: Создание и настройка React-проекта</h2>

                    {/* ШАГ 1 */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">1</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Создание проекта Vite + React</h3>
                        <TheoryText>
                            Мы используем <b>Vite</b> — самый быстрый современный сборщик для React-проектов. Он запускается почти мгновенно и автоматически обновляет страницу при изменениях в коде.
                        </TheoryText>

                        <div className="mt-6 space-y-4">
                            <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider font-bold italic">Команда для создания проекта:</p>
                            <CodeSnippet language="bash" code="npm create vite@latest my-first-app -- --template react" />

                            <InfoPanel title="Что произойдет после ввода команды">
                                <ul className="space-y-3 text-xs text-slate-400">
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></span>
                                        Терминал спросит подтверждение установки — нажмите <b className="text-white">y</b> и Enter.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></span>
                                        Будет создана папка <code className="text-blue-300">my-first-app</code> со всеми файлами проекта.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></span>
                                        <b className="text-white">Важно:</b> Название <code className="text-blue-300">my-first-app</code> можно заменить на своё. Имя проекта всегда пишется <b>маленькими буквами</b> через дефис (kebab-case).
                                    </li>
                                </ul>
                            </InfoPanel>
                        </div>
                    </section>

                    {/* ШАГ 2 */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">2</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Установка зависимостей</h3>
                        <TheoryText>
                            После создания проекта нужно установить библиотеки. <b>Выполняйте команды строго по порядку!</b>
                        </TheoryText>

                        <div className="mt-6 space-y-6">
                            <div>
                                <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider font-bold italic">Шаг 2.1: Переход в папку проекта</p>
                                <CodeSnippet language="bash" code="cd my-first-app" />
                            </div>

                            <div>
                                <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider font-bold italic">Шаг 2.2: Установка базовых зависимостей</p>
                                <CodeSnippet language="bash" code="npm install" />
                                <p className="text-xs text-slate-500 mt-2">Эта команда установит React и всё необходимое для работы проекта.</p>
                            </div>

                            <div>
                                <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider font-bold italic">Шаг 2.3: Установка дополнительных библиотек</p>
                                <CodeSnippet language="bash" code="npm install react-router-dom axios lucide-react" />
                                <div className="mt-3 p-4 bg-[#020617] rounded-xl text-xs text-slate-400 space-y-2">
                                    <p><code className="text-blue-300">react-router-dom</code> — навигация между страницами без перезагрузки</p>
                                    <p><code className="text-blue-300">axios</code> — удобные HTTP-запросы к серверу (GET, POST, PUT, DELETE)</p>
                                    <p><code className="text-blue-300">lucide-react</code> — библиотека красивых иконок</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider font-bold italic">Шаг 2.4: Установка Tailwind CSS</p>
                                <CodeSnippet language="bash" code="npm install tailwindcss @tailwindcss/vite" />
                                <p className="text-xs text-slate-500 mt-2">Tailwind позволит стилизовать элементы прямо в JSX без отдельных CSS-файлов.</p>
                            </div>
                        </div>
                    </section>

                    {/* ШАГ 3 */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">3</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Настройка конфигурации</h3>
                        <TheoryText>
                            Нужно изменить два файла, чтобы Tailwind заработал и проект был готов к разработке.
                        </TheoryText>

                        <div className="mt-6 space-y-8">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-mono text-slate-500 text-sm">Файл: vite.config.js</span>
                                </div>
                                <p className="text-xs text-slate-500 mb-3">Добавьте плагин Tailwind в список plugins:</p>
                                <CodeSnippet language="javascript" code={`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(), // Tailwind должен быть первым
    react(),
  ],
})`} />
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-mono text-slate-500 text-sm">Файл: src/index.css</span>
                                </div>
                                <p className="text-xs text-slate-500 mb-3">Удалите всё содержимое и оставьте одну строку:</p>
                                <CodeSnippet language="css" code={`@import "tailwindcss";`} />
                            </div>
                        </div>
                    </section>

                    {/* ШАГ 4 */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">4</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Первый запуск</h3>
                        <TheoryText>
                            Всё готово! Запустите сервер разработки командой:
                        </TheoryText>

                        <div className="mt-6">
                            <CodeSnippet language="bash" code="npm run dev" />
                        </div>

                        <TheoryText>
                            В терминале появится ссылка (обычно <b>http://localhost:5173</b>). Нажмите на неё или скопируйте в браузер.
                        </TheoryText>

                        <div className="mt-6">
                            <InfoPanel title="Что должно отобразиться">
                                <ul className="text-sm text-slate-300 space-y-2">
                                    <li>✅ Логотип Vite и React на экране</li>
                                    <li>✅ Счетчик с кнопкой (стандартный шаблон)</li>
                                    <li>✅ При изменении кода страница обновляется автоматически</li>
                                </ul>
                            </InfoPanel>
                        </div>

                        <div className="mt-6">
                            <InfoPanel title="Структура папок после создания">
                                <pre className="text-xs text-slate-400 font-mono leading-relaxed">
                                    {`my-first-app/
├── node_modules/     # Установленные библиотеки
├── public/           # Публичные файлы (favicon)
├── src/              # Ваш код
│   ├── assets/       # Картинки, шрифты
│   ├── App.jsx       # Главный компонент
│   ├── App.css       # Стили App
│   ├── index.css     # Глобальные стили
│   └── main.jsx      # Точка входа
├── index.html        # HTML-шаблон
├── package.json      # Список библиотек
└── vite.config.js    # Настройки Vite`}
                                </pre>
                            </InfoPanel>
                        </div>
                    </section>

                    {/* ШАГ 5 */}
                    <section className="relative pl-12 border-l-2 border-emerald-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">5</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Создание тестового компонента</h3>
                        <TheoryText>
                            Чтобы проверить, что всё работает, создайте папку <code className="text-blue-300">src/components</code> и в ней файл <code className="text-blue-300">Greeting.jsx</code>:
                        </TheoryText>

                        <div className="mt-6">
                            <div className="mb-2">
                                <span className="text-[16px] font-mono text-slate-500 italic">Файл: src/components/Greeting.jsx</span>
                            </div>
                            <CodeSnippet language="jsx" code={`function Greeting({ name }) {
  return (
    <div className="p-8 bg-white rounded-3xl shadow-lg text-center">
      <h1 className="text-3xl font-black text-slate-800 mb-2">
        Hello, {name}!
      </h1>
      <p className="text-slate-500">
        Добро пожаловать в React
      </p>
      <button className="mt-4 bg-blue-500 text-white px-6 py-2.5 
                         rounded-xl font-bold hover:bg-blue-600 
                         active:scale-95 transition-all">
        Кнопка
      </button>
    </div>
  );
}

export default Greeting;`} />
                        </div>

                        <TheoryText>
                            Теперь подключите компонент в <code className="text-blue-300">src/App.jsx</code>:
                        </TheoryText>

                        <div className="mt-6">
                            <CodeSnippet language="jsx" code={`import Greeting from './components/Greeting';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <Greeting name="World" />
    </div>
  );
}

export default App;`} />
                        </div>

                        <div className="mt-6">
                            <InfoPanel title="Поздравляю!">
                                <p className="text-sm text-slate-300">
                                    Вы создали свой первый React-компонент. Теперь вы можете переходить к созданию полноценного сайта: шапка, главная страница, карточки товаров. В следующих лекциях мы подробно разберем каждый элемент.
                                </p>
                            </InfoPanel>
                        </div>

                        <div className="mt-6">
                            <InfoPanel title="Что делать, если что-то пошло не так?">
                                <ul className="space-y-2 text-xs text-slate-400">
                                    <li>• <b className="text-white">Ошибка "Cannot find module":</b> Вы забыли выполнить <code className="text-yellow-400">npm install</code> или ошиблись в пути импорта.</li>
                                    <li>• <b className="text-white">Белый экран в браузере:</b> Откройте консоль (F12) и посмотрите ошибку. Обычно это опечатка в JSX.</li>
                                    <li>• <b className="text-white">Tailwind не работает:</b> Проверьте, что в <code className="text-yellow-400">vite.config.js</code> добавлен <code className="text-yellow-400">tailwindcss()</code>, а в <code className="text-yellow-400">index.css</code> есть <code className="text-yellow-400">@import "tailwindcss";</code>.</li>
                                    <li>• <b className="text-white">Порт занят:</b> Если 5173 занят, Vite автоматически предложит другой. Посмотрите в терминале.</li>
                                </ul>
                            </InfoPanel>
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
};

export default LessonReactIntro;