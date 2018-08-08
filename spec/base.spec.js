jasmine.getEnv().addReporter(require('./support/reporter'));



describe("Base", ()=>{

    beforeAll(()=>{

    });   
     
    describe("Base", ()=>{
       
        beforeAll((done)=>{
            done();
        });

        afterAll((done)=>{
            done();
        });

        it('Base', ()=>{
            expect(true).toBe(true)
        })

    })

})

