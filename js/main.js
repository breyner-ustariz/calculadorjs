let operandoA;
let operandoB;
let operacion;
const main = document.getElementById('main')
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
      uno.innerHTML += '<audio src="media/bip.mp3" autoplay></audio>'
   }
   dos.onclick = function(e){
      resultado.textContent = resultado.textContent + '2';
      dos.innerHTML += '<audio src="media/bip.mp3" autoplay></audio>'
   }
   tres.onclick = function(e){
      resultado.textContent = resultado.textContent + '3';
      tres.innerHTML += '<audio src="media/bip.mp3" autoplay></audio>'
   }
   cuatro.onclick = function(e){
      resultado.textContent = resultado.textContent + '4';
      cuatro.innerHTML += '<audio src="media/bip.mp3" autoplay></audio>'
   }
   cinco.onclick = function(e){
      resultado.textContent = resultado.textContent + '5';
      cinco.innerHTML += '<audio src="media/bip.mp3" autoplay></audio>'
   }
   seis.onclick = function(e){
      resultado.textContent = resultado.textContent + '6';
      seis.innerHTML += '<audio src="media/bip.mp3" autoplay></audio>'
   }
   siete.onclick = function(e){
      resultado.textContent = resultado.textContent + '7';
      siete.innerHTML += '<audio src="media/bip.mp3" autoplay></audio>'
   }
   ocho.onclick = function(e){
      resultado.textContent = resultado.textContent + '8';
      ocho.innerHTML += '<audio src="media/bip.mp3" autoplay></audio>'
   }
   nueve.onclick = function(e){
      resultado.textContent = resultado.textContent + '9';
      nueve.innerHTML += '<audio src="media/bip.mp3" autoplay></audio>'
   }
   cero.onclick = function(e){
      resultado.textContent = resultado.textContent + '0';
      cero.innerHTML += '<audio src="media/bip.mp3" autoplay></audio>'
   }
   punto.onclick = function(e){
      resultado.textContent = resultado.textContent + '.';
      punto.innerHTML += '<audio src="media/bip.mp3" autoplay></audio>'
   }
   reset.onclick = function(e){
      resetear();
      reset.innerHTML += '<audio src="media/bip.mp3" autoplay></audio>'
   }
   
   suma.onclick = function(e){
      suma.innerHTML += '<audio src="media/bip.mp3" autoplay></audio>'
      operandoA = resultado.textContent;
      operacion = '+';
      limpiar();
   }
   resta.onclick = function(e){
      resta.innerHTML += '<audio src="media/bip.mp3" autoplay></audio>'
      operandoA = resultado.textContent;
      operacion = '-';
      limpiar();
   }
   multiplicar.onclick = function(e){
      multiplicar.innerHTML += '<audio src="media/bip.mp3" autoplay></audio>'
      operandoA = resultado.textContent;
      operacion = '*';
      limpiar();
   }
   division.onclick = function(e){
      division.innerHTML += '<audio src="media/bip.mp3" autoplay></audio>'
      operandoA = resultado.textContent;
      operacion = '/';
      limpiar();
   }
   igual.onclick = function(e){
      igual.innerHTML += '<audio src="media/bip.mp3" autoplay></audio>'
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




