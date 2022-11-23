/* OBJETIVO - Construir uma Clculadora IMC - 

PRIMEIRO: receber por um inputPeso o valor necessário de peso em Kg. 
SEGUNDO: receber por um inputAltura o valor necessário da altura em M.
TERCEIRO: transformar os valores recebidos de string para números. 
QUARTO: Clicar no botão e executar o calculo com as informações recebidas. 
QUINTO: Imprimir na tela, a baixo do botão o valor do IMC com 2 casas decimais + a mensagem sobre a condição específica. 

-------------------------------------- */

//primeiro: reconhecer o botão no JS por meio do querySelector.//
var btn = document.querySelector('.btn');

// segundo: adicionar um evento para que o botão realize por meio do addEventListener.
//eventTarget.addEventListener (type, listener) - sets up a function that will be called whenever the specified event is delivered to the target //
btn.addEventListener('click', pegaValores); 

//terceiro: recebi os valores de altura e peso além de transformar de string para número. Além de já imprimir o resultado do cálculo, já que esta é o evento acionado pelo click do botão.//
function pegaValores(){
    var altura = Number(document.getElementById('inputAltura').value);
    var peso = Number(document.getElementById('inputPeso').value);
    
    var caso = calculaimc(altura, peso);
    mostraResultado(caso);
    //var resultado = document.write();
    //resultado;
}

//quarto: construi a função que realizaria o calculo da formula do imc. Além disso estabeleci as condicionais específicas para cada valor de IMC correspondente.//

function calculaimc(altura,peso){
    var imc = peso / (altura * altura);
    imc = parseFloat(imc).toFixed(2);
        if( imc >= 20 || imc <= 30){
           return imc;
        }
}

function pulaLinha(){
    document.innerHTML
}

function mostraResultado(caso){
    var campoResultado = document.getElementById('resultado');
    if (caso <= 18.5){
        campoResultado.textContent =caso + " - condição: A BAIXO DO PESO"
    }if (caso >= 18.5 && caso <= 24.9){
        campoResultado.textContent = caso + " - Peso NORMAL"
    }if (caso >= 25 && caso <= 29.9){
        campoResultado.textContent = caso + " - Condição: SOBREPESO";
    }if (caso >= 30 && caso <= 34.9){
        campoResultado.textContent = caso + " - Condição OBESIDADE classe I";
    }if (caso >= 35 && caso <= 39.0){
        campoResultado.textContent = caso + " - OBESIDADE classe II";
    }if( caso > 39.9){
        campoResultado.textContent = caso + " - OBESIDADE classe III";
    }
}
