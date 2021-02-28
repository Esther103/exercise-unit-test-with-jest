// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the doller value
    return valueInDollar;
}

// we declare the function with the exact name "fromDollarToYen"
const fromYenToDollar = function(valueInYen){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInYen * 127.9;
    //return the doller value
    return valueInDollar;
}

// we declare the function with the exact name "fromYenToPound"
const fromYenToPound = function(valuePound){
    // convert the given valueInEuro to dollars
    let valueInDollar = valuePound * 0.8;
    //return the doller value
    return valueInDollar;
}



// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}





// we include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar, fromYenToPound,fromYenToPound }
