const string =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890? @%+/'!#$?:.(){}[]-_";

// returns a string without duplicates
const noDupString = string => {
  //reduce arg to string without duplicates
  const myString = string.split(" ").join("");
  let set = "";

  //storing the found chars
  let alreadyFound = {};

  // looping throught myString
  myString.split("").forEach(char => {
    //if no prop named as the char
    if (!alreadyFound[char]) {
      //update alreadyfound
      alreadyFound[char] = 1;
      //and concatenate the result
      set += char;
    }
  });

  return set;
};

console.log(noDupString("the striskjeofjhzzzng tt"));

const key = "abcdjudaasddd38fdnw9(§(/";

const alltogether = noDupString(key) + string;

console.log(string);
console.log(alltogether);

console.log(noDupString(noDupString(key) + string));
