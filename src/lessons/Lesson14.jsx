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

                    {/* НАПОМИНАНИЕ ПРО ИИ */}
                    <section className="relative pl-12 border-l-2 border-amber-500/30 mb-12">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center font-bold text-white shadow-lg">
                            !
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Работа с нейросетями: Контекст решает всё</h3>
                        <TheoryText>
                            Снова небольшое напоминание о том, как работать с нейронками, если вы их используете.
                            Нейронки часто просто пишут базовый код, никак не связанный с вашим бэком. Поэтому <b>очень важно для контекста обозначить</b>, что вот ваш файл контроллера (<code>controller</code>) и роутера (<code>router</code>) для товаров, например (<code>productController</code> и <code>productRoute</code>).
                        </TheoryText>
                        <TheoryText>
                            После этого ИИ поймет, какие у вас есть операции с этими товарами и какой до них путь. <b>Только тогда</b> он сможет написать соответствующий вашему проекту работоспособный компонент карточки и страницу товаров.
                        </TheoryText>
                        <InfoPanel title="Важно">
                            Вернитесь к этому, когда начнете делать страницу товаров. В остальном, работа нейросети состоит из простой верстки, но ей нужны вводные данные.
                        </InfoPanel>
                    </section>

                    {/* ПЕРЕХОД К ВИЗУАЛУ */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">

                        <h2 className="text-3xl font-bold text-white mb-6">Визуальная часть: Собираем интерфейс</h2>
                        <TheoryText>
                            Вот теперь можно перейти к визуальной части, когда мы наконец сможем увидеть то, что мы делали. Я буду дополнительно прилагать скриншоты к шагам, чтобы вы визуально понимали, что мы делаем.
                        </TheoryText>
                        <TheoryText>
                            <b>Обращайте внимание на комментарии в коде</b>, если вы хотите брать этот код как шаблон и видоизменять. На каждой странице имеется шапка (навигация) и подвал (футер), которые мы можем вызывать одной строчкой для любой страницы, а не прописывать эту шапку 5 раз для 5 разных страниц. Мы создадим их, а затем соберем минимальную Главную страницу для быстрого старта.
                        </TheoryText>
                    </section>

                    {/* ШАГ 1: FOOTER */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div
                            className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">
                            1
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Шаг 1: Подвал сайта (Footer)</h3>
                        <div className="flex items-center gap-4">
                            <div
                                className="p-3 bg-blue-500/10 text-blue-400 rounded-2xl font-mono text-sm">src/components/layout/Footer.jsx
                            </div>
                        </div>
                        <TheoryText>
                            Начнем с простого — подвала сайта. Его задача: быть в самом низу страницы, содержать
                            копирайт и логотип. Здесь мы используем базовую сетку Flexbox. Обратите внимание на
                            класс <code>mt-auto</code> — именно он прижимает футер к низу.
                        </TheoryText>
                        <TheoryText>
                            Измените текст и цвета на соотвествующие вашему проекту.
                        </TheoryText>
                        <TheoryImage src="/img/less14/2.png"/>

                        <CodeSnippet language="jsx" code={`const Footer = () => {
  return (
    /* --- БАЗОВЫЙ КОНТЕЙНЕР ---
       bg-slate-50: Светло-серый фоновый цвет.
       border-t border-gray-200: Добавляет тонкую верхнюю границу-разделитель.
       py-8: Внутренние отступы сверху и снизу (по 32px).
       mt-auto: Заставляет футер всегда прижиматься к низу экрана.
    */
    <footer className="bg-slate-50 border-t border-gray-200 py-8 mt-auto">

      {/* ОГРАНИЧИТЕЛЬ ШИРИНЫ */}
      <div className="max-w-7xl mx-auto px-4">

        {/* СЕТКА (FLEXBOX)
            flex-col md:flex-row: На мобилках в колонку, на планшетах в ряд.
            justify-between: Расталкивает элементы по краям. */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* ЛОГОТИП */}
          <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
            <span className="font-bold text-slate-700 tracking-tight">
              GREEN<span className="text-green-600">SHOP</span>
            </span>
          </div>

          {/* КОПИРАЙТ */}
          <p className="text-slate-400 text-sm font-medium">
            © 2026 GreenShop. Все права защищены.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;`}/>

                    </section>

                    {/* ШАГ 2: NAVBAR */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div
                            className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">
                            2
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Шаг 2: Навигация (Navbar)</h3>
                        <div className="flex items-center gap-4">
                            <div
                                className="p-3 bg-blue-500/10 text-blue-400 rounded-2xl font-mono text-sm">src/components/layout/Navbar.jsx
                            </div>
                        </div>
                        <TheoryText>
                            Шапка должна «прилипать» к верху экрана при скролле. Для этого используем <code>sticky
                            top-0</code>. Для эффекта «стекла»
                            применяется <code>bg-white/80</code> и <code>backdrop-blur-md</code>.
                        </TheoryText>
                        <TheoryText>
                            Измените в соотвествии со своим проектом. Логотип, название, цвета.
                        </TheoryText>
                        <TheoryImage src="/img/less14/3.png"/>

                        <CodeSnippet language="jsx" code={`import { ShoppingCart, User, Leaf } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  // Стили для активной и неактивной ссылок
  const activeStyle = "text-green-500 relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-green-500 transition-all";
  const normalStyle = "text-slate-600 hover:text-green-500 transition-colors relative group";

  return (
    /* sticky top-0: Шапка "прилипает" к верху. 
       z-50: Всегда поверх остального контента. */
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* 1. ЛОГОТИП */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-green-500 p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
              <Leaf className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-800">
              GREEN<span className="text-green-500">SHOP</span>
            </span>
          </Link>

          {/* 2. МЕНЮ (Скрыто на мобилках через hidden) */}
          <div className="hidden md:flex items-center gap-10">
            <NavLink to="/" className={({ isActive }) => isActive ? activeStyle : normalStyle}>Главная</NavLink>
            <NavLink to="/shop" className={({ isActive }) => isActive ? activeStyle : normalStyle}>Каталог</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? activeStyle : normalStyle}>О нас</NavLink>
          </div>

          {/* 3. КОРЗИНА И ВХОД */}
          <div className="flex items-center gap-6">
            <div className="relative cursor-pointer group">
              <ShoppingCart size={22} className="text-slate-700 group-hover:text-green-500 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                0
              </span>
            </div>

            <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-green-600 transition-all shadow-md active:scale-95">
              <User size={18} />
              <Link to="/login">Войти</Link>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;`}/>



                    </section>

                    {/* ШАГ 3: HOME */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div
                            className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">
                            3
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Шаг 3: Минимальная Главная страница</h3>
                        <div className="flex items-center gap-4">
                            <div
                                className="p-3 bg-blue-500/10 text-blue-400 rounded-2xl font-mono text-sm">src/pages/Home.jsx
                            </div>
                        </div>
                        <TheoryText>
                            Пока мы не создали карточки товаров и не подключили API, сделаем красивую заглушку с
                            рекламным баннером. В ней используется библиотека <b>framer-motion</b> для плавной анимации
                            появления текста.
                        </TheoryText>

                        <InfoPanel title="Изображение для баннера">
                            Обратите внимание на строку импорта картинки <code>hero-banner.png</code>. Чтобы код
                            работал, убедитесь, что в папке <b>src/assets/home/</b> лежит любое изображение с таким
                            названием, которое будет служить фоном.
                        </InfoPanel>

                        <CodeSnippet language="jsx" code={`import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Убедитесь, что эта картинка есть в папке!
import heroImage from '../assets/home/hero-banner.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1260px] mx-auto px-4 pt-6 pb-20">

      {/* --- ГЛАВНЫЙ БАННЕР (HERO SECTION) ---
          h-[600px]: Фиксированная высота баннера.
          rounded-[48px]: Сильное скругление углов.
          overflow-hidden: Обрезает картинку, чтобы она не вылезала за углы. */}
      <section className="relative w-full h-[600px] rounded-[48px] overflow-hidden shadow-2xl">
       
       <img
         src={heroImage}
         className="absolute inset-0 w-full h-full object-cover"
         alt="Main Banner"
       />

        {/* Легкое затемнение фона для читаемости текста */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* АНИМИРОВАННЫЙ БЛОК С ТЕКСТОМ (framer-motion) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 w-[calc(100%-3rem)] md:w-[540px]"
        >
          {/* СТЕКЛЯННАЯ ПЛАШКА
              bg-white/20 + backdrop-blur-[6px]: Эффект матового стекла под текстом. */}
          <div className="relative overflow-hidden rounded-[40px] p-8 md:p-12 border border-white/30 bg-white/20 backdrop-blur-[6px] shadow-[0_8px_32px_0_rgba(31,38,135,0.2)]">
            <div className="relative z-10">
              
              <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs mb-4">
                <Sparkles size={14} />
                <span>Твой личный сад начинается здесь</span>
              </div>

              <h1 className="text-white text-4xl md:text-6xl font-black leading-[1.1] mb-6">
                Сделай свой <br />
                <span className="text-green-400">дом живым</span>
              </h1>

              <p className="text-white text-base md:text-lg mb-10 leading-relaxed font-medium">
                Широкий ассортимент растений: от самых редких до обычных неприхотливых в уходе. Найди свое растение
              </p>

              {/* Кнопка перехода в каталог */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/shop')}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-green-500/30 transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-2"
                >
                  В каталог
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;`}/>
Главная с навигацией и футером:
                        <TheoryImage src="/img/less14/1.png"/>

                    </section>

                    {/* ШАГ 4: ЗАПУСК ПРИЛОЖЕНИЯ */}
                    <section className="space-y-6 mt-12 pt-8 border-t border-emerald-500/30">
                        <div className="flex items-center gap-4">

                            <h2 className="text-3xl font-black text-white">Запуск</h2>
                        </div>

                        <TheoryText>
                            У нас готова архитектура, настроены роуты (в <code>App.jsx</code>), и теперь есть визуальные компоненты. Самое время посмотреть, как это выглядит в браузере.
                        </TheoryText>

                        <div className="p-8 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl">
                            <h4 className="text-xl font-bold text-white mb-4">Как запустить проект:</h4>
                            <ol className="list-decimal list-inside space-y-4 text-slate-300">
                                <li> Откройте терминал и убедитесь, что терминал открыт в папке client. Если нет введите
                                    команду: <code>cd client</code>.
                                </li>
                                <li>Введите команду для старта локального сервера Vite:</li>
                            </ol>
                            <div className="mt-4 mb-6">
                                <CodeSnippet language="bash" code="npm run dev"/>
                            </div>
                            <p className="text-slate-300">
                                3. В терминале появится локальная ссылка (обычно <b>http://localhost:5173</b>). Нажмите
                                на неё, чтобы открыть сайт в браузере.

                            </p>

                        </div>
                        <TheoryText>
                            На данном этапе у нас уже есть главная, шапка и подвал. Можете привести их к тому
                            виду, который соотвествуеет теме вашего проекта. Изменения в коде будут отображаться в браузере сразу после изменения и сохранения кода (Ctrl+S)
                        </TheoryText>
                    </section>
                </div>
            )}
        </div>
    );
};

export default Lesson10BackendFull;