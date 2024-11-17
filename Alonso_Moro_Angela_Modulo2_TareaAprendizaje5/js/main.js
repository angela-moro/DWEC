function calcularIMC(){
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;

    console.log(altura);
    console.log(peso);

    const imc = peso/(altura*altura);

    document.getElementById('resultado').innerText = `El IMC es: ${imc.toFixed(2)} \n Por debajo de 18.5: Peso insuficiente \n 18.5 - 24.9: Peso normal \n 25.0 - 29.9: Sobrepeso \n Por encima de 30.0: Obesidad`;

}