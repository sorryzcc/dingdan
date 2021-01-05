var express = require('express');
var router = express.Router();
 
//调用mysql模块
const mysql = require('mysql'); 
 
//下面的配置必须要与自己本机上的mysql信息一致
let connection = mysql.createConnection({
	host:'localhost',   //主机地址
	port:3306,	    //端口
	user:'root',       //账号
	password:'zhangcongcong123',   //密码
	database:'runoob'   //连接的数据库
});
//连接到数据库
connection.connect();
 
//执行sql语句，从test表中查询数据
var user_sql = 'SELECT * FROM work';
connection.query(user_sql,function(err,result){
    if(err){
	console.log('[query]-:'+err);
    }else{
        //拿到result将其作为data渲染给模板引擎，比如这里的index页面
        router.get('/', function(req, res, next) {
	    res.render('index', { 
	          title: 'express&mysql测试',
	          data:result 
            });
        });
    }
})
 
module.exports = router;