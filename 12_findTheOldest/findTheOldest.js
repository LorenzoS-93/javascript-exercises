const findTheOldest = function(array) {
    let oldest, age;
    let max = 0;
    for(const person of array){
        if(!person.yearOfDeath){
            let death = new Date().getFullYear();
            age = death - person.yearOfBirth;
        }
        else 
            age = person.yearOfDeath - person.yearOfBirth;
        if(max < age){
            max = age;
            oldest = person;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
