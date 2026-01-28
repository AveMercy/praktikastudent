import React from 'react';
import {
    TheoryText,
    TheoryImage,
    CodeSnippet,
    FileDownload,
    InfoPanel,
    ImageGrid
} from '../components/UIComponents';

const Lesson6 = ({ mode }) => {
    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            {/* --- РЕЖИМ ТЕОРИИ --- */}
            {mode === 'theory' && (
                <article>
                    <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                        Лекция 6: Система контроля версий Git и сервис GitHub
                    </h2>

                    {/* 1. РАЗНИЦА GIT И GITHUB */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">1. Что это такое и в чем разница?</h3>


                        <div className="space-y-4 mt-6">
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-blue-400 font-bold mb-2">Git — это программа</h4>
                                <p className="text-sm text-slate-300 ">Инструмент, установленный у вас на компьютере. Он следит за изменениями в файлах.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-purple-400 font-bold mb-2">GitHub — это сайт (облако)</h4>
                                <p className="text-sm text-slate-300 ">Место, где лежат ваши проекты. Это как Google Drive, но специально для кода.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-emerald-400 font-bold mb-2">Репозиторий — это папка</h4>
                                <p className="text-sm text-slate-300 ">Просто папка с вашим проектом, которая находится под наблюдением Git.</p>
                            </div>
                        </div>
                    </section>

                    {/* 2. СЛОВАРЬ РАЗРАБОТЧИКА */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">2. Основные понятия (Словарь разработчика)</h3>
                        <TheoryText>Чтобы работать в команде, нужно понимать четыре главных действия:</TheoryText>



                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div className="p-6 border-l-2 border-blue-500 bg-blue-500/5">
                                <h4 className="font-bold text-white mb-2 ">Commit (Коммит)</h4>
                                <p className="text-xs text-slate-400">Это «сохранение» текущего состояния. Каждый коммит имеет автора и описание (например: «Добавил кнопку логина»).</p>
                            </div>
                            <div className="p-6 border-l-2 border-purple-500 bg-purple-500/5">
                                <h4 className="font-bold text-white mb-2 ">Push (Пуш)</h4>
                                <p className="text-xs text-slate-400">Отправка локальных коммитов на сервер GitHub. Пока не сделали Push, команда не увидит код.</p>
                            </div>
                            <div className="p-6 border-l-2 border-emerald-500 bg-emerald-500/5">
                                <h4 className="font-bold text-white mb-2 ">Pull (Пулл)</h4>
                                <p className="text-xs text-slate-400">Скачивание изменений от коллег из GitHub к себе на компьютер.</p>
                            </div>
                            <div className="p-6 border-l-2 border-orange-500 bg-orange-500/5">
                                <h4 className="font-bold text-white mb-2 ">Clone (Клонирование)</h4>
                                <p className="text-xs text-slate-400">Создание полной копии существующего репозитория с GitHub на ваш компьютер.</p>
                            </div>
                        </div>
                    </section>


                    {/* 3. РАБОЧИЙ ЦИКЛ */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">3. Рабочий цикл: Как обновлять проект?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-white font-bold mb-4">Commit (Ctrl + K)</h4>
                                <p className="text-sm text-slate-400 leading-relaxed">Выберите файлы и напишите осмысленное сообщение (например: «Верстка шапки профиля»).</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-white font-bold mb-4">Push (Ctrl + Shift + K)</h4>
                                <p className="text-sm text-slate-400 leading-relaxed">Ваш код улетел на GitHub. Теперь он в безопасности и доступен коллегам.</p>
                            </div>
                        </div>

                        <div className="mt-10 space-y-4">
                            <h4 className="text-lg font-bold text-white italic">Зачем это нужно?</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="p-4 bg-blue-500/5 rounded-xl border border-blue-500/10 text-xs text-slate-400">
                                    Если компьютер выключится — код останется в облаке.
                                </div>
                                <div className="p-4 bg-purple-500/5 rounded-xl border border-purple-500/10 text-xs text-slate-400">
                                    Если удалили важное — можно вернуть через историю коммитов.
                                </div>
                                <div className="p-4 bg-emerald-500/5 rounded-xl border border-emerald-500/10 text-xs text-slate-400">
                                    Если в группе несколько человека — Git "склеит" вашу работу.
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 4. .GITIGNORE */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6">4. Игнорирование лишнего (.gitignore)</h3>
                        <TheoryText>
                            В проекте есть папки, которые нельзя отправлять на GitHub (например, <strong>node_modules</strong> — она весит сотни мегабайт и содержит чужой код).
                        </TheoryText>
                        <div className="mt-4 p-4 bg-slate-900 rounded-xl font-mono text-xs text-blue-300 border border-white/10">
                            # .gitignore example<br/>
                            node_modules/<br/>
                            dist/<br/>
                            .env
                        </div>
                        <p className="mt-4 text-sm text-slate-500 italic">WebStorm при создании проекта обычно делает этот файл сам.</p>
                    </section>
                </article>
            )}

            {/* --- РЕЖИМ ФАЙЛОВ --- */}
            {mode === 'files' && (
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold mb-8 text-white">Для этой лекции отсутствуют файлы</h2>
                </div>
            )}

            {/* --- РЕЖИМ ПРАКТИКИ --- */}
            {mode === 'practice' && (
                <div className="flex flex-col items-center justify-center min-h-[300px] border-2 border-dashed border-white/5 rounded-[2.5rem]">
                    <p className="text-slate-500 italic">Для этой лекции практическое задание не предусмотрено.</p>
                </div>
            )}
        </div>
    );
};

export default Lesson6;