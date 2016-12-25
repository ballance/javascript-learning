function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return // The compiler will subtly insert a semicolon here and return undefined.  Careful!
  {
      bar: "hello"
  };
}

console.log(foo1());
console.log('...');
console.log(foo2());