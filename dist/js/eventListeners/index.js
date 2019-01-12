import {
  loadRecords,
  insertRecord,
  loadInsertData,
  loadSearchData,
  deleteRecord,
  checkRecord,
  searchRecord,
  loadInputsSessionGoal,
  setGoal,
  checkGoalFromRecord,
  loadInputAlarm,
  setAlarm,
  refreshResultGoals
} from "../actions";
import {
  getCryptAll,
  addCryptRecord,
  loadCryptOptions
} from "../actions/crypt";

import { login, signup } from "../auth";

const loadingId = x => document.querySelector("[loading-id=" + x + "]");

export const activateFormButton = () => {
  const form = loadingId("form-commands");

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      submitForm(e);
    });
  }
};

//goal bar listener
export const goalListener = () => {
  const goalsBar = document.querySelectorAll("[loading-id=goals-listener]");
  if (goalsBar && goalsBar.length > 0) {
    goalsBar.forEach(bar => {
      bar.addEventListener("click", goalsListenerDelegation);
    });
  }
};

//search
export const activateSearchListener = () => {
  const searchInput = document.querySelector("[loading-id=input-search]");
  if (searchInput) {
    searchInput.addEventListener("keyup", e => searchRecord(e.target.value));
  }
};

const submitForm = e => {
  // GETTING THE VALUE FROM THE FIRST DIV IN THE TEMPLATE
  const submitted = e.target.firstChild.nextSibling.getAttribute("loading-id");
  const form = e.target;
  // switch for the first child of the form.. defined in templatesarr
  switch (submitted) {
    case "SEARCH-DATA":
      // displaying the result set
      loadRecords();
      // calling action to query api and fill the new view of the result
      break;
    case "INSERT-DATA":
      insertRecord(form);
      break;
    case "LOAD-SESSION-GOAL":
      setGoal(form);
      break;
    case "LOAD-ALARM-INPUT":
      setAlarm(form);
      alarmsCheck();
      break;
    case "LOAD-CRYPT-OPT":
      addCryptRecord(form);
      console.log("wow it works .. here we can bild an action now");
      break;

    default:
      console.log("default value of switch for form event listener");
  }

  // take the inputs and send a post request to backend for to load the record
};

export function listenNavbar() {
  const navbar = loadingId("navbar-commands");
  if (navbar) {
    navbar.addEventListener("click", e => delegationNavbar(e));
  }

  const delegationNavbar = e => {
    // get attribute of clicked element
    const trgt = e.target.getAttribute("loading-id");

    if (trgt === "search-data") {
      //load form to search
      loadSearchData();
      activateSearchListener();
      // refresh the result
      loadRecords();
    } else if (trgt === "add-data") {
      // load the form
      loadInsertData();
    } else if (trgt === "set-session-goal") {
      loadInputsSessionGoal();
      activateGoalLoad();
    } else if (trgt === "set-session-alarm") {
      loadInputAlarm();
    } else if ("set-session-cryptmsg") {
      // set event listeners for the crypt otions
      loadCryptOptions();
      //getCryptAll();
    }
  };
}

export const listenResult = () => {
  const resultContainer = loadingId("result-container");
  if (resultContainer) {
    resultContainer.addEventListener("click", resultDelegation);
  }
};

const resultDelegation = e => {
  // checking if it has a js attribute
  let attribute = e.target.getAttribute("loading-id") || undefined;
  //checking if an attribute with attribute there is
  if (attribute) {
    // split the id and the attribute
    if (attribute.startsWith("delete-record-")) {
      // taking as array last numbers of attribute to have the id
      let id = attribute.split("").splice(14, attribute.length - 14);
      // id is an array
      id = id.join("");
      deleteRecord(id);
      //
    } else if (attribute.startsWith("check-record-")) {
      console.log("calling action to modify thing in db");
      let id = attribute.split("").splice(13, attribute.length - 13);
      // id is an array
      id = id.join("");

      checkRecord(id);
      deleteRecord(id);
      loadRecords();
    }
  }
};

/***
 *  GOAL LISTENER IS IN THE MAIN LISTENER FOR CLOSING CONTEN..
 * FOR FLOW REASON
 */
function goalsListenerDelegation(e) {
  const goalElement = e.target;
  console.log(goalElement); // prints the whole node of results the outer span
  checkGoalFromRecord(goalElement);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export function mainClickListenerForClosingContents() {
  document.addEventListener("click", e => {
    //check for elements
    const goalFormStuff = document.querySelectorAll(
      "[loading-id=goal-info-input]"
    );
    if (goalFormStuff && goalFormStuff.length > 0) {
      console.log("there is the form somewhere");
      if (
        e.target.getAttribute("loading-id") !== "goal-info-input" &&
        !e.target.hasAttribute("session-id")
      ) {
        // closing other windows
        const input = document.querySelectorAll("[loading-id=goal-info-input]");
        input.forEach(i => i.classList.remove("active"));
      } else if (e.target.hasAttribute("session-id")) {
      }
    }
  });
}

export function alarmsCheck() {
  const alarms = localStorage.getItem("alarms");
  let timeout = setTimeout(alarmsCheck, 1000 * 10);
  //check if there is the object
  if (alarms && alarms !== "[]") {
    JSON.parse(alarms).forEach((elem, index) => {
      //loop throught the obj arr and find if one has an alarm
      if (elem.alarm > 1000 && elem.alarm !== "") {
        if (Date.now() > elem.alarm) {
          alert(elem.title);
          let resetArr = [...JSON.parse(alarms)];
          resetArr.splice(index, 1);
          localStorage.setItem("alarms", JSON.stringify(resetArr));
        }
      }
    });
  } else {
    //console.log("NO alarms are set");
    clearTimeout(timeout);
  }
}

export function activateGoalLoad() {
  const form = document.querySelector("[loading-id=form-commands]");
  if (form) {
    const button = form.querySelector("[loading-id=load-goals]");
    button.addEventListener("click", refreshResultGoals);
  }
}

export function loginForm(startFunction) {
  //
  const BACKEND = true;
  if (BACKEND) {
    //
    const form = document.querySelector("[loading-id=login-form]");
    form.addEventListener("submit", () => {
      let feedback = document.querySelector("[loading-id=form-feedback]");
      const email = form.querySelector("[name=email]").value;
      const password = form.querySelector("[name=password]").value;
      const logIn = form.querySelector("[loading-id=form-radio-login]").checked;
      const signUp = form.querySelector("[loading-id=form-radio-signup]")
        .checked;

      if (logIn && !signUp) {
        //
        login(email, password)
          .then(data => {
            if (data.err) {
              console.log(data.err);
              // say user not found
              feedback.classList.add("form-feedback-error");
              feedback.innerHTML = data.err;
              setTimeout(() => {
                feedback.classList.remove("form-feedback-error");
                feedback.innerHTML = "";
              }, 3000);
            } else {
              //all good call function
              if (data.success) {
                document.querySelector("[loading-id=footer]").innerHTML =
                  data.token;
              }
              startFunction();
              //
              feedback.parentElement.innerHTML = "WELCOME";
              console.log(data);

              //get token from data
              //
              //
              console.log("WELCOME");
              // DO SOMETHING WITHF RESULT

              //
            }
          })
          .catch(err => console.log(err));
      } else if (!logIn && signUp) {
        // signup is just a function that show if the user is registered.
        signup(email, password);
      }
    });
  } else {
    // if no backend just leave the normal functions
    startFunction();
  }
}
