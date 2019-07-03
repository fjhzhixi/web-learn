const path = require('path');
const mime = require('mime');
const fs = require('mz/fs');
//对静态的css和js文件请求进行统一的处理
//url和dir由文件组织结构中静态文件的位置来确定
function staticFiles(url, dir) {
    //url为 /static/
    //dir为 __dirName + /static
    return async (ctx, next) => {
        //ctx为请求获取静态文件的请求内容
        let rpath = ctx.request.path;
        //检查请求的url是否是静态文件文件路径,
        //如果是则进行处理
        //如果不是则调用下一个中间件进行处理
        if (rpath.startsWith(url)) {
            //获得静态文件的完整路径
            let fp = path.join(dir, rpath.substring(url.length));
            //检查问文件是否存在
            if (await fs.exists(fp)) {
                //设置请求返回值
                ctx.response.type = mime.getType(fp);
                ctx.response.body = await fs.readFile(fp);
            }
            else {
                //文件不存在
                ctx.response.status = 404;
            }
            await next();
        }
        else {
            //不符合前缀使用其他中间件处理
            await next()
        }
        
    };
}

module.exports = staticFiles;