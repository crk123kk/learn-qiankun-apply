### 项目介绍

    这个是关于 qiankun （ https://qiankun.umijs.org/zh/faq ） 这个技术的简单认识的实现demo

    三个项目分别使用不同的技术栈实现，但是可以独立启动也可以相互引用

    你可以分别进入各自的项目然后启动，最后可以看到在qiankun-base中可以看到其引用了不同的子应用

##### qiankun-base 基架

    作为最上层应用，其他子应用嵌套其中,使用了vue技术

    1、引入了 qiankun 技术

    2、在main.js中配置约定

    3、在子应用中需要注意都需要配置跨域，这样才能fetch对应的文件

##### qiankun-vue

    用vue技术栈实现的子应用

    1、在main.js中配置约定

    2、在index.js中加上基础路径'/vue'

    3、配置vue.config.js

##### qiankun-react

    用react技术栈实现的子应用

    1、引入 react-app-rewired 技术， 并把package.json中的script脚本改成 react-app-rewired 启动

    2、在index.js中配置约定

    3、在APP.js中配置页面信息

    4、在config-overrides.js中配置项目打包信息（react-app-rewired启动会访问改文件

    5、.env 配置全局环境
