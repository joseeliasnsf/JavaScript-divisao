var numero = parseInt(prompt("Entre com o numero: "));
var divisores = 0;
    for (var count = 1; count <= numero; count++) {
        if (numero % count === 0) {
            divisores++;
         }
                    
    }
    
    if (divisores == 2)
    console.log("Primo!")
    else 
    console.log("Não é primo!")