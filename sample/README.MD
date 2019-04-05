# 我的serever服务器
1. 第一步加载Nodez中的相应模块
```
var http= require('http') 加载http模块
var path= require('path')静态路径
var fs=require('fs')读取写入文件
var url = require('url')响应路径处理url
```
2. 第二步使用http.createSever创建一个服务器（request，response）2个参数，请求和返回
调用一个函数Static()3个参数，路径，请求对象，返回对象。因为要实现的是一个路由的功能，能够读取这个文件夹下的所有文件，使用了__dirname得到了index.js的绝对路径，我想让他能够访问我*sample*中的文件，此时使用path模块中的Join方法将路径拼接解析(path.join(__dirname,'sample')),

3. 第三步我需要对输入的url进行解析，为防止地址有其他参数，在读取数据时地址是一个绝对路径，会出现异常。所以使用url模块中的url.parse(req.url)将pathname解析出来,req.url是请求时得到的

4. 第四步将我解析出的路径和静态路径进行拼接得到一个文件的读取路径，filepath= path.join(spath,parboj)

5. 第五步使用readFile(filepath-读取文件使用的路径，"binary"以2进制方式读取，因为文件不止字符，匿名函数err前面读取失败之后执行err，else成功返回数据)