FROM node:latest as node
WORKDIR /pokeApp
COPY ./ /pokeApp/
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=node /pokeApp/dist/poke-app /usr/share/nginx/html

