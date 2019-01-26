function taxCalculator(gross) {
    let agi = gross.income - 12000;
    let taxes;

    if(agi < 0) {
        return 0;
    }

    if(agi < 9526) {
        taxes = agi * .1
    }
    else if(agi < 38701) {
        taxes = 952.5 + ((agi - 9525) * .12)
    }
    else if(agi < 82501) {
        taxes = 4453.5 + ((agi - 38700) * .22)
    }
    else if(agi < 157501) {
        taxes = 14089.5 + ((agi - 82500) * .24)
    }
    else if(agi < 200001) {
        taxes = 32089.5 + ((agi - 157500) * .32)
    }
    else if(agi < 300001) {
        taxes = 45689.5 + ((agi - 200000) * .35)
    }
    else {
        taxes = 80689.5 + ((agi - 300000) * .37)
    }
    
    return taxes.toFixed(2);
}

module.exports = {
    taxCalculator
}