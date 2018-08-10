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

            expect('function').toEqual(typeof debug.default);
            expect(debug.default('tag', 'message')).toBeTruthy();


        })

        it('Debug null param', ()=>{


            expect(debug.default()).toBeFalsy();
            expect(debug.default('Tag')).toBeFalsy();



        })

    })

})

