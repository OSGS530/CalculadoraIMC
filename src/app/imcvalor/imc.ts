const bajoPeso = 1
const normal=2
const sobrepeso=3
const obesidad=4


var mujer:number[][] = [
  [13.5,16.6,19.0,22.6],
  [13.9,17.2,19.9,23.7],
  [14.4,18.0,20.8,25.0],
  [14.9,18.8,21.8,26.2],
  [15.4,19.6,22.7,27.3],
  [15.9,20.2,23.5,28.2],
  [16.2,20.7,24.1,28.9],
  [16.4,21.0,24.5,29.3],
  [16.4,21.3,24.8,29.5],
  [16.5,21.4,25.0,29.7],
]

var hombre:number[][] = [
  [13.7,16.4,18.5,21.4],
  [14.1,16.9,19.2,22.5],
  [14.5,15.5,19.9,23.6],
  [14.9,18.2,20.8,24.8],
  [15.5,19.0,21.8,25.9],
  [16.0,19.8,22.7,27.0],
  [16.5,20.5,24.5,27.9],
  [16.9,21.1,24.3,28.6],
  [17.3,21.7,24.9,29.2],
  [17.6,22.2,25.4,29.7],
]


export function getMaleStatus(edad:number,imc:number){
  if (edad<10||edad>19){
    return;
  }
  if (imc>=hombre[edad-10][3]){
    return obesidad;
  }else if (imc>=hombre[edad-10][2]){
    return sobrepeso;
  }else if(imc>=hombre[edad-10][0]){
    return normal;
  }else{
    return bajoPeso;
  }
}

export function getFemaleStatus(edad:number,imc:number){
  if (edad<10||edad>19){
    return;
  }
  if (imc>=mujer[edad-10][3]){
    return obesidad;
  }else if (imc>=mujer[edad-10][2]){
    return sobrepeso;
  }else if(imc>=mujer[edad-10][0]){
    return normal;
  }else{
    return bajoPeso;
  }
}
