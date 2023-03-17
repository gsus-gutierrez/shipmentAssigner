//Determine singular suitability score
const determineSuitabilityScore = (streetName, driverName) => {
    let SS = 0;
    const driverNameLowerCaseNoSpaces = driverName.toLowerCase().replace(/[^a-zA-Z]/g, '');
    const streetNameLowerCaseNoSpaces = streetName.toLowerCase().replace(/[^a-zA-Z]/g, '');
    let streetNameLength = streetNameLowerCaseNoSpaces.length;
    let driverNameLength = driverNameLowerCaseNoSpaces.length;

    if (isEven(streetNameLength)) {
        for (let i = 0, j = driverNameLength; i < j; i++) {
            let letter = driverNameLowerCaseNoSpaces[i];
            if (isVowel(letter))
                SS += 1.5;
        }
    } else {
        for (let i = 0, j = driverNameLength; i < j; i++) {
            let letter = driverNameLowerCaseNoSpaces[i];
            if (!isVowel(letter))
                SS += 1;
        }
    }
    if (hasCommonFactor(streetNameLength, driverNameLength))
        SS *= 1.5;
    return SS;

};
const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
const isEven = (stringLength) => {
    return stringLength % 2 === 0;
};
const isVowel = (letter) => {
    return vowels.has(letter);
};
//Determine whether the driver name length has a common factor with the st name length
const hasCommonFactor = (a, b) => {
    if (a > b) {
        for (let i = 2; i < b; i++) {
            if (b % i === 0 && a % i === 0) {
                return true;
            }
        }
    } else {
        for (let i = 2; i < a; i++) {
            if (b % i === 0 && a % i === 0) {
                return true;
            }
        }
    }
    return false;
};


module.exports = { isEven, isVowel, hasCommonFactor, determineSuitabilityScore }
