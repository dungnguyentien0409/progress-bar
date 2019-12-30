"use strict";

describe('Testing the functionality, this is select', ()=>{
    it('create select successfully', () => {
        let module = MODULE;
        expect(module).not.toEqual(null);
    })

    it('generateSelection is a function', () => {
        let module = MODULE;
        expect(typeof module.generateSelection).toEqual("function");
    })

    it('onChangeSelection is a function', () => {
        let module = MODULE;
        expect(typeof module.onChangeSelection).toEqual("function");
    })
    
    it('removeSelectedCss is a function', () => {
        let module = MODULE;
        expect(typeof module.removeSelectedCss).toEqual("function");
    })
})