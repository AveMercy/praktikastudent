import React from 'react';
import {
    TheoryText,
    TheoryImage,
    CodeSnippet,
    FileDownload,
    InfoPanel,
    ImageGrid
} from '../components/UIComponents';

const Lesson2 = ({ mode }) => {
    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            {/* --- РЕЖИМ ТЕОРИИ --- */}
            {mode === 'theory' && (
                <article>
                    <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                        Лекция 2: Техническое задание (ТЗ) — Фундамент проекта
                    </h2>

                    <TheoryText>
                        Многие начинающие разработчики думают, что ТЗ — это формальность или скучная бюрократия. На самом деле,
                        <strong> ТЗ — это договор</strong> между заказчиком и исполнителем (или внутри команды), который отвечает
                        на критический вопрос: «Когда мы можем считать, что проект готов?». Без ТЗ разработка превращается
                        в бесконечный процесс правок.
                    </TheoryText>

                    <section className="mt-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">1. Глубокая структура ТЗ</h3>
                        <TheoryText>
                            Профессиональное ТЗ в веб-разработке — это не просто список пожеланий. Оно разделяется на три фундаментальных блока,
                            которые закрывают разные риски проекта:
                        </TheoryText>

                        <div className="space-y-6 mt-8">
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                                    <span className="text-blue-500">01.</span> Функциональные требования
                                </h4>
                                <TheoryText className="text-sm">
                                    Это описание конкретных действий системы. Ответ на вопрос: <strong>«Что сайт должен делать?»</strong>.
                                    Важно: требования должны быть проверяемыми.
                                    <br /><br />
                                    <span className="text-slate-500 italic">— Хорошо: «Пользователь должен иметь возможность восстановить пароль через email».</span>
                                    <br />
                                    <span className="text-red-400/80 italic">— Плохо: «Сайт должен быть удобным». Удобство — понятие субъективное, его нельзя измерить и "сдать" заказчику.</span>
                                </TheoryText>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                                    <span className="text-blue-500">02.</span> Нефункциональные требования
                                </h4>
                                <TheoryText className="text-sm">
                                    Это описание качества работы системы. Ответ на вопрос: <strong>«Как сайт должен работать?»</strong>.
                                    Сюда входят:
                                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-slate-400">
                                        <li><strong>Производительность:</strong> Время загрузки страницы (LCP) не более 2 секунд.</li>
                                        <li><strong>Адаптивность:</strong> Корректная работа на мобильных устройствах (iOS/Android) и десктопах.</li>
                                        <li><strong>Безопасность:</strong> Хранение паролей в зашифрованном виде (хеширование).</li>
                                        <li><strong>Стек:</strong> Использование React 18+ и Node.js LTS версии.</li>
                                    </ul>
                                </TheoryText>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                                    <span className="text-blue-500">03.</span> Роли пользователей
                                </h4>
                                <TheoryText className="text-sm">
                                    Четкое разграничение прав доступа. Кто и что может делать в системе:
                                    <ul className="mt-2 space-y-2">
                                        <li><strong className="text-blue-400">Гость:</strong> Просмотр каталога, поиск, чтение отзывов.</li>
                                        <li><strong className="text-blue-400">Клиент:</strong> Корзина, оформление заказов, история в личном кабинете.</li>
                                        <li><strong className="text-blue-400">Админ:</strong> Управление стоком, изменение цен, блокировка пользователей.</li>
                                    </ul>
                                </TheoryText>
                            </div>
                        </div>
                    </section>

                    <section className="mt-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">2. Метод User Stories: Очеловечивание функций</h3>
                        <TheoryText>
                            Вместо сухого списка «Сделать кнопку покупки», в IT-индустрии используют <strong>User Stories</strong> (Пользовательские истории).
                            Это позволяет разработчику понять бизнес-ценность каждой фичи.
                        </TheoryText>

                        <div className="my-8 p-8 bg-blue-600/5 border border-blue-500/20 rounded-[2rem] relative overflow-hidden text-center italic">
                            <span className="text-4xl absolute top-4 left-6 opacity-20 font-serif">"</span>
                            <p className="text-xl text-white">Я, как [роль], хочу [действие], чтобы [ценность].</p>
                            <span className="text-4xl absolute bottom-0 right-8 opacity-20 font-serif">"</span>
                        </div>

                        <TheoryText>
                            <strong>Пример:</strong> «Я, как покупатель, хочу добавить товар в корзину, чтобы оплатить все покупки одним разом».
                            Здесь «ценность» — это экономия времени и удобство оплаты, а не просто наличие кнопки.
                        </TheoryText>
                    </section>

                    <section className="mt-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6">3. Наш учебный кейс: GreenShop</h3>
                        <TheoryText>
                            Чтобы вы наглядно видели процесс разработки, я параллельно с вами буду вести проект <strong>GreenShop — магазин растений</strong>.
                            В разделе "Файлы" доступен пример ТЗ для ваших проектов.
                        </TheoryText>

                        <InfoPanel title="MVP проекта (Minimum Viable Product)">
                            Для учебного проекта мы фокусируемся на главном: Авторизация, Каталог с фильтрами, Корзина и Личный кабинет.
                            Это база, на которой строятся 90% современных веб-сервисов.
                        </InfoPanel>
                    </section>
                </article>
            )}

            {/* --- РЕЖИМ ФАЙЛОВ --- */}
            {mode === 'files' && (
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold mb-8 text-white">Материалы к разработке</h2>
                    <TheoryText>Ниже представлен пример ТЗ.</TheoryText>

                    <FileDownload
                        name="Техническое задание.docx"
                        url="/downloads/teh-zadanie(2zanyatie).docx"
                    />
                    <FileDownload name="Презентация.pdf" url="/downloads/less2.pdf"/>

                </div>
            )}

            {/* --- РЕЖИМ ПРАКТИКИ --- */}
            {mode === 'practice' && (
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold mb-4 text-white">Практическое задание №2</h2>
                    <div className="p-8 bg-blue-600/5 border border-blue-500/20 rounded-[2.5rem]">
                        <h4 className="text-xl font-bold text-white mb-6">Задача: Составление ТЗ для вашего проекта</h4>
                        <TheoryText className="mb-6">
                            Каждая группа должна составить ТЗ в Google Docs или в Word и выслать в max. Пример выполнения задания находится в файлах к текущей теме
                        </TheoryText>

                        <div className="space-y-4">
                            {[
                                { t: "Краткое описание", d: "2-3 предложения о сути вашего продукта." },
                                { t: "Цель", d: "Описать назначение проекта" },
                                { t: "Целевая аудитория", d: "Определить ЦА" },

                                { t: "Функционал", d: "Минимум 7 требований в формате User Stories." },
                                { t: "Структура", d: "Перечень разделов сайта (Главная, Профиль и т.д.)." },
                                { t: "Стек", d: "Фиксация технологий (React, Node.js, Express)." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                                    <span className="text-blue-500 font-bold">{i+1}.</span>
                                    <div>
                                        <p className="text-white font-bold text-sm">{item.t}</p>
                                        <p className="text-xs text-slate-500">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Lesson2;