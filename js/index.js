function enter() {
    
}


function cToF(tempC) {
    tempC = tempC * (9/5) + 32;
    return tempC;
}

function fToC(tempF) {
    tempF = (tempF - 32) * (5/9);
    return tempF;
}

// function cToF(tempC) {
//     if (tempC!=NaN) {
//     tempC = tempC * (9/5) + 32;
//     return tempC;
//     } else {
//         console.log('I have no idea what kind of temperature you\'re measuring, bud.');
//     }
// }

// function fToC(tempF) {
//     if (tempF!=NaN) {
//     tempF = (tempF - 32) * (5/9);
//     return tempF;
//     } else {
//         console.log('I have no idea what kind of temperature you\'re measuring, bud.');
//     }
// }