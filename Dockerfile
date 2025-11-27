FROM node:20-alpine AS builder
WORKDIR /app

# install deps
COPY package*.json ./
RUN npm ci --prefer-offline --no-audit --no-fund

# copy source and build
COPY . .
RUN npm run build

FROM nginx:stable-alpine
# copy built files to nginx www
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
