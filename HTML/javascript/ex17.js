
function calculaImposto() {

    var N = document.getElementById("valorText").value;
    var reajuste;

    if (N > 0 && N < 1000) {
        reajuste = "Isento de Imposto";

    }
    else {
        if (N >= 1000 && N < 2500) {
            reajuste = N * 0.125;

        }
        else {

        }    if (N >= 2500 && N < 5000) {
                reajuste = N * 0.25;
            } 
            else {

        } if (N >= 5000) {

            reajuste = 1300;
        }
        
    }
    
    return reajuste;
}

function exibir(){
    var N = document.getElementById("valorText").value;
    var imposto = calculaImposto();
    var salarioLiquido = N - imposto;
    document.getElementById("resposta").innerHTML = "Imposto: "+imposto+"<br>Salario Liquido: "+salarioLiquido;
}

