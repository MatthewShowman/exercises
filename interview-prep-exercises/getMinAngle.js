function getMinAngle (hour, min) {

    if(hour === 12) {
        hour = 0;
    }

    let minPos = (min / 5) * 60
    let hourPos = (hour * 60) + min;
    
    let minDiff = Math.abs(minPos - hourPos);

    if(minDiff > 360) {
        minDiff = 720 - minDiff;
    }

    let minAngle = minDiff / 2;

    return console.log(`minimum angle: ${minAngle} degrees`)
}

getMinAngle(12, 00);
getMinAngle(3, 00);
getMinAngle(9, 00);
getMinAngle(6, 00);
getMinAngle(6, 30);
getMinAngle(9, 15);
getMinAngle(12, 45);

