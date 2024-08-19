FROM node:20 as builder
WORKDIR /buildspace
ARG ENV=dev
COPY . .
RUN npm config set registry https://registry.npmmirror.com
RUN npm install
RUN npm run build:${ENV}


FROM nginx
WORKDIR /usr/share/nginx/html
COPY ./manifests/nginx.conf /etc/nginx/nginx.conf
COPY ./manifests/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /buildspace/dist /usr/share/nginx/html
