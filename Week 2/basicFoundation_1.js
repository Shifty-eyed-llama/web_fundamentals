//1
function 1to255() {

    var num = [];
    for (var i = 1; i <=255; i++) {
        num.push(i)
    }

    return num;
}

//2
function getEven1k() {

    var sumEven = 0;
    for (var i = 0; i <=1000; i += 2) {
        sumEven += i;
    }

    return sumEven;
}

//3
function sumOdd5k() {

    var sumOdd = 0;
    for (var i = 0; i <= 5000; i++) {
        if (i % 2 !== 0) {
            sumOdd += i
        }
    }
    return sumOdd;
}

//4
function returnSumArr(arr) {

    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

//5
function findMax(arr) {

    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }

    return max;
}

//6
function findAverage(arr) {

    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum/arr.length;
}

//7
function arrOdd() {

    var oddArr = [];
    for (var i = 0; i <= 50; i++) {
        if ( i % 2 !== 0) {
            oddArr.push(i)
        }
    }

    return oddArr
}

//8
function greaterThanY(arr, y) {

    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (y > arr[i]) {
        count++;
        }
    }

    return count
}

//9
function squares(arr) {

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }

    return arr
}

//10
function negatives(arr) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }

    return arr;
}

//11
function maxMinAvg(arr) {

    var mma = [];
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i]
    }

    mma.push(max);
    mma.push(min);
    mma.push((sum/arr.length));
    return mma
}

//12
function swapValues(arr) {
    var temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;

    return arr
}

//13
function numToStr(arr) {

    for(var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }
    
    return arr
}