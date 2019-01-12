// trought the letters of alphabet array

export function crypt(input, key) {
  // trim key
  const str = input.toString();
  // if the key is not divisible / 2 cut the last char
  let alp = "";

  if (key.length % 2 === 0) {
    alp +=
      "]abcdefghijklm nopqrstuvwxyz" +
      "1234}5€6[789{0" +
      "#*+~<>.:;,-_?=)(/&%$!@°";
  } else {
    alp += "§";

    alp +=
      "1234}5€6[789{0" +
      "]abcdefghijklm nopqrstuvwxyz" +
      "#*+~<>.:;,-_?=)(/&%$!@°";
  }

  alp += "abcdefghijklmnorspqtuvwxyzü".toUpperCase();
  alp += key;

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
