
// const config = require('../config/config.js');
// const env = process.env.NODE_ENV || 'test';

// const fetch = require('node-fetch');

// describe("Server", ()=>{

//     var server;

//     beforeAll(()=>{
//         server = require('../dist/app.js')
//     });   
     
//     describe("Testando conexão API", ()=>{
//         var data = {};
//         var status = 0;
//         beforeAll((done)=>{
//             fetch(`${config.server[env].url}:${config.server[env].port}/api`, { method: 'HEAD'})
//             .then(async (res) =>{
//                 status = res.status;
//                 done();
//             })
//         });

//         afterAll((done)=>{
//             data = {};
//             done();
//         });

//         it('Status 200 HEAD /API', ()=>{
//             expect(status).toBe(200)
//         })

//     })

// })

