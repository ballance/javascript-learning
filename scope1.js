var foo;
foo = "xyz";

console.log('0');

function bar()
{
    var foo = "abc";
    
    console.log('1');
    console.log(foo);
    console.log('2');
    var foo;
}
bar();
console.log(foo);
console.log('3');

// The block scope of bar does not affect the 