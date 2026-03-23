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
            {/* --- РЕЖИМ ТЕОРИИ: ФИЛОСОФИЯ ЗАЩИТЫ ПРОЕКТА --- */}
            {mode === 'theory' && (
                <article className="space-y-12 animate-in fade-in duration-700">
                    <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                        Финальная Лекция: Презентация проекта
                    </h2>

                    {/* ОЖИДАНИЕ VS РЕАЛЬНОСТЬ */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">1</div>
                        <h3 className="text-2xl font-bold text-white mb-6">"Проект не совсем готов"</h3>
                        <TheoryText>
                            Главное правило защиты: <b>не страшно, если ваш итоговый сайт выглядит не совсем так, как задумывалось изначально.</b> В реальной коммерческой разработке проекты часто меняются в процессе написания кода.
                        </TheoryText>

                        <div className="p-6 bg-[#020617] rounded-3xl border border-white/5 mt-6">
                            <h4 className="text-blue-400 font-bold mb-3 ">Используйте Figma как козырь</h4>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                Если вы не успели сверстать какую-то сложную анимацию или страницу - не беда. Вставьте в презетацию ваши прототипы в Figma (которые мы делали на первых этапах) и упомяните: <i>«Вот так выглядит идеальное видение нашего продукта, а вот часть, которую мы успели реализовать в виде рабочего кода»</i>.
                            </p>
                        </div>
                    </section>

                    {/* ДАЛЬНЕЙШЕЕ РАЗВИТИЕ */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">2</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Будущее проекта (Roadmap)</h3>
                        <TheoryText>
                            Любой хороший IT-продукт никогда не бывает «окончательно готов». На защите обязательно выделите слайд под <b>Дальнейшее развитие проекта</b>.
                        </TheoryText>
                        <ul className="list-disc list-inside text-sm text-slate-400 mt-4 space-y-2 ml-2">
                            <li>Расскажите, какие фичи вы бы добавили, если бы у вас был еще месяц (например, оплату картой, систему отзывов, нейросеть для подбора растений).</li>
                            <li>Также, какие аспекты вы бы хотели затронуть, но не успели.</li>
                        </ul>
                    </section>
                </article>
            )}
            {/* --- РЕЖИМ ФАЙЛОВ --- */}
            {mode === 'files' && (
                <div className="space-y-6">


                </div>
            )}
            {/* --- РЕЖИМ ПРАКТИКИ: ЧЕК-ЛИСТ И ТРЕБОВАНИЯ --- */}
            {mode === 'practice' && (
                <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-700">
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Практика: Чек-лист готовности и правила оценки</h2>
                        <TheoryText>
                            Давайте четко зафиксируем, что должно быть в проекте, за что я буду добавлять баллы, а на что закрою глаза.
                        </TheoryText>
                    </section>

                    {/* 1. ОБЯЗАТЕЛЬНЫЙ МИНИМУМ */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">1</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Обязательный минимум (MVP)</h3>
                        <div className="bg-blue-600/5 border border-blue-500/20 p-6 rounded-3xl">
                            <ul className="space-y-3 text-sm text-slate-300">
                                <li className="flex items-center gap-3"><span className="text-blue-500">✔</span> Главная страница</li>
                                <li className="flex items-center gap-3"><span className="text-blue-500">✔</span> Страница с каталогом товаров (Shop)</li>
                                <li className="flex items-center gap-3"><span className="text-blue-500">✔</span> Универсальный компонент карточки товара</li>
                                <li className="flex items-center gap-3"><span className="text-blue-500">✔</span> Подробная страница отдельного товара</li>
                                <li className="flex items-center gap-3"><span className="text-blue-500">✔</span> Общие шапка (Navbar) и подвал (Footer)</li>
                                <li className="flex items-start gap-3 border-t border-blue-500/20 pt-3 mt-3">
                                    <span className="text-blue-500 mt-1">✔</span>
                                    <div>
                                        <b className="text-white block">Связь с Backend и БД</b>
                                        <span className="text-xs text-slate-400">Товары должны грузиться из вашей реальной базы данных, а не быть захардкоженными заглушками. Минимум <b>5 заполненных товаров с картинками</b>.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 2. ЕСЛИ УСПЕЛИ / ПО ЖЕЛАНИЮ */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">2</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Дополнительно:</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-[#020617] rounded-3xl border border-white/5">
                                <h4 className="text-blue-400 font-bold mb-4 ">Админка (Если успели сделать)</h4>
                                <ul className="space-y-2 text-xs text-slate-400">
                                    <li>— Страница входа (Login)</li>
                                    <li>— Защищенный дашборд администратора</li>
                                    <li>— CRUD: Добавление, удаление, редактирование товаров с загрузкой фото.</li>
                                </ul>
                            </div>

                            <div className="p-6 bg-[#020617] rounded-3xl border border-white/5">
                                <h4 className="text-blue-400 font-bold mb-4 ">Фичи по желанию</h4>
                                <ul className="space-y-2 text-xs text-slate-400">
                                    <li>— Добавление в корзину и страница корзины</li>
                                    <li>— Раздел "Избранное"</li>
                                    <li>— Рабочая гибкая фильтрация и сортировка товаров</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 3. СИСТЕМА ОЦЕНИВАНИЯ */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">3</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Как будет проходить оценка</h3>

                        <div className="space-y-6">
                            <div className="p-6 bg-red-500/5 border border-red-500/10 rounded-3xl">
                                <h4 className="text-red-400 font-bold mb-2">За что я НЕ БУДУ снимать баллы:</h4>
                                <p className="text-sm text-slate-300">Мелкие баги в верстке, использование заглушек вместо сложных фильтров/сортировки, "мертвые" кнопки (например, кнопка соцсетей никуда не ведет). Если вы нарисовали фичу в Figma, но не успели закодить — штрафа не будет.</p>
                            </div>

                            <div className="p-6 bg-green-500/5 border border-green-500/20 rounded-3xl">
                                <h4 className="text-green-400 font-bold mb-2">За что я БУДУ ДОБАВЛЯТЬ баллы:</h4>
                                <ul className="list-disc list-inside text-sm text-slate-300 space-y-2">
                                    <li><b>Дизайн:</b> Как самого сайта (или прототипа в фигме), так и ваших слайдов презентации.</li>
                                    <li><b>Структура выступления:</b> Четкая презентация без "воды", понятные цели и план развития.</li>
                                    <li><b>Честный Fullstack:</b> Фронтенд 100% связан с бэкендом, товары тянутся из БД, всё работает стабильно.</li>
                                </ul>
                            </div>
                        </div>

                        <InfoPanel title="Выбор лушчих проектов">
                            Оценка будет честной. Мы устроим голосование, в котором решают <b>голоса всей группы</b>, а также мой голос.
                        </InfoPanel>
                    </section>

                    {/* 4. РЕГЛАМЕНТ И СОВЕТЫ */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">4</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Регламент выступления и инструменты</h3>

                        <div className="grid grid-cols-1 gap-4 mb-6">
                            <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                                <span className="font-bold text-slate-300">Тайминг</span>
                                <span className="text-blue-400 font-mono">5 - 15 минут (с вопросами)</span>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                                <span className="font-bold text-slate-300">Формат файла</span>
                                <span className="text-blue-400 font-mono">PPTX или PDF</span>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                                <span className="font-bold text-slate-300">Спикеры</span>
                                <span className="text-sm text-slate-400 text-right">1 человек или вся команда <br/>(Можно описать роли: кто что делал)</span>
                            </div>
                        </div>

                        <h4 className="text-lg font-bold text-white mb-3">Где делать презентацию?</h4>
                        <TheoryText>
                            Пример моей презентации лежит в файлах к лекции. Советую не делать дизайн "с нуля", а опираться на готовые шаблоны для насмотренности.
                        </TheoryText>
                        <ul className="space-y-3 mt-4 text-sm text-slate-300">
                            <li><b className="text-blue-400">Canva:</b> Идеальный вариант. Там море шаблонов, 3D-иконок и стоковых фото. <i>Внимание: сервис не работает в РФ без VPN. Используйте его, только если делаете слайды дома со своего устройства.</i></li>
                            <li><b className="text-blue-400">PowerPoint:</b> Скачайте современные шаблоны из интернета и адаптируйте под стиль своего проекта.</li>
                        </ul>
                    </section>

                    <div className="mt-12 text-center p-8 border border-blue-500/30 rounded-[40px] bg-[#020617] shadow-2xl">
                        <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-widest">Желаю удачи на защите!</h2>
                        <p className="text-slate-400">Вы проделали огромный путь от идеи до Fullstack-приложения. Гордитесь своим результатом.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Lesson10BackendFull;