// trought the letters of alphabet array

export function crypt(input, key) {
  // trim key
  const str = input.toString();
  // if the key is not divisible / 2 cut the last char
  let alp = "";

  if (key.length % 2 === 0) {
    alp += key.substring(1, key.length);
    alp += " .abcdefghijklmnopqrstuvwxyz" + "1234567890" + "!?,:=-_";
  } else {
    alp += key;
    alp += " .abcdefghijklmnopqrstuvwxyz" + "1234567890" + "?!,:=-_";
  }

  alp += "abcdefghijklmnorspqtuvwxyz".toUpperCase();

  const alphabetArr = alp.split("");
  let n = alphabetArr.length / 2;

  const checkRightIndex = i => {
    let startIndex = 0;
    if (i < n) {
      startIndex = i + n;
    } else {
      startIndex = i - n;
    }
    return startIndex;
  };
  //////////////////////////////
  const findIndexFromChar = c => {
    for (let i = 0; i < alphabetArr.length; i++) {
      if (c === alphabetArr[i]) {
        return i;
      }
    }
    return alphabetArr.length;
  };

  let theResult = "";
  for (let i = 0; i < str.length; i++) {
    theResult += alphabetArr[checkRightIndex(findIndexFromChar(str.charAt(i)))];
  }
  console.log(theResult);
  return theResult;
}

export const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) || //if the object has no keys is empty
  (typeof value === "string" && value.trim().length === 0); //if empty string
// basically the function returns false if does not meet any of those prerequisites.

const getfirstN = (str, n) => {
  //13
  const numbers = str
    .split("")
    .filter(x => !isNaN(x))
    .splice(0, n)
    .join("");
  return numbers;
};
