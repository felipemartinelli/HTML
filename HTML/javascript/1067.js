var num = prompt("Digite um numero inteiro");
var htmlgerado="";
var cont=0;

for(i=0;i<=num;i++){

   // htmlgerado += "<div class='row ";
    if(i%2 != 0)
    {
        cont++;
        

    if(cont == 1)
    {
        htmlgerado+="<div class='row cont1'>";
        
    }else{
        if(cont == 2){
        
            htmlgerado+="<div class='row cont2'>";
        }
        else{
            if(cont == 3){
                
                htmlgerado+="<div class='row cont3'>";
                cont = 0;
            }
        }
    }


        htmlgerado += "<div class='col-md-12 ml-3'>" + i + "</div>";
        htmlgerado += "</div>";
        
    }

    
}
document.getElementById("numerosDiv").innerHTML = htmlgerado;