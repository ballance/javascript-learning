'use strict';

var b = 'asdf';

function foo() {
    b = 'jkl'; // This will reassign b from global scope
    c = 'wasd'; // This should cause an exception in strict mode. 
}

foo();

console.log(b);