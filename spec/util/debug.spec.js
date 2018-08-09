const debug = require('../../dist/util/debug.js')

describe("Util | Debug", ()=>{

    beforeAll(()=>{

    });   
     
    describe("Instânciamento", ()=>{
       
        beforeAll((done)=>{
            done();
        });

        afterAll((done)=>{
            done();
        });

        it('Instância', ()=>{

            expect('function').toEqual(typeof debug);

        })

        it('Debug null param', ()=>{

            expect(debug('Tag')).toBeUndefined();
            expect(debug()).toBeUndefined();


        })

    })

})

