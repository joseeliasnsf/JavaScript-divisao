let num1 = parseInt(prompt("Digite o primeiro número inteiro: ")); 

let num2 = parseInt(prompt("Digite o segundo número inteiro: ")); 

let num3 = parseInt(prompt("Digite o terceiro número inteiro: ")); 

 

let listaOrdenada = [num1, num2, num3].sort((a, b) => a - b); 

 

console.log("Números em ordem crescente: " + listaOrdenada[0] + ", " + listaOrdenada[1] + ", " + listaOrdenada[2]);