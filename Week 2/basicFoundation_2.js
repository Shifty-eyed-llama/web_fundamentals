//1
function biggie(arr) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = 'Big';
        }
    }

    return arr
};

console.log(biggie([-1,3,5,-5]))

2
function printLowReturnHigh(arr) {

    var low = arr[0];
    var high = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > high) {
            high = arr[i];
        }
        if (arr[i] < low) {
            low = arr[i]
        }
    }

    console.log(low);
    return high
}
console.log(printLowReturnHigh([1,2,3,4,5]))

//3
function printOnereturnOne(arr) {

    var oddArr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0){
            oddArr.push(arr[i])
        }
    }

    console.log(arr[arr.length - 2]);
    return oddArr[0];
}

console.log(printOnereturnOne([1,2,3,4,5]))

//4
function doubleVision(arr) {

    var dblArr = [];
    for(var i = 0; i < arr.length; i++) {
        dblArr.push(arr[i] + arr[i])
    }

    return dblArr
}

console.log(doubleVision([1,2,3,4]))

//5
function countPos(arr) {

    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++
        }
    }

    arr[arr.length - 1] = count;
    return arr
}

console.log(countPos([-1,1,1,1]))

//6
function evensAndOdds(arr) {

    var even = 0;
    var odd = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even++;
            odd = 0;
        } else {
            odd++;
            even = 0;
        }
        if (even == 3) {
            console.log("Even more so!");
        } else if (odd == 3) {
            console.log("That's odd!")
        }
    }
}

console.log(evensAndOdds([1,1,1,2,3,4,6,6,6]))

//7
function incSeconds(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
    if(i % 2 !== 0) {
      arr[i] = arr[i] + 1;
    }
    
  }

  return arr
}

console.log(incSeconds([1,2,3,4,5]))

//8
function prevLength(arr) {

    for (var i = arr.length - 1; i >= 0; i--) {
      if(i == 0){
        return arr
      }
        arr[i] = arr[i - 1].length
    }

    // return arr
}

console.log(prevLength(['hello','dojo','awesome']))

var arr = ['hello','dojo','awesome']
console.log(arr[arr.length - 1].length)

//9
function add7(arr) {

    var sevenPlus = [];
    for (var i = 0; i < arr.length; i++) {
        sevenPlus.push(arr[i] + 7)
    }

    return sevenPlus
}

console.log(add7([1,2,3,4,5]))

//10
function revArr(arr) {

    for (var i = 0; i < arr.length/2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }

    return arr
}

console.log(revArr([1,2,3,4,5]))

//11
function negative(arr) {

    var negArr = [];
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            negArr.push(arr[i] * -1)
        }
        else {
            negArr.push(arr[i])
        }
    }

    return negArr
}

console.log(negative([1,2,-3,4,-5]))

//12
function hungry(arr) {

    var food = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'food') {
            console.log('yummy');
            food++
        }
    }
    if (food == 0) {
        console.log("I'm Hungry")
    }
}

console.log(hungry(['hello', 'trouble', 'googly', 'flabbajabba']))
console.log(hungry(['hello', 'trouble', 'food', 'food']))

//13
function towardCenter(arr) {
    for (var i = 0; i < arr.length/2; i += 2) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }

    return arr
}

console.log(towardCenter([1,2,3,4,5,6]))

//14
function scale(arr, num) {

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num
    }

    return arr
}

console.log(scale([1,2,3], 3))