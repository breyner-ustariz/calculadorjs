let operandoA;
let operandoB;
let operacion;
function start (){

   let resultado = document.getElementById('resultado');
   let reset = document.getElementById('reset');
   let suma = document.getElementById('sumar')
   let resta = document.getElementById('restar')
   let multiplicar = document.getElementById('multiplicar')
   let division = document.getElementById('dividir')
   let igual = document.getElementById('igual')
   let punto = document.getElementById('punto')
   let cero = document.getElementById('cero')
   let uno = document.getElementById('uno')
   let dos = document.getElementById('dos')
   let tres = document.getElementById('tres')
   let cuatro = document.getElementById('cuatro')
   let cinco = document.getElementById('cinco')
   let seis = document.getElementById('seis')
   let siete = document.getElementById('siete')
   let ocho = document.getElementById('ocho')
   let nueve = document.getElementById('nueve')

   //eventos
   uno.onclick = function(e){
      resultado.textContent = resultado.textContent + '1';
   }
   dos.onclick = function(e){
      resultado.textContent = resultado.textContent + '2';
   }
   tres.onclick = function(e){
      resultado.textContent = resultado.textContent + '3';
   }
   cuatro.onclick = function(e){
      resultado.textContent = resultado.textContent + '4';
   }
   cinco.onclick = function(e){
      resultado.textContent = resultado.textContent + '5';
   }
   seis.onclick = function(e){
      resultado.textContent = resultado.textContent + '6';
   }
   siete.onclick = function(e){
      resultado.textContent = resultado.textContent + '7';
   }
   ocho.onclick = function(e){
      resultado.textContent = resultado.textContent + '8';
   }
   nueve.onclick = function(e){
      resultado.textContent = resultado.textContent + '9';
   }
   cero.onclick = function(e){
      resultado.textContent = resultado.textContent + '0';
   }
   punto.onclick = function(e){
      resultado.textContent = resultado.textContent + '.';
   }
   reset.onclick = function(e){
      resetear();
   }
   suma.onclick = function(e){
      operandoA = resultado.textContent;
      operacion = '+';
      limpiar();
   }
   resta.onclick = function(e){
      operandoA = resultado.textContent;
      operacion = '-';
      limpiar();
   }
   multiplicar.onclick = function(e){
      operandoA = resultado.textContent;
      operacion = '*';
      limpiar();
   }
   division.onclick = function(e){
      operandoA = resultado.textContent;
      operacion = '/';
      limpiar();
   }
   igual.onclick = function(e){
      operandoB = resultado.textContent;
      resolver();
   }


}

function limpiar(){
   resultado.textContent = ''
}
function resetear(){
   resultado.textContent = '';
   operandoA = 0;
   operandoB = 0;
   operacion = '';
}
function resolver(){
   let respuesta = 0;
   switch(operacion){
      case "+":
         respuesta = parseFloat(operandoA) + parseFloat(operandoB);
         break;
      case "-":
         respuesta = parseFloat(operandoA) - parseFloat(operandoB);
         break
      case "*":
         respuesta = parseFloat(operandoA) * parseFloat(operandoB);
         break
      case "/":
         respuesta = parseFloat(operandoA) / parseFloat(operandoB);
         break
   }
   resetear();
   resultado.textContent = respuesta;
}





