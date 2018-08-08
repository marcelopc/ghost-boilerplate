
jasmine.getEnv().addReporter(require('./support/reporter'));
const config = require('../config/config.js');
const env = process.env.NODE_ENV || 'test';

const fetch = require('node-fetch');

describe("Server", ()=>{

    var server;

    beforeAll(()=>{
        server = require('../dist/app.js')
    });   
     
    describe("GET /", ()=>{
        var data = {};
        beforeAll((done)=>{
            fetch(`${config.server[env].url}:${config.server[env].port}/api`)
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

