# vue-vueRouter-note-Firebase-mobile
一个基于vue.js和Firebase制作的笔记spa（mobile端），UI库使用light7，页面切换使用vue-router。

此项目有独立PC版本，PC版项目请移步[vue-note-firebase-app](https://github.com/Geocld/vue-note-firebase-app)

目前此APP已经可以实现标签分类、笔记添加、删除等基本功能，同时通过Firebase实现了与PC版的数据同步，使app数据在mobile和pc之间无缝接合。

页面之间的切换使用了vue-router同时使用了vue-router的过场动画效果，UI库使用light7，同时使用了popup、swipout组件，增加了本app不少体验。


[demo预览](http://geocld.github.io/demo/mobile-note/index.html)

最好在手机端查看使用本app，扫如下二维码即可进入项目在线地址： 

![](http://i.imgur.com/QR5O8PF.png)

#项目安装

1、安装依赖

	npm install

2、运行开发版项目

	npm run dev

3、发布项目

	npm run build


#效果预览

![](http://i.imgur.com/G3t8wfA.png)

![](http://i.imgur.com/hiqElKP.png)

![](http://i.imgur.com/2JolWY1.png)

#TODO
1. 目前router组件数据之间通信使用的是全局变量的方式，后续会改成使用vuex控制数据流的走向

2. 增加日期排序
