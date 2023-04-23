// Code your solution here

function findMatching(array, driverName) {
    return array.filter(item => item.toLowerCase() === driverName.toLowerCase());
}

function fuzzyMatch(array, driverName) {
    return array.filter(item => item.substring(0,1) === driverName.substring(0,1));
}

function matchName(array, name) {
    return array.filter(item => item.name === name);
}

/*
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
console.log(findMatching(drivers, 'Bobby'));
console.log(fuzzyMatch(drivers, 'Sa'));

const drivers = [ { name: 'Bobby', hometown: 'Pittsburgh' }, { name: 'Sammy', hometown: 'New York' } , { name: 'Sally', hometown: 'Cleveland' }, { name: 'Annette', hometown: 'Los Angeles' }, { name: 'Bobby', hometown: 'Tampa Bay' } ];
console.log(matchName(drivers, 'Bobby'));
*/
