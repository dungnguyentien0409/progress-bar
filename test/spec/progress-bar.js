"use strict";

describe('Testing the functionality, this is progressbar', ()=>{
    it('create progressbar successfully', () => {
        let module = MODULE;
        expect(module).not.toEqual(null);
    })

    it('generateProgressBars is a function', () => {
        let module = MODULE;
        expect(typeof module.generateProgressBars).toEqual("function");
    })
})