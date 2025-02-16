FROM docker.io/node:22 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM docker.io/nginx:1.21.6 as prod-stage

LABEL maintainer="Luiz Toni <luiztoni@example.com>"
LABEL version="1.0"
LABEL description="SPA App"

RUN addgroup -S nginx && adduser -S nginx -G nginx
USER nginx:nginx

COPY --from=build-stage /app/dist/ng-app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon -off;"]
# docker build -t ng-app .
# docker run -p 8080:80 ng-app
