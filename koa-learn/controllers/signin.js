module.exports = {
    'POST /signin': async (ctx, next) => {
        var
            email = ctx.request.body.email || '',
            password = ctx.request.body.password || '';
        //判断账户密码是否匹配
        if (email === 'fjh@163.com' &&
            password === '123456') {
            console.log('sign in ok');
            ctx.render('signin-ok.html', {
                    title: 'sign in ok',
                    name: 'fjh'
            });
        }
        else {
            console.log('sign in failed');
            ctx.render('signin-failed.html', {
                title: 'sign in failed'
            });
        }
    }
}