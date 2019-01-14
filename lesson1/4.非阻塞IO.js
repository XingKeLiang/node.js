//引入http模块
 const http = require("http");
 //引入文件系统模块
 const fs = require("fs");
 //通过http模块创建服务器
  http.createServer(function(request,response){
    //设置字符编码
    response.setHeader("Content-type","text/plain;charset=utf-8");
    console.log("欢迎"+request.connection.remoteAddress+"客观光临小店，马上给您上菜")
    //文件读取
    fs.readFile("./file.txt","utf-8",function(error,data){
        console.log("欢迎"+request.connection.remoteAddress+"客观光临小店，马上给您上菜");
        if(error){
            console.log(error.message);
        };
        console.log(data);
        // response.write(data);
    });
    response.end();
 }).listen(8888);
 console.log("hello");
 console.log("hello");
 console.log("hello");
 console.log("hello");
 