import View from "../View";
import PageHandler from "../pages/pageHandler";
import { domSelector } from "../pages/domSelector";
import { crypt } from "../../../util";
import { getIdSession } from "./index";

// AJAX GET REQUEST
export const getCryptAll = () => {
  console.log("crypt all");
  const token = document.querySelector("[loading-id=footer]").innerHTML;

  var request = new XMLHttpRequest();
  request.open("GET", "http://localhost:5000/api/records/mcsrg", true);
  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  request.setRequestHeader("Authorization", token);
  request.onload = () => {
    // do something here
    const myArr = JSON.parse(request.responseText);
    console.log(myArr);
    // load result
    const view = new View();
    const ph = new PageHandler();

    ph.setCurrentPage("LOAD-RESULTS");
    ph.setResultSet(myArr);
    const elementsArray = domSelector(ph.getCurrentPage());
    view.fill(elementsArray, ph);
  };

  request.send();
};
// AJAX POST REQUEST
export const addCryptRecord = form => {
  const title = form.querySelector("[loading-id=crypt-field-title]").value;
  const body = form.querySelector("[loading-id=crypt-textarea-input]").value;
  const key = form.querySelector("[loading-id=crypt-field-key]").value;
  const sessionId = getIdSession();
  const date = crypt(Date.now(), key);
  // get token
  const token = document.querySelector("[loading-id=footer]").innerHTML;

  // build object for request
  const data = {
    title,
    body,
    date,
    sessionId: crypt(sessionId, key)
  };

  //REQUEST
  var request = new XMLHttpRequest();
  request.open("POST", "http://localhost:5000/api/records/mcsrg", true);
  //set header
  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  // set token
  request.setRequestHeader("Authorization", token);
  // set what to fo with response
  request.onload = () => {
    // do something here
    console.log(request.responseText);
    getCryptAll();
  };
  // send data
  request.send(JSON.stringify(data));
};

///    C R Y P T           LOAD-CRYPT-OPT  LOAD FORM LOAD FORM      LOAD-CRYPT-OPT

export const loadCryptOptions = () => {
  const view = new View();
  const ph = new PageHandler();
  // set the new page to load
  ph.setCurrentPage("LOAD-CRYPT-OPT");
  // take the element wanted and prepare layout with page
  const page = ph.getCurrentPage();
  const elementsArray = domSelector(page);
  // the view needs this instance of the object to load the html template extracting the oject of records
  view.fill(elementsArray, ph);

  // adding event listeners for the textarea
  const form = document.querySelector("[loading-id=form-commands]");
  if (form) {
    const keyInput = form.querySelector("[loading-id=crypt-field-key]");
    keyInput.addEventListener("keyup", liveCryptOnTyping);
  }
};

function liveCryptOnTyping(e) {
  const key = e.target.value;
  const textArea = document.querySelector("[loading-id=crypt-textarea-input]");
  const inputTitle = document.querySelector("[loading-id=crypt-field-title]");
  // IF NEVER WRITTEN IN THE TEXT REMEMBER THE FIRST UNENCRYPTED TEXT
  if (e.key !== "Backspace") {
    if (key.length <= 1) {
      //the keyfield was empty
      textArea.setAttribute("remember-text", textArea.value);
      inputTitle.setAttribute("remember-text", inputTitle.value);

      console.log("SET ATTRIBITE" + textArea.getAttribute("remember-text"));
    }
  }
  // getting values
  const text1 = textArea.getAttribute("remember-text");
  const text2 = inputTitle.getAttribute("remember-text");

  // convert values
  const resultTextarea = crypt(text1, key);
  const resultTitle = crypt(text2, key);

  // IF THE KEYFIELD IS EMPTY RESET REMEMBERED TEXT
  if (key.length < 2) {
    textArea.value = textArea.getAttribute("remember-text");
    inputTitle.value = inputTitle.getAttribute("remember-text");
  } else {
    textArea.value = resultTextarea;
    inputTitle.value = resultTitle;
  }
}
