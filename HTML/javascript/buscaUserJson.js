

function realizarBusca(){
    // pegando o valor digitado no INPUT
    var id =document.getElementById("texto").value;

    var result = document.getElementById("divResultado");

    result.innerHTML = " "

    var URL = "https://jsonplaceholder.typicode.com/users/"+id;

    fetch(URL, { method:"GET" })
       .then(response => response.json() )
       .then(json => preencheHTML(json));

}

function preencheHTML(json){
   var result = document.getElementById("divResultado");

   result.innerHTML += "<div class='col-md-2'> Nome: </div>" + "<div class='col-md-10'><input type='text' disabled class='form-control' value="+json.name+"></div>"
   result.innerHTML += "<div class='col-md-2'> Nome de Usuario: </div>" + "<div class='col-md-10'><input type='text' disabled class='form-control' value="+json.username+"></div>"
   result.innerHTML += "<div class='col-md-2'> Email: </div>" + "<div class='col-md-10'><input type='text' disabled class='form-control' value="+json.email+"></div>"
   result.innerHTML += "<div class='col-md-2'> Rua: </div>" + "<div class='col-md-10'><input type='text' disabled class='form-control' value="+json.address.street+"></div>"
   result.innerHTML += "<div class='col-md-2'> Complemento: </div>" + "<div class='col-md-10'><input type='text' disabled class='form-control' value="+json.address.suite+"></div>"
   result.innerHTML += "<div class='col-md-2'> Cidade: </div>" + "<div class='col-md-10'><input type='text' disabled class='form-control' value="+json.address.city+"></div>"
   result.innerHTML += "<div class='col-md-2'> Telefone: </div>" + "<div class='col-md-10'><input type='text' disabled class='form-control' value="+json.phone+"></div>"
   result.innerHTML += "<div class='col-md-2'> Site: </div>" + "<div class='col-md-10'><input type='text' disabled class='form-control' value="+json.website+"></div>"
   result.innerHTML += "<div class='col-md-2'> Nome da Compania: </div>" + "<div class='col-md-10'><input type='text' disabled class='form-control' value="+json.company.name+"></div>"
   result.innerHTML += "<div class='col-md-2'> Slogan: </div>" + "<div class='col-md-10'><input type='text' disabled class='form-control' value="+json.company.catchPhrase+"></div>"
   result.innerHTML += "<div class='col-md-2'> BS: </div>" + "<div class='col-md-10'><input type='text' disabled class='form-control' value="+json.company.bs+"></div>"


}

