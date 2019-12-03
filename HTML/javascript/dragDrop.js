function levaPrala(event){
    event.dataTransfer.setData("text", event.target.id);

}

function recebeu(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));


}

function permiteReceber(event){
    event.preventDefault();
}