var i =0;


function inserirNovo(){
    i++;
    
    var texto = document.getElementById("texto").value;
    console.log(texto);

    var textoGerado = "";

    textoGerado = "<div class='input-group mb-3' id='divResultado'><div class='input-group-prepend'><div class='input-group-text'><input type='checkbox' onclick='verificarCheck(this,"+i+");'></div></div><input type='text' class='form-control' id='campo"+i+"'value='"+texto+"'></div>";

    document.getElementById("divResultado").innerHTML += textoGerado; 

}


function verificarCheck(campo, i){

    if(campo.checked){
        document.getElementById("campo"+i).style.textDecoration = "line-through";
    }
    else{
        document.getElementById("campo"+i).style.textDecoration = "";
    }

}





