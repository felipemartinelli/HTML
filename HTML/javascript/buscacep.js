function realizarBusca(){
    // pegando o valor digitado no INPUT
    var cep=document.getElementById("meucep").value;
    console.log("Digitei o CEP = "+cep);

    // vou montar uma URL com o padrao do REPUBLICAVIRTUAL
    var URL = "http://cep.republicavirtual.com.br/web_cep.php?cep="+cep+"&formato=json";
    console.log("Montei a URL...");
    console.log(URL);

    // agora... quero buscar os detalhes do CEP
    fetch(URL, { method:"GET" })
       .then(response => response.json() )
       .then(json => preencheHTML(json));

}

function preencheHTML(json){
   var result = document.getElementById("result");
   result.innerHTML = JSON.stringify(json);
   /*result.innerHTML += json.tipo_logradouro + "<br/>";
   result.innerHTML += json.logradouro + "<br/>";
   result.innerHTML += "Cidade: "+json.cidade+" -  Bairro: "+json.bairro+"<br/>";
   result.innerHTML += "UF: "+json.uf+"<br/>";*/

}