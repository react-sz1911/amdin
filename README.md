##框架 react

##样式less less-loader


####  react-admin 项目启动
antd react矿建
antd-pro 来做管理平台
ui框架 antd 
前端框架 react
网络请求 axios 
预处理语言 less 
屏幕适配方案：百分比布局 栅格布局 
路由插件  react-router-dom
全局状态管理 react-redux  redux 
其他插件：
### 项目目录
pages 存放页面组件
components 公有组件
api  统一管理api接口
utils 工具类
common 公用图片资源
store 全局状态管理
router 路由文件

#### 样式 less npm install less@2.7.3

默认引入的文件是全局 存在作用域问题
1. 保证类名不重复  用BEM命名法  button-error-small   
 2. 样式模块化
  <!-- 3. css in js component-style --> 需要插件不考虑

#### antd 3.26.13
全局引入 
 引入全部的样式文件 index.js 
 import 'antd/dist/antd.css'
 import {Button} from antd 

 按需引入
npm install   babel-plugin-import

 #### 路由
npm install react-router-dom