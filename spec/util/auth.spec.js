const config = require('../../config/config.js');
const auth = require('../../dist/util/auth.js')

describe("Util | Auth", ()=>{

    beforeAll(()=>{

    });   
     
    describe("hashPass", ()=>{
       
        beforeAll((done)=>{
            done();
        });

        afterAll((done)=>{
            done();
        });

        it('hashPass convert', ()=>{
            expect('cyi6Jm241bz1gVlvcbYVsiviNGw0AY4FhVNojl95lpU=').toBe(auth.hashPass('DathVader', 'Skywalker'))
        })

        it('hashPass sem secret', ()=>{

            var foo = function() {
                throw new auth.hashPass('DathVader')
            };
                
            expect(foo).toThrowError(Error, "É necessário informar o secret");
           
        })

        it('hashPass sem pass', ()=>{

            var foo = function() {
                throw auth.hashPass(undefined, 'DathVader')
            };
                
            expect(foo).toThrowError(Error, "É necessário informar o password");
           
        })        

    })

    describe("createToken", ()=>{
       
        beforeAll((done)=>{
            done();
        });

        afterAll((done)=>{
            done();
        });

        it('payload', ()=>{

            let token = auth.createToken({id: 1, nome: 'vader'}, 'vader');
            let playload = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());

            expect(playload.id).toEqual(1);
            expect(playload.nome).toEqual('vader');

        })

        it('createToken sem jwtSecret', ()=>{

            var foo = function() {
                throw auth.createToken({id: 1, nome: 'vader'});
            };
                
            expect(foo).toThrowError(Error, "É necessário informar o jwtSecret");
           
        })
  

    })

})

