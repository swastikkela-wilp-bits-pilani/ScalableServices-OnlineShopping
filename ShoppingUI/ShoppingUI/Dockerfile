# Stage 1: Build the Angular application

FROM node:8.17.0 as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install

RUN npm run build


# Stage 2: Serve the Angular application with Nginx

FROM nginx:latest

COPY --from=build /usr/local/app/dist/ShoppingUI /usr/share/nginx/html

EXPOSE 80