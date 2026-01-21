import React from 'react';
import {
    TheoryText,
    TheoryImage,
    CodeSnippet,
    FileDownload,
    InfoPanel,
    ImageCarousel,
    ImageGrid
} from '../components/UIComponents';

const pract = [
    { url: "/img/less5/12.png" },
    { url: "/img/less5/13.png" },
    { url: "/img/less5/14.png" },


];
const pract2 = [
    { url: "/img/less5/15.png" },
    { url: "/img/less5/16.png" }

];
const pract3 = [
    { url: "/img/less5/18.png" },
    { url: "/img/less5/19.png" },

    { url: "/img/less5/20.png" }

];
const Lesson5 = ({ mode }) => {
    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            {/* --- РЕЖИМ ТЕОРИИ --- */}
            {mode === 'theory' && (
                <article>
                    <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                        Лекция 5: Профессиональный UI-дизайн в Figma для разработчиков
                    </h2>

                    <TheoryText>
                        Дизайн в вебе — это не творческий хаос, это система. Мы будем учиться проектировать так, чтобы потом ваш CSS-код писался «сам собой».
                    </TheoryText>

                    {/* 1. ИНТЕРФЕЙС FIGMA */}
                    <section className="mb-12 mt-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">1. Интерфейс Figma: Где смотреть код?</h3>
                        <TheoryText>
                           В Figma есть три главные зоны:
                        </TheoryText>

                        <div className="space-y-6 mt-6">
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-blue-400 font-bold mb-2  decoration-blue-500/20 underline-offset-4">Layers (Слои) слева</h4>
                                <TheoryText className="text-sm">
                                    Это ваша структура документа. Если вы правильно называете слои (например, Header, Button, Card), это фактически дерево вашего будущего HTML.
                                </TheoryText>
                                <div>
                                <TheoryImage src="/img/less5/1.png">
                                </TheoryImage>
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-blue-400 font-bold mb-2  decoration-blue-500/20 underline-offset-4">Frame
                                    (Холст) в центре</h4>
                                <TheoryText className="text-sm">
                                    "Холст" для расположения ваших элементов.
                                    <div>
                                        <TheoryImage src="/img/less5/2.png">
                                        </TheoryImage>
                                    </div>
                                </TheoryText>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                            <h4 className="text-blue-400 font-bold mb-2  decoration-blue-500/20 underline-offset-4">Inspect Panel (Панель свойств) справа</h4>
                                <TheoryText className="text-sm">
                                    Показывает свойства элементов.
                                    <div>
                                        <TheoryImage src="/img/less5/3.png">
                                        </TheoryImage>
                                    </div>
                                </TheoryText>
                            </div>
                        </div>
                    </section>

                    {/* 2. СХОДСТВО FIGMA И CSS */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">2. Сходство Figma и CSS: Основные понятия</h3>
                        <TheoryText>
                            Figma и веб-верстка работают по одним и тем же математическим законам.
                        </TheoryText>

                        <div className="space-y-8 mt-6">
                            <div>
                                <h4 className="text-lg font-bold text-white mb-3 italic">Box Model (Блочная модель)</h4>
                                <TheoryText>В вебе каждый элемент — это прямоугольник. В Figma это тоже так.</TheoryText>
                                <ul className="mt-3 space-y-2 ml-4 text-sm text-slate-400">
                                    <li><strong className="text-blue-400">• Paddings (Внутренние
                                        отступы):</strong> Пространство внутри элемента (например, от текста до края
                                        кнопки). В Figma они задаются в настройках Auto Layout.
                                        <div>
                                            <TheoryImage src="/img/less5/4.png">
                                            </TheoryImage>
                                        </div></li>
                                    <li><strong className="text-blue-400">• Margins (Внешние
                                        отступы):</strong> Расстояние между соседними элементами. В Figma вы видите их,
                                        когда зажимаете клавишу Alt и наводите на другой объект.
                                        <div>
                                            <TheoryImage src="/img/less5/5.png">
                                            </TheoryImage>
                                        </div></li>
                                    <li><strong className="text-blue-400">• Border Radius (Скругление):</strong> В Figma
                                        это иконка угла. В CSS — свойство border-radius.
                                        <div>
                                            <TheoryImage src="/img/less5/6.png">
                                            </TheoryImage>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 rounded-2xl bg-blue-600/5 border border-blue-500/20">
                            <h4 className="text-lg font-bold text-white mb-3 italic underline decoration-blue-500/30">Auto Layout = Flexbox</h4>
                                <TheoryText className="mb-4 text-sm font-bold">Это самая важная параллель. Если вы включаете Auto Layout, вы создаете display: flex.</TheoryText>
                                <ul className="space-y-3 ml-4 text-sm text-slate-300">
                                    <li><span
                                        className="text-blue-400 font-bold">Direction (Стрелочки):</span> Выбираете, как
                                        пойдут элементы: в ряд (flex-direction: row) или в колонку (column).
                                        <div>
                                            <TheoryImage src="/img/less5/7.png">
                                            </TheoryImage>
                                        </div></li>
                                    <li><span className="text-blue-400 font-bold decoration-blue-500/50 ">Gap (Расстояние между):</span> В
                                        CSS это свойство gap. Оно позволяет задать одинаковое расстояние между всеми
                                        элементами внутри блока одним числом. <div>
                                            <TheoryImage src="/img/less5/8.png">
                                            </TheoryImage>
                                        </div></li>
                                    <li><span
                                        className="text-blue-400 font-bold">Alignment (Выравнивание):</span> Квадратик с
                                        точками в Figma — это ваши justify-content и align-items.
                                        <div>
                                            <TheoryImage src="/img/less5/9.png">
                                            </TheoryImage>
                                        </div></li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 3. ТИПОГРАФИКА */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6">3. Типографика: Больше чем просто буквы</h3>
                        <TheoryText>Шрифты в вебе ведут себя строго. При настройке текста в Figma следите за:</TheoryText>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-sm text-slate-300">
                                <strong className="text-white block mb-1">Font Family</strong> Используйте шрифты, доступные в Google Fonts.
                            </div>
                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-sm text-slate-300">
                                <strong className="text-white block mb-1">Font Weight</strong> Жирность (Regular = 400, Medium = 500, Bold = 700). В CSS используем цифры.
                            </div>
                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-sm text-slate-300">
                                <strong className="text-white block mb-1">Line Height (Интерлиньяж)</strong> Расстояние между строками. В вебе лучше задавать в процентах (140%) или множителях (1.4).
                            </div>
                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-sm text-slate-300">
                                <strong className="text-white block mb-1">Letter Spacing</strong> Расстояние между буквами. В заголовках часто делают чуть меньше.
                            </div>
                        </div>
                    </section>

                    {/* 4. ЦВЕТА И СТИЛИ */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6">4. Цвета и Стили (Design Tokens)</h3>
                        <TheoryText>
                            Разработчик никогда не копирует HEX-код (типа #FF5733) для каждой кнопки. Это плохой тон. Мы используем Стили (Styles):
                        </TheoryText>
                        <div className="my-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                            <ul className="space-y-3 text-sm text-slate-300">
                                <li>1. Вы создаете цвет в Figma.</li>
                                <li>2. Называете его <span className="text-blue-400">Brand-Primary</span>.</li>
                                <li>3. В коде это превратится в переменную: <code className="text-blue-300">--color-primary: #FF5733;</code>.</li>
                            </ul>
                        </div>
                        <InfoPanel title="Зачем?">
                            Если заказчик скажет: «Сделаем всё не синим, а фиолетовым», вы измените один стиль, и весь проект (и код) обновится мгновенно.
                        </InfoPanel>
                    </section>

                    {/* 5. ЭЛЕМЕНТЫ ИНТЕРФЕЙСА */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6">5. Элементы интерфейса (UI Kit)</h3>
                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest text-blue-500">Components</h4>
                                <TheoryText className="text-sm">Сделайте кнопку компонентом. Добавьте ей Variants (варианты): Default, Hover, Active, Disabled.</TheoryText>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest text-blue-500">Icons</h4>
                                <TheoryText className="text-sm">Используйте векторный формат (SVG). В Figma иконки должны быть внутри фреймов одинакового размера (24x24 px).</TheoryText>
                            </div>
                        </div>
                    </section>

                    {/* 6. ПРАВИЛА ХОРОШЕГО ТОНА */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">6. Правила «Хорошего тона» в дизайне для веба</h3>
                        <div className="space-y-4 ml-4">
                            <p className="text-sm text-slate-300"><strong>• Сетка (Grid):</strong> Используйте 12-колоночную сетку для Desktop. Это стандарт.</p>
                            <p className="text-sm text-slate-300"><strong>• Размеры кратны 4 или 8:</strong> Используйте систему шагов по 4-8 пикселей (8, 16, 24, 32...). Это создает ритм.</p>
                            <p className="text-sm text-slate-300"><strong>• Адаптивность (Constraints):</strong> Настройте поведение элемента при растягивании экрана.</p>
                        </div>
                    </section>
                </article>
            )}

            {/* --- РЕЖИМ ФАЙЛОВ --- */}
            {mode === 'files' && (
                <div className="space-y-6 text-center lg:text-left">
                    <h2 className="text-3xl font-bold mb-8 text-white">Материалы</h2>
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                        <p className="text-blue-400 font-bold mb-4 uppercase tracking-widest text-xs">Практика</p>
                        <ul className="space-y-3">
                            <li><TheoryText className="mb-8 italic underline decoration-blue-500/20 underline-offset-4">
                                <a
                                    href="https://www.figma.com/design/KFaEmZi2OevaGufapCXB6A/airbnb--%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%D0%B0-?node-id=0-1&t=Cms5eBFhtWm1ZFrl-1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ссылка на пример дизайна
                                </a> </TheoryText></li>
                                <li><FileDownload name="Презентация.pdf" url="/downloads/pres/less5.pdf"/></li>

                        </ul>
                    </div>
                </div>
            )}


            {/* --- РЕЖИМ ПРАКТИКИ --- */}
            {mode === 'practice' && (
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold mb-4 text-white">Практическое задание</h2>
                    <div className="p-8 bg-blue-600/5 border border-blue-500/20 rounded-[2.5rem]">
                        <TheoryText className="mb-8 italic underline decoration-blue-500/20 underline-offset-4">
                            Создайте базовый макет для дизайна вашего веб-сайта.
                        </TheoryText>
                        <ul className="space-y-8">
                            {/* Шаг 1 */}
                            <li className="flex items-start gap-4 text-lg text-slate-300">
                                <div
                                    className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">1
                                </div>
                                <div>
                                    <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг 1</p>
                                    Зайти и зарегистрировать аккаунт на <a
                                    href="https://www.figma.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                                >
                                    Figma
                                </a>
                                </div>
                            </li>

                            {/* Шаг 2 */}
                            <li className="flex items-start gap-4 text-lg text-slate-300">
                                <div
                                    className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">2
                                </div>
                                <div>
                                    <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг 2</p>
                                    Скопировать проект к себе в проекты для примера. Открыть по <a
                                    href="https://www.figma.com/design/KFaEmZi2OevaGufapCXB6A/airbnb--%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%D0%B0-?node-id=1-2126&t=Cms5eBFhtWm1ZFrl-1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                                >
                                    этой ссылке
                                </a>. Далее скопировать к себе и изучить в примере дизайна как правильно называть
                                    компоненты и как должно все выглядеть.
                                    <div>
                                        <TheoryImage src="/img/less5/10.png"/>
                                    </div>
                                </div>
                            </li>

                            {/* Шаг 3 */}
                            <li className="flex items-start gap-4 text-lg text-slate-300">
                                <div
                                    className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">3
                                </div>
                                <div>
                                    <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг 3</p>
                                    Зайти на <a
                                    href="https://www.behance.net"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                                >
                                    Behance
                                </a> или подобные сайты, чтобы наглядно посмотреть, как выглядит дизайн по вашей
                                    тематике. Например, для магазина растений вбейте запрос "plants shop/store" и
                                    выберите фильтр "Web Design". Посмотрите и перенесите к себе то, что понравилось
                                    (рекомендую добавлять скриншоты прямо в проект).
                                    <div>
                                        <TheoryImage src="/img/less5/11.png"/>
                                    </div>
                                </div>
                            </li>

                            {/* Шаг 4 */}
                            <li className="flex items-start gap-4 text-lg text-slate-300">
                                <div
                                    className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">4
                                </div>
                                <div>
                                    <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг 4</p>
                                    Определиться с тем, как будет выглядеть ваш будущий проект и какие основные страницы
                                    в нем будут (рекомендую взять основные 3: главная, каталог товаров/услуг, страница
                                    самого товара).
                                </div>
                            </li>

                            {/* Шаг 5 */}
                            <li className="flex items-start gap-4 text-lg text-slate-300">
                                <div
                                    className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">5
                                </div>
                                <div>
                                    <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг 5</p>
                                    Создать свой проект и добавить новый фрейм. Задаем ширину 1920 или стандартную 1440.
                                    Выставляем сетку. Стандарт — 12 колонок для веб-дизайна, 80 margins (отступы справа
                                    и слева), gutter 20 (отступы между колонками), чтобы элементы стояли ровно.
                                    <ImageCarousel images={pract}/>
                                </div>
                            </li>
                            {/* Шаг 6 */}
                            <li className="flex items-start gap-4 text-lg text-slate-300">
                                <div
                                    className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">6
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг 6</p>
                                    <div className="space-y-4">
                                        <p>
                                            Но для того чтобы начать делать дизайн страниц, нужно выделить основные
                                            компоненты и
                                            создать их. Основные компоненты веб-дизайна — это повторяемые,
                                            функциональные и
                                            визуальные блоки, из которых как из «конструктора» собирается любая страница
                                            сайта.
                                            Если мы говорим об e-com проектах, то обычно это:
                                        </p>

                                        {/* Твой список в красивой обертке */}
                                        <div className="flex flex-wrap gap-2 my-4">
                                            {[
                                                "Шапка (с лого, навигацией и кнопкой корзины)",
                                                "Футер",
                                                "Навигация для мобильных устройств",
                                                "Боковые панели",
                                                "Карточки (товаров, услуг, отзывов)",
                                                "Формы",
                                                "Кнопки"
                                            ].map((item, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm"
                                                >
                        {item}
                    </span>
                                            ))}
                                        </div>


                                    </div>
                                </div>
                            </li>
                            {/* Шаг 7 */}
                            <li className="flex items-start gap-4 text-lg text-slate-300">
                                <div
                                    className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">7
                                </div>
                                <div>
                                    <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг 7</p>
                                    Рассмотрим создание компонента на примере шапки. Вообще каждый элемент дизайна - это
                                    по сути фигура (квадрат, круг...) На этом строится весь дизайн. Поэтому создаем
                                    подложку для шапки (если для нее предусмотрена, если нет - задайте прозрачность 0).
                                    Создаем прямоугольник (квадрат), задаем жалемую ширину и высоту шапки. Жемем прям на
                                    нем или выбираем его в слоях и делаем из него компонент, либо используем сочетание
                                    Ctrl+Alt+K.
                                    Задаем теперь уже элементу в компоненте скругленные углы в панели справа (Appearance
                                    - Corner raduis), тому же самому прямоуголньику, нужно нажать на него, чтобы
                                    выбрать, либо выбрать в панели слева.
                                    <ImageCarousel images={pract2}/>
                                </div>
                            </li>
                            {/* Шаг 8 */}
                            <li className="flex items-start gap-4 text-lg text-slate-300">
                                <div
                                    className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">8
                                </div>
                                <div>
                                    <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг 8</p>
                                    Теперь когда есть "подложка" нужно расположить: логотип (обычно в векторном формате,
                                    но можно и текстом/фигурой для упрощения), элементы навигации (в виде текста), поиск
                                    (опционально), корзину и профиль в виде иконок. Иконки можно получить прямо в фигме
                                    использовав поиск во вкладке Assets либо найти на сторониих сервисах, в формате svg.
                                    <TheoryImage src="/img/less5/17.png"/>


                                </div>
                            </li>

                            {/* Шаг 9 */}
                            <li className="flex items-start gap-4 text-lg text-slate-300">
                                <div
                                    className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">9
                                </div>
                                <div>
                                    <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг 9</p>
                                    После расположения нужно соединить логические блоки в контейнеры с autolayout.
                                    Например "Каталог, О нас, Блог, Советы" - это все навигация. Выбираем эти блоки
                                    справа и добавляем их в AutoLayout (Shift+A) (Изобр.1).
                                    Теперь изменяем ширину
                                    контейнера по ширине контента. То есть если у вас добавится например пункт навигации
                                    - контейнер автоматически примет нужную ширину (Изобр.2).
                                    И настраиваем отступы между элементами и расположение: в ряд или колонку (Изобр.3).
                                    Аналогично делаем для остальных элементов в этом компоненте.


                                    <ImageCarousel images={pract3}/>
                                </div>
                            </li>

                            {/* Шаг 10 */}
                            <li className="flex items-start gap-4 text-lg text-slate-300">
                                <div
                                    className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">10
                                </div>
                                <div>
                                    <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг
                                        10</p>
                                    Для самого Компонента "Header" задаем выравнивание, в этом случае посередине слева.
                                    Так компоненты будут вертикально распологаться ровно в середине, а горизонтально с
                                    левого края. По итогу должна получиться понятная структура для дальнейшего
                                    использования в коде.
                                    <TheoryImage src="/img/less5/21.png"/>
                                </div>
                            </li>

                            {/* Шаг 11 */}
                            <li className="flex items-start gap-4 text-lg text-slate-300">
                                <div
                                    className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">11
                                </div>
                                <div>
                                    <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг
                                        11</p>

                                    Чтобы "вызвать" этот элемент в самом фрейме: нужно в левой панели перейти в Assets -
                                    Created in this file - Ваш компонент. Выбрать и перенсти его на фрейм.
                                    <TheoryImage src="/img/less5/22.png"/>
                                </div>
                            </li>
                            {/* Шаг 12 */}

                            <li className="flex items-start gap-4 text-lg text-slate-300">
                                <div
                                    className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">12
                                </div>
                                <div>
                                    <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг
                                        12</p>
                                    После создания всех нужных компонентов перейти к дизайну страниц, распологая
                                    элементы с использованием контейнеров autolayout. Пример для первого блока (Hero
                                    Section)

                                    <TheoryImage src="/img/less5/23.png"/>
                                </div>
                            </li>
                            {/* Шаг 13 */}
                            <li className="flex items-start gap-4 text-lg text-slate-300">
                                <div
                                    className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">13
                                </div>
                                <div>
                                    <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг
                                        13</p>
                                   После создания  и наполнения трех страниц, включая основные компоненты (мин. шапка+футер+карточка товара), сдать на проверку ссылкой к проекту, убедившись, что проект в фигме находится в папке Team Project, а не в Drafts (если нет - перенести) и к нему можно получить доступ по ссылке. Либо в формате скришотов.
                                    Позже этот дизайн будем использовать для создания фронта сайта.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Lesson5;