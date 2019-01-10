export async function login() {
  let res;
  res = await fetch("http://localhost:5000/api/users/all");
  const result = await res.json();
  console.log(result);
}
export async function signup(email, password) {
  let res;
  res = await fetch("http://localhost:5000/api/users/register", {
    method: "post",
    body: JSON.stringify({ email, password })
  });
  console.log(res);
  const result = await res.json();
  console.log(result);
}
