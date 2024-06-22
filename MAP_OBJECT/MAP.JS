// maps

// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.


// object can override the old value when we gave as new value

// map using constructor method
const mapName = new Map();
// console.log(mapName); 


// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  console.log(fruits);
  // Map(3) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }
  
  // using the values in the map or add the values
  
  fruits.set("PineApple", 250);
  fruits.set("kiwi", 300)
  console.log(fruits);
  
  // Map(4) {
//   'apples' => 500,
//   'bananas' => 300,
//   'oranges' => 200,
//   'PineApple' => 250,
//   'kiwi'  => 300
// }

// to get the specific value from the map
console.log(fruits.get("apples")) // 500

// to check the sizeof the map
const mapLength = fruits.size();
console.log(mapLength);
  

