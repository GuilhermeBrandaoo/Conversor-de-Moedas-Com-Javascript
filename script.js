const convertButton = document.querySelector("button"); // Seleciona o botão
const moedasSelect = document.querySelector(".moedas-para-converter"); // Seleciona o select
const moedasSelectConverter = document.querySelector(".moedasSelectParaConverter")


function convertValor() {
    // Função para converter as moedas
    const inputConverter = document.querySelector("#valorDigitado").value; // Seleciona o valor digitado no input
    const dolarToday = 5.33; // Valor do dolar
    const euroToday = 6.2; // Valor do euro
    const valorParaConverter = document.querySelector(".valor-para-converter");
    const valorConvertido = document.querySelector(".valor-convertido");

    if (moedasSelect.value == "dolar") {
        // Se o select estiver formatado o valor de dolar, executa esse bloco de código
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputConverter / dolarToday); // Formata o texto em dolar
    }
    if (moedasSelect.value == "euro") {
        // Se o select estiver formatado o valor de euro, executa esse bloco de código
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputConverter / euroToday); // Formata o texto em euro
    }

    valorParaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputConverter); // Formata o texto em real
}

function changeMoeda() {
    const moedaConvertidaNome = document.getElementsByClassName("nomeMoedaConvertida") 
    const moedaConvertidaImg = document.querySelector(".imgMoedaConvertida")
    
    if (moedasSelect.value == "dolar") { // Se seleciona dolar executa esse bloco de código
        moedaConvertidaImg.src = "./assets/dolar.png" // Altera a imagem
        moedaConvertidaNome.innerHTML = "Dólar americano" // Altera o texto
    }

    if (moedasSelect.value == "euro") { // Se seleciona euro executa esse bloco de código
        moedaConvertidaImg.src = "./assets/euro.png" // Altera a imagem
        moedaConvertidaNome.innerHTML = "Euro" // Altera o texto
    }
    convertValor()
}


moedasSelect.addEventListener("change", changeMoeda) // Quando seleciona uma opção no select executa a função changeMoeda

convertButton.addEventListener("click", convertValor); // Quando clica no botão executa a função convertValor
