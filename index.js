// Code your solution in this file!
// function returnFirstTwoDrivers(arr) {
//     return [arr[0], arr[1]];
// }
// function returnLastTwoDrivers(arr) {
//     return [arr[arr.length-2], arr[arr.length-1]];
// }
// function selectingDrivers(arr) {
//     return [returnFirstTwoDrivers(arr), returnLastTwoDrivers(arr)];
// }

const returnFirstTwoDrivers = function(arr) {
    return [arr[0], arr[1]];
}
const returnLastTwoDrivers = function(arr) {
    return [arr[arr.length-2], arr[arr.length-1]];
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(mainValue) {
    return function(value){
        return value * mainValue;
    }
}

const fareDoubler = (x) => x * 2;
const fareTripler = (x) => x * 3;

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers);
}