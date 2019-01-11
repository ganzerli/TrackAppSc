export const getCryptAll = () => {
  console.log("crypt all");
  const token = document.querySelector("[loading-id=footer]").innerHTML;

  const data = { body: "a", title: "b", date: 23324 };
  var request = new XMLHttpRequest();

  request.open("POST", "http://localhost:5000/api/records/mcsrg", true);
  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  request.setRequestHeader("Authorization", token);
  request.send(JSON.stringify(data));
};
