/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
   //create array of ages and populate
let ages = [30, 26, 27];
      //old way without destructuring-each variable declared individually and use indx numbers
//let john = ages[0];
//let mary = =ages[1];
//let joe = =ages[2];
    /*define an array of variable names and set it equal to ages, 
    *through desturucturing assignment- ES6 automatically assigns 
    *the first value in the array to the first variable etc 
    */
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects
    //define an object caleed jobs with 3 properties
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
   //to destructure object, use property names, wrap in curly braces
   //and set equal to 'jobs
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
    //create array called 'languages' and add elements
let languages = ["english", "french", "spanish", "german", "japanese"];
    //john speaks 2 languages
let [johnNative, johnSecondary] = languages;
     //the first 2 values of the array are assigned to the first 
     //2 variables and rest ignored
console.log(johnNative, johnSecondary); //returns english, french
    //can skip values by leaving commas in place of values to skip
let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary); //returns spanish, german

     //working with objects- destructure subset
let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};
   /**values in an object are represented by their property names
    * can destructure only things needed by using property names
    **/
let { firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);//returns english, german

// Using rest parameter syntax
   //create array
let fruits = ["apple", "orange", "banana", "peach", "cherry"]
    /*assign the first two values to two variables called 
    *favorite and secondFavorite and rest param for others
    */
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);//apple
console.log(secondFavorite);//orange
console.log(others);//banana, peach, cherry

     //eg. create object of people
    let favoriteFoods = {
        brian: "pizza",
        anna: "pasta",
        sarah: "vegetarian",
        andrea: "steak",
    }
         //destructure object
    let {brian, anna, ...rest} = favoriteFoods;
    console.log(brian);//returns pizza
    console.log(anna);//returns pasta
    console.log(rest);//returns sarah: "vegetarian", andrea: "steak"

