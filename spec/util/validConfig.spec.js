const validConfig = require('../../dist/util/validConfig.js');

var config = {}

describe("ValidConfig", ()=>{

    beforeEach(()=>{
        config = require('../../config/config.js')
    });   
     
    describe("Config", ()=>{
       

        it('Dados Correots', ()=>{
            expect(validConfig.config('development', config)).toBeUndefined(); 
        })

        it('Env não existent', ()=>{
            
            var err = function() {
                throw validConfig.config('vader', config)
            };
                
            expect(err).toThrowError(Error, 'É necessário informar o config database');      

        })

        it('Objeto vazio no config server', ()=>{
            
            var err = function() {
                throw validConfig.server({})
            };
                
            expect(err).toThrowError(Error, 'É necessário preencher o config server');      

        })

        it('Env null no validConfig', ()=>{
            
            var err = function() {
                throw validConfig.config(null, {})
            };
                
            expect(err).toThrowError(Error, 'É necessário informar o env');      

        })

        it('Config Undefined', ()=>{
            
            var err = function() {
                throw validConfig.config('test', undefined)
            };
                
            expect(err).toThrowError(Error, 'É necessário informar o config');      

        })

        it('Config sem o server informado', ()=>{
            
            var err = function() {
                throw validConfig.config('test', {
                    database:{
                        test:{}
                    },
                    server:{}
                })
            };
                
            expect(err).toThrowError(Error, 'É necessário informar o config server');      

        })

        it('Config não preenchido', ()=>{
            
            var err = function() {
                throw validConfig.database('test', {
                    database:{},
                    server:{}
                })
            };
                
            expect(err).toThrowError(Error, 'É necessário preencher o config database');      

        })

    })

})