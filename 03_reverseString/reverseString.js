const reverseString = function(text) {
    let textLen = text.length;
    let reversedText = ""
    for(let i = textLen - 1; i >= 0; --i){
        reversedText += text[i];
    }
    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
