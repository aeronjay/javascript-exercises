const palindromes = function (text) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz0123456789';

    let removedPunc = text.toLowerCase().split("").filter((i) => alpha.includes(i)).join("");

    let reversed = removedPunc.split("").reverse().join("");
    return removedPunc === reversed;
};

// Do not edit below this line
module.exports = palindromes;
