function binarySearch(arr, target){
    var start = 0;
    var end = arr.length - 1;
    if (arr[start] > target || arr[end] < target) {
      return false;
    }
    while (start <= end) {
      var mid = Math.floor((end + start) / 2);
      if (arr[mid] === target) {
        return true;
      } else if (target > arr[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return false;
  }
  // [1,2,3,4,5,6],5 => TRUE
  // [1,2,3,4,5,6],9 => FALSE

  // MONDAY SOLUTIONS

function reverserArr(arr){
    var newArr = []
    for(var i = arr.length-1; i >=0 ;i--){
        newArr.push(arr[i])
    }
    return newArr
}
function revArr(arr){
    for(var i = 0; i < Math.floor((arr.length)/2);i++){
        var temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
    return arr
}

// TUESDAY SOLUTIONS
function pushFront(arr,num){
    arr.push(0)
    for(var i =arr.length-1;i > 0;i--){
        arr[i] = arr[i-1]
    }
    arr[0] = num
    console.log(arr)
}

function popFront(arr){
    for(var i =0; i < arr.length; i++){
        arr[i] = arr[i+1]
    }
    arr.pop()
    console.log(arr)
}

// pushFront([1,2,3,4,5] , 9)
// popFront([1,2,3,4,5])

function twoNumSum(arr){
    var newArr = []
    for(var i = 0; i < arr.length;i++){
        for(var j = 0; j < arr.length; j++){
            newArr.push(arr[i] + arr[j])
        }
    }
    return newArr
}


function binarySearch(arr, target){
    var leftIndex = 0
    var rightIndex = arr.length-1
    while(leftIndex <= rightIndex){
        var midIndex = Math.floor((rightIndex + leftIndex) / 2)
        if(target == arr[midIndex]){
            console.log("FOUND IT")
            return true
        }
        if(target < arr[midIndex]){
            rightIndex = midIndex - 1
        }
        else{
            leftIndex = midIndex + 1
        }
    }
    console.log("NOT FOUND")
    return false
}
binarySearch([1,2,3,4,5,6,7,8,9,10], 11)