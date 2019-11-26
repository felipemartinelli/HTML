var valor = prompt("Digite o valor da tabuada");
var htmlgerado="";
for (i=0; i<= 10; i++){
    
    htmlgerado += "<div class='row ";
    if (i %2 == 0){
        htmlgerado+=" linhaPar'>";
    }
    else{
        htmlgerado+=" linhaImpar'>"
    }
    htmlgerado += "<div class='col-sm-4'>" + valor + "</div>";
    htmlgerado += "<div class='col-sm-4'>" + i + "</div>";
    htmlgerado += "<div class='col-sm-4'>" + (valor*i) + "</div>";
    htmlgerado += "</div>";
}
document.getElementById("tabuada").innerHTML = htmlgerado;