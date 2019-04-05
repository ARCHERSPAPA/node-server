var http= require('http')
var path= require('path')
var fs=require('fs')
var url = require('url')
function Static(spath,req,res){
   
    var parobj= url.parse(req.url,true)
 
    var filepath = path.join(spath,parobj.pathname)
    console.log(filepath)
    fs.readFile(filepath,'binary',function(err,filecontent){
        if(err){
            res.writeHead(404,'buxi')
          
            res.end()
        }
        else{
       
         res.writeHead(200,'ok')
       
         res.write(filecontent,'binary')
         res.end()
        }
    })
    // if(err){
    //     console.log('404')
    //     res.writeHead(404, 'not found')
    //     res.end('<h1>404 Not Found</h1>')
    //   }else{
    //     console.log('ok')
    //     res.writeHead(200, 'OK')
    //     res.write(filecontent, 'binary')
    //     res.end()      
    //   }
    //   })
      
}

var server = http.createServer(function(req,res){
    
    Static(path.join(__dirname,"sample"),req,res)
})
    server.listen(9000)
    console.log('localhost:9000')
 

