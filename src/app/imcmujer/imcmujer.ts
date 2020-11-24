
export function imcmujer(estatura,peso){;
  var imc = 0.0;
  imc =+(peso/(estatura*estatura)).toFixed(2);
  return imc;
}
