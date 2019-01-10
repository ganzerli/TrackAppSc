import axios from "axios";

export async function login(email, password) {
  const myRes = { email: email, password: password };
  let res;
  res = await fetch("http://localhost:5000/api/users/login", {
    method: "post",
    body: JSON.stringify(myRes),
    headers: {
      //"Content-Type": "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
  console.log(res);
  const result = await res.json();
  console.log(result);
}

export async function signup(email, password) {
  const data = { email, password };
  console.log(data);
  axios
    .post("http://localhost:5000/api/users/register", data)
    .then(res => console.log(res))
    .catch(err => console.log(err));
}
