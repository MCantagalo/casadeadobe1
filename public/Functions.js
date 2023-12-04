function valorMonet (valor, numero) { //função converte um valor numerico para o padrão monetário (duas casas decimais)
    if (numero) {
        if (isNaN(valor)) {return (0);}
        else {
            valor = valor * 100;
            valor = Math.round(valor);
            return(valor/100);
        }
    }
    else {
        if (isNaN(valor)) {return ("R$0,00");}
        else {
            var reais = valor * 100;
            reais = Math.round(reais);
            reais = reais / 100;
            var centavos = Math.round((reais - Math.floor(reais)) * 100);
            var partes = new Array();
            var i = 0;
            reais = Math.floor(reais);
            while (Math.floor(reais/1000) > 0) {
                partes[i] = reais - (Math.floor(reais/1000)*1000);
                if (partes[i] === 0) {partes[i] = "000";}
                else if (partes[i] < 10) {partes[i] = "00" + partes[i];}
                else if (partes[i] < 100) {partes[i] = "0" + partes[i];}
                i++;
                reais = Math.floor(reais/1000);
            }
            i--;
            while (i >= 0) {
                reais += "." + partes[i];
                i--;
            }
            var final;
            if (centavos === 0) {final = "R$" + reais + ",00";}
            else if (centavos < 10) {final = "R$" + reais + ",0" + centavos;}
            else {final = "R$" + reais + "," + centavos;}
            return (final);
        }
    }
}

function valorPorcent (valor, numero) { //função converte um valor numerico para o padrão porcentagem (com duas casas decimais)
    if (numero) {
        if (isNaN(valor)) {return (0);}
        else {
            valor = valor * 10000;
            valor = Math.round(valor);
            return(valor/100);
        }
    }
    else {
        if (isNaN(valor)) {return ("0,00%");}
        else {
            var inteiros = valor * 10000;
            inteiros = Math.round(inteiros);
            inteiros = inteiros / 100;
            var decimais = Math.round((inteiros - Math.floor(inteiros)) * 100);
            var final;
            if (decimais === 0) {final = Math.floor(inteiros) + ",00%";}
            else if (decimais < 10) {final = Math.floor(inteiros) + ",0" + decimais + "%";}
            else {final = Math.floor(inteiros) + "," + decimais + "%";}
            return (final);
        }
    }
}

function wrongHostTest () {
    var HREFLoc = window.location.origin;
    if (
    HREFLoc === "file://"/*"https://seupgbl.com.br" ||
    HREFLoc === "https://siasano.com" ||
    HREFLoc === "https://casadeadobe.com.br" ||
    HREFLoc === "https://www.seupgbl.com.br" ||
    HREFLoc === "https://www.siasano.com" ||
    HREFLoc === "https://www.casadeadobe.com.br" ||*/) {return 0;} else {return 1;};
}