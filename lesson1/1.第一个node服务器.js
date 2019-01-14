//引用http模块
const  http = require("http");
const http1 = require("http");
//通过http模块来创建服务器
const server = http.createServer(function(require,response){
    //浏览器写入
    response.write("我是唱歌");
    //响应结束
    response.end();
})
server.listen(8080);//监听端口号
// 第二次创建 
const server1 = http1.createServer(function (require,response){
     //浏览器写入
     response.write("我是看电影");
     //响应结束
     response.end();
})
server1.listen(8888);