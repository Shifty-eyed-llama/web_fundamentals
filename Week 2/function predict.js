function greeting(){
    return "Hello";
    console.log("World");
}
var word = greeting();
console.log(word);

//should return "Hello",
//"World" will not be printed as RETURN will end the function



function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2);

//Summing Numbers!
//num1 is: 3
//num2 is: 5
//8
//Summing Numbers!
//num1 is: 4
//num2 is: 7
//11




function highFive(num){
    for(var i=0; i<num; i++){
        if(i == 5){
            console.log("High Five!");
        }
        else{
            console.log(i);
        }
    }
}

//function is never called, but if it were
//function would count up to num, non inclusive
//would console.log 0 - argument number with 5 being = "High Five!"