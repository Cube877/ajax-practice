const express = require('express');
const app = express();
app.get('/server', (request, response)=> {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('hello ajax');
});

app.post('/server', (request, response)=> {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('hello ajax post');
});

app.get('/json-server', (request, response)=> {
    response.setHeader('Access-Control-Allow-Origin', '*');
    var data = {
        name: "cube"
    };
    var str = JSON.stringify(data);
    response.send(str);
});


app.listen(8000, () => {
    console.log("服务已经启动，8000 端口正在监听中......");
});