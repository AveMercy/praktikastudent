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
                        Лекция 4: Система контроля версий Git и сервис GitHub
                    </h2>

                    {/* 1. РАЗНИЦА GIT И GITHUB */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">1. Что это такое и в чем разница?</h3>


                        <div className="space-y-4 mt-6">
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-blue-400 font-bold mb-2">Git — это программа</h4>
                                <p className="text-sm text-slate-300 italic">Инструмент, установленный у вас на компьютере. Он следит за изменениями в файлах.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-purple-400 font-bold mb-2">GitHub — это сайт (облако)</h4>
                                <p className="text-sm text-slate-300 italic">Место, где лежат ваши проекты. Это как Google Drive, но специально для кода.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-emerald-400 font-bold mb-2">Репозиторий — это папка</h4>
                                <p className="text-sm text-slate-300 italic">Просто папка с вашим проектом, которая находится под наблюдением Git.</p>
                            </div>
                        </div>
                    </section>

                    {/* 2. СЛОВАРЬ РАЗРАБОТЧИКА */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">2. Основные понятия (Словарь разработчика)</h3>
                        <TheoryText>Чтобы работать в команде, нужно понимать четыре главных действия:</TheoryText>



                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div className="p-6 border-l-2 border-blue-500 bg-blue-500/5">
                                <h4 className="font-bold text-white mb-2 italic">Commit (Коммит)</h4>
                                <p className="text-xs text-slate-400">Это «сохранение» текущего состояния. Каждый коммит имеет автора и описание (например: «Добавил кнопку логина»).</p>
                            </div>
                            <div className="p-6 border-l-2 border-purple-500 bg-purple-500/5">
                                <h4 className="font-bold text-white mb-2 italic">Push (Пуш)</h4>
                                <p className="text-xs text-slate-400">Отправка локальных коммитов на сервер GitHub. Пока не сделали Push, команда не увидит код.</p>
                            </div>
                            <div className="p-6 border-l-2 border-emerald-500 bg-emerald-500/5">
                                <h4 className="font-bold text-white mb-2 italic">Pull (Пулл)</h4>
                                <p className="text-xs text-slate-400">Скачивание изменений от коллег из GitHub к себе на компьютер.</p>
                            </div>
                            <div className="p-6 border-l-2 border-orange-500 bg-orange-500/5">
                                <h4 className="font-bold text-white mb-2 italic">Clone (Клонирование)</h4>
                                <p className="text-xs text-slate-400">Создание полной копии существующего репозитория с GitHub на ваш компьютер.</p>
                            </div>
                        </div>
                    </section>

                    {/* 3. НАСТРОЙКА СРЕДЫ */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">3. Как настроить среду</h3>
                        <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 space-y-6">
                            <div>
                                <h4 className="text-white font-bold mb-2">Регистрация и софт</h4>
                                <TheoryText className="text-sm">Перейдите на github.com и создайте аккаунт.</TheoryText>
                            </div>
                            <InfoPanel title="Авторизация в WebStorm">
                                Зайдите в <strong>Settings - Version Control - GitHub</strong>. Нажмите <strong>+</strong> и выберите <strong>Log In via GitHub</strong>. WebStorm сам свяжет вашу среду разработки с облаком.
                            </InfoPanel>
                        </div>
                    </section>

                    {/* 4. СОЗДАНИЕ ПРОЕКТА */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">4. Создание проекта сразу на GitHub</h3>
                        <TheoryText>В WebStorm это делается за несколько кликов:</TheoryText>
                        <ol className="mt-6 space-y-4">
                            <li className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                                <span className="text-blue-500 font-bold">01.</span>
                                <p className="text-sm text-slate-300">Нажмите <strong>New Project</strong> и выберите тип (Vite или React).</p>
                            </li>
                            <li className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                                <span className="text-blue-500 font-bold">02.</span>
                                <p className="text-sm text-slate-300">В верхнем меню выберите <strong>Git - GitHub - Share Project on GitHub</strong>.</p>
                            </li>
                            <li className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                                <span className="text-blue-500 font-bold">03.</span>
                                <p className="text-sm text-slate-300">Введите название и нажмите <strong>Share</strong>.</p>
                            </li>
                        </ol>
                        <p className="mt-4 text-xs text-slate-500 italic">Что произойдет: WebStorm сам создаст репозиторий, сделает первый коммит и отправит Push.</p>
                    </section>

                    {/* 5. РАБОЧИЙ ЦИКЛ */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">5. Рабочий цикл: Как обновлять проект?</h3>
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

                    {/* 6. .GITIGNORE */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6">6. Игнорирование лишнего (.gitignore)</h3>
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
                    <h2 className="text-3xl font-bold mb-8 text-white">Инструкции</h2>
                    <FileDownload name="Git_CheatSheet_RU.pdf" size="1.2 MB" url="#" />
                    <FileDownload name="Настройка_WebStorm_GitHub.pdf" size="2.4 MB" url="#" />
                </div>
            )}

            {/* --- РЕЖИМ ПРАКТИКИ --- */}
            {mode === 'practice' && (
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold mb-4 text-white">Практическое задание</h2>
                    <div className="p-8 bg-blue-600/5 border border-blue-500/20 rounded-[2.5rem]">
                        <ul className="space-y-6">
                            <li className="flex items-center gap-4 text-lg text-slate-300">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold">1</div>
                                Создать аккаунт на GitHub и настроить Git в WebStorm
                            </li>
                            <li className="flex items-center gap-4 text-lg text-slate-300">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold">2</div>
                                Создать новый проект Vite и нажать "Share Project on GitHub"
                            </li>
                            <li className="flex items-center gap-4 text-lg text-slate-300">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold">3</div>
                                Сделать изменение в файле App.jsx, сделать Commit и Push
                            </li>
                        </ul>
                        <div className="mt-10 p-4 bg-white/5 rounded-xl italic text-slate-400 text-sm">
                            Пришлите ссылку на ваш репозиторий преподавателю для проверки связи.
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Lesson6;