const fibonacci = function(num) {
    if(num < 0) return "OOPS";
    if(num === 0 || num === "0") return 0;
    let fiboNums = [1,1];
    for(let i = 2; i <= num; i++){
        fiboNums.push(fiboNums[i - 1] + fiboNums[i - 2])
    }
    return fiboNums[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
