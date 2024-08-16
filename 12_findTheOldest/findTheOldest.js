const findTheOldest = function(people) {
    people.forEach(element => {
        if(element.yearOfDeath === undefined){
            element.yearOfDeath = 2024;
        }
        element.age = element.yearOfDeath - element.yearOfBirth;
    });
    let oldest = people[0];

    people.forEach((person, index) => {
        if(index >= 1){
            if(person.age > oldest.age){
                oldest = person;
            }
        }
    })
    return oldest;
    
};

// Do not edit below this line
module.exports = findTheOldest;
