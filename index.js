// Code your solution in this file!
const HQ = 42

function distanceFromHqInBlocks(employeeBlock){
    if (`${employeeBlock}` > HQ){return `${employeeBlock}`-HQ}
    else {return HQ - `${employeeBlock}`}
}

function distanceFromHqInFeet(employeeBlock){
    if (`${employeeBlock}` > HQ){return ((`${employeeBlock}`-HQ) * 264)}
    else {return ((HQ - `${employeeBlock}`) * 264)} 
}

function distanceTravelledInFeet(startBlock, destinationBlock){
    let rawNumber = (Number.parseFloat(destinationBlock) - Number.parseFloat(startBlock))
    if (rawNumber < 0) {return rawNumber * -264}
    else {return rawNumber * 264}
}

function calculatesFarePrice(start, destination){
    const fareDistance = (distanceTravelledInFeet(start, destination))
    const fee = 0.02
    if (fareDistance > 2500) {return "cannot travel that far";}
    else if (fareDistance > 2000) {return 25}
    else if (fareDistance > 400) {return (fareDistance - 400) * fee;}
    else return 0;
     }