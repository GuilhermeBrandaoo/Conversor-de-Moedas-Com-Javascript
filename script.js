// Seleciona elementos principais da interface
const convertButton = document.querySelector("button"); // Botão de converter
const moedasSelect = document.querySelector(".currency-to-convert"); // Select da moeda destino
const moedasSelectPrincipal = document.querySelector(".main-currency"); // Select da moeda de origem
const moedasSelectConverter = document.querySelector(".moedasSelectParaConverter"); // (Não usado diretamente aqui)


// ================================
// FUNÇÃO PRINCIPAL DE CONVERSÃO
// ================================
function convertValor() {

    // Seleciona valores e elementos onde o resultado será exibido
    const inputConverter = document.querySelector("#entered-currency-value").value; 
    const valorConvertido = document.querySelector(".converted-value");
    const valorParaConverter = document.querySelector(".value-to-convert");

    // Verifica se a moeda de origem e destino são iguais
    if (moedasSelect.value == moedasSelectPrincipal.value) {
        alert("ERRO");
    }

    // ------------------------------
    // CONVERSÕES ENTRE EURO ↔ DÓLAR
    // ------------------------------

    // De EURO → DÓLAR
    if (moedasSelectPrincipal.value == "euro" && moedasSelect.value == "dolar") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputConverter * 1.16);
    }

    // De DÓLAR → EURO
    if (moedasSelectPrincipal.value == "dolar" && moedasSelect.value == "euro") {
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputConverter * 0.87);
    }

    // ------------------------------
    // CONVERSÕES ENTRE EURO/DÓLAR → REAL
    // ------------------------------

    // De EURO → REAL
    if (moedasSelectPrincipal.value == "euro" && moedasSelect.value == "real") {
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputConverter * 6.11);
    }

    // De DÓLAR → REAL
    if (moedasSelectPrincipal.value == "dolar" && moedasSelect.value == "real") {
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputConverter * 5.29);
    }

    // ------------------------------
    // CONVERSÕES DE REAL PARA DÓLAR/EURO
    // ------------------------------

    // De REAL → DÓLAR
    if (moedasSelectPrincipal.value == "real" && moedasSelect.value == "dolar") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputConverter * 0.19);
    }

    // De REAL → EURO
    if (moedasSelectPrincipal.value == "real" && moedasSelect.value == "euro") {
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputConverter * 0.16);
    }

    // ------------------------------
    // FORMATAÇÃO DA MOEDA PRINCIPAL
    // ------------------------------

    // Exibe valor digitado formatado na moeda principal
    if (moedasSelectPrincipal.value == "dolar") {
        valorParaConverter.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputConverter);
    }

    if (moedasSelectPrincipal.value == "euro") {
        valorParaConverter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputConverter);
    }

    if (moedasSelectPrincipal.value == "libra") {
        valorParaConverter.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputConverter);
    }

    // Formatação do Bitcoin como número (sem style: "currency")
    if (moedasSelectPrincipal.value == "bitcoin") {
        valorParaConverter.innerHTML = new Intl.NumberFormat("de-DE", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputConverter) + " BTC";
    }

    if (moedasSelectPrincipal.value == "real") {
        valorParaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputConverter);
    }

    // ------------------------------
    // CONVERSÕES ENVOLVENDO LIBRA
    // ------------------------------

    // LIBRA → EURO
    if (moedasSelectPrincipal.value == "libra" && moedasSelect.value == "euro") {
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputConverter * 1.13);
    }

    // LIBRA → DÓLAR
    if (moedasSelectPrincipal.value == "libra" && moedasSelect.value == "dolar") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputConverter * 1.32);
    }

    // LIBRA → REAL
    if (moedasSelectPrincipal.value == "libra" && moedasSelect.value == "real") {
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputConverter * 6.97);
    }

    // EURO → LIBRA
    if (moedasSelectPrincipal.value == "euro" && moedasSelect.value == "libra") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputConverter * 0.88);
    }

    // DÓLAR → LIBRA
    if (moedasSelectPrincipal.value == "dolar" && moedasSelect.value == "libra") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputConverter * 0.76);
    }

    // REAL → LIBRA
    if (moedasSelectPrincipal.value == "real" && moedasSelect.value == "libra") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputConverter * 0.14);
    }

    // ------------------------------
    // CONVERSÕES DE BITCOIN → OUTRAS MOEDAS
    // ------------------------------

    if (moedasSelectPrincipal.value == "bitcoin" && moedasSelect.value == "real") {
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputConverter * 508.281);
    }

    if (moedasSelectPrincipal.value == "bitcoin" && moedasSelect.value == "dolar") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputConverter * 94.323);
    }

    if (moedasSelectPrincipal.value == "bitcoin" && moedasSelect.value == "euro") {
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputConverter * 81.106);
    }

    if (moedasSelectPrincipal.value == "bitcoin" && moedasSelect.value == "libra") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputConverter * 71.564);
    }

    // ------------------------------
    // CONVERSÕES DE OUTRAS MOEDAS → BITCOIN
    // ------------------------------

    if (moedasSelectPrincipal.value == "real" && moedasSelect.value == "bitcoin") {
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputConverter * 0.0000020) + " BTC";
    }

    if (moedasSelectPrincipal.value == "dolar" && moedasSelect.value == "bitcoin") {
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputConverter * 0.000011) + " BTC";
    }

    if (moedasSelectPrincipal.value == "euro" && moedasSelect.value == "bitcoin") {
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputConverter * 0.000012) + " BTC";
    }

    if (moedasSelectPrincipal.value == "libra" && moedasSelect.value == "bitcoin") {
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputConverter * 0.000014) + " BTC";
    }
}



