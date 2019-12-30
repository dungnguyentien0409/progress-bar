"use strict";

describe('Testing the functionality, this is title', ()=>{
    it('create title successfully', () => {
        let module = MODULE;
        expect(module).not.toEqual(null);
    })

    it('generateTitle is a function', () => {
        let module = MODULE;
        expect(typeof module.generateTitle).toEqual("function");
    })
})