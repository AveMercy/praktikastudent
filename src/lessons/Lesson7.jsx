import React from 'react';
import {
    TheoryText,
    InfoPanel,
    CodeSnippet, FileDownload,
} from '../components/UIComponents';

const Lesson8JS = ({ mode }) => {
    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            {/* --- РЕЖИМ ТЕОРИИ --- */}
            {mode === 'theory' && (
                <article>
                    <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                        Лекция 7: Логика и синтаксис JavaScript
                    </h2>

                    {/* 1. Переменные */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">1. Что такое переменная? (Хранение данных)</h3>
                        <TheoryText>
                            В HTML данные статичны. В JS нам нужно их где-то хранить, чтобы изменять в процессе работы приложения.
                        </TheoryText>
                        <ul className="space-y-4 mb-6">
                            <li className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                                <b className="text-blue-400">const</b>
                                <span className="text-slate-300 text-sm">Константа. Значение, которое нельзя изменить. Используйте её по умолчанию для стабильности кода.</span>
                            </li>
                            <li className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                                <b className="text-blue-400">let</b>
                                <span className="text-slate-300 text-sm">Переменная, содержимое которой можно заменить (например, счетчик товаров в корзине).</span>
                            </li>
                        </ul>
                        <CodeSnippet language="javascript" code={`const fruitName = "Apple"; // Текст (String)\nlet applesCount = 5;      // Число (Number)\nconst isRed = true;       // Логическое значение (Boolean)`} />
                    </section>

                    {/* 2. Типы данных */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">2. Типы данных</h3>
                        <TheoryText>Чтобы JS понимал, как работать с данными, он делит их на типы:</TheoryText>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {[
                                { t: 'Numbers', d: '10, 3.14. С ними можно проводить математические операции.' },
                                { t: 'Strings', d: '"Привет". Любой текст, обязательно пишется в кавычках.' },
                                { t: 'Booleans', d: 'true / false. Основа логики (да/нет, включено/выключено).' },
                                { t: 'Objects', d: 'Сложные структуры данных (например, профиль пользователя).' }
                            ].map((item, i) => (
                                <div key={i} className="p-4 bg-[#0a192f] rounded-xl border border-blue-500/20">
                                    <h5 className="text-blue-300 font-bold text-sm mb-1">{item.t}</h5>
                                    <p className="text-slate-400 text-xs leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>
                        <CodeSnippet language="javascript" code={`const user = {\n  name: "Ivan",\n  age: 25\n}; // Объект: структура с ключами и значениями`} />
                    </section>

                    {/* 3. Логические операторы */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">3. Логические операторы</h3>
                        <TheoryText>Программа становится «умной», когда умеет выбирать путь. Для этого используются условия.</TheoryText>
                        <InfoPanel title="Совет по сравнению">
                            Всегда используйте <code className="text-blue-300 font-bold">===</code> (строгое равенство). Оно проверяет не только значение, но и тип данных, что спасает от багов.
                        </InfoPanel>
                        <CodeSnippet language="javascript" code={`let speed = 80;\n\nif (speed > 60) {\n  console.log("Штраф!"); // Выведется в консоль, так как 80 > 60\n} else {\n  console.log("Скорость в норме.");\n}`} />
                    </section>

                    {/* 4. Функции */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">4. Функции</h3>
                        <TheoryText>Функция — это именованный блок кода для многократного вызова. Представьте кофемашину: на вход подаем зерна (аргументы), внутри идет варка (тело), на выходе — кофе (return).</TheoryText>
                        <CodeSnippet language="javascript" code={`function makeCoffee(beans) {\n  return "Ваш кофе из " + beans;\n}\n\nconst myDrink = makeCoffee("Арабики");\nconsole.log(myDrink); // Выведет: "Ваш кофе из Арабики"\n// Почему? Потому что функция "вернула" строку, которую мы сохранили в переменную.`} />
                    </section>

                    {/* 6. Современный JS */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">6. Современный JS (ES6+) для React</h3>

                        <h4 className="text-white font-bold mb-4 ">Стрелочные функции (Arrow Functions)</h4>
                        <TheoryText>Более короткая и современная запись. Сравните:</TheoryText>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <CodeSnippet language="javascript" code={`// ДО (Обычная)\nfunction sayHi(name) {\n  return "Привет, " + name;\n}`} />
                            <CodeSnippet language="javascript" code={`// ПОСЛЕ (Стрелочная)\nconst sayHi = (name) => {\n  return \`Привет, \${name}!\`;\n}`} />
                        </div>
                        <InfoPanel title="Пояснение">
                            В React стрелочные функции используются для написания самих компонентов и обработчиков событий (клик, ввод текста). Это стандарт индустрии.
                        </InfoPanel>

                        <h4 className="text-white font-bold mt-8 mb-4 ">Деструктуризация</h4>
                        <TheoryText>Способ быстро "достать" нужные свойства из объекта в отдельные переменные.</TheoryText>
                        <CodeSnippet language="javascript" code={`const person = { name: "Alice", age: 20 };\n\n// Вместо person.name и person.age:\nconst { name, age } = person; \nconsole.log(name); // Alice`} />
                    </section>

                    {/* 7. Асинхронность */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-tight">7. Асинхронность: Главная сложность</h3>
                        <TheoryText>JS не ждет загрузки тяжелых данных. Он идет дальше, пока ответ от сервера «летит» обратно.</TheoryText>
                        <CodeSnippet language="javascript" code={`async function getData() {\n  // await говорит коду: "подожди, пока данные скачаются, прежде чем идти к следующей строке"\n  const response = await fetch('https://api.example.com/data'); \n  \n  // преобразуем ответ в понятный JS-объект\n  const data = await response.json(); \n  \n  console.log(data); // выводим результат работы\n}`} />
                    </section>

                    {/* ТАБЛИЦА */}
                    <section className="mb-12 overflow-x-auto">
                        <h3 className="text-2xl font-bold text-white mb-6">Справочник понятий</h3>
                        <table className="w-full text-left border-collapse bg-white/5 rounded-2xl overflow-hidden">
                            <thead>
                            <tr className="bg-blue-600/20 text-blue-400 text-xs uppercase tracking-widest">
                                <th className="p-4 border-b border-white/10">Концепция</th>
                                <th className="p-4 border-b border-white/10">Синтаксис</th>
                                <th className="p-4 border-b border-white/10">Описание / Аналогия</th>
                            </tr>
                            </thead>
                            <tbody className="text-sm text-slate-300 leading-relaxed">
                            {[
                                { c: 'Объявление', s: 'const x = 10; let y = 5;', d: 'const — нельзя менять. let — можно переназначить.' },
                                { c: 'Строки', s: '`Привет, ${name}!`', d: 'Шаблонные строки для вставки переменных в текст.' },
                                { c: 'Объекты', s: '{ name: "Dima", age: 20 }', d: 'Набор свойств "ключ: значение". Описывает одну сущность.' },
                                { c: 'Массивы', s: '[1, 2, 3]', d: 'Список элементов. Доступ по индексу с нуля: list[0].' },
                                { c: 'Стрелочные функции', s: 'const sum = (a, b) => a + b;', d: 'Краткая запись. Основной стандарт в React.' },
                                { c: 'Условия', s: 'if (age >= 18) { ... }', d: 'Ветвление логики: если верно — выполняем.' },
                                { c: 'Тернарный оператор', s: 'age >= 18 ? "Ок" : "Нет"', d: 'Сокращенный if для React-верстки.' },
                                { c: 'Spread', s: '[...list, 4]', d: 'Копирование данных из старого массива в новый.' },
                                { c: 'Методы массивов', s: 'list.map(item => item * 2)', d: 'Проход по списку. .map() — создает новый список на базе старого.' }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-white/[0.02] transition-colors border-b border-white/5">
                                    <td className="p-4 font-bold text-white">{row.c}</td>
                                    <td className="p-4 font-mono text-blue-300 text-xs">{row.s}</td>
                                    <td className="p-4 text-slate-400">{row.d}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </section>

                    <InfoPanel title="Итоговая связь с React">
                        <ul className="text-sm space-y-2">
                            <li>• <b>Хранение:</b> Массивы и объекты держат данные (например, товары).</li>
                            <li>• <b>Изменение:</b> Функции меняют данные при клике на «Купить».</li>
                            <li>• <b>Отображение:</b> <code className="text-blue-300">.map()</code> превращает данные в карточки товаров на сайте.</li>
                            <li>• <b>Условия:</b> Тернарный оператор показывает «Корзина пуста», если данных нет.</li>
                        </ul>
                    </InfoPanel>
                </article>
            )}

            {/* --- РЕЖИМ ФАЙЛОВ --- */}
            {mode === 'files' && (
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold mb-8 text-white">Материалы к лекции</h2>
                    <div className="grid gap-4">
                        <FileDownload
                            name="Презентация.pdf"
                            url="/downloads/pres/less7.pdf"
                        />
                    </div>
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

export default Lesson8JS;


