var express = require('express');
var router = express.Router();
const {Client} = require('pg');

router.get('/',(req,res,next) => {
  let response = res;
  const client = new Client({
    host:'localhost',
    database:'node_test_db',
    user:'postgres',
    password:'postgres',
    port:'5432'
  });

  //接続
  client.connect();

  //クエリ実行
  client.query('select * from users',(err,res) => {
    let data = {
      title:'Hello World!',
      rows:res.rows
    };
    client.end();
    console.log(data);
    response.render('index',data);
  });
});

module.exports = router;