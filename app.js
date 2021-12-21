
const sum = (a,b)=>{
    return a+b
}
console.log(sum(7,3))


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (valueInDollar) => {
    let valueInYen = valueInDollar * 127.9 / 1.2; 
    return valueInYen
}   
const fromEuroToDollar = (valueInEuro) => {
    let valueInDollar = valueInEuro * 1.2; 
    return valueInDollar
} 
const fromYenToPound = (valueinYen) => {
    let valueInPound = valueinYen * 0.8 / 127.9;
    return valueInPound 
} 

module.exports={
    sum,
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound   
};