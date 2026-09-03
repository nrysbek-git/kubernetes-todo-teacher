FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginxinc/nginx-unprivileged:1.27-alpine
COPY conf/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --chown=101:101 --from=builder /app/dist /usr/share/nginx/html
COPY --chown=101:101 --chmod=755 env.sh /docker-entrypoint.d/40-runtime-config.sh
EXPOSE 8080
