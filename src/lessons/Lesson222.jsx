// LessonStructureProject.jsx
import React from 'react';
import {
    TheoryText,
    InfoPanel,
    CodeSnippet,
    TheoryImage
} from '../components/UIComponents';

const LessonStructureProject = ({ mode }) => {
    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            {/* --- РЕЖИМ ТЕОРИИ --- */}
            {mode === 'theory' && (
                <article className="space-y-16">
                    <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                        Лекция 3: Структура проекта и базовые компоненты
                    </h2>

                    {/* 1. СТРУКТУРА  ПРОЕКТА */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">1</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Организация файлов: порядок с первого дня</h3>

                        <TheoryText>
                            Когда вы только начинаете проект, кажется, что можно сложить все файлы в одну кучу — «потом разберемся». Но уже через неделю вы перестанете понимать, где что лежит. Поэтому с самого первого занятия мы используем <b>четкую структуру папок</b>.
                        </TheoryText>

                        <div className="mt-6">
                            <InfoPanel title="Почему важна структура?">
                                <ul className="space-y-2 text-sm text-slate-300">
                                    <li>• <b className="text-white">Навигация:</b> Вы всегда знаете, где искать шапку, а где — страницу каталога.</li>
                                    <li>• <b className="text-white">Переиспользование:</b> Компонент Navbar создается один раз в папке layout и подключается на всех страницах.</li>
                                    <li>• <b className="text-white">Командная работа:</b> Если бы вы работали в команде, один человек мог бы делать шапку, другой — карточки товаров, и они не мешали бы друг другу.</li>
                                    <li>• <b className="text-white">Масштабирование:</b> Когда проект вырастет до 50 компонентов, вы не запутаетесь.</li>
                                </ul>
                            </InfoPanel>
                        </div>

                        <div className="mt-6">
                            <h4 className="text-blue-400 font-bold mb-4 text-lg">Базовая структура папок (создаем прямо сейчас):</h4>
                            <div className="p-6 bg-[#020617] rounded-3xl border border-white/5">
                                <pre className="text-sm text-slate-400 font-mono leading-relaxed">
{`src/
├── api/                # Настройка запросов к серверу (позже)
│   └── axios.js
├── assets/             # Картинки, шрифты, иконки
│   └── home/
│       └── hero-banner.png
├── components/         # Переиспользуемые компоненты
│   ├── layout/         # Шапка, подвал (общие для всех страниц)
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── ui/             # Кнопки, карточки, поля ввода
├── pages/              # Страницы (каждая — отдельный файл)
│   └── Home.jsx        # Главная страница
├── App.jsx             # Главный компонент с маршрутами
├── main.jsx            # Точка входа в приложение
└── index.css           # Глобальные стили (Tailwind)`}
                                </pre>
                            </div>
                        </div>

                        <TheoryText>
                            <b>Главное правило:</b> каждый файл решает <b>одну задачу</b>. Navbar только про навигацию. Footer только про подвал. Home только про главную страницу. Никаких "простыней" на 500 строк в одном файле.
                        </TheoryText>
                    </section>

                    {/* 2. ПРИНЦИП ПОСТРОЕНИЯ СТРАНИЦЫ */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">2</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Как строится страница: слоеный пирог</h3>

                        <TheoryText>
                            Любая страница нашего сайта будет состоять из <b>трех слоев</b>, которые идут сверху вниз:
                        </TheoryText>

                        <div className="mt-6 space-y-4">
                            <div className="p-5 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
                                <h4 className="text-blue-400 font-bold mb-2">1. Шапка (Navbar)</h4>
                                <p className="text-sm text-slate-300">
                                    Верхняя полоса с логотипом, меню и кнопкой входа. Она <b>одинаковая на всех страницах</b> и "прилипает" к верху при прокрутке.
                                </p>
                            </div>
                            <div className="p-5 bg-purple-500/10 border border-purple-500/20 rounded-2xl">
                                <h4 className="text-purple-400 font-bold mb-2">2. Основной контент (Main)</h4>
                                <p className="text-sm text-slate-300">
                                    Всё, что между шапкой и подвалом. На главной странице — это баннер с заголовком. На странице каталога — сетка товаров. Контент меняется в зависимости от страницы.
                                </p>
                            </div>
                            <div className="p-5 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                                <h4 className="text-emerald-400 font-bold mb-2">3. Подвал (Footer)</h4>
                                <p className="text-sm text-slate-300">
                                    Нижняя полоса с копирайтом. Тоже <b>одинаковая на всех страницах</b>.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <CodeSnippet language="jsx" code={`// Так выглядит ЛЮБАЯ страница в нашем приложении:
<>
  <Navbar />        {/* Шапка — всегда сверху */}
  <main>
    {/* Здесь уникальный контент страницы */}
    {/* Например: баннер, карточки товаров, форма логина */}
  </main>
  <Footer />        {/* Подвал — всегда снизу */}
</>`} />
                        </div>

                        <div className="mt-6">
                            <InfoPanel title="Важное наблюдение">
                                <p className="text-sm text-slate-300">
                                    Navbar и Footer одинаковые для всех страниц. Поэтому мы <b>не копируем</b> их код на каждую страницу, а выносим в отдельные компоненты и просто импортируем. Изменили Navbar в одном файле — он обновился на всех страницах автоматически.
                                </p>
                            </InfoPanel>
                        </div>
                    </section>

                    {/* 3. РАЗБОР NAVBAR */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">3</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Компонент Navbar: Послойный разбор</h3>

                        <TheoryText>
                            Шапка сайта — самый сложный из базовых компонентов. Разберем его по слоям: внешняя оболочка, ограничитель ширины, flex-контейнер с тремя зонами.
                        </TheoryText>

                        <div className="mt-6 space-y-6">
                            <div>
                                <h4 className="text-blue-400 font-bold mb-3 text-lg">Слой 1: Внешняя оболочка (nav)</h4>
                                <TheoryText>
                                    Самый внешний тег — <code className="text-blue-300">&lt;nav&gt;</code>. Это семантический тег, который говорит браузеру и поисковикам: "здесь навигация". Мы используем его вместо div для лучшей доступности.
                                </TheoryText>
                                <CodeSnippet language="jsx" code={`<nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
  {/* Всё содержимое шапки */}
</nav>`} />
                                <div className="mt-3 p-4 bg-slate-900 rounded-xl text-xs space-y-2">
                                    <p><code className="text-green-400">bg-white/80</code> — белый фон с 80% непрозрачностью (слегка просвечивает)</p>
                                    <p><code className="text-green-400">backdrop-blur-md</code> — размывает фон позади шапки (эффект матового стекла)</p>
                                    <p><code className="text-green-400">sticky top-0</code> — шапка "прилипает" к верху экрана при прокрутке страницы вниз</p>
                                    <p><code className="text-green-400">z-50</code> — шапка всегда поверх остального контента (иначе карточки будут "наезжать" на меню)</p>
                                    <p><code className="text-green-400">border-b border-gray-100</code> — тонкая серая линия снизу (визуально отделяет шапку от контента)</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-blue-400 font-bold mb-3 text-lg">Слой 2: Ограничитель ширины (div)</h4>
                                <TheoryText>
                                    Этот div ограничивает максимальную ширину контента и центрирует его. Без него меню "расползлось" бы на весь экран на широких мониторах.
                                </TheoryText>
                                <CodeSnippet language="jsx" code={`<div className="max-w-7xl mx-auto px-4">
  {/* Содержимое не шире 1280px и по центру */}
</div>`} />
                                <div className="mt-3 p-4 bg-slate-900 rounded-xl text-xs space-y-2">
                                    <p><code className="text-green-400">max-w-7xl</code> — максимальная ширина 1280px (7xl в Tailwind)</p>
                                    <p><code className="text-green-400">mx-auto</code> — автоматические отступы слева и справа → центрирование</p>
                                    <p><code className="text-green-400">px-4</code> — отступы 16px слева и справа (чтобы на мобильных контент не прилипал к краям)</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-blue-400 font-bold mb-3 text-lg">Слой 3: Flex-контейнер с тремя зонами</h4>
                                <TheoryText>
                                    Внутри ограничителя — flex-контейнер, который делит шапку на три зоны по горизонтали и выравнивает их по центру вертикали.
                                </TheoryText>
                                <CodeSnippet language="jsx" code={`<div className="flex justify-between items-center h-20">
  {/* ЗОНА 1: Логотип (слева) */}
  <div>...</div>
  
  {/* ЗОНА 2: Меню (по центру) */}
  <div>...</div>
  
  {/* ЗОНА 3: Кнопка входа (справа) */}
  <div>...</div>
</div>`} />
                                <div className="mt-3 p-4 bg-slate-900 rounded-xl text-xs space-y-2">
                                    <p><code className="text-green-400">flex</code> — включает flex-контейнер (дочерние div'ы встанут в строку)</p>
                                    <p><code className="text-green-400">justify-between</code> — расталкивает три зоны: первая уходит влево, последняя вправо, средняя — по центру</p>
                                    <p><code className="text-green-400">items-center</code> — выравнивает все три зоны по центру вертикали (чтобы логотип и кнопка были на одной линии)</p>
                                    <p><code className="text-green-400">h-20</code> — фиксированная высота шапки 80px</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 4. РАЗБОР FOOTER */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">4</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Компонент Footer: Минимализм и функциональность</h3>

                        <TheoryText>
                            Подвал сайта — самый простой компонент. Его задача: быть в самом низу, содержать копирайт и базовую информацию. Главный секрет — класс <code className="text-blue-300">mt-auto</code>, который "прижимает" подвал к низу экрана, даже если контента на странице мало.
                        </TheoryText>

                        <CodeSnippet language="jsx" code={`<footer className="bg-slate-50 border-t border-gray-200 py-8 mt-auto">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      
      {/* Логотип в футере */}
      <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
        <span className="font-bold text-slate-700 tracking-tight">
          МОЙ<span className="text-green-600">САЙТ</span>
        </span>
      </div>

      {/* Копирайт */}
      <p className="text-slate-400 text-sm font-medium">
        © 2026 МойСайт. Все права защищены.
      </p>

    </div>
  </div>
</footer>`} />

                        <div className="mt-6 p-4 bg-slate-900 rounded-xl text-xs space-y-2">
                            <p className="text-white font-bold mb-2">Ключевые классы Footer:</p>
                            <p><code className="text-green-400">mt-auto</code> — <b>волшебный класс!</b> В flex-контейнере (которым является body или main) он "выталкивает" футер в самый низ. Если контента мало — футер всё равно будет внизу экрана, а не "висеть" посередине.</p>
                            <p><code className="text-green-400">flex-col md:flex-row</code> — на мобильных (по умолчанию) элементы в колонку, на планшетах (md:) — в строку</p>
                            <p><code className="text-green-400">justify-between items-center</code> — логотип слева, копирайт справа, оба по центру вертикали</p>
                        </div>
                    </section>

                    {/* 5. РАЗБОР HERO (БАННЕР) */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">5</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Компонент Hero: Баннер на главной странице</h3>

                        <TheoryText>
                            Hero-секция (или баннер) — это первое, что видит пользователь. Это большой блок с фоновой картинкой, заголовком, описанием и кнопкой. Разберем его по слоям — от фона до текста.
                        </TheoryText>

                        <div className="mt-6 space-y-6">
                            <div>
                                <h4 className="text-blue-400 font-bold mb-3 text-lg">Слой 1: Внешний контейнер</h4>
                                <CodeSnippet language="jsx" code={`<section className="relative w-full h-[600px] rounded-[48px] overflow-hidden shadow-2xl">
  {/* Картинка, затемнение, текст */}
</section>`} />
                                <div className="mt-3 p-4 bg-slate-900 rounded-xl text-xs space-y-2">
                                    <p><code className="text-green-400">relative</code> — делает секцию "якорем" для абсолютного позиционирования дочерних элементов (картинка и текст будут позиционироваться относительно неё)</p>
                                    <p><code className="text-green-400">w-full</code> — ширина 100% родительского контейнера</p>
                                    <p><code className="text-green-400">h-[600px]</code> — высота ровно 600 пикселей (квадратные скобки позволяют задать произвольное значение)</p>
                                    <p><code className="text-green-400">rounded-[48px]</code> — сильное скругление углов (48px, можно менять)</p>
                                    <p><code className="text-green-400">overflow-hidden</code> — обрезает всё, что выходит за скругленные углы (чтобы картинка не "вылезала")</p>
                                    <p><code className="text-green-400">shadow-2xl</code> — большая тень под баннером</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-blue-400 font-bold mb-3 text-lg">Слой 2: Фоновая картинка</h4>
                                <CodeSnippet language="jsx" code={`<img
  src={heroImage}
  className="absolute inset-0 w-full h-full object-cover"
  alt="Main Banner"
/>`} />
                                <div className="mt-3 p-4 bg-slate-900 rounded-xl text-xs space-y-2">
                                    <p><code className="text-green-400">absolute inset-0</code> — растягивает картинку на весь родительский контейнер (inset-0 = top:0, right:0, bottom:0, left:0)</p>
                                    <p><code className="text-green-400">w-full h-full</code> — ширина и высота 100% родителя</p>
                                    <p><code className="text-green-400">object-cover</code> — картинка заполняет весь контейнер, обрезая лишнее, сохраняя пропорции (как background-size: cover в CSS)</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-blue-400 font-bold mb-3 text-lg">Слой 3: Затемнение для читаемости текста</h4>
                                <CodeSnippet language="jsx" code={`<div className="absolute inset-0 bg-black/10"></div>`} />
                                <div className="mt-3 p-4 bg-slate-900 rounded-xl text-xs space-y-2">
                                    <p><code className="text-green-400">absolute inset-0</code> — растягивает затемнение на всю секцию</p>
                                    <p><code className="text-green-400">bg-black/10</code> — черный цвет с 10% непрозрачностью (число после слеша — прозрачность: /10 = 10%, /50 = 50%)</p>
                                    <p className="text-yellow-400 mt-2">Мы поместили затемнение ПЕРЕД текстом, но ПОСЛЕ картинки в коде. Порядок элементов в HTML определяет, что будет сверху: кто ниже в коде — тот выше визуально.</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-blue-400 font-bold mb-3 text-lg">Слой 4: Текстовый блок на стеклянной плашке</h4>
                                <TheoryText>
                                    Текст размещается поверх картинки. Мы используем <b>абсолютное позиционирование</b> и <b>стеклянную плашку</b> (glassmorphism) для лучшей читаемости.
                                </TheoryText>
                                <CodeSnippet language="jsx" code={`<div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 w-[calc(100%-3rem)] md:w-[540px]">
  
  {/* Стеклянная плашка под текст */}
  <div className="relative overflow-hidden rounded-[40px] p-8 md:p-12 
                  border border-white/30 bg-white/20 backdrop-blur-[6px] 
                  shadow-[0_8px_32px_0_rgba(31,38,135,0.2)]">
    
    {/* Заголовок, описание, кнопка — внутри плашки */}
    
  </div>
</div>`} />
                                <div className="mt-3 p-4 bg-slate-900 rounded-xl text-xs space-y-2">
                                    <p className="text-white font-bold">Позиционирование текстового блока:</p>
                                    <p><code className="text-green-400">absolute</code> — элемент "вырван" из потока и позиционируется относительно родителя с relative</p>
                                    <p><code className="text-green-400">left-6 md:left-12</code> — отступ слева: 24px на мобильных, 48px на планшетах</p>
                                    <p><code className="text-green-400">top-1/2</code> — верхний край элемента на середине родителя</p>
                                    <p><code className="text-green-400">-translate-y-1/2</code> — сдвиг вверх на 50% собственной высоты (чтобы элемент был точно по центру вертикали, а не "съезжал" вниз)</p>
                                    <p><code className="text-green-400">w-[calc(100%-3rem)] md:w-[540px]</code> — на мобильных почти на всю ширину, на десктопах — фиксированная ширина 540px</p>
                                </div>
                                <div className="mt-3 p-4 bg-slate-900 rounded-xl text-xs space-y-2">
                                    <p className="text-white font-bold">Стеклянная плашка (glassmorphism):</p>
                                    <p><code className="text-green-400">bg-white/20</code> — белый фон с 20% непрозрачностью (полупрозрачный)</p>
                                    <p><code className="text-green-400">backdrop-blur-[6px]</code> — размывает всё, что находится позади плашки (6px — сила размытия)</p>
                                    <p><code className="text-green-400">border border-white/30</code> — тонкая белая полупрозрачная рамка</p>
                                    <p><code className="text-green-400">shadow-[0_8px_32px_0_rgba(31,38,135,0.2)]</code> — кастомная тень (можно задать любые значения в квадратных скобках)</p>
                                    <p><code className="text-green-400">rounded-[40px]</code> — скругление 40px</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-blue-400 font-bold mb-3 text-lg">Слой 5: Контент внутри плашки</h4>
                                <CodeSnippet language="jsx" code={`{/* Мини-заголовок с иконкой */}
<div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs mb-4">
  <Sparkles size={14} />
  <span>Твой личный сад начинается здесь</span>
</div>

{/* Главный заголовок */}
<h1 className="text-white text-4xl md:text-6xl font-black leading-[1.1] mb-6">
  Сделай свой <br />
  <span className="text-green-400">дом живым</span>
</h1>

{/* Описание */}
<p className="text-white text-base md:text-lg mb-10 leading-relaxed font-medium">
  Широкий ассортимент растений: от самых редких до обычных неприхотливых в уходе. Найди свое растение
</p>

{/* Кнопка */}
<button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl 
                   font-bold text-lg shadow-xl shadow-green-500/30 transition-all 
                   hover:-translate-y-1 active:scale-95 flex items-center gap-2">
  В каталог
  <ArrowRight size={20} />
</button>`} />
                                <div className="mt-3 p-4 bg-slate-900 rounded-xl text-xs space-y-2">
                                    <p className="text-white font-bold">Текстовая иерархия в баннере:</p>
                                    <p><code className="text-green-400">text-xs uppercase tracking-widest</code> — мини-заголовок: самый мелкий, все заглавные, широкие буквы</p>
                                    <p><code className="text-green-400">text-4xl md:text-6xl font-black leading-[1.1]</code> — главный заголовок: огромный, максимально жирный, плотный межстрочный</p>
                                    <p><code className="text-green-400">text-base md:text-lg leading-relaxed</code> — описание: читаемый размер, комфортный межстрочный</p>
                                    <p className="text-white font-bold mt-3">Кнопка (разбор):</p>
                                    <p><code className="text-green-400">hover:-translate-y-1</code> — при наведении кнопка поднимается на 4px вверх (визуальный эффект "всплытия")</p>
                                    <p><code className="text-green-400">shadow-green-500/30</code> — зеленая тень (цветная тень под цвет кнопки)</p>
                                    <p><code className="text-green-400">flex items-center gap-2</code> — иконка ArrowRight и текст "В каталог" в строку с отступом 8px</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 6. APP.JSX — КАК ВСЁ СОБИРАЕТСЯ */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">6</div>
                        <h3 className="text-2xl font-bold text-white mb-6">App.jsx: Сборка страницы из компонентов</h3>

                        <TheoryText>
                            Теперь самое важное — как собрать все компоненты вместе. App.jsx — это "дирижер", который говорит: "сверху Navbar, потом страница Home, потом Footer". Обратите внимание на структуру: Navbar и Footer всегда видны, а между ними — контент текущей страницы.
                        </TheoryText>

                        <CodeSnippet language="jsx" code={`import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

function App() {
  return (
    // Самый внешний контейнер — flex-колонка на всю высоту экрана
    <div className="flex flex-col min-h-screen">
      
      {/* ШАПКА — всегда сверху, на всех страницах */}
      <Navbar />

      {/* ОСНОВНОЙ КОНТЕНТ — flex-grow заставляет этот блок занимать всё доступное пространство */}
      <main className="flex-grow">
        <Home />
      </main>

      {/* ПОДВАЛ — всегда снизу, на всех страницах */}
      <Footer />

    </div>
  );
}

export default App;`} />

                        <div className="mt-6">
                            <InfoPanel title="Магия flex-grow и min-h-screen">
                                <ul className="space-y-2 text-sm text-slate-300">
                                    <li>• <code className="text-green-400">min-h-screen</code> — минимальная высота всего приложения = 100% высоты экрана. Если контента мало — страница всё равно займет весь экран.</li>
                                    <li>• <code className="text-green-400">flex flex-col</code> — дочерние элементы (Navbar, main, Footer) идут в колонку сверху вниз.</li>
                                    <li>• <code className="text-green-400">flex-grow</code> у main — этот блок "растянется" и займет всё свободное пространство между Navbar и Footer. Именно это прижимает Footer к низу, даже если контента мало.</li>
                                </ul>
                            </InfoPanel>
                        </div>

                        <TheoryText>
                            <b>Представьте резинку:</b> Navbar сверху (фиксированный размер), Footer снизу (фиксированный размер), а main между ними растягивается как резинка, заполняя пустоту. Если контента много — main становится большим. Если мало — всё равно Footer внизу благодаря mt-auto в самом Footer.
                        </TheoryText>
                    </section>

                    {/* 7. ИТОГ */}
                    <section className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-3xl">
                        <h3 className="text-2xl font-bold text-white mb-6">Итог: Что мы изучили в этой лекции</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div className="p-4 bg-[#020617] rounded-xl">
                                <p className="text-emerald-400 font-bold mb-2">Структура проекта:</p>
                                <ul className="space-y-1 text-slate-300">
                                    <li>• components/layout — шапка и подвал</li>
                                    <li>• pages — страницы (Home, Shop, Login...)</li>
                                    <li>• Каждый файл = одна задача</li>
                                    <li>• Не копируем Navbar на каждой странице</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-[#020617] rounded-xl">
                                <p className="text-emerald-400 font-bold mb-2">Компоненты:</p>
                                <ul className="space-y-1 text-slate-300">
                                    <li>• Navbar: sticky + glass-эффект + 3 зоны</li>
                                    <li>• Footer: mt-auto прижимает к низу</li>
                                    <li>• Hero: картинка + затемнение + стеклянная плашка</li>
                                    <li>• App.jsx: flex-col + flex-grow собирает всё</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </article>
            )}

            {/* --- РЕЖИМ ПРАКТИКИ --- */}
            {mode === 'practice' && (
                <div className="space-y-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Практика: Создание базовых компонентов</h2>

                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">
                            <span className="text-sm">!</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Прежде чем начать</h3>
                        <TheoryText>
                            На прошлом занятии мы создали проект и установили все зависимости. Теперь мы наполним его реальным кодом. <b>Убедитесь, что ваш проект запущен</b> (команда <code className="text-blue-300">npm run dev</code> в терминале), чтобы сразу видеть результат.
                        </TheoryText>
                        <TheoryText>
                            Все файлы создаем в папке <code className="text-blue-300">src/</code>. Структуру папок <code className="text-blue-300">components/layout/</code> и <code className="text-blue-300">pages/</code> нужно создать вручную (ПКМ → New → Directory).
                        </TheoryText>
                    </section>

                    {/* ШАГ 1: FOOTER */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">1</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Создаем Footer (Подвал)</h3>
                        <div className="mb-4">
                            <span className="font-mono text-slate-500 text-sm">Файл: src/components/layout/Footer.jsx</span>
                        </div>
                        <TheoryText>
                            Начинаем с самого простого компонента — подвала. В нем нет сложной логики, только верстка. Создайте папки <code className="text-blue-300">components/layout/</code> и файл <code className="text-blue-300">Footer.jsx</code>.
                        </TheoryText>

                        <CodeSnippet language="jsx" code={`const Footer = () => {
  return (
    /* ВНЕШНИЙ КОНТЕЙНЕР:
       bg-slate-50 — светло-серый фон
       border-t — тонкая линия сверху (отделяет от контента)
       py-8 — отступы сверху и снизу 32px
       mt-auto — прижимает футер к низу, если контента мало */
    <footer className="bg-slate-50 border-t border-gray-200 py-8 mt-auto">

      /* ОГРАНИЧИТЕЛЬ ШИРИНЫ:
         max-w-7xl — максимальная ширина 1280px
         mx-auto — центрирование
         px-4 — отступы по бокам 16px (для мобильных) */
      <div className="max-w-7xl mx-auto px-4">

        /* FLEX-КОНТЕЙНЕР ДЛЯ ДВУХ ЭЛЕМЕНТОВ:
           flex — элементы в строку
           flex-col md:flex-row — на мобильных в колонку, на планшетах в строку
           justify-between — логотип слева, копирайт справа
           items-center — по центру вертикали
           gap-4 — отступ между элементами 16px */
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* ЛОГОТИП:
              opacity-80 — слегка прозрачный (спокойный, не кричащий)
              hover:opacity-100 — при наведении становится ярче
              transition-opacity — плавное изменение прозрачности */}
          <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
            <span className="font-bold text-slate-700 tracking-tight">
              МОЙ<span className="text-green-600">САЙТ</span>
              {/* Замените "МОЙСАЙТ" на название вашего проекта */}
            </span>
          </div>

          {/* КОПИРАЙТ:
              text-slate-400 — серый текст (не отвлекает внимание)
              text-sm — 14px
              font-medium — средний вес шрифта */}
          <p className="text-slate-400 text-sm font-medium">
            © 2026 МойСайт. Все права защищены.
            {/* Замените год и название на свои */}
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;`} />

                        <InfoPanel title="Что можно изменить под свой проект">
                            <ul className="text-xs text-slate-400 space-y-1">
                                <li>• <b>Название:</b> замените "МОЙСАЙТ" на название вашего проекта</li>
                                <li>• <b>Цвет:</b> <code className="text-green-400">text-green-600</code> можно заменить на ваш фирменный цвет (text-blue-600, text-purple-600 и т.д.)</li>
                                <li>• <b>Год:</b> поставьте текущий год</li>
                            </ul>
                        </InfoPanel>
                    </section>

                    {/* ШАГ 2: NAVBAR */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">2</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Создаем Navbar (Шапку)</h3>
                        <div className="mb-4">
                            <span className="font-mono text-slate-500 text-sm">Файл: src/components/layout/Navbar.jsx</span>
                        </div>
                        <TheoryText>
                            Шапка — самый важный компонент. Мы используем <b>Lucide React</b> для иконок. Импортируйте их в начале файла.
                        </TheoryText>

                        <CodeSnippet language="jsx" code={`import { ShoppingCart, User, Leaf } from 'lucide-react';

const Navbar = () => {
  return (
    /* СЛОЙ 1: ВНЕШНЯЯ ОБОЛОЧКА
       bg-white/80 — белый фон 80% непрозрачности
       backdrop-blur-md — размытие фона позади (эффект стекла)
       sticky top-0 — прилипает к верху при прокрутке
       z-50 — всегда поверх остальных элементов
       border-b — тонкая линия снизу */
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      
      {/* СЛОЙ 2: ОГРАНИЧИТЕЛЬ ШИРИНЫ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* СЛОЙ 3: FLEX-КОНТЕЙНЕР С ТРЕМЯ ЗОНАМИ
            flex — элементы в строку
            justify-between — расталкивает зоны по краям
            items-center — выравнивание по центру вертикали
            h-20 — высота шапки 80px */}
        <div className="flex justify-between items-center h-20">

          {/* ЗОНА 1: ЛОГОТИП (ЛЕВО)
              group — маркер для group-hover эффектов */}
          <a href="/" className="flex items-center gap-2 group">
            
            {/* Иконка листа в зеленом квадрате
                group-hover:rotate-12 — при наведении на логотип иконка поворачивается на 12 градусов
                transition-transform duration-300 — плавная анимация 300мс */}
            <div className="bg-green-500 p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
              <Leaf className="text-white w-6 h-6" />
            </div>

            {/* Текст логотипа
                text-2xl — размер 24px
                font-black — максимально жирный
                tracking-tighter — сжатые буквы (экономит место) */}
            <span className="text-2xl font-black tracking-tighter text-slate-800">
              МОЙ<span className="text-green-500">САЙТ</span>
              {/* Замените на название вашего проекта */}
            </span>
          </a>

          {/* ЗОНА 2: МЕНЮ (ЦЕНТР)
              hidden md:flex — скрыто на мобильных, видно на планшетах и шире
              gap-10 — расстояние между ссылками 40px */}
          <div className="hidden md:flex items-center gap-10">
            
            {/* Ссылки меню
                text-slate-600 — серый цвет текста
                hover:text-green-500 — при наведении становится зеленым
                transition-colors — плавная смена цвета
                font-bold — жирный шрифт */}
            <a href="/" className="text-slate-600 hover:text-green-500 transition-colors font-bold">
              Главная
            </a>
            <a href="/shop" className="text-slate-600 hover:text-green-500 transition-colors font-bold">
              Каталог
              {/* Если у вас другой раздел — переименуйте */}
            </a>
            <a href="/about" className="text-slate-600 hover:text-green-500 transition-colors font-bold">
              О нас
            </a>
          </div>

          {/* ЗОНА 3: ИКОНКИ И КНОПКА (ПРАВО)
              flex — элементы в строку
              items-center — по центру вертикали
              gap-6 — расстояние между элементами 24px */}
          <div className="flex items-center gap-6">
            
            {/* Иконка корзины со счетчиком
                relative — якорь для абсолютного позиционирования счетчика
                cursor-pointer — курсор-рука при наведении
                group — маркер для group-hover */}
            <div className="relative cursor-pointer group">
              <ShoppingCart size={22} className="text-slate-700 group-hover:text-green-500 transition-colors" />
              
              {/* Счетчик товаров
                  absolute — позиционируется относительно иконки корзины
                  -top-2 -right-2 — выходит за границы иконки (отрицательные отступы)
                  bg-green-500 — зеленый кружок
                  w-5 h-5 — размер 20px
                  rounded-full — полностью круглый
                  text-[10px] — очень мелкий текст
                  border-2 border-white — белая обводка (отделяет от иконки) */}
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                0
              </span>
            </div>

            {/* Кнопка Войти
                flex items-center gap-2 — иконка и текст в строку с отступом 8px
                bg-slate-900 — темный фон
                hover:bg-green-600 — при наведении зеленый
                active:scale-95 — при клике сжимается (эффект нажатия)
                transition-all — плавные анимации
                shadow-md — тень */}
            <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-green-600 active:scale-95 transition-all shadow-md">
              <User size={18} />
              Войти
            </button>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;`} />

                        <InfoPanel title="Замечания по Navbar">
                            <ul className="text-xs text-slate-400 space-y-1">
                                <li>• <b>Цвета:</b> замените green-500/green-600 на ваш фирменный цвет</li>
                                <li>• <b>Ссылки:</b> пока это обычные теги &lt;a&gt;. Позже заменим на &lt;Link&gt; из react-router-dom для навигации без перезагрузки</li>
                                <li>• <b>Счетчик корзины:</b> пока статичный (0). Позже подключим к реальным данным</li>
                                <li>• <b>Мобильное меню:</b> сейчас ссылки скрыты на телефонах. Позже можно добавить бургер-меню</li>
                            </ul>
                        </InfoPanel>
                    </section>

                    {/* ШАГ 3: HOME */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">3</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Создаем главную страницу (Home)</h3>
                        <div className="mb-4">
                            <span className="font-mono text-slate-500 text-sm">Файл: src/pages/Home.jsx</span>
                        </div>
                        <TheoryText>
                            Главная страница содержит Hero-баннер с фоновой картинкой. <b>Важно:</b> картинку <code className="text-blue-300">hero-banner.png</code> нужно заранее положить в папку <code className="text-blue-300">src/assets/home/</code>.
                        </TheoryText>

                        <CodeSnippet language="jsx" code={`import { Sparkles, ArrowRight } from 'lucide-react';

/* ИМПОРТ КАРТИНКИ:
   Убедитесь, что файл существует: src/assets/home/hero-banner.png
   Если картинки нет — создайте папку assets/home/ и положите любую картинку */
import heroImage from '../assets/home/hero-banner.png';

const Home = () => {
  return (
    /* ВНЕШНИЙ КОНТЕЙНЕР СТРАНИЦЫ:
       max-w-[1260px] — максимальная ширина 1260px (чуть уже стандартных 1280)
       mx-auto — центрирование
       px-4 — отступы по бокам для мобильных
       pt-6 — отступ сверху 24px
       pb-20 — отступ снизу 80px */
    <div className="max-w-[1260px] mx-auto px-4 pt-6 pb-20">

      {/* HERO-СЕКЦИЯ (БАННЕР):
          relative — "якорь" для абсолютного позиционирования внутри
          w-full — на всю ширину родителя
          h-[600px] — высота 600px
          rounded-[48px] — скругленные углы 48px
          overflow-hidden — обрезает картинку по скруглению
          shadow-2xl — большая тень */}
      <section className="relative w-full h-[600px] rounded-[48px] overflow-hidden shadow-2xl">
       
        {/* ФОНОВАЯ КАРТИНКА:
            absolute inset-0 — растягивается на всю hero-секцию
            w-full h-full — 100% ширины и высоты
            object-cover — заполняет без искажений */}
        <img
          src={heroImage}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Main Banner"
        />

        {/* ЗАТЕМНЕНИЕ:
            absolute inset-0 — растягивается на всю hero-секцию
            bg-black/10 — черный цвет с 10% прозрачности
            Помещено ПОСЛЕ картинки в коде → отображается ПОВЕРХ картинки */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* ТЕКСТОВЫЙ БЛОК:
            absolute — позиционируется относительно hero-секции
            left-6 md:left-12 — отступ слева: 24px на мобилках, 48px на планшетах
            top-1/2 — верхняя граница на середине родителя
            -translate-y-1/2 — сдвиг вверх на половину своей высоты (центрирование по вертикали) */}
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 w-[calc(100%-3rem)] md:w-[540px]">
          
          {/* СТЕКЛЯННАЯ ПЛАШКА:
              relative — если внутри что-то absolute (необязательно, но хорошая практика)
              overflow-hidden — обрезает всё за скруглением
              rounded-[40px] — скругление 40px
              p-8 md:p-12 — отступы внутри: 32px на мобилках, 48px на планшетах
              border border-white/30 — белая полупрозрачная рамка
              bg-white/20 — белый фон 20% прозрачности
              backdrop-blur-[6px] — размытие фона позади плашки (6px)
              shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] — кастомная тень (значения: X, Y, размытие, распространение, цвет) */}
          <div className="relative overflow-hidden rounded-[40px] p-8 md:p-12 border border-white/30 bg-white/20 backdrop-blur-[6px] shadow-[0_8px_32px_0_rgba(31,38,135,0.2)]">
            
            {/* МИНИ-ЗАГОЛОВОК С ИКОНКОЙ:
                flex items-center gap-2 — иконка и текст в строку, по центру вертикали, отступ 8px
                text-white — белый текст
                font-bold uppercase — жирный, все заглавные
                tracking-widest — широкое межбуквенное расстояние
                text-xs — размер 12px
                mb-4 — отступ снизу 16px */}
            <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs mb-4">
              <Sparkles size={14} />
              <span>Твой личный сад начинается здесь</span>
              {/* Замените текст на свой слоган */}
            </div>

            {/* ГЛАВНЫЙ ЗАГОЛОВОК:
                text-white — белый цвет
                text-4xl md:text-6xl — 36px на мобилках, 60px на планшетах
                font-black — максимально жирный
                leading-[1.1] — плотный межстрочный интервал (1.1 — почти без отступа)
                mb-6 — отступ снизу 24px */}
            <h1 className="text-white text-4xl md:text-6xl font-black leading-[1.1] mb-6">
              Сделай свой <br />
              {/* Замените текст на заголовок вашего проекта */}
              <span className="text-green-400">дом живым</span>
              {/* Цвет выделенного слова можно изменить (text-blue-400, text-purple-400 и т.д.) */}
            </h1>

            {/* ОПИСАНИЕ:
                text-white — белый цвет
                text-base md:text-lg — 16px на мобилках, 18px на планшетах
                mb-10 — отступ снизу 40px
                leading-relaxed — комфортный межстрочный интервал (1.625)
                font-medium — средний вес шрифта */}
            <p className="text-white text-base md:text-lg mb-10 leading-relaxed font-medium">
              Широкий ассортимент растений: от самых редких до обычных неприхотливых в уходе. Найди свое растение
              {/* Замените описание на текст о вашем проекте */}
            </p>

            {/* КНОПКА:
                bg-green-500 — зеленый фон
                hover:bg-green-600 — при наведении темнее
                text-white px-8 py-4 — белый текст, горизонтальный отступ 32px, вертикальный 16px
                rounded-2xl — скругление 16px
                font-bold text-lg — жирный, 18px
                shadow-xl — большая тень
                shadow-green-500/30 — зеленая тень с 30% прозрачностью
                transition-all — плавные анимации
                hover:-translate-y-1 — при наведении поднимается на 4px вверх
                active:scale-95 — при клике сжимается
                flex items-center gap-2 — иконка и текст в строку */}
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-green-500/30 transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-2">
              В каталог
              <ArrowRight size={20} />
            </button>

            {/* ЕСЛИ ХОТИТЕ, ЧТОБЫ КНОПКА ПЕРЕБРАСЫВАЛА НА СТРАНИЦУ:
                Вместо <button> используйте:
                <a href="/shop" className="...">
                  В каталог
                  <ArrowRight size={20} />
                </a>
                Или с React Router (позже):
                import { useNavigate } from 'react-router-dom';
                const navigate = useNavigate();
                <button onClick={() => navigate('/shop')} className="...">
                  В каталог
                  <ArrowRight size={20} />
                </button>
            */}

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;`} />

                        <InfoPanel title="Что важно проверить">
                            <ul className="text-xs text-slate-400 space-y-1">
                                <li>• <b>Картинка:</b> положите любой файл с названием <code className="text-blue-300">hero-banner.png</code> в папку <code className="text-blue-300">src/assets/home/</code>. Если папок нет — создайте их.</li>
                                <li>• <b>Размер картинки:</b> рекомендуется ширина не менее 1400px, чтобы на больших экранах не размыливалась.</li>
                                <li>• <b>Текст:</b> замените все тексты на соответствующие вашему проекту.</li>
                                <li>• <b>Цвета:</b> замените green-500/green-600 на ваш фирменный цвет во всем файле.</li>
                            </ul>
                        </InfoPanel>
                    </section>

                    {/* ШАГ 4: APP.JSX */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">4</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Собираем всё вместе (App.jsx)</h3>
                        <div className="mb-4">
                            <span className="font-mono text-slate-500 text-sm">Файл: src/App.jsx</span>
                        </div>
                        <TheoryText>
                            Замените содержимое App.jsx. Удалите стандартный шаблон Vite и вставьте наш код, который собирает Navbar, Home и Footer в единую страницу.
                        </TheoryText>

                        <CodeSnippet language="jsx" code={`import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

function App() {
  return (
    /* САМЫЙ ВНЕШНИЙ КОНТЕЙНЕР:
       flex — flex-контейнер
       flex-col — дочерние элементы идут в колонку (сверху вниз)
       min-h-screen — минимальная высота = 100% высоты экрана браузера
       
       Это гарантирует, что Footer будет внизу даже на страницах с малым количеством контента */
    <div className="flex flex-col min-h-screen">
      
      {/* ШАПКА — всегда сверху */}
      <Navbar />

      {/* ОСНОВНОЙ КОНТЕНТ:
          flex-grow — этот блок растягивается и занимает всё пространство между Navbar и Footer
          Именно flex-grow "прижимает" Footer к низу экрана */}
      <main className="flex-grow">
        <Home />
        {/* Позже здесь будут другие страницы (Shop, Login и т.д.) */}
      </main>

      {/* ПОДВАЛ — всегда снизу */}
      <Footer />

    </div>
  );
}

export default App;`} />
                    </section>

                    {/* ШАГ 5: ОЧИСТКА */}
                    <section className="relative pl-12 border-l-2 border-emerald-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">5</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Очистка и финальный запуск</h3>

                        <TheoryText>
                            Удалите лишние файлы, которые создал Vite и которые нам не нужны:
                        </TheoryText>

                        <ul className="space-y-2 text-sm text-slate-300 mt-4 ml-4 list-disc">
                            <li>Удалите файл <code className="text-blue-300">src/App.css</code> (мы используем Tailwind, отдельные CSS-файлы не нужны)</li>
                            <li>В файле <code className="text-blue-300">src/main.jsx</code> удалите строку импорта App.css</li>
                        </ul>

                        <CodeSnippet language="jsx" code={`// main.jsx должно выглядеть так:
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'     // ← только index.css (Tailwind)
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)`} />

                        <div className="mt-8 p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-3xl">
                            <h4 className="text-emerald-400 font-bold mb-4 text-lg">Запуск проекта:</h4>
                            <CodeSnippet language="bash" code="npm run dev" />
                            <TheoryText>
                                Откройте браузер и перейдите по адресу <b>http://localhost:5173</b>. Вы должны увидеть:
                            </TheoryText>
                            <ul className="space-y-2 text-sm text-slate-300 mt-4 ml-4 list-disc">
                                <li>✅ Шапку с логотипом, меню и кнопкой "Войти"</li>
                                <li>✅ Большой баннер с картинкой, заголовком и кнопкой</li>
                                <li>✅ Подвал с копирайтом в самом низу страницы</li>
                            </ul>
                        </div>

                        <div className="mt-6">
                            <InfoPanel title="Если что-то пошло не так">
                                <ul className="space-y-2 text-xs text-slate-400">
                                    <li>• <b>Белый экран:</b> откройте консоль (F12) и посмотрите ошибку. Чаще всего — опечатка в импорте.</li>
                                    <li>• <b>Картинка не отображается:</b> проверьте, что файл лежит по пути <code className="text-yellow-400">src/assets/home/hero-banner.png</code> и называется именно так.</li>
                                    <li>• <b>Tailwind не работает:</b> проверьте <code className="text-yellow-400">vite.config.js</code> и <code className="text-yellow-400">index.css</code> как в предыдущей лекции.</li>
                                    <li>• <b>Ошибка импорта:</b> проверьте названия папок — <code className="text-yellow-400">components/layout/</code>, а не <code className="text-yellow-400">Components/Layout/</code> (регистр важен!).</li>
                                </ul>
                            </InfoPanel>
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
};

export default LessonStructureProject;