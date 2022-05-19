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
console.log( '4.a answer:' );
console.log( favFoods.push( 'cotton-candy' ) ); //adds and then console.logs the index number of the new item ad the end
console.log( 'My new lsit of favorite foods is now:', favFoods ); //keeps values and console.logs
console.log( 'My new lsit of favorite foods is now:' + favFoods ); //converts to string and console.logs, doesn;t add spaces
// let addedFavFood = favFoods.push( 'PINK cotton-candy' );
// console.log( 'added 1 more food to end to test ".pop" as a variable', addedFavFood ); //this didn't work, only logs index number

// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array

//i see FOUR ways to do this. ??
console.log( '4.b answer ---- #1: ---- ' );
console.log( favFoods.pop() ); // this removes the last item, AND console.logs the ITEM
console.log( favFoods ); //this just console.logs the ARRAY

console.log( 'SETTING UP 4.b answer --- #2 --- :' );
console.log( '4.b redoing it. Adding back in', favFoods.push( 'cotton-candy2' ) ); //mostly just removes the ITEM
console.log( favFoods ); //checking cotton-candy2 is in array

console.log( '4.b answer -----  #2: -----' ); //realized this is the same as 1 but with a text string
console.log( 'I removed the last food in array called:', favFoods.pop() ); // REMOVED and CONSOLE.LOG the last item, "cotton-candy2"
console.log( 'my list of fav foods is now:', favFoods ); //checking it was removed from the end

console.log( 'SETTING UP 4.b answer ----- #3: ----' );
console.log( '4.b redoing it. Adding back in', favFoods.push( 'cotton-candy3' ) ); //mostly just removes the ITEM
console.log( favFoods ); //checking cotton-candy2 is in array //check it is

console.log( '4.b answer -----  #3: -----' );
let removedFood = favFoods.pop(); //just realized questions might be asking me to use a VARIABLE to do this? whoops
console.log( removedFood );
console.log( 'my new-new list of fav foods is:', favFoods ); // works using a let VARIABLE also


console.log( 'SETTING UP 4.b answer ----- #4: ----' );
console.log( '4.b redoing it. Adding back in', favFoods.push( 'cotton-candy4' ) ); //mostly just removes the ITEM
console.log( favFoods ); //checking cotton-candy2 is in array //check it is

console.log( '4.b answer -----  #4: -----' ); //REREAD QUESTION - I SEE IT NEED TO CONSOL.LOG THE ITEM AND ARRAY
// console.log( favFoods[-1] ); //couldnt get this to work
console.log( favFoods.slice(-1) ); //console.logs the last item before removing it
favFoods.pop(); // removes last item, but does NOT console.log anything. 
console.log( 'my 4th and final list of favFoods is:', favFoods ); //this just console.logs the ARRAY
//----------------end of 4.b------------


// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus'); 
console.log(`Added an animal to beginning: ${animalArray}`); //i cant get this "${}" code to work within a string when testing
// 4.c. TODO: Add a food at the beginning of the array & log the array

favFoods.unshift( 'Beer?' );
console.log( 'new fav foods list;', favFoods );



// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log( 'The animals are now', animalArray );

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array

console.log( 'I removed the first food', favFoods.shift(), 'so the full list is now:' + favFoods, 'Sound good?' );
//this converts everything to a string
console.log( 'I removed the first food', favFoods.shift(), 'so the full list is now:' + favFoods, 'Sound good?' );
//this console.logs the array VALUES, does NOT convert to strings.

//------------stretch goals below----------------
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