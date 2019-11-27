
var htmlgerado="";
var cont=0;

do{

    var num = prompt("Digite um numero inteiro");    

}while(!(num > 5 && num < 2000) )


    for(i=1;i<=num;i++){

   // htmlgerado += "<div class='row ";
    if(i%2 == 0)
    {
        total = i*i;
        htmlgerado+="<div class='row'>";

        htmlgerado += "<div class='col-md-12 ml-3'>" + i + " ^ 2 = " + total + "</div>";
        htmlgerado += "</div>";
  
    }
  
    }


    document.getElementById("numerosDiv").innerHTML = htmlgerado;
