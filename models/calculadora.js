function somar (numero1, numero2) {
    if (typeof numero1 !== "number") {
        return "Erro";
    }
    return numero1 + numero2;}
//argumento1 = 3;
//argumento2 = 4;

exports.somar = somar; 