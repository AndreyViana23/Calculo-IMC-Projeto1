function calcularImc(){
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let nome = document.getElementById('nome').value

        if(altura != ""){
        if(peso != ""){
            let resultado = peso / (altura * altura)
            if(resultado <= 18.5){
                document.getElementById('resultado').innerHTML = `${nome} seu IMC é ${resultado.toFixed(2)} você está a baixo do peso`
            }else if(resultado <= 24.9){
                document.getElementById('resultado').innerHTML = `${nome} seu IMC é ${resultado.toFixed(2)} Você está com o peso nomal`
            }else if(resultado <= 29.9){
                document.getElementById('resultado').innerHTML = `${nome} seu IMC é ${resultado.toFixed(2)} Você está sobrepeso`
            }else if(resultado <= 39.9){
                document.getElementById('resultado').innerHTML = `${nome} seu IMC é ${resultado.toFixed(2)} Você está com obesidade`
            }else if(resultado >= 40){
                document.getElementById('resultado').innerHTML = `${nome} seu IMC é ${resultado.toFixed(2)} Você está com Obesidade Grave`
            }
        }else{
            alert("Preencha o valor do peso")
        }
    }else{
        alert("Preencha a altura")
    }
}