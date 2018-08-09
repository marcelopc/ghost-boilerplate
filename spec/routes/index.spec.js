
const config = require('../../config/config.js');
const env = process.env.NODE_ENV || 'test';

const fetch = require('node-fetch');

describe("Index.js", ()=>{

   
    describe("Testando conexão /", ()=>{
        
        it('Status 200 GET /', async ()=>{
            let res = await fetch(`${config.server[env].url}:${config.server[env].port}/`, { method: 'GET'})            
            expect(res.status).toBe(200)
        })

        it('Status 200 HEAD /', async ()=>{
            let res = await fetch(`${config.server[env].url}:${config.server[env].port}/`, { method: 'HEAD'})            
            expect(res.status).toBe(200)
        })

        it('Status 200 GET /api', async ()=>{
            let res = await fetch(`${config.server[env].url}:${config.server[env].port}/api`, { method: 'GET'})            
            expect(res.status).toBe(200)
        })

        it('Status 200 HEAD /api', async ()=>{
            let res = await fetch(`${config.server[env].url}:${config.server[env].port}/api`, { method: 'HEAD'})
            expect(res.status).toBe(200)
        })

        it('Status 404 GET not found', async ()=>{
            let res = await fetch(`${config.server[env].url}:${config.server[env].port}/notfound`, { method: 'GET'})
            expect(res.status).toBe(404)
        })

    })

})

