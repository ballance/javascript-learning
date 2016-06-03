(function(){
  var a = b = 3;
  c = 5;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

console.log("c defined? " + (typeof c !== 'undefined'));