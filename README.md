# Экономизм Private - Лендинг

Лендинг-страница для продукта "Экономизм Private" - сообщества для личностного и финансового роста.

## Технологии

- **React 18** - UI библиотека
- **Vite** - сборщик и dev-сервер
- **Tailwind CSS** - стилизация
- **Framer Motion** - анимации

## Установка и запуск

1. Установите зависимости:
```bash
npm install
```

2. Запустите dev-сервер:
```bash
npm run dev
```

3. Соберите для продакшена:
```bash
npm run build
```

## Деплой на Vercel

1. Подключите репозиторий к Vercel
2. Vercel автоматически определит настройки
3. Деплой произойдет автоматически при каждом push в main ветку

Или используйте Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Структура проекта

```
src/
  components/
    Header.jsx      - Шапка сайта с навигацией
    Hero.jsx        - Главная секция
    ProductDescription.jsx - Описание продукта
    Pricing.jsx     - Секция с ценами и оплатой
    Testimonials.jsx - Отзывы
    Footer.jsx      - Подвал
  App.jsx           - Главный компонент
  main.jsx          - Точка входа
  index.css         - Глобальные стили
```

## Настройки

- Логотип: `logo.png` в корне проекта
- Ссылка на оплату: настроена в `src/components/Pricing.jsx`
- Цвета: настроены в `tailwind.config.js`
