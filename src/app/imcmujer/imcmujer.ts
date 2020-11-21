
export function imcmujer(estatura,peso){;
  let imc = (peso/(estatura*estatura)).toFixed(2);
  return Number(imc);
}
