const fetch = require('node-fetch');

jasmine.getEnv().addReporter(require('./support/reporter'));


describe("Server", ()=>{

    var server;

    beforeAll(()=>{
        server = require('../dist/app.js')
    });   
     
    describe("GET /", ()=>{
        var data = {};
        beforeAll((done)=>{
            fetch('http://127.0.0.1:3000/api')
            .then((res) =>{
                data = res;
                done();
            })
        });

        afterAll((done)=>{
            data = {};
            done();
        });

        it('Status 200', ()=>{
            expect(data.status).toBe(200)
        })

        it('Teste parse password', async ()=>{

            let json = await data.json()
            expect(json.pass).toBe('dATRCIbuUriqW+8p6CW2OZoSkxxHJt1jyTiB8S7ng+Q=');

        })

    })

})

