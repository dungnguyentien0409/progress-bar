"use strict";

describe('Testing the functionality, this is service', ()=>{
    it('create service successfully', () => {
        let module = MODULE;
        expect(module).not.toEqual(null);
    })

    it('parseData is a function', () => {
        let module = MODULE;
        expect(typeof module.parseData).toEqual("function");
    })

    it('getBars is a function', () => {
        let module = MODULE;
        expect(typeof module.getBars).toEqual("function");
    })
})