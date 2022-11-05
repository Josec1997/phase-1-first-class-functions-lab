// Code your solution in this file!
// returnFirstTwoDrivers( function() {
//     console.log (['Antonio','Nuru'])
// })

function returnFirstTwoDrivers() {
 return (['Antonia','Nuru'])
}

function returnLastTwoDrivers() {
    return (['Amari', 'Mo'])
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare){
    return function (fare1){
        return fare * fare1
    }
}

function fareDoubler(fare) {
    return fare * 2
}

function fareTripler(fare) {
    return fare * 3
}

function selectDifferentDrivers(parameter1,parameter2){
    return parameter2(parameter1)
}