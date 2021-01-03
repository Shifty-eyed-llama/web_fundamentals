function sigma(num) {
    var total = 0;

    for(var i = 0; i <= num; i++) {
        total += i
    }

    return total
}

function factorial(num){
    var total = 1;

    for(var i = 0; i <= num; i++){
        total *= i
    }

    return total
}

function fib(num){
    var prevNum = 0
    var currentNum = 1
    var nextNum 
    if(num == 0) return 0
    if(num == 1) return 1
    for (var i = 1; i < num; i++){
      nextNum = prevNum + currentNum
      prevNum = currentNum
      currentNum = nextNum
    }
    
    console.log(nextNum)
  }

  function recFib(x){
    if (x === 1) {
        return 1;
    }

    if (x === 0) {
        return 0;
    }

    return recFib(x-1) + recFib(x-2);
    
}

function sndToLast(arr) {
    var snd = arr[arr.length - 2]
    if(snd < 0){
        return null
    }
    return snd
}

function nToLast(arr, num){
    var nToLst = arr[arr.length - n];
    if(nToLst < 0){
        return null
    }

    return nToLst
}

function sndLgst(arr) {
    var max = arr[0];
    var secondMax = max

    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            secondMax = max
             max = arr[i];
            
        }
    }

    return secondMax
}


function doubleTrouble(arr){

    for(var i = 0; i < arr.length; i+=2){
        arr.splice(i, arr[i])
    }

    return arr
}