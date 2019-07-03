const fs = require('fs');
//建立url与处理他的请求之间的映射关系
function addMapping(router, mapping) {
    for (var url in mapping) {
        //判断url的类型
        if (url.startsWith('GET ')) {
            let path = url.substring(4);
            //注册对应的get请求处理函数
            router.get(path, mapping[url]);
            console.log('register URL mapping : GET ${path}');
        }
        else if (url.startsWith('POST ')) {
            let path = url.substring(5);
            router.get(path, mapping[url]);
            console.log('register URL mapping : POST ${path}');
        }
        else if (url.startsWith('PUT ')) {
            let path = url.substring[4];
            router.get(path, mapping[url]);
            console.log('register URL mapping : PUT ${path}');
        }
        else if (url.startsWith('DELETE ')) {
            let path = url.substring[7];
            router.get(path, mapping[url]);
            console.log('register URL mapping : DELEET ${path}');
        }
        else {
            console.log('Invaild URL ${url}');
        }
    }
}

//中间层逻辑函数注册
//dir为业务逻辑模块文件夹,在该结构中为controllers文件夹
function addControllers(router, dir) {
    //读取文件夹中所有文件并过滤处理.js文件
    fs.readdirSync(__dirname + '/' + dir).filter((f) => {
        return f.endsWith('.js');
    }).forEach((f => {  //处理每一个.js文件
        console.log('controller file ${f} ...');
        //根据文件的绝对路径读取文件
        //require函数的返回结果是该.js文件对外暴露的借口字典  名字-->函数
        let mapping = require(__dirname + '/' + dir +'/' + f);
        addMapping(router, mapping);
    }))
}

//先外部暴露接口
module.exports = function(dir){
    console.log("go into controller");
    let
        controller_dir = dir || 'controllers',
        Router = require('koa-router');
    router = new Router();
    addControllers(router, controller_dir);
    return router.routes();
};