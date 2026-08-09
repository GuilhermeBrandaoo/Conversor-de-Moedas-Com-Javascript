// Conversor de moedas.
 
 // Busca cotações atualizadas em reais (BRL) na AwesomeAPI, converte o valor
 // informado entre as moedas selecionadas e atualiza a interface.


// Elementos usados para iniciar a conversão e escolher as moedas.
const convertButton = document.querySelector("button"); // Botão de converter
const moedasSelect = document.querySelector(".currency-to-convert"); // Select da moeda destino
const moedasSelectPrincipal = document.querySelector(".main-currency"); // Select da moeda de origem


// Busca as cotações, valida a entrada, realiza a conversão e exibe o resultado.

// Como a API informa as cotações em relação ao real, o cálculo utilizado é:
// valor digitado × cotação da origem ÷ cotação do destino.

const convertValor = async () => {

    // Valor informado e elementos que receberão o resultado.
    const inputConverter = document.querySelector("#entered-currency-value").value; 
    const valorConvertido = document.querySelector(".converted-value");
    const valorParaConverter = document.querySelector(".value-to-convert");
    const moedaConvertidaNome = document.querySelector("#converted-currency-name");
    const moedaConvertidaImg = document.querySelector(".imgMoedaConvertida");
    const moedaPrincipalConvertidaNome = document.querySelector(".name-of-the-main-currency-to-convert");
    const moedaPrincipalConvertidaImg = document.querySelector(".main-coin-image");

    // Objeto JSON com as cotações retornadas pela API.
    let data

    try {
        // Solicita as cotações de euro, dólar, libra e bitcoin em reais.
        const response = await fetch ("https://economia.awesomeapi.com.br/json/last/EUR-BRL,USD-BRL,GBP-BRL,BTC-BRL")
        
        // Erros HTTP precisam ser verificados porque não rejeitam o fetch.
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`)
        }
        
        // Converte o corpo da resposta em um objeto JavaScript.
        data = await response.json()

    } catch (err) {
        // Interrompe a conversão quando não há cotações disponíveis.
        console.log(err)
        alert("Não foi possível buscar as cotações")
        return
    }

    
    // Catálogo das moedas disponíveis:
    // name identifica a opção do select; nome é o texto exibido; valor é a
    // cotação em BRL; moeda e local controlam a formatação; img é o ícone.
    
    const moedas = [
    {
        name: "euro",
        nome: "Euro",
        valor: Number(data.EURBRL.bid),
        moeda: "EUR",
        local: "de-DE",
        img: "./assets/euro.png"
    },
    {
        name: "dolar",
        nome: "Dólar",
        valor: Number(data.USDBRL.bid),
        moeda: "USD",
        local: "en-US",
        img: "./assets/dolar.png"
    },
    {
        name: "libra",
        nome: "Libra",
        valor: Number(data.GBPBRL.bid),
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
        valor: Number(data.BTCBRL.bid),
        moeda: "BTC",
        local: "pt-BR",
        img: "./assets/bitcoin.png"
    }
    ]

    // Localiza as moedas de origem e destino selecionadas pelo usuário.
    const primeiraMoeda = moedas.find(item => (
       item.name === moedasSelectPrincipal.value
        
    ))

    const segundaMoeda = moedas.find(item => (
        item.name === moedasSelect.value
    ))

        // Normaliza números no padrão brasileiro, como "1.234,56".
        const input = Number(
            inputConverter
            .replace(/\./g, "")
            .replace(",", ".")
        )

        // Aceita somente números finitos e maiores que zero.
        if (!Number.isFinite(input) || input <= 0) {
            alert("Digite um número válido")
            return
        }

        // Converte usando o real como base comum entre as duas moedas.
        const valor = input * primeiraMoeda.valor / segundaMoeda.valor
        // Formata moedas comuns com 2 casas e bitcoin com 8 casas decimais.
        const moedaConvertida = valor.toLocaleString(segundaMoeda.local, {style: 'currency', currency: segundaMoeda.moeda, minimumFractionDigits: segundaMoeda.moeda === "BTC" ? 8 : 2, maximumFractionDigits: segundaMoeda.moeda === "BTC" ? 8 : 2})
        const moeda = input.toLocaleString(primeiraMoeda.local, {style: 'currency', currency: primeiraMoeda.moeda, minimumFractionDigits: primeiraMoeda.moeda === "BTC" ? 8 : 2, maximumFractionDigits: primeiraMoeda.moeda === "BTC" ? 8 : 2})

        // Atualiza valores, imagens e nomes apresentados na interface.
        valorConvertido.textContent = moedaConvertida;
        valorParaConverter.textContent = moeda;
        moedaConvertidaImg.src = segundaMoeda.img
        moedaPrincipalConvertidaImg.src = primeiraMoeda.img
        moedaConvertidaNome.textContent = segundaMoeda.nome
        moedaPrincipalConvertidaNome.textContent = primeiraMoeda.nome

}

// Inicia uma conversão quando o botão é clicado.
convertButton.addEventListener("click", convertValor);
