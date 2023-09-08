# Memo


# react
## create new react APP
    create-react-app client_rect
    cd client_rect

## `Important`
Remove <React.StrictMode> from index.js This code will be

    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );

this

    root.render(
        <App />
    );

React StrictMode renders components `twice` on dev server

## start react APP
    npm start

## release react APP occupied port
    npx kill-port 3000

## Install react-router-dom 套件
    npm i react-router-dom --save

## Install axios 套件
    npm install react-axios --save

## Install prop-types 套件
    npm install prop-types

### Routing
|Library|應用|說明|
|:--|:-:|:--|
|react-router|路由核心|實現路由的核心功能，但沒有提供操作 dom 進行跳轉的API。|
|react-router-dom|WEB|基於 `react-router` 加入可操作 dom 進行跳轉的API。|
|react-router-native|APP|基於 `react-router` 類似 `react-router-dom`，並加入了 `react-native` 的功能。|


