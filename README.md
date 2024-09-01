## Структура проекта

```
test_task/
│
├── assets/                # Содержит статические ресурсы, такие как изображения, шрифты и т.д.
│
├── dist/                  # Каталог, куда помещаются скомпилированные файлы
│
├── node_modules/          # Папка с установленными модулями Node.js
│
├── src/                   # Исходные файлы проекта
│   ├── contexts/          # Контексты, используемые в проекте
│   ├── styles/            # SCSS стили
│   │   ├── components/    # SCSS файлы для отдельных компонентов
│   │   ├── _fonts.scss    # Определения шрифтов
│   │   ├── benefits.scss  # Стили для раздела с преимуществами
│   │   ├── catalog.scss   # Стили для раздела каталога
│   │   ├── footer.scss    # Стили для подвала страницы
│   │   ├── header.scss    # Стили для шапки страницы
│   │   └── main.scss      # Главный файл стилей
│   ├── main.ts            # Главный файл TypeScript
│   └── types.ts           # Определения типов для TypeScript
│
├── .eslintrc.js           # Конфигурация ESLint
├── .gitignore             # Правила игнорирования для Git
├── .prettierignore        # Правила игнорирования для Prettier
├── .prettierrc.js         # Конфигурация Prettier
├── index.html             # Шаблон HTML для проекта
├── package.json           # Конфигурация npm и скрипты проекта
├── tsconfig.json          # Конфигурация TypeScript
├── webpack.common.cjs     # Общая конфигурация Webpack
├── webpack.dev.cjs        # Конфигурация Webpack для разработки
└── yarn.lock              # Lock-файл для Yarn (версии зависимостей)
```

## Установка

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/your-username/copilotsalesdemo.git
   ```
2. Перейдите в каталог проекта:
   ```bash
   cd copilotsalesdemo
   ```
3. Установите зависимости:
   ```bash
   npm install
   ```

## Скрипты

В `package.json` доступны следующие скрипты:

### `npm run clearDist`
Очищает каталог `dist`, куда помещаются скомпилированные файлы. Использует пакет `rimraf` для удаления каталога.
```bash
npm run clearDist
```

### `npm run stylegen`
Компилирует SCSS файлы в CSS. Скомпилированные CSS файлы сохраняются в той же директории, где находятся исходные SCSS файлы.
```bash
npm run stylegen
```

### `npm run prettier`
Форматирует код с использованием Prettier, обеспечивая единый стиль кода по всему проекту.
```bash
npm run prettier
```

### `npm run lint`
Запускает Prettier и ESLint для проверки и исправления проблем с форматированием и линтингом кода по всему проекту. Охватывает файлы JavaScript, TypeScript, JSON и Markdown.
```bash
npm run lint
```

### `npm run build`
Собирает проект, сначала очищая каталог `dist`, генерируя стили, а затем используя Webpack для сборки проекта с использованием конфигурации для разработки.
```bash
npm run build
```

### `npm run watchWP`
Запускает Webpack в режиме наблюдения, автоматически пересобирая проект при обнаружении изменений в исходных файлах.
```bash
npm run watchWP
```

### `npm run watchST`
Отслеживает изменения в SCSS файлах и автоматически перекомпилирует их в CSS при обнаружении изменений.
```bash
npm run watchST
```

## Разработка

Для разработки используйте следующие команды для отслеживания изменений:

```bash
npm run watchWP    # Наблюдение и пересборка с помощью Webpack
npm run watchST    # Наблюдение и перекомпиляция SCSS файлов
```