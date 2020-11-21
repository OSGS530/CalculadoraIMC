import {imcmujer} from "./imcmujer";

describe('imcmujer test', ()=> {

    it('16 años, 1.74m, 74kg = 24.44 IMC', ()=>{
        let result = 0;

        result =imcmujer(1.74,74);

        expect(result).toBe(24.44);
    })

    it('13 años, 1.42m, 47kg = 23.31 IMC', ()=>{
        let result = 0;

        result =imcmujer(1.42,47);

        expect(result).toBe(23.31);
    })

    it('13 años, 1.52m , 46kg = 19.90 IMC', ()=>{
        let result = 0;

        result =imcmujer(1.52,46);

        expect(result).toBe(19.91);
    })

    it('18 años, 1.69m, 75kg = 26.26 IMC', ()=>{
        let result = 0;

        result =imcmujer(1.69,75);

        expect(result).toBe(26.26);
    })

    it('13 años, 1.53m, 53kg = 22.64 IMC', ()=>{
        let result = 0;

        result =imcmujer(1.53,53);

        expect(result).toBe(22.64);
    })

    it('16 años, 1.48m, 52kg = 23.74 IMC', ()=>{
        let result = 0;

        result =imcmujer(1.48,52);

        expect(result).toBe(23.74);
    })

    it('17 años, 1.97m, 85kg = 21.90 IMC', ()=>{
        let result = 0;

        result =imcmujer(1.97,85);

        expect(result).toBe(21.90);
    })

    it('15 años, 1.55m 60kg = 24.97 IMC', ()=>{
        let result = 0;

        result =imcmujer(1.55,60);

        expect(result).toBe(24.97);
    })

    it('19 años, 1.77m, 67kg = 21.39 IMC', ()=>{
        let result = 0;

        result =imcmujer(1.77,67);

        expect(result).toBe(21.39);
    })

    it('17 años, 1.62m, 52kg = 19.81 IMC', ()=>{
        let result = 0;

        result =imcmujer(1.62,52);

        expect(result).toBe(19.81);
    })

    it('18 años, 1.50m, 49kg = 21.78 IMC', ()=>{
        let result = 0;

        result =imcmujer(1.50,49);

        expect(result).toBe(21.78);
    })

    it('19 años, 2.00m, 60kg = 15.00 IMC', ()=>{
        let result = 0;

        result =imcmujer(2.0,60);

        expect(result).toBe(15.00);
    })

    it('18 años, 1.45m, 74kg = 35.20 IMC', ()=>{
        let result = 0;

        result =imcmujer(1.45,74);

        expect(result).toBe(35.20);
    })

    it(' 14 años, 1.56m, 53kg = 21.78 IMC', ()=>{
        let result = 0;

        result =imcmujer(1.56,53);

        expect(result).toBe(21.78);
    })

    it(' 13 años, 1.34m, 42kg = 23.39 IMC', ()=>{
        let result = 0;

        result =imcmujer(1.34,42);

        expect(result).toBe(23.39);
    })


    it(' 17 años, 1.84m, 87kg = 25.70 IMC', ()=>{
        let result = 0;

        result =imcmujer(1.84,87);

        expect(result).toBe(25.70);
    })

    it('12 años, 1.50m, 45kg = 20.00 IMC', ()=>{
        let result = 0;

        result =imcmujer(1.50,45);

        expect(result).toBe(20.00);
    })

    it('19 años, 1.79m, 64kg = 19.97 IMC', ()=>{
        let result = 0;

        result =imcmujer(1.79,64);

        expect(result).toBe(19.97);
    })

    it('13 años, 1.64m, 47kg = 17.47 IMC', ()=>{
        let result = 0;

        result =imcmujer(1.64,47);

        expect(result).toBe(17.47);
    })

    it('16 años, 1.63m, 70kg = 26.35 IMC', ()=>{
        let result = 0;

        result =imcmujer(1.63,70);

        expect(result).toBe(26.35);
    })

})
