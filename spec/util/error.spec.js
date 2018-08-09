const error = require('../../dist/util/error.js')

describe("Util | Error", ()=>{
  
    describe("newError", ()=>{
       
        beforeAll((done)=>{
            done();
        });

        afterAll((done)=>{
            done();
        });

        it('Instância do objeto Erro', ()=>{
            let erro = error.newError(200, 'Mensagem')
            expect('Error').toBe(erro.constructor.name)
        })

        it('Instância funcionando sem parametros', ()=>{
            expect(400).toBe(error.newError().code)
            expect('Erro interno no Servidor').toBe(error.newError().message)
        })

        it('Instância aceitar codigo como string', ()=>{

            let erro = error.newError('400');
            expect(400).toBe(erro.code)
            expect('Erro interno no Servidor').toBe(erro.message)

        })

    })

    describe("fieldExistent", ()=>{
       
        it('fieldExistent', ()=>{

            expect(error.fieldExistent([])).toBeUndefined();
            expect(error.fieldExistent()).toBeUndefined();

            expect(error.fieldExistent([{
                value: 'nome',
                path: 'campo',
                value: 'vader'
            }])).toEqual([{
                erro: 'vader já existe',
                path: 'campo',
                value: 'vader'
            }]);

            expect([{ 
                erro: 'Generico já existe', 
                path: 'Generico', 
                value: 'Generico' 
            }]).toEqual(error.fieldExistent([{}]));
                      
        })

        
    })

    describe("fieldNotNull", ()=>{
       
        it('fieldNotNull', ()=>{

            expect(error.fieldNotNull([])).toBeUndefined();
            expect(error.fieldNotNull()).toBeUndefined();

            expect(error.fieldNotNull([{
                erro: 'vader',
                path: 'nome',
            }])).toEqual([{
                erro: 'nome não informado',
                path: 'nome'
            }]);
             
        })

        
    })


    describe("validateFieldExistent", ()=>{
       
        it('validateFieldExistent', ()=>{

            expect(error.validateFieldExistent()).toBe(false);
            expect(error.validateFieldExistent([])).toBe(false);
            expect(error.validateFieldExistent()).toBe(false);

            expect(error.validateFieldExistent({
                parent: {
                    errno: 1062
                }
            })).toBe(true);
             
        })

        it('validateFieldNotNull', ()=>{

            expect(error.validateFieldNotNull()).toBe(false);
            expect(error.validateFieldNotNull([])).toBe(false);
            expect(error.validateFieldNotNull()).toBe(false);

            expect(error.validateFieldNotNull({
                name: 'SequelizeValidationError'
            })).toBe(true);
             
        })

        it('validateForeignKeyInvalid', ()=>{

            expect(error.validateForeignKeyInvalid()).toBe(false);
            expect(error.validateForeignKeyInvalid([])).toBe(false);
            expect(error.validateForeignKeyInvalid()).toBe(false);

            expect(error.validateForeignKeyInvalid({
                name: 'SequelizeForeignKeyConstraintError'
            })).toBe(true);
             
        })

        it('validateValueInvalid', ()=>{

            expect(error.validateValueInvalid()).toBe(false);
            expect(error.validateValueInvalid([])).toBe(false);
            expect(error.validateValueInvalid()).toBe(false);

            expect(error.validateValueInvalid({
                name: 'SequelizeDatabaseError'
            })).toBe(true);
             
        })

        it('uniqueConstraintError', ()=>{

            expect(error.uniqueConstraintError()).toBe(false);
            expect(error.uniqueConstraintError([])).toBe(false);
            expect(error.uniqueConstraintError()).toBe(false);

            expect(error.uniqueConstraintError({
                name: 'SequelizeUniqueConstraintError'
            })).toBe(true);
             
        })

        
    })

})