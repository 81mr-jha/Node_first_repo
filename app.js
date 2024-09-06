// Info about current user
// const os = require('os')

// const user = os.userInfo()
// console.log(user);

// const path = require('path');
// console.log(path.sep);

// console.log(module);

// const click = require('./1_p')
// console.log(click.name1, click.name2, click.name3);

const http = require('http');

const server = http.createServer((req, res)=> {
    res.write('Welcome to our homepage')
    res.end()
})

server.listen(5000);