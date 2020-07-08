const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: './',
    devServer: {
        host: '0.0.0.0',//设置主机地址
        port: 8080,//设置默认端口
        proxy: { //设置代理
            '/api': {
                // 线上
                target: '',
                // 测试
                // target: '',
                ws: true,  // proxy websockets 
                changeOrigin: true,//开启代理  
                pathRewrite: { '^/api': '/api' },  //这里重写路径运行后就代理到对应地址  
            }
        },
        // onProxyRes: function(proxyRes, req, res) {
        // var cookies = proxyRes.headers['set-cookie'];
        // var cookieRegex = /Domain=\.weilianupup.com/i; // 返回的cookie中提取domain
        // //修改cookie Path
        // if (cookies) {
        //     var newCookie = cookies.map(function(cookie) {
        //     if (cookieRegex.test(cookie)) {
        //         // 将domain设置为localhost
        //         return cookie.replace(cookieRegex, 'Domain=localhost');
        //     }
        //     return cookie;
        //     });
        //     delete proxyRes.headers['set-cookie'];
        //     proxyRes.headers['set-cookie'] = newCookie;
        // }
        // }

    },
    // 输出文件目录
    outputDir: 'dist',
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    
    chainWebpack: (config) => {
        config.resolve.symlinks(true);
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('api', resolve('src/api'))
            .set('utils', resolve('src/views/utils'))
            .set('filter', resolve('src/utils/filter'))
        config.module
            .rule('images')
            .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options,{limit:10240}))
    },
    // 修改打包后js文件名
    configureWebpack: { // webpack 配置
        output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.js】
        filename: `js/[name].js`,
        chunkFilename: `js/[name].js`
        }
    },
    

}