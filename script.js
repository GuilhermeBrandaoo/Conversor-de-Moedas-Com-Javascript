const convertButton = document.querySelector("button"); // Seleciona o botão
const moedasSelect = document.querySelector(".currency-to-convert"); // Seleciona o select
const moedasSelectPrincipal = document.querySelector(".main-currency"); // Seleciona o select
const moedasSelectConverter = document.querySelector(".moedasSelectParaConverter")


function convertValor() {
    // Função para converter as moedas
    const inputConverter = document.querySelector("#entered-currency-value").value; // Seleciona o valor digitado no input
    const valorConvertido = document.querySelector(".converted-value");
    const valorParaConverter = document.querySelector(".value-to-convert");

    if (moedasSelect.value == moedasSelectPrincipal.value) {
        alert("ERRO")
    }
    // De dolar para euro
    if (moedasSelectPrincipal.value == "euro" && moedasSelect.value == "dolar") {
        // Se o select estiver formatado o valor de dolar, executa esse bloco de código
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputConverter * 1.16); // Formata o texto em dolar
    } 
    // De euro para dolar
    if (moedasSelectPrincipal.value == "dolar" && moedasSelect.value == "euro") {
        // Se o select estiver formatado o valor de dolar, executa esse bloco de código
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputConverter * 0.87); // Formata o texto em dolar
    } 

    if (moedasSelectPrincipal.value == "euro" && moedasSelect.value == "real") {
        // Se o select estiver formatado o valor de dolar, executa esse bloco de código
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputConverter * 6.11); // Formata o texto em dolar
    } 

    if (moedasSelectPrincipal.value == "dolar" && moedasSelect.value == "real") {
        // Se o select estiver formatado o valor de dolar, executa esse bloco de código
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputConverter * 5.29); // Formata o texto em dolar
    } 


    // De dolar para real
    if  (moedasSelectPrincipal.value == "real" && moedasSelect.value == "dolar") {
        // Se o select estiver formatado o valor de dolar, executa esse bloco de código
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputConverter * 0.19); // Formata o texto em dolar
    }
    // De euro para real
    if (moedasSelectPrincipal.value == "real" && moedasSelect.value == "euro") {
        // Se o select estiver formatado o valor de euro, executa esse bloco de código
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputConverter * 0.16); // Formata o texto em euro
    }

    if (moedasSelectPrincipal.value == "dolar") {
        valorParaConverter.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputConverter); // Formata o texto em real
    }

    if (moedasSelectPrincipal.value == "euro") {
        valorParaConverter.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR",
        }).format(inputConverter); // Formata o texto em real
    }

    if (moedasSelectPrincipal.value == "real") {
        valorParaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputConverter); // Formata o texto em real
    }
}






function changeMoeda() {
    const moedaConvertidaNome = document.querySelector("#converted-currency-name") 
    const moedaConvertidaImg = document.querySelector(".imgMoedaConvertida")
    
    if (moedasSelect.value == "dolar") { // Se seleciona dolar executa esse bloco de código
        moedaConvertidaImg.src = "./assets/dolar.png" // Altera a imagem
        moedaConvertidaNome.innerHTML = "Dólar americano" // Altera o texto
    }

    if (moedasSelect.value == "euro") { // Se seleciona euro executa esse bloco de código
        moedaConvertidaImg.src = "./assets/euro.png" // Altera a imagem
        moedaConvertidaNome.innerHTML = "Euro" // Altera o texto
    }
    if (moedasSelect.value == "real") { // Se seleciona euro executa esse bloco de código
        moedaConvertidaImg.src = "./assets/real.png" // Altera a imagem
        moedaConvertidaNome.innerHTML = "Real" // Altera o texto
    }
    convertValor()
}

function changeMoedaPrincipal() {
    const moedaPrincipalConvertidaNome = document.querySelector(".name-of-the-main-currency-to-convert")
    const moedaPrincipalConvertidaImg = document.querySelector(".main-coin-image")
    

    if (moedasSelectPrincipal.value == "dolar") {
        moedaPrincipalConvertidaImg.src = "./assets/dolar.png"
        moedaPrincipalConvertidaNome.innerHTML = "Dólar americano"
    }
    if (moedasSelectPrincipal.value == "euro") {
        moedaPrincipalConvertidaImg.src = "./assets/euro.png"
        moedaPrincipalConvertidaNome.innerHTML = "Euro"
    }
    if (moedasSelectPrincipal.value == "real") {
        moedaPrincipalConvertidaImg.src = "./assets/real.png"
        moedaPrincipalConvertidaNome.innerHTML = "Real"
    }
    
}


moedasSelect.addEventListener("change", changeMoeda) // Quando seleciona uma opção no select executa a função changeMoeda

moedasSelectPrincipal.addEventListener("change", changeMoedaPrincipal)

convertButton.addEventListener("click", convertValor); // Quando clica no botão executa a função convertValor
