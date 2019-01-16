import axios from "axios";

export async function login(email, password) {
  // need to return a promise to have errors in res.json
  const requestBody = { email, password };
  let res;
  res = await fetch("http://localhost:5000/api/users/login", {
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

export function signup(email, password) {
  const data = { email, password };
  // axios calls the the data in the response ..... .. ..  .data!
  let feedback = document.querySelector("[loading-id=form-feedback]");

  axios
    .post("http://localhost:5000/api/users/register", data)
    .then(res => {
      console.log(res.data);
      //go does not run if error

      feedback.classList.add("form-feedback-go");
      feedback.innerHTML = "Now you can log in";
      setTimeout(() => {
        feedback.classList.remove("form-feedback-go");
        feedback.innerHTML = "";
      }, 3000);
    })
    .catch(err => {
      // nothing, say the user is already in
      console.log(err);
      feedback.classList.add("form-feedback-error");
      feedback.innerHTML = "Email already exist";
      setTimeout(() => {
        feedback.classList.remove("form-feedback-error");
        feedback.innerHTML = "";
      }, 3000);
    });
}
