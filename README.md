# Доклад №3: "Серверная часть сетевого приложения"

### Пример №2. Пример настройки в nginx HTTPS и проксирования

##### Установка и запуск

1. Установить [Node.js](https://nodejs.org/en/) и [Git](https://git-scm.com/downloads) (по желанию)
2. Клонировать или загрузить проект в виде архива
3. Установить [nginx](https://nginx.org/ru/download.html)

В консоли/терминале:
``` bash
# Перейти в папку, в которую планируется клонирование проекта, например:
$ cd /Projects
# Клонировать проект из репозитория
$ git clone https://github.com/econri/03-02-https-nginx.git
```

3. Установить зависимости и запустить

В консоли/терминале:

``` bash
# Перейти в папку проекта
$ cd 03-02-https-nginx
# Установить зависимости
$ npm install
# Запустить
$ npm start
```

Web-приложение будет запущено по адресу http://localhost:3001

4. Настройка nginx

а) Создать папку ssl в папке, где установлен nginx. 
В ОС Ubuntu путь к папке выглядит следующим образом: `/etc/nginx/ssl`.

б) Подготовить ssl-сертификат и ключ сервера

В консоли/терминале:

``` bash
$ sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./server.key -out ./server.crt
```

в) Поместить файлы (ssl сертификат и ключ) `server.crt` и `server.key` в созданную ранее папку `ssl`.

Для настройки nginx  будет достаточно заменить содержимое файла `default`, который находится в папке `sites-enabled` папки установки nginx, на содержимое файла `nginx-default` данного проекта. В ОС Ubuntu путь к файлу `default` выглядит следующим образом: `/etc/nginx/sites-enabled/default`.

После сохранения изменений в настройках нужно перезапустить сервер nginx.

В консоли/терминале:

``` bash
$ sudo service nginx restart
```

При обращении в браузере по адресу `localhost` nginx, в соответствии с настройками, перенаправит запрос на адрес `https://localhost`, а с этого адреса на адрес `http://localhost:3001`. 

##### Ссылки:

1. [nginx](https://nginx.org/ru/download.html)
2. [How To Create an SSL Certificate on Nginx for Ubuntu 14.04](https://www.digitalocean.com/community/tutorials/how-to-create-an-ssl-certificate-on-nginx-for-ubuntu-14-04)

