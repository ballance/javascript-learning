var i = 25;
 
for(var i = 0;i < 15;i++) {
    console.log(i);
}

console.log('Final value of i is [' + i + ']');

// Only functions and catch block scope.  This for loop does not create block scope, thus the value of i is changed.