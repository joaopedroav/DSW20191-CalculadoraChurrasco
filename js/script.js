function getFormElements() {
    var adulto = document.getElementById("adulto");
    var crianca = document.getElementById("crianca");
    var bovino = document.getElementById("bovino");
    var frango = document.getElementById("frango");
    var bebida = document.getElementById("bebida");
    var acompanhamento = document.getElementById("acompanhamento"); 
    var utensilio = document.getElementById("utensilio");
    var output = "";
    var i, numAdultos, numCriancas, numBovino = 0, numFrango = 0;
    for (i = 0; i < adulto.length; i++) {
        numAdultos = adulto.elements[i].value;
        numCriancas = crianca.elements[i].value;
    }
    output += "<h6>Carne bovina</h6>";
    for (i = 0; i < bovino.length; i++) {
        if (bovino.elements[i].checked) {
            numBovino++; 
        }
    }
    for (i = 0; i < frango.length; i++) {
        if (frango.elements[i].checked) {
            numFrango++; 
        }
    }
    for (i = 0; i < bovino.length; i++) {
        if (bovino.elements[i].checked) {
            output += "<b>" + bovino.elements[i].value + ": </b>" + ((numAdultos * 0.5 / numBovino) + (numCriancas * 0.2 / numBovino)).toFixed(2) + " Kg" + "<br>";  
        }
    }
    for (i = 0; i < frango.length; i++) {
        output += frango.elements[i].value + "<br>";
        output += bebida.elements[i].value + "<br>";
        output += acompanhamento.elements[i].value + "<br>";
        output += utensilio.elements[i].value + "<br>";
    }
    document.getElementById("resultado").innerHTML = output;
}