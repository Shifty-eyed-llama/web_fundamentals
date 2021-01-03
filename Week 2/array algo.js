var testArr = [6,3,5,1,2,4];

function printValAndSum(arr) {

    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += i;
        console.log('Num ' + arr[i] + ', Sum ' + sum)
    }

}

printValAndSum(testArr)

function ValXPosition(arr) {

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * i;
    }

    return arr
}

console.log(ValXPosition(testArr));