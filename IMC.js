function Calcular(){
    var ALTURA = document.getElementById('altura');
    var KG = document.getElementById('kg');
    var NOME = document.getElementById('Nome');
    var RESULTADO = document.getElementById('Resultado');


    if(NOME.value.length == 0||KG.value.length == 0|| ALTURA.value.length == 0){
        alert("ERRO, está faltando informações, digite novamente");
    }else{
        var nome = (NOME.value)

        var Altura = parseFloat(ALTURA.value);
        var Kg = parseFloat(KG.value);
        var Total = Kg / (Altura * Altura);
        var numero = parseFloat(Total, 10);

        var total_0 = Total * 10000;

        if(total_0 <= 18.5){
            RESULTADO.innerHTML =  nome + ` O seu peso é Abaixo do peso ` +  total_0.toFixed(2);
        }
        else if(total_0 <= 24.9){
            RESULTADO.innerHTML =  nome + `, O seu IMC é Peso ideal ` +  total_0.toFixed(2);
        }
        else if(total_0 <= 29.9){
            RESULTADO.innerHTML =  nome + `, O seu IMC é Sobrepeso ` +  total_0.toFixed(2);
        }
        else if(total_0 <= 34.9){
            RESULTADO.innerHTML =  nome + `, O seu IMC é Obesidade Grau I ` +  total_0.toFixed(2);
        }
        else if(total_0 <= 39.9){
            RESULTADO.innerHTML =  nome + `, O seu peso é obesidade Grau II (Severa) ` +  total_0.toFixed(2);
        }
        else if(total_0 >= 40.0){
            RESULTADO.innerHTML =  nome + `, O seu IMC é Obesidade III (Mórbida) ` +  total_0.toFixed(2);
        }
        else{
                RESULTADO.innerHTML = `ERRO `;
        }
    }
}