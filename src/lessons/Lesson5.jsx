import React from 'react';
import {
    TheoryText,
    TheoryImage,
    CodeSnippet,
    FileDownload,
    InfoPanel,
    ImageGrid
} from '../components/UIComponents';

const Lesson5 = ({ mode }) => {
    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            {/* --- РЕЖИМ ТЕОРИИ --- */}
            {mode === 'theory' && (
                <article>
                    <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                        Лекция 3: Профессиональный UI-дизайн в Figma для разработчиков
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
                            </div>

                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-blue-400 font-bold mb-2  decoration-blue-500/20 underline-offset-4">Frame
                                    (Холст) в центре</h4>
                                <TheoryText className="text-sm">
                                "Холст" для расположения ваших элементов.
                                </TheoryText>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-blue-400 font-bold mb-2  decoration-blue-500/20 underline-offset-4">Inspect Panel (Панель свойств) справа</h4>
                                <TheoryText className="text-sm">
                                    Это самая важная часть. В режиме Dev Mode Figma показывает готовые CSS-свойства: background, border-radius, font-size, и даже flexbox-параметры.
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
                                    <li><strong className="text-blue-400">• Paddings (Внутренние отступы):</strong> Пространство внутри элемента (например, от текста до края кнопки). В Figma они задаются в настройках Auto Layout.</li>
                                    <li><strong className="text-blue-400">• Margins (Внешние отступы):</strong> Расстояние между соседними элементами. В Figma вы видите их, когда зажимаете клавишу Alt и наводите на другой объект.</li>
                                    <li><strong className="text-blue-400">• Border Radius (Скругление):</strong> В Figma это иконка угла. В CSS — свойство border-radius.</li>
                                </ul>
                            </div>

                            <div className="p-6 rounded-2xl bg-blue-600/5 border border-blue-500/20">
                                <h4 className="text-lg font-bold text-white mb-3 italic underline decoration-blue-500/30">Auto Layout = Flexbox</h4>
                                <TheoryText className="mb-4 text-sm font-bold">Это самая важная параллель. Если вы включаете Auto Layout, вы создаете display: flex.</TheoryText>
                                <ul className="space-y-3 ml-4 text-sm text-slate-300">
                                    <li><span className="text-blue-400 font-bold">Direction (Стрелочки):</span> Выбираете, как пойдут элементы: в ряд (flex-direction: row) или в колонку (column).</li>
                                    <li><span className="text-blue-400 font-bold underline decoration-blue-500/50 underline-offset-4 italic">Gap (Расстояние между):</span> В CSS это свойство gap. Оно позволяет задать одинаковое расстояние между всеми элементами внутри блока одним числом.</li>
                                    <li><span className="text-blue-400 font-bold">Alignment (Выравнивание):</span> Квадратик с точками в Figma — это ваши justify-content и align-items.</li>
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
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold mb-8 text-white text-center md:text-left">Пример дизайна</h2>
                    <TheoryText className="mb-8 italic underline decoration-blue-500/20 underline-offset-4">
                        <a
                            href="https://www.figma.com/design/lHJAQu2ZXywCfaGgAue46j/GreenShop?node-id=0-1&t=YAB1aB5MMznIoqL4-1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.figma.com/design/lHJAQu2ZXywCfaGgAue46j/GreenShop
                        </a>                    </TheoryText>
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
                            <li className="flex items-start gap-4 text-lg text-slate-300">
                                <div
                                    className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">1
                                </div>
                                <div>
                                    <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг 1</p>
                                    Зайти и зарегестрировать аккаунт на <a
                                    href="https://www.figma.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://www.figma.com
                                </a>
                                </div>
                            </li>

                            <li className="flex items-start gap-4 text-lg text-slate-300">
                                <div
                                    className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">2
                                </div>
                                <div>
                                    <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг 2</p>
                                    Создать проект
                                </div>

                            </li>
                            <div>
                                <TheoryImage src="/img/les3/1.png">
                                </TheoryImage>
                            </div>
                            <li className="flex items-start gap-4 text-lg text-slate-300">
                                <div
                                    className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">2
                                </div>
                                <div>
                                    <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг 2</p>
                                    Спроектировать компоненты: создайте кнопку через Auto Layout, настройте Gap и
                                    добавьте состояния Hover/Active.
                                </div>
                            </li>
                            <li className="flex items-start gap-4 text-lg text-slate-300">
                                <div
                                    className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">3
                                </div>
                                <div>
                                    <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Шаг 3</p>
                                    Верстка страницы: соберите первый экран по 12-колоночной сетке, соблюдая кратность
                                    отступов 8 пикселям.
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