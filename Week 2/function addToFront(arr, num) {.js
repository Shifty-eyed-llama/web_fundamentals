function addToFront(arr, num) {
    arr.push(num);
    for (var i = arr.length - 1; i > 0; i--) {
        var temp = arr[i -1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

console.log(addToFront([1,2,3,4,5], 9));

function removeFromFront(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
    }
    arr.pop();
    return arr;
}

console.log(removeFromFront([1,2,3,4,5]));