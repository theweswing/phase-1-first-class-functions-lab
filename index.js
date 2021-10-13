// Code your solution in this file!
const returnFirstTwoDrivers = (function(array){
return [array[0],array[1]]
})

const returnLastTwoDrivers = (function(array){
    return array.slice(-2)
    })

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return (function(fare){
        return multiplier*fare})
    }

function fareDoubler(fare){
    return(createFareMultiplier(2))(fare)}

function fareTripler(fare){
    return(createFareMultiplier(3))(fare)}

function selectDifferentDrivers(array,returnFirstTwoDrivers){
    return returnFirstTwoDrivers(array)
}