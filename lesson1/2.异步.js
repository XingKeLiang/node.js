//引用http模块
    const http = require("http");
//使用http模块搭建服务器        //http.createServer是一个异步函数，所以程序不会死等，会先执行别的语句
    const server = http.createServer(function(require,response){
        //设置返回信息为文本格式，字符编码为utf-8;
        response.setHeader("Content-type","text/plain;charset=utf-8");
        response.write("我好高兴啊，我买了一个note"+(3.5*2)+",爆炸了，哈哈哈哈");
        //响应结束
        response.end();
        console.log("A")
    });
    console.log("B");
    server.listen(8080);