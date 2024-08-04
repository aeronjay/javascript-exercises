const repeatString = function(text, repeatCount) {
    if(repeatCount < 0) return "ERROR";
    
    let repeatedText = "";
    for(let i = 0; i < repeatCount; i++){
        repeatedText += text;
    }
    return repeatedText;
};

// Do not edit below this line
module.exports = repeatString;
