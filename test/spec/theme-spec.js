"use strict";

describe('Testing the functionality, this is theme', ()=>{
    it('create theme successfully', () => {
        let module = MODULE;
        expect(module).not.toEqual(null);
    })

    it('generateThemeOption is a function', () => {
        let module = MODULE;
        expect(typeof module.generateThemeOption).toEqual("function");
    })

    it('changeTheme is a function', () => {
        let module = MODULE;
        expect(typeof module.changeTheme).toEqual("function");
    })
})