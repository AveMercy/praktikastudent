import React from 'react';
import {
    TheoryText,
    InfoPanel,
    CodeSnippet,
    TheoryImage, ExternalLinkCard
} from '../components/UIComponents';

const Lesson10BackendFull = ({ mode }) => {
    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            {mode === 'theory' && (
                <article>
                    <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                        Реализация Backend-логики
                    </h2>
                    <TheoryText>
                        На этой лекции мы переходим к самому важному — написанию кода сервера. Мы свяжем базу данных, созданную в phpMyAdmin, с нашим Node.js приложением.
                    </TheoryText>
                    <InfoPanel title="Важное напоминание">
                        В папке <b>controllers</b> должно быть ровно столько файлов, сколько у вас таблиц в БД. Аналогично для папок <b>models</b> и <b>routes</b>. Если у вас больше таблиц — создавайте дополнительные файлы и не забывайте правильно подключать импорты.
                    </InfoPanel>
                </article>
            )}
            {/* --- РЕЖИМ ФАЙЛОВ --- */}
            {mode === 'files' && (
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold mb-8 text-white">Инструменты и доступ</h2>

                    <div className="grid gap-4 mb-8">
                        <ExternalLinkCard
                            name="GitHub"
                            description="Репозиторий проекта GreenShop (Backend)"
                            url="https://github.com/isip-23/greenshop.git"
                        />
                    </div>

                    <InfoPanel title="Доступ к коду">
                        <div className="text-sm space-y-3 text-slate-300">
                            <p>
                                Если вам нужен доступ к репозиторию для внесения изменений или детального изучения структуры:
                            </p>
                            <ul className="list-disc list-inside space-y-1 ml-2">
                                <li><b>Обратитесь напрямую ко мне</b> в личные сообщения или на занятии.</li>
                                <li>Вышлите свой <b>email</b>, привязанный к вашему аккаунту на GitHub.</li>
                            </ul>
                            <p className="pt-2 border-t border-white/10 text-xs italic">
                                После этого я вышлю вам приглашение для вступления в организацию, и проект появится у вас в списке доступных.
                            </p>
                        </div>
                    </InfoPanel>
                </div>
            )}

            {mode === 'practice' && (
                <div className="space-y-12">
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div
                            className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">
                            <span className="text-sm">!</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Прежде чем начать:</h3>

                        <TheoryText>
                            Проверьте свою структуру проекта. Она должна быть строго организована, чтобы сервер мог
                            корректно находить нужные файлы. В том числе учитывайте, что ваше название файлов (не папок, а именно файлов (.js) может отличаться, в соотвествии с тем, какие у вас таблицы, помимо пользователей.
                            <TheoryImage src="/img/less10/3.png" alt="Структура папок Backend проекта"/>
                        </TheoryText>

                        <InfoPanel title="Важное напоминание">
                            В папке <b>controllers</b> должно быть ровно столько файлов, сколько у вас таблиц в БД.
                            Аналогично для папок <b>models</b> и <b>routes</b>. Если у вас больше таблиц — создавайте
                            дополнительные файлы и не забывайте правильно подключать импорты.
                        </InfoPanel>

                        <TheoryText>
                            Если вы используете нейронки  для помощи в написании кода, соблюдайте правила, чтобы не "сломать" проект и не получить гору мусорного кода:
                        </TheoryText>

                        <div className="grid grid-cols-1 gap-4 mb-8">
                            <div
                                className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/30 transition-all">
                                <h4 className="text-blue-400 font-bold mb-2">1. Поэтапная работа</h4>
                                <p className="text-sm text-slate-400">
                                    Не просите "напиши всё и сразу и одним файлом". Идите строго по файлам: сначала <b>.env</b>,
                                    затем <b>db.js</b>, потом одну модель и так далее. Это позволит вам контролировать
                                    каждую строчку.
                                </p>
                            </div>

                            <div
                                className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/30 transition-all">
                                <h4 className="text-blue-400 font-bold mb-2">2. Контекст и Стек</h4>
                                <p className="text-sm text-slate-400">
                                    Прежде чем просить код, огласите, что вы пишите Backend на <b>Node.js</b>. Ваш
                                    стек: <b>Express</b> (сервер), <b>Sequelize</b> (ORM для
                                    БД), <b>MySQL</b> (база), <b>JWT</b> (авторизация), <b>bcryptjs</b> (хеширование)
                                    и <b>multer</b> (загрузка файлов)". Обязательно прикрепите свой SQL-файл базы
                                    данных.
                                </p>
                            </div>

                            <div
                                className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/30 transition-all">
                                <h4 className="text-blue-400 font-bold mb-2">3. Передача архитектуры</h4>
                                <p className="text-sm text-slate-400">
                                    Скопируйте текстовое описание архитектуры из <b>Прошлой лекции (Раздел теории)</b> и отправьте нейронке.
                                    Она должна знать, что у вас разделение
                                    на <i>models</i>, <i>controllers</i> и <i>routes</i>, а не "всё в одном файле
                                    index.js".
                                </p>
                            </div>

                            <div
                                className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/30 transition-all">
                                <h4 className="text-blue-400 font-bold mb-2">4. Работа по образцу</h4>
                                <p className="text-sm text-slate-400">
                                    Даже если у вас магазин автозапчастей вместо растений, давайте нейронке пример кода из
                                    этой лекции и просите: "Сделай по аналогии с этим примером, но для моей таблицы в
                                    БД".
                                </p>
                            </div>

                            <div
                                className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/30 transition-all">
                                <h4 className="text-blue-400 font-bold mb-2">5. Ошибки</h4>
                                <p className="text-sm text-slate-400">
                                    ИИ часто ошибается в путях (например,
                                    пишет <code>./models</code> вместо <code>../models</code>). Будьте готовы вручную
                                    править импорты и проверять названия столбцов, чтобы они совпадали с вашим
                                    SQL-дампом.
                                </p>
                            </div>
                        </div>
                    </section>
                    {/* ШАГ 1 */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div
                            className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">1
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Шаг 1: Конфигурация окружения (.env)</h3>
                        <TheoryText>
                            Начнем с фундамента — файла <code className="text-blue-300">.env</code>. В нем хранятся
                            секретные доступы к вашей базе данных. Важно, чтобы все данные были указаны правильно. В
                            этот файл стоит внести измнения, так как он разный для всех.
                        </TheoryText>
                        <CodeSnippet language="makefile"
                                     code={`PORT=5000 # порт, на котором мы запускаем бэк, можно изменить \nDB_NAME=greenshop_bd # измените на название вашей бд в phpmyadmin\nDB_USER=root # стандартный логин для phpmyadmin\nDB_PASSWORD=root # стандартный пароль (в OpenServer обычно root или пусто)\nDB_HOST=127.0.0.1 # адрес сервера\nDB_PORT=3306 # стандартный порт MySQL\nDB_DIALECT=mysql # используемая СУБД\n\nJWT_SECRET=qwekey123 # секретный ключ для шифрования токенов, можно изменить `}/>

                        <div className="mt-4 p-6 bg-yellow-500/5 border border-yellow-500/20 rounded-2xl">
                            <h4 className="text-yellow-500 font-bold mb-2 flex items-center gap-2">
                                Зачем нужен JWT_SECRET?
                            </h4>
                            <p className="text-sm text-slate-300">
                                Он нужен библиотеке <b>jsonwebtoken</b>, чтобы подписывать токены. Если кто-то украдет
                                токен, он не сможет его подделать, не зная этого секретного слова.
                            </p>
                        </div>

                        <div className="mt-4 p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl">
                            <h4 className="text-blue-400 font-bold mb-2 italic">Где смотреть DB_HOST и DB_PORT?</h4>
                            <p className="text-sm text-slate-300">
                                В OpenServer (особенно старых версиях): кликните по флажку → Настройки → Модули. Там вы
                                увидите порт MySQL. Обычно это 3306. Если вы используете докер или удаленный хост,
                                данные будут другими.
                            </p>
                        </div>
                    </section>

                    {/* ШАГ 2 */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div
                            className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">2
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Шаг 2: Конфигурация Sequelize
                            (config/db.js)</h3>
                        <TheoryText>
                            Теперь создадим файл конфигурации Sequelize, который будет использовать эти переменные. Этот
                            файл не требует особых измнений, можете взять как есть или написать свой код на основе
                            этого.
                        </TheoryText>
                        <CodeSnippet
                            code={`const { Sequelize } = require('sequelize');\nrequire('dotenv').config();\n\n// Создаем экземпляр подключения к БД\nconst sequelize = new Sequelize(\n  process.env.DB_NAME, // Берем имя БД из .env\n  process.env.DB_USER, // Логин\n  process.env.DB_PASSWORD, // Пароль\n  {\n    host: process.env.DB_HOST,\n    port: process.env.DB_PORT,\n    dialect: process.env.DB_DIALECT,\n    logging: false, // Чтобы не засорять консоль логами SQL запросов\n  }\n);\n\n// Функция для проверки, что мы реально подключились\nconst testConnection = async () => {\n  try {\n    await sequelize.authenticate();\n    console.log('Соединение с БД установлено успешно');\n  } catch (error) {\n    console.error('Ошибка подключения к БД:', error);\n  }\n};\n\ntestConnection();\n\nmodule.exports = sequelize;`}/>
                    </section>

                    {/* ШАГ 3-4: МОДЕЛИ */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div
                            className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">3
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Шаг 3 и 4: Модели (Product и User)</h3>
                        <TheoryText>
                            Модели описывают структуру таблиц. Типы данных в <code
                            className="text-blue-300">DataTypes</code> должны в точности совпадать с типами в вашем SQL
                            дампе. Напишите свой код для этих файлов, в соответсвии с вашими данными в БД, основываясь
                            на примере.
                        </TheoryText>
                        <TheoryText>
                            Рассмотрим подробнее на примере файла продуктов (растений). У меня в БД следующая структура.
                            Соответсвенно в коде это будет выглядеть так.
                        </TheoryText>
                        <TheoryText>
                            Разбор строчки id: DataTypes - это Тип данных - int (integer), далее задаем первичный ключ
                            (primary key: true) и автозаполнение для id, прямо как в phpmyadmin, толкьо здесь это -
                            autoIncrement: true.
                        </TheoryText>
                        <TheoryText>
                            Аналогично для остальных строк. Тип данных varchar - это string, остальное все совпадает,
                            сложностей не должно возникнуть.
                        </TheoryText>
                        <TheoryImage src="/img/less10/1.png"/>


                        <p className="text-sm text-slate-500 mb-2 italic">Файл: models/Product.js</p>
                        <CodeSnippet
                            code={`const { DataTypes } = require('sequelize');\nconst sequelize = require('../config/db');\n\nconst Product = sequelize.define('Product', {\n  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },\n  name: { type: DataTypes.STRING, allowNull: false },\n  price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },\n  category: { type: DataTypes.STRING, allowNull: false },\n  image_url: { type: DataTypes.STRING, allowNull: false },\n  stock: { type: DataTypes.INTEGER, allowNull: false }\n}, {\n  tableName: 'products', // Имя таблицы в phpMyAdmin\n  timestamps: false // Чтобы Sequelize не искал колонки createdAt/updatedAt\n});\n\nmodule.exports = Product;`}/>


                        <p className="text-sm text-slate-500 mb-2 mt-8 italic">Файл: models/User.js</p>
                        <CodeSnippet
                            code={`const { DataTypes } = require('sequelize');\nconst sequelize = require('../config/db');\n\nconst User = sequelize.define('User', {\n  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },\n  email: { \n    type: DataTypes.STRING, \n    allowNull: false, \n    unique: true, \n    validate: { isEmail: true } // Проверка на формат почты\n  },\n  password: { type: DataTypes.STRING, allowNull: false },\n  role: { type: DataTypes.STRING, defaultValue: 'CLIENT' },\n  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }\n}, {\n  tableName: 'users',\n  timestamps: false\n});\n\nmodule.exports = User;`}/>
                    </section>

                    {/* ШАГ 5: КОНТРОЛЛЕР ТОВАРОВ */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div
                            className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">5
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Шаг 5: Контроллер товаров (Логика CRUD)</h3>
                        <TheoryText>
                            Этот файл полностью управляет базой данных растений. Здесь реализованы все 5 базовых
                            операций: получение списка, поиск одного, создание, обновление и удаление.
                            Напишите код этого файла в соотвествии с вашим проектом по примеру.
                        </TheoryText>

                        <p className="text-sm text-slate-500 mb-2 italic">Файл: controllers/productController.js</p>
                        <CodeSnippet
                            code={`const Product = require('../models/Product');\n\n// 1. Получить все товары (READ)\nexports.getAllProducts = async (req, res) => {\n  try {\n    const products = await Product.findAll(); // Sequelize метод для получения всех записей\n    res.json(products); // Отправляем список клиенту в формате JSON\n  } catch (error) {\n    res.status(500).json({ message: 'Ошибка при получении списка', error: error.message });\n  }\n};\n\n// 2. Получить один товар (READ)\nexports.getProductById = async (req, res) => {\n  try {\n    const product = await Product.findByPk(req.params.id); // Поиск по первичному ключу (ID)\n    if (!product) return res.status(404).json({ message: 'Товар не найден' });\n    res.json(product);\n  } catch (error) {\n    res.status(500).json({ message: 'Ошибка сервера', error: error.message });\n  }\n};\n\n// 3. Создать товар (CREATE)\nexports.createProduct = async (req, res) => {\n  try {\n    const { name, price, category, stock } = req.body; // Достаем данные из тела запроса\n\n    // Если файл загружен через multer, берем его путь, иначе берем ссылку из текста\n    const image_url = req.file ? \`/uploads/\${req.file.filename}\` : req.body.image_url;\n\n    const product = await Product.create({\n      name,\n      price,\n      category,\n      image_url,\n      stock\n    });\n\n    res.status(201).json(product); // 201 — код успешного создания\n  } catch (error) {\n    res.status(400).json({ message: 'Ошибка при создании', error: error.message });\n  }\n};\n\n// 4. Обновить товар (UPDATE)\nexports.updateProduct = async (req, res) => {\n  try {\n    const { name, price, category, image_url, stock } = req.body;\n    const product = await Product.findByPk(req.params.id);\n\n    if (!product) return res.status(404).json({ message: 'Товар не найден' });\n\n    // Обновляем поля в базе данных\n    await product.update({ name, price, category, image_url, stock });\n    res.json({ message: 'Товар обновлен', product });\n  } catch (error) {\n    res.status(400).json({ message: 'Ошибка при обновлении', error: error.message });\n  }\n};\n\n// 5. Удалить товар (DELETE)\nexports.deleteProduct = async (req, res) => {\n  try {\n    const product = await Product.findByPk(req.params.id);\n    if (!product) return res.status(404).json({ message: 'Товар не найден' });\n\n    await product.destroy(); // Удаление записи из таблицы\n    res.json({ message: 'Товар успешно удален' });\n  } catch (error) {\n    res.status(500).json({ message: 'Ошибка при удалении', error: error.message });\n  }\n};`}/>
                    </section>

                    {/* ШАГ 6: КОНТРОЛЛЕР АУТЕНТИФИКАЦИИ */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div
                            className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">6
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Шаг 6: Контроллер пользователей и
                            аутентификации</h3>
                        <TheoryText>
                            Здесь мы шифруем пароли с помощью <b>bcryptjs</b> и выдаем токен через <b>jsonwebtoken</b>.
                            Напишите код этого файла в соотвествии с вашим проектом по примеру. (Или используйте этот,
                            если ваша таблица пользоваталей совпадает с примером)
                        </TheoryText>

                        <p className="text-sm text-slate-500 mb-2 italic">Файл: controllers/authController.js</p>
                        <CodeSnippet
                            code={`const User = require('../models/User');\nconst bcrypt = require('bcryptjs');\nconst jwt = require('jsonwebtoken');\n\n// Регистрация нового пользователя\nexports.register = async (req, res) => {\n  try {\n    const { email, password } = req.body;\n\n    // Проверяем через базу, не занята ли почта\n    const candidate = await User.findOne({ where: { email } });\n    if (candidate) {\n      return res.status(400).json({ message: 'Пользователь с таким email уже существует' });\n    }\n\n    // Хешируем пароль (превращаем в случайный набор символов)\n    const hashedPassword = await bcrypt.hash(password, 10);\n\n    // Создаем пользователя в таблице 'users'\n    const user = await User.create({\n      email,\n      password: hashedPassword,\n      role: 'CLIENT' // Роль по умолчанию\n    });\n\n    res.status(201).json({ message: 'Пользователь создан' });\n  } catch (error) {\n    res.status(500).json({ message: 'Ошибка регистрации', error: error.message });\n  }\n};\n\n// Логин (Вход в систему)\nexports.login = async (req, res) => {\n  try {\n    const { email, password } = req.body;\n\n    // Ищем пользователя по почте\n    const user = await User.findOne({ where: { email } });\n    if (!user) {\n      return res.status(404).json({ message: 'Пользователь не найден' });\n    }\n\n    // Сравниваем пароль из запроса с хешем в базе данных\n    const isMatch = await bcrypt.compare(password, user.password);\n    if (!isMatch) {\n      return res.status(400).json({ message: 'Неверный пароль' });\n    }\n\n    // Если всё верно — создаем JWT токен\n    const token = jwt.sign(\n      { id: user.id, role: user.role }, // Данные, которые "в зашитом" виде будут в токене\n      process.env.JWT_SECRET, // Наш секретный ключ из .env\n      { expiresIn: '24h' } // Срок действия ключа\n    );\n\n    // Отправляем токен и краткие данные пользователя на фронтенд\n    res.json({ \n      token, \n      user: { id: user.id, email: user.email, role: user.role } \n    });\n  } catch (error) {\n    res.status(500).json({ message: 'Ошибка входа', error: error.message });\n  }\n};`}/>
                    </section>

                    {/* ШАГ 7: МАРШРУТЫ (ROUTES) */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div
                            className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">7
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Шаг 7: Настройка маршрутов (Routes)</h3>
                        <TheoryText>
                            Здесь мы определяем адреса API, по которым фронтенд будет обращаться к серверу. Мы разделяем
                            их на публичные (доступны всем) и защищенные (только для админа).
                        </TheoryText>
                        <TheoryText>
                            Код этих файлов может сильно не отличаться от этого примера. Но обязательно проверьте
                            правильность путей импорта и соотвествие названий для своего проекта.
                        </TheoryText>
                        {/* Маршруты товаров */}
                        <p className="text-sm text-slate-500 mb-2 italic">Файл: routes/productRoutes.js</p>
                        <CodeSnippet
                            code={`const express = require('express');\nconst router = express.Router();\nconst productController = require('../controllers/productController');\n\n// Подключаем middleware для защиты путей\nconst authMiddleware = require('../middleware/authMiddleware');\nconst roleMiddleware = require('../middleware/roleMiddleware');\nconst upload = require('../middleware/uploadMiddleware');\n\n// --- Маршруты, доступные всем ---\nrouter.get('/', productController.getAllProducts);\nrouter.get('/:id', productController.getProductById);\n\n// --- Маршруты только для ADMIN ---\n// (Сначала проверяем токен, потом роль, потом загружаем фото, потом вызываем контроллер)\n\nrouter.post(\n  '/',\n  authMiddleware,\n  roleMiddleware(['ADMIN']),\n  upload.single('image'), // Ожидаем файл в поле 'image'\n  productController.createProduct\n);\n\nrouter.put(\n  '/:id',\n  authMiddleware,\n  roleMiddleware(['ADMIN']),\n  upload.single('image'),\n  productController.updateProduct\n);\n\nrouter.delete(\n  '/:id',\n  authMiddleware,\n  roleMiddleware(['ADMIN']),\n  productController.deleteProduct\n);\n\nmodule.exports = router;`}/>

                        {/* Маршруты авторизации */}
                        <p className="text-sm text-slate-500 mb-2 mt-8 italic">Файл: routes/authRoutes.js</p>
                        <CodeSnippet
                            code={`const express = require('express');\nconst router = express.Router();\nconst authController = require('../controllers/authController');\n\n// Регистрация: POST /api/auth/register\nrouter.post('/register', authController.register);\n\n// Логин: POST /api/auth/login\nrouter.post('/login', authController.login);\n\nmodule.exports = router;`}/>
                    </section>


                    {/* ШАГ 8: AUTH MIDDLEWARE */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div
                            className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">8
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Шаг 8: Middleware авторизации (JWT
                            Check)</h3>
                        <TheoryText>
                            Перед тем как мы соберем всё воедино в app.js, нам нужно создать промежуточные фильтры. Этот
                            файл проверяет JWT-токен. Это нужно, чтобы, например, только авторизованные пользователи
                            могли делать заказы или заходить в админку.
                        </TheoryText>
                        <TheoryText>
                            Напишите мидлы для шагов 8-10 или возьмите из примера, в соответсвии со своим проектом.
                        </TheoryText>
                        <p className="text-sm text-slate-500 mb-2 italic">Файл: middleware/authMiddleware.js</p>
                        <CodeSnippet
                            code={`const jwt = require('jsonwebtoken');\n\nmodule.exports = (req, res, next) => {\n  // Извлекаем токен из заголовка Authorization (формат "Bearer TOKEN")\n  const authHeader = req.headers.authorization;\n\n  if (!authHeader) {\n    return res.status(401).json({ message: 'Нет авторизации' });\n  }\n\n  const token = authHeader.split(' ')[1]; // Берем только сам токен\n\n  try {\n    // Проверяем токен с помощью секретного ключа из .env\n    const decoded = jwt.verify(token, process.env.JWT_SECRET);\n    req.user = decoded; // Добавляем данные пользователя (id, role) в объект запроса\n    next(); // Идем дальше к следующей функции\n  } catch (e) {\n    res.status(401).json({ message: 'Токен не валиден' });\n  }\n};`}/>
                    </section>

                    {/* ШАГ 9: ROLE MIDDLEWARE */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div
                            className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">9
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Шаг 9: Middleware проверки ролей</h3>
                        <TheoryText>
                            Этот фильтр проверяет права доступа. Он будет использоваться вместе с первым middleware,
                            чтобы пускать в админку только пользователей с ролью ADMIN.
                        </TheoryText>

                        <p className="text-sm text-slate-500 mb-2 italic">Файл: middleware/roleMiddleware.js</p>
                        <CodeSnippet
                            code={`module.exports = (roles) => {\n  return (req, res, next) => {\n    // Данные пользователя (req.user) попадают сюда автоматически из authMiddleware\n    if (!req.user || !roles.includes(req.user.role)) {\n      return res.status(403).json({ message: 'Доступ запрещен: недостаточно прав' });\n    }\n    next(); // Если роль совпадает (например ADMIN), пропускаем дальше\n  };\n};`}/>
                    </section>

                    {/* ШАГ 10: UPLOAD MIDDLEWARE */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div
                            className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">10
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Шаг 10: Middleware загрузки изображений
                            (Multer)</h3>
                        <TheoryText>
                            Этот файл отвечает за физическое сохранение картинок на диск сервера в папку <b>uploads</b>.
                        </TheoryText>

                        <p className="text-sm text-slate-500 mb-2 italic">Файл: middleware/uploadMiddleware.js</p>
                        <CodeSnippet
                            code={`const multer = require('multer');\nconst path = require('path');\n\n// Настройка хранилища\nconst storage = multer.diskStorage({\n  destination: (req, file, cb) => {\n    cb(null, 'uploads/'); // Важно: папка uploads должна быть создана в корне проекта!\n  },\n  filename: (req, file, cb) => {\n    // Создаем уникальное имя файла: дата-рандом-оригинальное_имя\n    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);\n    cb(null, uniqueSuffix + path.extname(file.originalname));\n  }\n});\n\n// Фильтр файлов (разрешаем только изображения)\nconst fileFilter = (req, file, cb) => {\n  if (file.mimetype.startsWith('image/')) {\n    cb(null, true);\n  } else {\n    cb(new Error('Только изображения разрешены для загрузки!'), false);\n  }\n};\n\n// Создаем объект загрузчика\nconst upload = multer({\n  storage: storage,\n  fileFilter: fileFilter,\n  limits: { fileSize: 5 * 1024 * 1024 } // Лимит размера одного файла: 5МБ\n});\n\nmodule.exports = upload;`}/>
                    </section>

                    {/* ПЕРЕХОД К СИДЕРАМ */}
                    <section className="relative pl-12 border-l-2 border-emerald-500/30">
                        <div
                            className="absolute -left-4 top-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg"></div>
                        <h3 className="text-2xl font-bold text-white mb-6"> Создание первичных данных (Сидеры)</h3>
                        <TheoryText>
                            Теперь, когда у нас есть база, модели, логика (контроллеры) и пути (маршруты), осталось
                            только "склеить" это в главном файле приложения. Но перед этим нужно создать администратора
                            через <b>сидер</b>, чтобы мы могли зайти в систему под главной учетной записью.
                        </TheoryText>

                        <InfoPanel title="Зачем нужен сидер?">
                            Сидер — это скрипт, который наполняет пустую базу данных начальными данными. В нашем случае
                            он создаст аккаунт администратора, если его еще нет в таблице <i>users</i>.
                        </InfoPanel>
                    </section>


                    {/* ШАГ 11: СИДЕР АДМИНИСТРАТОРА */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div
                            className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">11
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Шаг 11: Сидер (Автоматическое создание
                            админа)</h3>
                        <TheoryText>
                            Чтобы не создавать админа вручную через базу данных, мы пишем скрипт-сидер. Он проверит
                            наличие записи и создаст её при первом запуске сервера.
                        </TheoryText>
                        <TheoryText>
                            Если в ваша табица пользователей идентична той, что мы создавали в примере, то сидер будет
                            выглядеть точно так же и ошибок не должно возникнуть. Можете изменить пароль и логин.

                        </TheoryText>
                        <TheoryText>
                            Если у вас таблица отличается - обязательно проверьте модели (models/User.js) и сравните со
                            своей бд, перепишите файл в соотвествии со своим проектом.
                            Как минимум у вас должен быть email, password и role, а также типы данных должны четко
                            соотвествовать, чтобы этот сидер сработал правильно.
                        </TheoryText>

                        <p className="text-sm text-slate-500 mb-2 italic">Файл: seeders/adminSeeder.js</p>
                        <CodeSnippet
                            code={`const User = require('../models/User');\nconst bcrypt = require('bcryptjs');\n\nconst seedAdmin = async () => {\n  try {\n    // Проверяем, есть ли уже админ, чтобы не плодить дубликаты при каждом перезапуске\n    const adminExists = await User.findOne({ where: { email: 'admin@green.com' } });\n\n    if (!adminExists) {\n      // Хешируем пароль для безопасности\n      const hashedPassword = await bcrypt.hash('admin123', 10);\n\n      await User.create({\n        email: 'admin@green.com',\n        password: hashedPassword,\n        role: 'ADMIN'\n      });\n\n      console.log('Сидер: Админ успешно создан (admin@green.com / admin123)');\n    } else {\n      console.log('Сидер: Админ уже существует в базе данных');\n    }\n  } catch (error) {\n    console.error('Ошибка сидера:', error.message);\n  }\n};\n\nmodule.exports = seedAdmin;`}/>
                    </section>

                    {/* ШАГ 12: СБОРКА ПРИЛОЖЕНИЯ */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30">
                        <div
                            className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">12
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Шаг 12: Сборка приложения (app.js)</h3>
                        <TheoryText>
                            В этом файле мы "склеиваем" все части: подключаем CORS, парсинг JSON, открываем доступ к
                            папке с картинками и регистрируем наши маршруты (routes).
                        </TheoryText>
                        <TheoryText>
                            Не забывайте подключать все импорты (const), если файлов у вас больше (таблиц). Напишите в
                            соотвествии с вашим проектом.
                        </TheoryText>
                        <p className="text-sm text-slate-500 mb-2 italic">Файл: app.js</p>
                        <CodeSnippet
                            code={`const express = require('express');\nconst cors = require('cors');\nconst path = require('path');\nconst productRoutes = require('./routes/productRoutes'); // Импорт ваших роутов \nconst authRoutes = require('./routes/authRoutes');\n\nconst app = express();\n\n// Middleware\napp.use(cors()); // Разрешаем запросы с других доменов (например, с вашего фронтенда на Vite)\napp.use(express.json()); // Позволяем серверу понимать JSON в теле запроса (req.body)\n\n// Статика для картинок\n// Делаем папку 'uploads' публичной, чтобы картинки были доступны по ссылке: http://localhost:5000/uploads/имя_файла.jpg\napp.use('/uploads', express.static(path.join(__dirname, 'uploads')));\n\n// Регистрация маршрутов API\napp.use('/api/products', productRoutes);\napp.use('/api/auth', authRoutes);\n\n// Базовый маршрут для проверки работоспособности в браузере\napp.get('/', (req, res) => {\n  res.send('GreenShop API запущен...');\n});\n\nmodule.exports = app;`}/>
                    </section>

                    {/* ШАГ 13: ТОЧКА ВХОДА */}
                    <section className="relative pl-12 border-l-2 border-blue-500/30 pb-8">
                        <div
                            className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">13
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Шаг 13: Точка входа (index.js)</h3>
                        <TheoryText>
                            Это главный файл, который мы будем запускать. Он синхронизирует базу данных, запускает сидер
                            и поднимает сервер на порту.
                        </TheoryText>

                        <p className="text-sm text-slate-500 mb-2 italic">Файл: index.js</p>
                        <CodeSnippet
                            code={`const app = require('./app.js');\nconst sequelize = require('./config/db');\nconst seedAdmin = require('./seeders/adminSeeder');\nrequire('dotenv').config();\n\nconst PORT = process.env.PORT || 5000;\n\nasync function startServer() {\n  try {\n    // Синхронизация моделей с БД\n    // { alter: false } — не менять структуру таблиц автоматически (безопаснее для данных)\n    await sequelize.sync({ alter: false });\n    \n    // Запуск сидера для создания админа\n    await seedAdmin();\n\n    // Запуск прослушивания порта\n    app.listen(PORT, () => {\n      console.log(\`Сервер запущен на http://localhost:\${PORT}\`);\n    });\n  } catch (error) {\n    console.error('Не удалось запустить сервер:', error);\n  }\n}\n\nstartServer();`}/>

                        <InfoPanel title="Итог работы">
                            Теперь, когда вы напишете в терминале <code className="text-blue-300">node index.js</code>,
                            ваш сервер подключится к MySQL, создаст (если нужно) админа и начнет ждать запросы от
                            фронтенда. Вы официально создали архитектуру полноценного веб-приложения!
                        </InfoPanel>
                    </section>

                    {/* ШАГ 14: RUN */}
                    <section className="relative pl-12 border-l-2 border-emerald-500/30 pb-12">
                        <div
                            className="absolute -left-4 top-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">14
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Шаг 14: Запуск и проверка</h3>

                        <TheoryText>
                            <b>Перед запуском:</b> убедитесь, что OpenServer включен (флажок зеленый) и ваша база данных
                            создана в phpMyAdmin. Если вы перешли на другой ПК — обязательно импортируйте SQL-дамп.
                        </TheoryText>

                        <TheoryText>
                            Откройте терминал (снизу слева или Alt+F12) и введите команду: <br/>
                            <code className="text-blue-400">node index.js</code>
                        </TheoryText>

                        <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl mb-8">
                            <p className="text-emerald-400 font-bold mb-2 ">Что должно произойти:</p>
                            <TheoryImage src="/img/less10/2.png"/>

                            <ul className="text-sm text-slate-300 space-y-2">
                                <li>✅ В консоли: <span className="text-emerald-500">"Соединение успешно"</span></li>
                                <li>✅ В консоли: <span className="text-emerald-500">"Сервер запущен на http://localhost:5000"</span>
                                </li>
                                <li>✅ В phpMyAdmin: в таблице <b>users</b> автоматически появился админ с хэишированным
                                    паролем
                                </li>
                            </ul>
                        </div>

                        <h4 className="text-red-400 font-bold mb-6 flex items-center gap-2">
                            Исправление ошибок:
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Ошибка 1: Модули */}
                            <div className="p-5 bg-red-500/5 border border-red-500/10 rounded-2xl">
                                <b className="text-red-400 block mb-1 text-sm">Error: Cannot find module...</b>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    Вы не установили библиотеки или ошиблись в пути. <br/>
                                    <b>Решение:</b> Проверьте <code
                                    className="text-red-300 italic">require('./...')</code>. Точка в начале обязательна!
                                    Убедитесь, что написали <code className="text-blue-300">npm install</code> в начале
                                    работы.
                                </p>
                            </div>

                            {/* Ошибка 2: База данных */}
                            <div className="p-5 bg-red-500/5 border border-red-500/10 rounded-2xl">
                                <b className="text-red-400 block mb-1 text-sm">Connection Refused / Access Denied</b>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    Сервер не может "достучаться" до MySQL. <br/>
                                    <b>Решение:</b> Проверьте файл <b>.env</b>. Имя базы (DB_NAME) должно быть 1-в-1 как
                                    в phpMyAdmin. Проверьте пароль (в OpenServer это обычно <code
                                    className="text-red-300">root</code> или пусто).
                                </p>
                            </div>

                            {/* Ошибка 3: Порты */}
                            <div className="p-5 bg-red-500/5 border border-red-500/10 rounded-2xl">
                                <b className="text-red-400 block mb-1 text-sm">Error: listen EADDRINUSE: address already
                                    in use</b>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    Порт 5000 уже занят другим процессом. <br/>
                                    <b>Решение:</b> Либо завершите прошлый процесс (Ctrl+C в терминале), либо измените
                                    PORT в <b>.env</b> на 5001.
                                </p>
                            </div>

                            {/* Ошибка 4: Структура папок */}
                            <div className="p-5 bg-red-500/5 border border-red-500/10 rounded-2xl">
                                <b className="text-red-400 block mb-1 text-sm">Таблица не создается / Ошибка Сидера</b>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    Sequelize не может найти модели. <br/>
                                    <b>Решение:</b> Убедитесь, что папки
                                    называются <b>models</b>, <b>controllers</b>, <b>routes</b> (строго маленькими
                                    буквами). Проверьте <i>tableName</i> внутри моделей — они должны совпадать с БД.
                                </p>
                            </div>

                            {/* Ошибка 5: Точка входа */}
                            <div className="p-5 bg-red-500/5 border border-red-500/10 rounded-2xl">
                                <b className="text-red-400 block mb-1 text-sm">Команда не найдена (node)</b>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    Отсуствует Node.js. <br/>
                                    <b>Решение:</b> Установить и перезапустить intelij
                                </p>
                            </div>

                            {/* Ошибка 6: Multer / Uploads */}
                            <div className="p-5 bg-red-500/5 border border-red-500/10 rounded-2xl">
                                <b className="text-red-400 block mb-1 text-sm">ENOENT: no such file or directory
                                    'uploads'</b>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    Сервер хочет сохранить картинку, но папки нет. <br/>
                                    <b>Решение:</b> Создайте в корне проекта пустую папку с названием <code
                                    className="text-blue-300">uploads</code>.
                                </p>
                            </div>
                        </div>

                        <InfoPanel title="" className="mt-8">
                            Если вы видите непонятную ошибку — читайте самую первую строку в терминале. Обычно Node.js
                            пишет конкретный файл и номер строки, где вы допустили опечатку.
                        </InfoPanel>
                    </section>
                </div>
            )}
        </div>
    );
};

export default Lesson10BackendFull;