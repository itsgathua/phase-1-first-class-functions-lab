// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2);
}
console.log(returnFirstTwoDrivers(drivers))

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function(fare){
        return (fare * multiplier)
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, driverSelectorFunction) {
    return driverSelectorFunction(drivers);
}

const firstTwoDrivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers)
const lastTwoDrivers = selectDifferentDrivers(drivers, returnLastTwoDrivers)

