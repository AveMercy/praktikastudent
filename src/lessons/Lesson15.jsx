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
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Каталог и Карточки товаров</h2>
                        <TheoryText>
                            На этом этапе мы создадим каталог товаров. Мы создадим универсальную карточку товара, страницу каталога и детальную страницу отдельного растения.
                            <b> Важно:</b> создавайте файлы строго по путям, указанным в заголовках.
                        </TheoryText>
                    </section>

                    {/* ШАГ 1: КАРТОЧКА ТОВАРА */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">1</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Создаем Карточку товара</h3>
                        <div className="mb-4">
                            <span className="text-[16px] font-mono text-slate-500 italic">Файл: src/components/ui/ProductCard.jsx</span>
                        </div>
                        <TheoryText>
                            Эта карточка будет отображать данные одного растения. Она будет просто вызываться на странице с товарами.
                            Нам не нужно будет 10 раз ее заново верстать, она <b>универсальная</b>. Мы просто берем и подставляем наши значения из БД.
                        </TheoryText>
                        <TheoryImage src="/img/less15/1.png"/>


                        <CodeSnippet language="jsx" code={`import React from 'react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  // Бэкенд уже присылает путь с "/uploads/", поэтому берем как есть
  const imageUrl = product.image_url;

  return (
    /* ДИЗАЙН: group - нужен для эффекта при наведении. hover:shadow-[] добавляет красивую тень при наведении. 
       Скругление можно менять: rounded-[32px] -> rounded-xl */
    <div className="group bg-white rounded-[32px] p-4 border border-transparent hover:border-green-100 hover:shadow-[0_20px_50px_rgba(70,163,88,0.1)] transition-all duration-500 flex flex-col h-full">

      {/* ИЗОБРАЖЕНИЕ: aspect-square делает блок всегда квадратным. bg-slate-100 задает серый фон, пока картинка грузится */}
      <div className="relative aspect-square mb-5 overflow-hidden rounded-[24px] bg-slate-100">
        <Link to={\`/product/\${product.id}\`} className="w-full h-full block">
          <img
            src={imageUrl}
            alt={product.name}
            /* ДИЗАЙН: object-cover заполняет весь блок без искажений. group-hover:scale-110 плавно увеличивает фото при наведении */
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />
        </Link>

        {/* Бейдж Sale - появляется только если цена меньше 500 */}
        {product.price < 500 && (
          /* ДИЗАЙН: absolute позиционирует бейдж поверх картинки (top-4 left-4 = отступы сверху и слева). bg-orange-500 - цвет фона */
          <div className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-wider">
            Sale
          </div>
        )}
      </div>

      {/* ИНФОРМАЦИЯ О ТОВАРЕ */}
      <div className="flex flex-col flex-grow px-2">
        <div className="flex justify-between items-start mb-1">
          <Link to={\`/product/\${product.id}\`}>
            {/* ДИЗАЙН: line-clamp-1 обрезает длинное название многоточием. hover:text-green-600 можно заменить на свой цвет */}
            <h3 className="font-black text-slate-800 text-lg hover:text-green-600 transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Категория */}
        <p className="text-slate-400 text-sm font-medium mb-4">
          {product.category || 'Комнатное растение'}
        </p>

        {/* Блок с ценой и кнопкой корзины прижат к низу благодаря mt-auto */}
        <div className="mt-auto flex items-center justify-between border-t border-slate-50 pt-4">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Цена</span>
            {/* ДИЗАЙН: text-xl - размер цены. text-green-600 - цвет */}
            <span className="text-xl font-black text-green-600">
              {product.price.toLocaleString()} ₽
            </span>
          </div>

          {/* ДИЗАЙН: Кнопка корзины. active:scale-90 делает эффект физического нажатия (уменьшается клике) */}
          <button className="bg-slate-100 text-slate-900 p-3 rounded-2xl hover:bg-green-500 hover:text-white transition-all duration-300 active:scale-90">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;`} />
                    </section>

                    {/* ШАГ 2: СТРАНИЦА КАТАЛОГА */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">2</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Создаем страницу каталога</h3>
                        <div className="mb-4">
                            <span className="text-[16px] font-mono text-slate-500 italic">Файл: src/pages/Shop.jsx</span>
                        </div>
                        <TheoryText>
                            Здесь будет полноценный магазин: боковая панель с категориями слева и сетка товаров справа. Необязательно, чтобы у вас полностью работали фильтрация и сортировка. Основной минимум: вывод ваших товаров из БД.
                        </TheoryText>
                        <TheoryImage src="/img/less15/2.png"/>

                        <CodeSnippet language="jsx" code={`import { useState, useEffect } from 'react';
import api from '../api/axios';
import ProductCard from '../components/ui/ProductCard';
import { Filter, SlidersHorizontal } from 'lucide-react';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [activeCategory, setActiveCategory] = useState('Все');
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sortBy, setSortBy] = useState('newest');

  const categories = ['Все', 'Домашние', 'Офисные', 'Суккуленты', 'Крупномеры'];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error("Ошибка загрузки:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let result = [...products];
    if (activeCategory !== 'Все') result = result.filter(p => p.category === activeCategory);
    result = result.filter(p => p.price <= maxPrice);
    
    if (sortBy === 'cheap') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'expensive') result.sort((a, b) => b.price - a.price);
    else if (sortBy === 'newest') result.sort((a, b) => b.id - a.id);

    setFilteredProducts(result);
  }, [activeCategory, maxPrice, sortBy, products]);

  if (loading) return <div className="text-center py-20 font-black">Загрузка...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* ДИЗАЙН: flex-col на мобилках (друг под другом), lg:flex-row на ПК (рядом друг с другом) */}
      <div className="flex flex-col lg:flex-row gap-12">

        {/* SIDEBAR: Боковая панель фильтров */}
        {/* ДИЗАЙН: w-full на мобилках, lg:w-72 фиксирует ширину в 288px на ПК */}
        <aside className="w-full lg:w-72 space-y-8">
          <div className="bg-slate-50 p-6 rounded-[32px] border border-slate-100">
            <h2 className="flex items-center gap-2 font-black uppercase tracking-widest text-xs mb-6 text-slate-400">
              <Filter size={16} /> Категории
            </h2>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  /* ДИЗАЙН: Динамические классы. Если категория активна - делаем зеленой (bg-green-600), иначе серой */
                  className={\`w-full text-left px-4 py-3 rounded-2xl font-bold transition-all \${
                    activeCategory === cat
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'text-slate-500 hover:bg-white'
                  }\`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-[32px] border border-slate-100">
            <h2 className="font-black uppercase tracking-widest text-xs mb-6 text-slate-400">Цена до: {maxPrice} ₽</h2>
            <input
              type="range"
              min="0" max="15000" step="100"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              /* ДИЗАЙН: accent-green-600 меняет стандартный синий цвет ползунка браузера на зеленый */
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600"
            />
          </div>
        </aside>

        {/* CONTENT: Основная область с товарами */}
        <main className="flex-grow">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
            <h1 className="text-3xl font-black text-slate-900">
              {activeCategory} <span className="text-slate-300 font-medium">({filteredProducts.length})</span>
            </h1>

            {/* Выпадающий список сортировки */}
            <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-2xl border border-slate-100">
              <SlidersHorizontal size={18} className="ml-2 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent outline-none font-bold text-sm text-slate-700 pr-4 cursor-pointer"
              >
                <option value="newest">Сначала новые</option>
                <option value="cheap">Дешевле</option>
                <option value="expensive">Дороже</option>
              </select>
            </div>
          </div>

          {/* СЕТКА ТОВАРОВ */}
          {filteredProducts.length > 0 ? (
            /* ДИЗАЙН: Сетка! 1 колонка на смартфонах, 2 на планшетах (sm), 3 на больших экранах (xl). gap-8 - отступ между ними */
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center bg-slate-50 rounded-[40px] border-2 border-dashed border-slate-200">
              <p className="text-slate-400 font-bold">Ничего не найдено под такие фильтры</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Shop;`} />
                    </section>

                    {/* ШАГ 3: СТРАНИЦА ТОВАРА */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">3</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Создаем страницу отдельного товара</h3>
                        <div className="mb-4">
                            <span className="text-[16px] font-mono text-slate-500 italic">Файл: src/pages/ProductPage.jsx</span>
                        </div>
                        <TheoryText>
                            Это то, что отображается при нажатии на ваш товар. В этом компоненте мы будем использовать хук <code>useParams</code>, чтобы вытащить ID из адресной строки и запросить данные конкретно этого товара у бэкенда.
                        </TheoryText>
                        <TheoryImage src="/img/less15/3.png"/>
                        <CodeSnippet language="jsx" code={`import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Star, ShieldCheck } from 'lucide-react';
import api from '../api/axios';

const ProductPage = () => {
  const { id } = useParams(); // Вытаскиваем ID товара из URL браузера
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(\`/products/\${id}\`);
        setProduct(response.data);
      } catch (error) {
        console.error("Ошибка загрузки товара:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="h-screen flex items-center justify-center font-bold">Загрузка...</div>;
  if (!product) return <div className="h-screen flex items-center justify-center font-bold">Товар не найден</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Link to="/shop" className="inline-flex items-center gap-2 text-slate-500 hover:text-green-600 mb-8 font-semibold transition-colors">
        <ArrowLeft size={20} />
        Назад в каталог
      </Link>

      {/* ДИЗАЙН: grid-cols-1 на мобилках (одна колонка), lg:grid-cols-2 на ПК (2 колонки: слева фото, справа текст). gap-16 - большое расстояние между ними */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* ИЗОБРАЖЕНИЕ */}
        {/* ДИЗАЙН: h-[400px] md:h-[600px] означает, что высота фото на телефоне 400px, а на планшетах и ПК - 600px */}
        <div className="bg-slate-100 rounded-[48px] overflow-hidden border border-slate-200 shadow-inner h-[400px] md:h-[600px]">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* КОНТЕНТ (Название, цена, описание) */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 text-green-600 font-bold text-sm mb-4 uppercase tracking-widest">
            <Star size={16} fill="currentColor" />
            <span>Хит продаж</span>
          </div>

          {/* ДИЗАЙН: text-4xl на мобилках, md:text-6xl - огромный заголовок на ПК */}
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">{product.name}</h1>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl font-black text-green-600">{product.price} ₽</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">
              В наличии: {product.stock} шт.
            </span>
          </div>

          <p className="text-slate-600 leading-relaxed text-lg mb-10">
            {product.description || "Прекрасное растение для вашего дома."}
          </p>

          {/* Блок добавления в корзину */}
          <div className="flex flex-wrap gap-4">
            {/* Счетчик количества */}
            <div className="flex items-center bg-slate-100 rounded-2xl p-1 border border-slate-200">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="w-12 h-12 flex items-center justify-center font-bold hover:bg-white rounded-xl transition-colors"
              >-</button>
              <span className="w-12 text-center font-black text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="w-12 h-12 flex items-center justify-center font-bold hover:bg-white rounded-xl transition-colors"
              >+</button>
            </div>

            {/* ДИЗАЙН: flex-grow заставляет кнопку занимать всё оставшееся пространство рядом со счетчиком */}
            <button className="flex-grow bg-slate-900 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl transition-all flex items-center justify-center gap-3 active:scale-95">
              <ShoppingCart size={22} />
              Добавить в корзину
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-12 pt-10 border-t border-slate-100">
            <div className="flex items-center gap-3 text-sm font-bold text-slate-500">
              <ShieldCheck className="text-green-500" />
              Гарантия свежести
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;`} />
                    </section>

                    {/* ШАГ 4: ОБНОВЛЕНИЕ APP.JSX */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">4</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Обновляем главный Роутинг</h3>
                        <div className="mb-4">
                            <span className="text-[16px] font-mono text-slate-500 italic">Файл: src/App.jsx</span>
                        </div>
                        <TheoryText>
                            Теперь нам нужно сказать приложению, что у нас появились новые страницы. Обновим файл <code>App.jsx</code>, добавив импорты и маршруты (Routes) для Магазина и Страницы товара.
                        </TheoryText>

                        <CodeSnippet language="jsx" code={`import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'; // Шапка сайта
import Footer from './components/layout/Footer'; // Подвал сайта
import Home from './pages/Home';
import Shop from './pages/Shop'; // Импортируем страницу каталога
import ProductPage from './pages/ProductPage'; // Импортируем страницу товара

function App() {
  return(
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
              {/* Главная страница */}
              <Route path="/" element={<Home />} />
              
              {/* Страница каталога */}
              <Route path="/shop" element={<Shop />} />
              
              {/* Страница конкретного товара (:id будет заменен на номер товара) */}
              <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;`} />
                    </section>

                    {/* ШАГ 5: ЗАПУСК ПРОЕКТА */}
                    <section className="p-8 bg-blue-600/5 border border-blue-500/20 rounded-3xl mt-8">
                        <h3 className="text-xl font-bold text-white mb-4 italic text-blue-400">Порядок запуска проекта</h3>
                        <TheoryText>
                            Теперь, чтобы запустить проект и увидеть ваши товары на сайте, нужно соблюсти строгую последовательность:
                        </TheoryText>
                        <ol className="list-decimal list-inside text-slate-300 space-y-3 mt-4 mb-8 text-sm font-medium">
                            <li>Запустите <b>Open Server</b> (чтобы заработала база данных MySQL).</li>
                            <li>Запустите ваш <b>Backend</b> (сервер на Node.js, который отдает данные). Убедитесь, что
                                нет ошибок в консоли.
                            </li>
                            <li>Только теперь запускайте <b>Frontend</b> (этот React проект) командой <code
                                className="text-blue-300">npm run dev</code>.
                            </li>
                            <li> Видоизмените карточки товара и каталог под ваш проект (цвета, стили, текст).
                            </li>

                        </ol>

                        <InfoPanel title="Важно">
                            Если вам не важны мелочи и некоторые функции — на данном этапе проекта необязательно, чтобы абсолютно всё работало идеально. <b>Главное, что ваши товары успешно отображаются из базы данных.</b>
                        </InfoPanel>

                        <div className="mt-8 pt-6 border-t border-blue-500/10">
                            <h4 className="text-white font-bold mb-3 text-sm">Что можно сделать по желанию (дополнительно):</h4>
                            <ul className="space-y-2 text-xs text-slate-400">
                                <li className="flex items-center gap-2"><span className="text-blue-500">●</span> <b>Корзина:</b> написать логику в Zustand, чтобы кнопка корзины действительно сохраняла товары.</li>
                                <li className="flex items-center gap-2"><span className="text-blue-500">●</span> <b>Фильтры и сортировка:</b> доработать боковую панель в каталоге, добавив больше опций по поиску.</li>
                            </ul>
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
};

export default Lesson10BackendFull;