const moedas = [
    {
        name: "euro",
        nome: "Euro",
        valor: 5.91,
        moeda: "EUR",
        local: "en-US",
        img: "./assets/euro.png"
    },
    {
        name: "dolar",
        nome: "Dólar",
        valor: 5.17,
        moeda: "USD",
        local: "en-US",
        img: "./assets/dolar.png"
    },
    {
        name: "libra",
        nome: "Libra",
        valor: 6.90,
        moeda: "GBP",
        local: "en-GB",
        img: "./assets/libra.png"
    },
    {
        name: "real",
        nome: "Real",
        valor: 1,
        moeda: "BRL",
        local: "pt-BR",
        img: "./assets/real.png"
    },
    {
        name: "bitcoin",
        nome: "Bitcoin",
        valor: 600000,
        moeda: "BTC",
        local: "pt-BR",
        img: "./assets/bitcoin.png"
    }
]


// Seleciona elementos principais da interface
const convertButton = document.querySelector("button"); // Botão de converter
const moedasSelect = document.querySelector(".currency-to-convert"); // Select da moeda destino
const moedasSelectPrincipal = document.querySelector(".main-currency"); // Select da moeda de origem


function convertValor() {

    // Seleciona valores e elementos onde o resultado será exibido
    const inputConverter = document.querySelector("#entered-currency-value").value; 
    const valorConvertido = document.querySelector(".converted-value");
    const valorParaConverter = document.querySelector(".value-to-convert");
    const moedaConvertidaNome = document.querySelector("#converted-currency-name");
    const moedaConvertidaImg = document.querySelector(".imgMoedaConvertida");
    const moedaPrincipalConvertidaNome = document.querySelector(".name-of-the-main-currency-to-convert");
    const moedaPrincipalConvertidaImg = document.querySelector(".main-coin-image");

    const primeiraMoeda = moedas.find(item => (
       item.name === moedasSelectPrincipal.value
        
    ))

    const segundaMoeda = moedas.find(item => (
        item.name === moedasSelect.value
    ))

        const input = Number(
            inputConverter
            .replace(/\./g, "")
            .replace(",", ".")
        )

        if (!Number.isFinite(input) || input <= 0) {
            alert("Digite um número válido")
        }

        const valor = input * primeiraMoeda.valor / segundaMoeda.valor
        const moedaConvertida = valor.toLocaleString(segundaMoeda.local, {style: 'currency', currency: segundaMoeda.moeda, minimumFractionDigits: segundaMoeda.moeda === "BTC" ? 8 : 2, maximumFractionDigits: segundaMoeda.moeda === "BTC" ? 8 : 2})
        const moeda = input.toLocaleString(primeiraMoeda.local, {style: 'currency', currency: primeiraMoeda.moeda, minimumFractionDigits: primeiraMoeda.moeda === "BTC" ? 8 : 2, maximumFractionDigits: primeiraMoeda.moeda === "BTC" ? 8 : 2})

        valorConvertido.textContent = moedaConvertida;
        valorParaConverter.textContent = moeda;
        moedaConvertidaImg.src = segundaMoeda.img
        moedaPrincipalConvertidaImg.src = primeiraMoeda.img
        moedaConvertidaNome.textContent = segundaMoeda.nome
        moedaPrincipalConvertidaNome.textContent = primeiraMoeda.nome

}

convertButton.addEventListener("click", convertValor);
