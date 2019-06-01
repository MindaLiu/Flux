const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.write(JSON.stringify({
        data0: data0,
        data1: data1
    })
    );
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

var data0 = [];
var data1 = [];
var oneMinute = 60 * 1000;
var now = new Date();
var start = +new Date(now.getFullYear(), now.getMonth(), now.getDate());
var end = +now;
var count = Math.round((end - start) / oneMinute);
for (var i = 0, p = start; i < count; i++) {
    data0.push(randomData(p));
    data1.push(randomData(p));
    p += oneMinute;
}


function randomData(time) {

    time = new Date(time + oneMinute);
    value = Math.random() * 20 + 15;
    return {
        name: time.toString(),
        value: [
            +time,
            Math.round(value)
        ]
    }
}
