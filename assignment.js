/* feetToMile */

function feetToMile(feet) {
    var mile = feet / 5280;

    if (feet < 0) {
        return "Distance cannot be negative!";
    } else {
        return mile;
    }
}





/* woodCalculator */

function woodCalculator(chair, table, bed) {
    var woodForChair = chair * 1;
    var woodForTable = table * 3;
    var woodForBed = bed * 5;

    var totalWood = woodForChair + woodForTable + woodForBed;
    return totalWood;
}





/* brickCalculator */

function brickCalculator(floor) {
    if (floor < 0) {
        return "You seriously want to dig up a tunnel?";
    } if (floor <= 10) {
        return floor * 15 * 1000;
    } if (floor <= 20) {
        return (10 * 15 * 1000) + (floor * 12 * 1000);
    } else {
        return (10 * 15 * 1000) + (20 * 12 * 1000) + (floor * 10 * 1000);
    }
}





/* tinyFriend */

function tinyFriend(names) {
    var tinyName = names[0];

    for (var i = 0; i < names.length; i++) {
        var currentName = names[i];
        if (currentName.length < tinyName.length) {
            tinyName = currentName;
        }
    }
    return tinyName;
}