var models = require('../db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sql')
 
// 连接数据库
var conn = mysql.createConnection(models.mysql)
conn.connect()
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        })
    } else {
        res.json(ret);
    }
}
// test接口
router.get('/login', (req, res) => {
    var sql = $sql.user.login;
    console.log(sql)
    var params = req.query;
    console.log(params);
    conn.query(sql, [params.userName, params.passWord], function(err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            result.forEach(function(element) {
                console.log(element);
            }, this);
            jsonWrite(res, result)
        }
    })
})
/*// 登录接口
router.post('/login1', (req, res) => {
  var sql = $sql.user.login;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.userName, params.passWord], function (err, result) {
    var data = JSON.parse(JSON.stringify(result))
    if (data.length === 0) {
      return res.send({
        status: 1,
        msg: "用户名或密码错误"
      })
    } else {
      let content = {
        userName: params.userName
      }
      let secretOrPrivateKey = "_jwt"; // 这是加密的key（密钥）
      let token = jwt.sign(content, secretOrPrivateKey, {
        expiresIn: 60 * 60 * 1 // 1小时过期
      });
      return res.send({
        status: 1,
        msg: "登录成功",
        userName: params.userName,
        token: token
      })
    }
  })
})
 
// 创建用户
router.post('/createUser', (req, res) => {
  var sql = $sql.user.createUser;
  console.log(req);
  conn.query(sql, [req.body.userId, req.body.userName, req.body.createDate, req.body.nickName, req.body.passWord], function (err, result) {
    var data = req.body;
    console.log(result)
    return res.send({
      status: 1,
      msg: "新增成功",
      data: data
    })
  })
})
 
// 查询用户列表
router.post('/getUserList', (req, res) => {
  var sql = $sql.user.queryUserList;
  var params = req.body;
  // console.log(params);
  conn.query(sql, [], function (err, result) {
    var data = JSON.parse(JSON.stringify(result))
    
    return res.send({
      status: 1,
      msg: "查询成功",
      list: data
    })
  })
})*/
module.exports = router