


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}



function euroToDollar(euro){
    
    return 1.21*euro;
}

function dollarToYen(dollar){
    return Math.round(106.575996*dollar);
}

function yenToPound(yen){
    return Math.round(yen * 0.0078);
    
}

console.log(dollarToYen(1));
console.log(yenToPound(3));
console.log(euroToDollar(3))

module.exports = { dollarToYen };
module.exports = { yenToPound };
module.exports={euroToDollar};

