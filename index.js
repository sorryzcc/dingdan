const express = require('express');
var fs = require("fs");
var path = require("path");


const app = express();

app.use(express.json());

const books = [
    { id: 1, name: 'book1'},
    { id: 2, name: 'book2'},
    { id: 3, name: 'book3'},
];

app.get('/', (req, res) => {
    res.end('Hello World!');
});
//获取所有书籍
app.get('/api/books', (req, res) => {
    res.json(books).end();
});
//获取特定id的书籍
app.get('/api/books/:id', (req, res) => {
    let book = books.find(b => b.id === parseInt(req.params.id));
    if(!book) return res.status(404).json({msg: 'The book with the given ID not find.'});
    res.json(book).end();
});


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


app.get("/queryAll",(req,res)=>{
	var user_sql = 'SELECT * FROM dingdan';
	connection.query(user_sql,function(err,result){
		if(err){
		console.log('[query]-:'+err);
		}else{
			res.send(result)
		}
	})
})

app.get('/delete/:id', (req, res) => {
	sp_number = req.params.id
	console.log(sp_number)
	var user_sql = 'delete FROM dingdan where number='+sp_number;
	connection.query(user_sql,function(err,result){
		if(err){
		console.log('[delete]-:'+err);
		}else{
			res.send(result)
		}
	})
});

app.get("/main.html",(req,res)=>{

	  // 使用 path.join 拼接路径
	  filePath = path.join(__dirname, "main.html");
	  // 使用 fs.readFile 读取 html 文件, callback 有两个参数，一个是 err,一个是 data
	  // err：错误警告
	  // data：读取到的数据
	  fs.readFile(filePath, function (err, data) {
		// 如果出现错误就抛出 err，没出错就把 html 页面返回给浏览器
		if (err) {
		  throw err;
		} else {
			res.end(data);
		}
	  });
})


const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Listening on port ${port}`));

