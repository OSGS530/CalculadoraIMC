import { getFemaleStatus, getMaleStatus } from './imc';

describe('imc test', () => {
  it('18 años, 26.99 IMC = 3', () => {
    let result = 0;

    result = getMaleStatus(18, 26.99);

    expect(result).toBe(3);
  });

  it('15 años, 24.97 IMC = 3', () => {
    let result = 0;

    result = getMaleStatus(15, 24.97);

    expect(result).toBe(3);
  });

  it('12 años, 31.25 IMC = 4', () => {
    let result = 0;

    result = getMaleStatus(12, 31.25);

    expect(result).toBe(4);
  });

  it('17 años, 19.81 IMC = 2', () => {
    let result = 0;

    result = getMaleStatus(17, 19.81);

    expect(result).toBe(2);
  });

  it('11 años, 27.59 IMC = 4', () => {
    let result = 0;

    result = getMaleStatus(11, 27.59);

    expect(result).toBe(4);
  });

  it('19 años, 15.00 IMC = 1', () => {
    let result = 0;

    result = getMaleStatus(19, 15.0);

    expect(result).toBe(1);
  });

  it('19 años, 14.00 IMC = 1', () => {
    let result = 0;

    result = getMaleStatus(19, 14.0);

    expect(result).toBe(1);
  });

  it('19 años, 26.00 IMC = 3', () => {
    let result = 0;

    result = getMaleStatus(19, 26.0);

    expect(result).toBe(3);
  });

  it('10 años, 31.25 IMC = 4', () => {
    let result = 0;

    result = getMaleStatus(10, 31.25);

    expect(result).toBe(4);
  });

  it('13 años, 17.47 IMC = 2', () => {
    let result = 0;

    result = getMaleStatus(13, 17.47);

    expect(result).toBe(2);
  });

  it('17 años, 22.83 IMC = 2', () => {
    let result = 0;

    result = getMaleStatus(17, 22.83);

    expect(result).toBe(2);
  });

  it('11 años, 32.05 IMC = 4', () => {
    let result = 0;

    result = getMaleStatus(11, 32.05);

    expect(result).toBe(4);
  });

  it('14 años, 21.58 IMC = 2', () => {
    let result = 0;

    result = getMaleStatus(14, 21.58);

    expect(result).toBe(2);
  });

  /**
   * Test Female Status
   */

  it('10 años, 26.78 IMC = 4', () => {
    let result = 0;

    result = getFemaleStatus(10, 26.78);

    expect(result).toBe(4);
  });

  it('17 años, 26.87 IMC = 3', () => {
    let result = 0;

    result = getFemaleStatus(17, 26.87);

    expect(result).toBe(3);
  });

  it('18 años, 25.1 IMC = 3', () => {
    let result = 0;

    result = getFemaleStatus(18, 25.1);

    expect(result).toBe(3);
  });

  it('19 años, 18.93 IMC = 2', () => {
    let result = 0;

    result = getFemaleStatus(19, 18.93);

    expect(result).toBe(2);
  });

  it('13 años, 18.9 IMC = 2', () => {
    let result = 0;

    result = getFemaleStatus(13, 18.9);

    expect(result).toBe(2);
  });

  it('11 años, 17.83 IMC = 2', () => {
    let result = 0;

    result = getFemaleStatus(11, 17.83);

    expect(result).toBe(2);
  });

  it('15 años, 17.85 IMC = 2', () => {
    let result = 0;

    result = getFemaleStatus(15, 17.85);

    expect(result).toBe(2);
  });

  it('16 años, 20.07 IMC = 2', () => {
    let result = 0;

    result = getFemaleStatus(16, 20.07);

    expect(result).toBe(2);
  });

  it('14 años, 18.61 IMC = 2', () => {
    let result = 0;

    result = getFemaleStatus(14, 18.61);

    expect(result).toBe(2);
  });


  it('13 años, 13.7 IMC = 1', () => {
    let result = 0;

    result = getFemaleStatus(13, 13.7);

    expect(result).toBe(1);
  });

  it('10 años,  15.6 IMC = 2', () => {
    let result = 0;

    result = getFemaleStatus(10, 15.6);

    expect(result).toBe(2);
  });

  it('19 años, 15.4 IMC = 1', () => {
    let result = 0;

    result = getFemaleStatus(19, 15.4);

    expect(result).toBe(1);
  });

  it('12 años, 21.3 IMC = 3', () => {
    let result = 0;

    result = getFemaleStatus(12, 21.3);

    expect(result).toBe(3);
  });

  it('18 años, 15.7 IMC = 1', () => {
    let result = 0;

    result = getFemaleStatus(18, 15.7);

    expect(result).toBe(1);
  });

  it('16 años, 26.1 IMC = 3', () => {
    let result = 0;

    result = getFemaleStatus(16, 26.1);

    expect(result).toBe(3);
  });


  /*
  test return; on imc.ts at lines 35 and 51
  */

  //female wrong age test
  it('32 años, 17.85 IMC = -1', () => {
    let result = 0;

    result = getFemaleStatus(32, 17.85);

    expect(result).toBe(-1);
  });

  it('36 años, 20.07 IMC = -1', () => {
    let result = 0;

    result = getFemaleStatus(36, 20.07);

    expect(result).toBe(-1);
  });

  it('44 años, 18.61 IMC = -1', () => {
    let result = 0;

    result = getFemaleStatus(44, 18.61);

    expect(result).toBe(-1);
  });


  it('28 años, 13.7 IMC = -1', () => {
    let result = 0;

    result = getFemaleStatus(28, 13.7);

    expect(result).toBe(-1);
  });

  it('26 años,  15.6 IMC = -1', () => {
    let result = 0;

    result = getFemaleStatus(26, 15.6);

    expect(result).toBe(-1);
  });

  it('35 años, 15.4 IMC = -1', () => {
    let result = 0;

    result = getFemaleStatus(35, 15.4);

    expect(result).toBe(-1);
  });

  it('49 años, 21.3 IMC = -1', () => {
    let result = 0;

    result = getFemaleStatus(49, 21.3);

    expect(result).toBe(-1);
  });

  //male wrong age test
  it('24 años, 15.7 IMC = -1', () => {
    let result = 0;

    result = getMaleStatus(24, 15.7);

    expect(result).toBe(-1);
  });

  it('30 años, 26.1 IMC = -1', () => {
    let result = 0;

    result = getMaleStatus(30, 26.1);

    expect(result).toBe(-1);
  });

  it('32 años, 17.85 IMC = -1', () => {
    let result = 0;

    result = getMaleStatus(32, 17.85);

    expect(result).toBe(-1);
  });

  it('36 años, 20.07 IMC = -1', () => {
    let result = 0;

    result = getMaleStatus(36, 20.07);

    expect(result).toBe(-1);
  });

  it('44 años, 18.61 IMC = -1', () => {
    let result = 0;

    result = getMaleStatus(44, 18.61);

    expect(result).toBe(-1);
  });


  it('28 años, 13.7 IMC = -1', () => {
    let result = 0;

    result = getMaleStatus(28, 13.7);

    expect(result).toBe(-1);
  });

  it('26 años,  15.6 IMC = -1', () => {
    let result = 0;

    result = getMaleStatus(26, 15.6);

    expect(result).toBe(-1);
  });

  it('35 años, 15.4 IMC = -1', () => {
    let result = 0;

    result = getMaleStatus(35, 15.4);

    expect(result).toBe(-1);
  });

  it('49 años, 21.3 IMC = -1', () => {
    let result = 0;

    result = getMaleStatus(49, 21.3);

    expect(result).toBe(-1);
  });

  it('24 años, 15.7 IMC = -1', () => {
    let result = 0;

    result = getMaleStatus(24, 15.7);

    expect(result).toBe(-1);
  });

  it('30 años, 26.1 IMC = -1', () => {
    let result = 0;

    result = getMaleStatus(30, 26.1);

    expect(result).toBe(-1);
  });

  it('20 años, 26.1 IMC = -1', () => {
    let result = 0;

    result = getMaleStatus(20, 26.1);

    expect(result).toBe(-1);
  });
});
