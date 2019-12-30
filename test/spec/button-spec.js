"use strict";

describe('Testing the functionality, this is button', ()=>{
    it('create button successfully', () => {
        let module = MODULE;
        expect(module).not.toEqual(null);
    })

    it('generateButton is a function', () => {
        let module = MODULE;
        expect(typeof module.generateButton).toEqual("function");
    })

    it('onClick is a function', () => {
        let module = MODULE;
        expect(typeof module.onClick).toEqual("function");
    })
})