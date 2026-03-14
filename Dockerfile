# Этап 1: Сборка (Build stage)
# Используем официальный образ Bun на базе Alpine для минимального размера
FROM oven/bun:1.1-alpine AS build

WORKDIR /app

# Копируем только файлы зависимостей для эффективного кэширования слоев
COPY package.json bun.lockb ./

# Устанавливаем зависимости
RUN bun install --frozen-lockfile

# Копируем исходный код
COPY . .

# Собираем статику
RUN bun run build

# Этап 2: Раздача статики (Production stage)
FROM nginx:stable-alpine

# Копируем билд из предыдущего этапа
# В Vite по умолчанию папка называется 'dist'
COPY --from=build /app/dist /usr/share/nginx/html

# Опционально: копируем конфиг для поддержки SPA (React Router)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]