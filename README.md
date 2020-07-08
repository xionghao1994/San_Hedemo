## 三贺电商

## author xh
## Project setup
```
##
npm install
```
将远程git仓库里的指定分支拉取到本地（本地不存在的分支）
git checkout -b 本地分支名 origin/远程分支名
## 项目目录
``` shell
├─public
|——src
|   ├─assets       //静态资源(图片,js,css,字体等)
|   │  ├─css
|   │  ├─img
|   │  └─js
|   ├─components   // 全局组件
|   │  └─common    // 公用组件    
|   │      ├─Base
|   │      └─layouts
|   ├─store        // 全局状态管理
|   │  ├─actions
|   │  ├─mutations
|   │  └─state
|   └─views        // 业务分类组件  
|      ├─client
|      ├─index
|      ├─me
|      │ └─setting
|      └─utils     // 工具文件(过滤器,接口API，上传图片方法,去除点击事件延迟)
|
|
```