// //==================Exercise #1 ==========//
// /*Write a function that takes in the string and the list of dog names, loops through 
// the list and checks that the current name is in the string passed in. The output should be:
// "Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
// */
// let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
// let dog_names = ["Max","HAS","PuRple","dog"]

// function findWords(){
//     //Your code goes here
// }

// //Call method here with parameters

// let groupOfNames = ['Terry', 'Ben', 'Ash', 'Brock', 'Misty'];
// // loop through an array with a for loop
// for(let i = 0; i <groupOfNames.length; i++){
//   console.log(groupOfNames[i])
// };
// console.log(groupOfNames
//   .forEach(element => console.log(element)));
//   console.log(groupOfNames[0].search('y'));

  var str = "Hello world, welcome to the universe.";
  var n = str.includes("world");
  console.log(n)





let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ['Max','HAS','PuRple','dog']

let findWords = (a,b) => {
  c = a.split(' ')
  console.log(c)
  for (let i =0; i < b.length; i++){
    console.log(b[i])
    if a.search(b[i]){
      console.log("Matched " + b[i])
    } else {console.log('No Matches')}
    
  }    
};
console.log(findWords(dog_string,dog_names));


// //============Exercise #2 ============//
// /*Write a fucntion that takes in an array and removes every even index with a splice,
// and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

// function replaceEvens(arr){
//     //code goes here
// }

// //Expected output
// //Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// //Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

let given_arr = ['Max','Baseball', 'Reboot','Goku','Trucks','Rodger']

function evens(a){
  for( let i = 0; i < a.length; i++) {
    if(i % 2 == 0){
      a.splice(i,1,'even index')
    }
  }
  return a
};
console.log(evens(given_arr))



/* These are the codewars problems I did:
https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/solutions/javascript

function removeChar(str) {
  return str.slice(1, -1);
}

https://www.codewars.com/kata/53369039d7ab3ac506000467/solutions/javascript

function boolToWord( bool ){
  //...
  return(bool == true) ? 'Yes' : 'No'
};

*/