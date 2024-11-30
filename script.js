const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyOptions = document.querySelector(".currency-options")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")   // Valor a ser convertido
    const currencyValueConverted = document.querySelector(".currency-value") // Valor convertido 

    const dolarToday = 5.8
    const euroToday = 6.2
    const libraToday = 7.4
    const pargentinoToday = 0.0057

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-Uk", {
            style: "currency",
            currency: "GPB"
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelect.value == "peso-argentino") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue / pargentinoToday)
    }
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyToName = document.getElementById("currency-to-name")
    const currencyFromName = document.getElementById("currency-from-name")
    const currencyFromImage = document.querySelector(".currency-from-img")
    const currencyToImage = document.querySelector(".currency-to-img")

    if (currencyOptions.value == "real") {
        currencyFromName.innerHTML = "R$ Real Brasileiro"
        currencyFromImage.src = "/assets/real.png"
    }

    if (currencyOptions.value == "dolar") {
        currencyFromName.innerHTML = "Dólar americano"
        currencyFromImage.src = "/assets/dolar.png"
    }

    if (currencyOptions.value == "euro") {
        currencyFromName.innerHTML = "Euro"
        currencyFromImage.src = "/assets/euro.png"
    }

    if (currencyOptions.value == "libra") {
        currencyFromName.innerHTML = "£ Libra"
        currencyFromImage.src = "/assets/libra.png"
    }

    if (currencyOptions.value == "peso-argentino") {
        currencyFromName.innerHTML = "$ Peso Argentino"
        currencyFromImage.src = "/assets/pesoArgentino.png"
    }

    if (currencySelect.value == "dolar") {
        currencyToName.innerHTML = "Dólar americano"
        currencyToImage.src = "/assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyToName.innerHTML = "Euro"
        currencyToImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyToName.innerHTML = "£ Libra"
        currencyToImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "peso-argentino") {
        currencyToName.innerHTML = "$ Peso Argentino"
        currencyToImage.src = "./assets/pesoArgentino.png"
    }

}

currencyOptions.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
