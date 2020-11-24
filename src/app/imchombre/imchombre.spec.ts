import {imchombre} from "./imchombre";

describe('imchombre test', ()=> {

    it('1.70m, 78kg = 26.99 IMC', ()=>{
        let result = 0;
        
        result =imchombre(1.70,78);

        expect(result).toBe(26.99);
    })

    it('1.55m, 60kg = 24.97 IMC', ()=>{
        let result = 0;
        
        result =imchombre(1.55,60);

        expect(result).toBe(24.97);
    })

    it('1.60m, 80kg = 31.25 IMC', ()=>{
        let result = 0;
        
        result =imchombre(1.60,80);

        expect(result).toBe(31.25);
    })

    it('1.62m, 52kg = 19.81 IMC', ()=>{
        let result = 0;
        
        result =imchombre(1.62,52);

        expect(result).toBe(19.81);
    })

    it('1.45m, 58kg = 27.59 IMC', ()=>{
        let result = 0;
        
        result =imchombre(1.45,58);

        expect(result).toBe(27.59);
    })
    
    it('2.00m, 60kg = 15.00 IMC', ()=>{
        let result = 0;
        
        result =imchombre(2.00,60);

        expect(result).toBe(15.00);
    })

    it('1.20m, 45kg = 31.25 IMC', ()=>{
        let result = 0;
        
        result =imchombre(1.20,45);

        expect(result).toBe(31.25);
    })

    it('1.64m, 47kg = 17.47 IMC', ()=>{
        let result = 0;
        
        result =imchombre(1.64,47);

        expect(result).toBe(17.47);
    })

    it('1.48m, 50kg = 22.83 IMC', ()=>{
        let result = 0;
        
        result =imchombre(1.48,50);

        expect(result).toBe(22.83);
    })

    it('1.57m, 79kg = 32.05 IMC', ()=>{
        let result = 0;
        
        result =imchombre(1.57,79);

        expect(result).toBe(32.05);
    })

    it('1.46m, 46kg = 21.58 IMC', ()=>{
        let result = 0;
        
        result =imchombre(1.46,46);

        expect(result).toBe(21.58);
    })

    it('1.38m, 51kg = 26.78 IMC', ()=>{
        let result = 0;
        
        result =imchombre(1.38,51);

        expect(result).toBe(26.78);
    })

    it('1.82m, 89kg = 26.87 IMC', ()=>{
        let result = 0;
        
        result =imchombre(1.82,89);

        expect(result).toBe(26.87);
    })

    it('1.74m, 76kg = 25.1 IMC', ()=>{
        let result = 0;
        
        result =imchombre(1.74,76);

        expect(result).toBe(25.1);
    })

    it('1.95m, 72kg = 18.93 IMC', ()=>{
        let result = 0;
        
        result =imchombre(1.95,72);

        expect(result).toBe(18.93);
    })

    it('1.56m, 46kg = 18.9 IMC', ()=>{
        let result = 0;
        
        result =imchombre(1.56,46);

        expect(result).toBe(18.9);
    })

    it('1.46m, 38kg = 17.83 IMC', ()=>{
        let result = 0;
        
        result =imchombre(1.46,38);

        expect(result).toBe(17.83);
    })

    it('1.64m, 48kg = 17.85 IMC', ()=>{
        let result = 0;
        
        result =imchombre(1.64,48);

        expect(result).toBe(17.85);
    })

    it('1.70m, 58kg = 20.07 IMC', ()=>{
        let result = 0;
        
        result =imchombre(1.70,58);

        expect(result).toBe(20.07);
    })

    it('1.52m, 43kg = 18.61 IMC', ()=>{
        let result = 0;
        
        result =imchombre(1.52,43);

        expect(result).toBe(18.61);
    })

})