// ================================
// ALTERA MOEDA DESTINO (IMAGEM + NOME)
// ================================
function changeMoeda() {
    const moedaConvertidaNome = document.querySelector("#converted-currency-name");
    const moedaConvertidaImg = document.querySelector(".imgMoedaConvertida");

    if (moedasSelect.value == "dolar") {
        moedaConvertidaImg.src = "./assets/dolar.png";
        moedaConvertidaNome.innerHTML = "Dólar americano";
    }

    if (moedasSelect.value == "euro") {
        moedaConvertidaImg.src = "./assets/euro.png";
        moedaConvertidaNome.innerHTML = "Euro";
    }

    if (moedasSelect.value == "real") {
        moedaConvertidaImg.src = "./assets/real.png";
        moedaConvertidaNome.innerHTML = "Real";
    }

    if (moedasSelect.value == "libra") {
        moedaConvertidaImg.src = "./assets/libra.png";
        moedaConvertidaNome.innerHTML = "Libra";
    }

    if (moedasSelect.value == "bitcoin") {
        moedaConvertidaImg.src = "./assets/bitcoin.png";
        moedaConvertidaNome.innerHTML = "Bitcoin";
    }

    convertValor(); // Atualiza resultado ao trocar a moeda destino
}


// ================================
// ALTERA MOEDA PRINCIPAL (IMAGEM + NOME)
// ================================
function changeMoedaPrincipal() {
    const moedaPrincipalConvertidaNome = document.querySelector(".name-of-the-main-currency-to-convert");
    const moedaPrincipalConvertidaImg = document.querySelector(".main-coin-image");

    if (moedasSelectPrincipal.value == "dolar") {
        moedaPrincipalConvertidaImg.src = "./assets/dolar.png";
        moedaPrincipalConvertidaNome.innerHTML = "Dólar americano";
    }

    if (moedasSelectPrincipal.value == "euro") {
        moedaPrincipalConvertidaImg.src = "./assets/euro.png";
        moedaPrincipalConvertidaNome.innerHTML = "Euro";
    }

    if (moedasSelectPrincipal.value == "real") {
        moedaPrincipalConvertidaImg.src = "./assets/real.png";
        moedaPrincipalConvertidaNome.innerHTML = "Real";
    }

    if (moedasSelectPrincipal.value == "libra") {
        moedaPrincipalConvertidaImg.src = "./assets/libra.png";
        moedaPrincipalConvertidaNome.innerHTML = "Libra";
    }

    if (moedasSelectPrincipal.value == "bitcoin") {
        moedaPrincipalConvertidaImg.src = "./assets/bitcoin.png";
        moedaPrincipalConvertidaNome.innerHTML = "Bitcoin";
    }
}


// ================================
// EVENTOS
// ================================
moedasSelect.addEventListener("change", changeMoeda); 
moedasSelectPrincipal.addEventListener("change", changeMoedaPrincipal);
convertButton.addEventListener("click", convertValor);
