console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
console.log( 'example array:' );
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);
console.log( '');

// 1.a. TODO: Make an array with some favorite foods
console.log( '1.a - answer:(doesn;t show in console until 1.b)' );
let favFoods = [ 'pizza', 'burger', 'puppy-chow', 'donut', 'chicken']


// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above
console.log( '1.b answer:' );
console.log( favFoods );

// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');
// Example: How many animals are in the array? 
console.log('example: Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array
console.log( 'number of my favorite foods in my array is', favFoods.length ); // console.logs but doesn't convert length to a string.
    //but it does add a space inbetween, which is what i wanted
console.log( 'number of my favorite foods in my array is ' + (favFoods.length) ); 
console.log( 'number of my favorite foods in my array is ' + favFoods.length ); //doesn't add a space where i want
//tested different ways to concatenate a string and value into one string, while also adding a space.


// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array 

console.log( 'The SECOND animal in the array is', animalArray[1] );// not sure why this converted the index number to string, but in questions 2 line 28 it didn't
//should console.log "cat"

// 3.b. TODO: Log the last animal in the array using it's array index 
console.log( '3.a answer:' );
console.log( animalArray[3]); //technically works, but not best way to do this at all.

// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item
console.log( animalArray.slice(-1) ); //better way to go to the end. number of items in array(4) minus 1 --
//so 4-1 = 3, console.logs the index #3 of teh array. which is the last in the array. confusing but works.
console.log( 'The last animal in the array is', animalArray.slice(-1) ); //doesn't convert to string
console.log( 'The last animal in the array is ' + animalArray.slice(-1) ); //DOES convert to string, but need to tyoe space in between
//making note that "slice" does not change the array. some comnnands console.log but also CHANGE the arrays. Making note of the difference
console.log( animalArray ); //just testing to make sure my comman didn;t change array




// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array



// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array


// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array


// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array

// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.

// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.

// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.

// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']