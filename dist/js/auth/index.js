import axios from "axios";

const PROXY = "https://pryvapp.herokuapp.com";
const DEV = "http://localhost:5000";

export async function login(email, password) {
  // need to return a promise to have errors in res.json
  const requestBody = { email, password };
  let res;
  res = await fetch(`${PROXY}/api/users/login`, {
    method: "post",
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json"
    }
  });
  // also errors fom res.status(400).json)({err:"the error"}) are passed as res.json here || users
  const response = await res.json();
  //the function give as resolve the {err: "hte error"} in .err if there is the error..

  return response;
}

export function signup(email, password, displayFeed) {
  const data = { email, password };
  // axios calls the the data in the response ..... .. ..  .data!
  //
  //let feedback = document.querySelector("[loading-id=form-feedback]");

  axios
    .post(`${PROXY}/api/users/register`, data)
    .then(res => {
      console.log(res.data);
      //go does not run if error
      displayFeed(true, "now you can log in");
    })
    .catch(err => {
      // nothing, say the user is already in
      displayFeed(false, "Email aready registered");
    });
}
