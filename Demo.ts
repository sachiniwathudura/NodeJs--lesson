// import *as http from 'http'
// import *as fs from'fs'

// const server = http.createServer((req,res) =>{
    // fs.writeFileSync('demo.txt',(req.url + '' +req.method));

    // res.write('<h1>Hello World </h1>')
    // res.end();
    // console.log(req)

    
    // if (req.url === '/') {
    //     res.write('<h1>Hello World</h1>');
    // } else if (req.url === '/add') {
    //     res.write('<h1>Hello Customer</h1>');
    // } else {
    //     res.write('<h1>404 Not Found</h1>');
    // }

    // res.end();
    // console.log(`Request received: ${req.url}`);

//     if(req.url === '/add'){
//         fs.writeFile('demo.txt' , req.url,(err)=>{
//         });
//         res.write('<h1>Hello world </h1>');
//         return res.end();
//     }
//     res.write('<h1>hello world</h1>');
//     res.end();
//     console.log(req)
//     process.exit();
// });
// server.listen(3000 , ()=>{
//     console.log("server started at port 3000")
// });


// import * as http from 'http';
// import * as fs from 'fs'; 

// const server = http.createServer((req, res) => {
//     if (req.url === '/add') {
//         res.write('<html>');
//         res.write('<body>');
//         res.write('<form action="/dashboard" method="POST">');
//         res.write('<input name="Name" type="text" />');
//         res.write('<button type="submit">Submit</button>');
//         res.write('</body>');
//         res.write('</form>');
//         res.write('<html>');
        
//     }
//     if(req.url === '/dashboard'&& req.method === "POST"){
//         const body : Buffer[] = [];

//         req.on("data",(data)=>{
//             console.log(data);
//             body.push(data);
//         });
//         req.on("end",()=>{
//             const perseBody = Buffer.concat(body).toString();
//             console.log(perseBody);
//             const name = perseBody.split('=')[1];
//             console.log(name);
//         })
//         res.write('<h1>Hello Customer</h1>');
//         res.end();
        
//     }
//     if(req.url === '/'){
//         res.write('<h1>Landing page</h1>');
//         res.end();
//     }
//     res.write('<h1>Hello World</h1>');
//     res.end();
//     console.log(req);
//     // process.exit();
// });

// server.listen(3000, () => {
//     console.log('Server started at port 3000');
// });

// import * as http from 'http';
// import { routeHandler } from './routes';

// const server = http.createServer((req, res) => {
//     routeHandler(req, res);
// });

// server.listen(3000, () => {
//     console.log('Server started at port 3000');
// });


// import express from 'express';

// app.get('/', (req, res,next) => {
//     console.log(req);
//     res.send('<h1>hello world </h1>');
// });


// app.get('/', (req, res,next) => {
//   console.log(req);
//   res.send('<h1>express works </h1>');
// });
// app.get('/add', (req, res,next) => {
//     console.log(req);
//     res.send('<h1>express works-add </h1>');
// });
// app.get('/delete', (req, res,next) => {
//     console.log(req);
//     res.send('<h1>express works-delete </h1>');
// });

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({extended:false}))

app.get('/send', (req, res) => {
    res.send('<html><body><form action="/message" method="POST"><input name="Name" type="text"/><button type="submit">Submit</button></form></body></html>');
});
app.post('/message', (req, res) => {
    console.log(req.body.name);
    res.send('<h1>message endpoint called </h1>');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
