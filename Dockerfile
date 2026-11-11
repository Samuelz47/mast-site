FROM nginx:1.27-alpine
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
RUN sed -i 's#/var/www/mast/public#/usr/share/nginx/html#; s#server_name .*#server_name _;#' /etc/nginx/conf.d/default.conf
COPY public/ /usr/share/nginx/html/
EXPOSE 80
