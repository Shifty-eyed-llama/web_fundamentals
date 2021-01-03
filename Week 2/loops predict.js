for(var num = 0; num < 15; num++){
    console.log(num);
}

//would print 0-14 to console


for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}

// would print 3, 9 to console



for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}

// would print 1, 4, 5, 8, 10, 11, 14, 16