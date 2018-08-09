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

/*
expect(true).toEqual(true);
expect([1, 2, 3]).toEqual([1, 2, 3]);

expect(true).toEqual(true); // passa => são equivalentes

expect('Fabeni').not.toEqual('Finelli');

expect(100, 101, 102]).toEqual([100, 101, 102]); // passa => são equivalentes


expect(true).toBeTruthy();
expect(1000).toBeTruthy();
expect({}).toBeTruthy();

expect("").toBeFalsy();
expect(null).toBeFalsy();
expect(false).toBeFalsy();

expect([10, 11, 12, 13, 14, 15]).toContain(13);
expect('Raphael Fabeni').toContain('Fabeni');

var iAmUndefined;
expect(null).toBeDefined(); // passa
expect('Fabeni').toBeDefined(); // passa
expect(iAmUndefined).toBeDefined(); // falha

expect(iAmUndefined).toBeUndefined(); // passa
expect(12).toBeUndefined(); // falha
expect(null).toBeUndefined(); // falha

expect(null).toBeNull(); // passa
expect(false).toBeNull(); // falha
expect(1).toBeNull(); // falha

expect(0).toBeNaN(); // falha
expect(10).not.toBeNaN(); // passa

expect(10).toBeGreatherThan(1); // passa
expect(10).toBeLessThan(20); // passa

expect(25.23).toBeCloseTo(25.2, 1); // passa


expect('Yes, we can!').toMatch(/we/); // passa

expect(function() {
    onlyNumbers('argumento errado')
}).toThrow()

*/