convertToRoman = (num) => {
    let numberValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanValue = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let romanized = "";

    for (let index = 0; index < numberValue.length; index++) {
        while (numberValue[index] <= num) {
            romanized += romanValue[index];
            num -= numberValue[index];
        }
    }
    return romanized;
};

/*
convertToRoman2 = (num) => {
    let numberValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanValue = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    const values = {
        1000 : "M",
        900 : "CM",
        500 : "D",
        400 : "CD",
        100 : "C",
        90 : "XC",
        50 : "L",
        40 : "XL",
        10 : "X",
        9 : "IX",
        5 : "V",
        4 : "IV",
        1 : "I"
    }

    let romanized = "";

    for (let index = 0; index < numberValue.length; index++) {
        while (numberValue[index] <= num) {
            romanized += romanValue[index];
            num -= numberValue[index];
        }
    }
    return romanized;
};
*/

convertToNumber = (string) => {
    const values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let number = 0
    
    for (let index = 0; index < string.length; index++) {
        const cur = values[string[index]];
        const next = values[string[index + 1]];

        if (cur < next) {
            number += next - cur // IV -> 5 - 1 = 4
            index++
        } else {
            number += cur
        }
    }
    return number;
}