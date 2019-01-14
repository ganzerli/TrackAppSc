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

  const stringDate = new Date(Date.now()).toLocaleString();
  console.log(stringDate);
  const date = crypt(stringDate, key);
  // get token
  const token = document.querySelector("[loading-id=footer]").innerHTML;

  // build object for request
  const data = {
    title,
    body,
    date,
    sessionId
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
  // instanciate classes
  const view = new View();
  const ph = new PageHandler();

  // set the new page to load
  ph.setCurrentPage("LOAD-CRYPT-OPT");
  // take the element wanted and prepare layout with page
  const page = ph.getCurrentPage();
  const elementsArray = domSelector(page);

  // creating the results
  view.fill(elementsArray, ph);

  // adding event listeners for the textarea
  const form = document.querySelector("[loading-id=form-commands]");
  if (form) {
    const keyInput = form.querySelector("[loading-id=crypt-field-key]");
    keyInput.addEventListener("keyup", liveCryptOnTyping);
  }

  if (!document.querySelector("[form-crypt=show]")) {
    // ADDING SOMETHING TO DECRYPT THE MESSAGE
    const subForm = document.createElement("form");
    subForm.setAttribute("form-crypt", "show");
    subForm.classList.add("form-decrypt-record");
    //create and feed input
    const crynput = document.createElement("input");
    crynput.setAttribute("loading-id", "crynput");
    crynput.setAttribute("type", "text");

    //create button
    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "load records");

    // feed form
    subForm.appendChild(crynput);
    subForm.appendChild(submit);

    // loading reasults func
    subForm.addEventListener("submit", e => {
      e.preventDefault();
      // load results on click
      console.log("load results");
      crynput.value = "";
      getCryptAll();
      return false;
    });

    // append it to the document
    document
      .querySelector("[loading-id=subtitle-container]")
      .appendChild(subForm);

    //event listener decryption
    crynput.addEventListener("keyup", uncovresult);
  }
  //
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

// decrypt result
function uncovresult(e) {
  console.log(e.target.value);
  // select result items
  const result = document.querySelector("[loading-id=result-container]");
  const allArr = result.querySelectorAll("[crypt]");

  const key = e.target.value;

  // set an attribute to remember the data to encrypt
  if (e.key !== "Backspace") {
    if (key.length < 2) {
      allArr.forEach(el => {
        //take the other attribute and set as attribute
        el.setAttribute("encr-text", el.innerHTML);

        //filter out the date
        if (el.hasAttribute("crypt-date")) {
          el.setAttribute("encr-text", el.getAttribute("loading-id"));
          // if el is span date
        }

        //
      });
      console.log("atribite set.. ");
    }
  }
  // save the forst text

  allArr.forEach(el => {
    // set html
    // IF THE KEYFIELD IS EMPTY RESET REMEMBERED TEXT
    if (key.length < 2) {
      // reset
      console.log("key short");
      el.innerHTML = el.getAttribute("encr-text");
      console.log(el);
    } else {
      el.innerHTML = crypt(el.getAttribute("encr-text"), key);
      console.log("key good");
      console.log(el);
    }
  });
  //console.log(allArr);
}

export function deleteCryptRecord(id) {
  console.log("deleting.." + id);
  const token = document.querySelector("[loading-id=footer]").innerHTML;
  //REQUEST
  var request = new XMLHttpRequest();
  request.open("DELETE", `http://localhost:5000/api/records/mcsrg/${id}`, true);
  //set header
  request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  // set token
  request.setRequestHeader("Authorization", token);
  // set what to fo with response
  request.onload = () => {
    // do something here
    console.log(request.responseText);

    const parent = document.querySelector(`[loading-id=result-container]`);
    const deleted = document.querySelector(`[loading-id=result-record-${id}]`);
    parent.removeChild(deleted);
  };
  // send data
  request.send();
}

//`/api/profile/handle/${handle}`
// request to server with id and token
