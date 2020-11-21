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
});
