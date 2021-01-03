//1
function print1to255() {
    for (var i = 1; i <= 255; i++) {
        console.log(i)
    }
}

//2
function printOdds1to255() {
    for (var i = 0, i <= 255; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }
}

//3
function printIntsAndSum0to255() {
    var sum = 0;
    for (var i = 0; i <= 255; i++) {
        console.log(i);
        sum += i;
        console.log(sum)
    }
}

//4
function printArrayVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

//5
function printMaxOfArray(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    console.log(max);
}

//6
function printAverageOfArray(arr) {
    var sum = 0;
    for ( var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    var avg = sum/arr.length;
}

//7
function returnOddsArr1to255() {
    var odds = [];
    for (var i = 1; i <= 255; i++) {
        if (i % 2 !== 0) {
            odds.push(i)
        }
    }
    console.log(odds)
}

//8
function squareArrayVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    console.log(arr)
}

//9
function returnArrayCountGreaterTanY(arr, y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++
        }
    }
    console.log(count)
}

//10
function zeroOutArrayNegativeVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]< 0) {
            arr[i] = 0;
        }
    }
    return arr
}

//11
function printMaxMinAverageArrayVals(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            arr[i] = max;
        }
        if (arr[i] < min) {
            arr[i] = min;
        }
        sum += arr[i];
    }

    var avg = sum/arr.length;
    console.log(max);
    console.log(min);
    console.log(arr);
}

//12
function shiftArrayValsLeft(arr) {
    arr.shift();
    arr.push(0);
}