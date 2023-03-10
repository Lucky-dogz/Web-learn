// 引入react核心库
import React from "react";
// 引入ReactDOM
import ReactDOM from "react-dom/client";
// 引入App
import Router from './router'
// 引入基本样式
import './assets/base.less'
// 引入仓库
import store from "./store";
// 引入react-redux
import { Provider } from "react-redux";
// 渲染App到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Router />
    </Provider>
);