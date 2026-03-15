// Array of names to iterate over
var names = ["Yaakov", "John", "Jen", "Jason", "Lauren", "Larry", "Jim", "Julie", "Andrea", "Jeff"];

// Loop over the names array
for (var i = 0; i < names.length; i++) {
  var name = names[i];

  // If name starts with 'j' or 'J', say goodbye; otherwise say hello
  if (name.toLowerCase().charAt(0) === "j") {
    $goodbye().sayGoodBye(name);
  } else {
    $hello().sayHello(name);
  }
}
