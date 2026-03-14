# Этап 1: Сборка (Build stage)
FROM ovhcom/bun:1.1 AS build

WORKDIR /app

# Копируем файлы зависимостей
COPY package.json bun.lockb ./

# Устанавливаем зависимости (frozen-lockfile гарантирует соответствие локфайлу)
RUN bun install --frozen-lockfile

# Копируем остальной код
COPY . .

# Собираем проект (результат обычно падает в папку /dist)
RUN bun run build

# Этап 2: Раздача статики (Production stage)
FROM nginx:stable-alpine

# Копируем собранные файлы из первого этапа в папку nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Копируем кастомный конфиг Nginx (если есть)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]