var foo;
foo = "xyz";

function bar()
{
    foo = "abc";
    
    console.log('1');
    console.log(foo);
    console.log('2');
    var foo;
}
bar();
console.log(foo);
console.log('3');