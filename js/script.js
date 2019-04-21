function getFormElements() {
    var adulto = document.getElementById("adulto");
    var crianca = document.getElementById("crianca");
    var bovino = document.getElementById("bovino");
    var frango = document.getElementById("frango");
    var bebida = document.getElementById("bebida");
    var acompanhamento = document.getElementById("acompanhamento"); 
    var utensilio = document.getElementById("utensilio");
    var output = "";
    var i, numAdultos, numCriancas, numBovino = 0, numFrango = 0, numAcomp = 0, numUt = 0;
    var pesoCarne;
    var numCerveja, numRefri, numSuco;
    var pesoFeijao, numQueijo, numPao;
    for (i = 0; i < adulto.length; i++) {
        numAdultos = adulto.elements[i].value;
        numCriancas = crianca.elements[i].value;
    }
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
    pesoCarne = ((numAdultos * 0.5 / (numBovino + numFrango)) + (numCriancas * 0.2 / (numBovino + numFrango))).toFixed(2)
    output += "<h5>Carne bovina</h5>";
    for (i = 0; i < bovino.length; i++) {
        if (bovino.elements[i].checked) {
            output += "<b>" + bovino.elements[i].value + ": </b>"+ pesoCarne + " Kg" + "<br>";  
        }
    }
    output += "<br>";
    output += "<h5>Carne de frango</h5>";
    for (i = 0; i < frango.length; i++) {
        if (frango.elements[i].checked) {
             output += "<b>" + frango.elements[i].value + ": </b>"+ pesoCarne + " Kg" + "<br>";
        }
    }
    output += "<br>";
    output += "<h5>Bebidas</h5>";
    for (i = 0; i < bebida.length; i++) {
        if (bebida.elements[i].checked) {
            output += "<b>" + bebida.elements[i].value + ": </b>";
            if (bebida.elements[i].value == "Cerveja 200ml") {
                output += (numAdultos * 2) + " unidades.<br>";
            } else {
                if (bebida.elements[i].value == "Regrigerante 2L") {
                    output += ((numAdultos + numCriancas) / 5).toFixed(0) + " unidades.<br>";;
                } else {
                    output += ((numAdultos + numCriancas) / 3).toFixed(0) + " unidades.<br>";
                }
            }
        }
    }
    output += "<br>";
    output += "<h5>Acompanhamentos</h5>";
    for (i = 0; i < acompanhamento.length; i++) {
        if (acompanhamento.elements[i].checked) {
            output += "<b>" + acompanhamento.elements[i].value + ": </b>";
            if (acompanhamento.elements[i].value == "Feijão tropeiro 1kg") {
                output += ((numAdultos + numCriancas) / 5).toFixed(0) + " porções.<br>";
            } else {
                if (acompanhamento.elements[i].value == "Pão de alho - 6 porções") {
                    output += ((numAdultos + numCriancas) / 6).toFixed(0) + " unidades.<br>";;
                } else {
                    output += ((numAdultos + numCriancas) / 5).toFixed(0) + " unidades.<br>";;
                }
            }
        }
    }
    output += "<br>";
    output += "<h5>Utensílios</h5>";
    for (i = 0; i < utensilio.length; i++) {
        if (utensilio.elements[i].checked) {
            output += "<b>" + utensilio.elements[i].value + ": </b>";
            if (utensilio.elements[i].value == "Carvão 5Kg") {
                output += ((numAdultos + numCriancas) / 5).toFixed(0) + " unidades.<br>";
            } else {
                if (utensilio.elements[i].value == "Copos") {
                    output += (numAdultos + numCriancas) + " unidades.<br>";;
                } else {
                    output += ((numAdultos + numCriancas) / 15).toFixed(0) + " unidades.<br>";;
                }
            }
        }
    }
    document.getElementById("resultado").innerHTML = output;
}