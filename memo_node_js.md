# Node.js
## creare new nodejs APP
    mkdir server_nodejs
    cd server_nodejs
    npm init -y

## install express web framework 套件
    npm install --save express

## install mysql 套件
    npm install --save mysql

## install cors 套件
    npm install cors

## start nodejs APP
    node index.js

## use nodemon to monitor file change and auto restart nodejs APP
    npm install --save-dev nodemon
    update package.json
        "scripts": {
        "start": "nodemon index.js"
    },
    npm start

## kill nodejs process
    lsof -i tcp:8800
    kill -9 pid