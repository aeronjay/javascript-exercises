const removeFromArray = function(array, ...items) {
    let newArr = [];
    array.forEach((i) => {
        if(!(items.includes(i))){
            newArr.push(i);
        }
    });
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
