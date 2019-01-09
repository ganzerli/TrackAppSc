import { domSelector } from "../pages/domSelector";
import View from "../View";
import PageHandler from "../pages/pageHandler";
import Calls from "../Calls/Calls";
import { goalListener } from "../eventListeners";

// actions are called from the event listeners, must initiate an instance of view and ph to pass to the vieew changing the page

/**
 *  THE PAGEHANDLER KEEPS THE PAGE AND THE RESULT SET; SO WHEN PASSED TO THE VIEW, THE VIEW HAS THE INFO TO GIVE TO THE SELECTED COMPONENTS
 * IN THE WAY HOW THE TEMPLATE IS IMPLEMENTED
 */

// get the records from somewhere and paint the result
export const loadRecords = () => {
  const view = new View();
  const ph = new PageHandler();
  const call = new Calls();

  const promise = call.getDataFromIndexedDb();
  //result set must be  in the format [{id, title, body},{},...]
  promise.then(data => {
    /// first order the array!!
    let sortedArray = sortObjectsByDate(data);
    // console.log(sortedArray);
    ph.setResultSet(sortedArray);
    // set the new page to load
    ph.setCurrentPage("LOAD-RESULTS");
    // take the element wanted and prepare layout with page
    const page = ph.getCurrentPage();
    const elementsArray = domSelector(page);
    // the view needs this instance of the object to load the html template extracting the oject of records
    view.fill(elementsArray, ph);
    console.log(
      "###############--------result refreshed-----------####################"
    );
    goalListener();
  });
};

/*
 *   to search get the records and filter for the criteria
 */

export const insertRecord = parentElement => {
  // attribute is defied in the template
  const title = parentElement.querySelector("[loading-id=title]").value;
  const body = parentElement.querySelector("[loading-id=body]").value;

  if (title === "" || title === " " || body === "" || body === " ") {
    console.log("something empty");
  } else {
    // load needed classes
    const call = new Calls();

    // session id

    //
    const sessionId = getIdSession();
    console.log(sessionId);
    // format record
    const record = {
      title,
      body,
      date: Date.now(),
      checked: "false",
      sessionId,
      alarm: ""
    };
    // in this method of call get <-----------  initialized the DB
    call.pushDataToIndexedDb(record);
    // the call pushes to the indexed db the new record
    loadRecords();
    // load records gets all from the indexed db and reloads the page
  }
};

/** IN DOM SELECTOR ARE DEFINED WHICH ELEMENTS ARE TO RELOAD WHEN CHANGING THE VIEW, ADDING SIMPLY AN ELEMENT TO THE ARRAY,
 * AND SPECIFYING IN THE VIEW HOW TO GET THE TEMPLATE.
 */

// loads ONLY THE FORM WITH STATIC TEMPLATE
export const loadSearchData = () => {
  const view = new View();
  const ph = new PageHandler();
  // set the new page to load
  ph.setCurrentPage("SEARCH-DATA");
  // take the element wanted and prepare layout with page
  const page = ph.getCurrentPage();
  const elementsArray = domSelector(page);
  // the view needs this instance of the object to load the html template extracting the oject of records
  view.fill(elementsArray, ph);
};

// LOADS ONL THE FORM FROM STATIC TEMPLATEfor to insert the data
export const loadInsertData = () => {
  const view = new View();
  const ph = new PageHandler();
  // set the new page to load
  ph.setCurrentPage("INSERT-DATA");
  // take the element wanted and prepare layout with page
  const page = ph.getCurrentPage();
  const elementsArray = domSelector(page);
  // the view needs this instance of the object to load the html template extracting the oject of records
  view.fill(elementsArray, ph);
};

export const deleteRecord = id => {
  const call = new Calls();
  call.deleteFromIndexedDb(id);
  // deleting it directly from ui without loading the new view
  const parent = document.querySelector(`[loading-id=result-container]`);
  const deleted = document.querySelector(`[loading-id=result-record-${id}]`);
  parent.removeChild(deleted);
};

export const checkRecord = id => {
  const call = new Calls();
  // get infos for the object
  const element = document.querySelector(`[loading-id=result-record-${id}]`);
  let data = element.getAttribute("json-data");
  // preparing the object to update
  data = JSON.parse(data);
  // toggle the checked value

  let checkedHtmlElement = element.querySelector(
    `[loading-id=check-record-${id}]`
  );

  if (data.checked === "true") {
    checkedHtmlElement.innerHTML = "false";
    data.checked = "false";
  } else {
    checkedHtmlElement.innerHTML = "true";
    data.checked = "true";
  }
  call.updateRecord(data);
};

const sortObjectsByDate = arr => {
  // take smallest date and insert as [0]of an array
  return arr.sort((a, b) => b.date - a.date);
};

export const getIdSession = () => {
  // check in local storage if there is
  let storage = localStorage.getItem("current-session-id");
  let lastSessionEnter = localStorage.getItem("last-session-enter");
  const nowStr = Date.now().toString();

  if (!storage || !lastSessionEnter) {
    // set the first session id
    localStorage.setItem("current-session-id", nowStr);
    localStorage.setItem("last-session-enter", nowStr);
    //console.log("item set in local storage .." + nowStr);
    return nowStr;
  } else {
    // there is a current-session-id item in local storage
    const currentSession = parseInt(storage);
    const now = parseInt(nowStr);
    const oneMinute = 60000; // 60 000 ms ---> 60 s
    const oneHour = oneMinute * 60;
    // if now is more then toWait from the last record enter , register new session

    if (now - parseInt(lastSessionEnter) > oneHour * 8) {
      //get a new id
      localStorage.setItem("current-session-id", nowStr);
      localStorage.setItem("last-session-enter", nowStr);
      console.log("time is gone.. set new id " + nowStr);
      return nowStr;
    } else {
      // keep the last session id

      localStorage.setItem("last-session-enter", nowStr);
      //  console.log("is about the same time.. keep id " + storage);
      return storage;
    }
  }
};

export const searchRecord = value => {
  const view = new View();
  const ph = new PageHandler();
  const call = new Calls();

  //only first time
  const promise = call.getDataFromIndexedDb();
  //result set must be  in the format [{id title body},{},...]
  promise.then(data => {
    /// first order the array!!
    let sortedArray = sortObjectsByDate(data);
    let leftArray = filterByValue(sortedArray, value);
    console.log(leftArray);
    ph.setResultSet(leftArray);
    // set the new page to load
    ph.setCurrentPage("LOAD-RESULTS");
    // take the element wanted and prepare layout with page
    const page = ph.getCurrentPage();
    const elementsArray = domSelector(page);
    // the view needs this instance of the object to load the html template extracting the oject of records
    view.fill(elementsArray, ph);
  });
};

const filterByValue = (arr, value) => {
  let filtered = [];
  // loop throught each element
  for (let i in arr) {
    const object = arr[i];
    const theDate = new Date(object.date).toLocaleString();
    //chech if the title contains the value
    if (
      object.title.includes(value) ||
      object.body.includes(value) ||
      theDate.includes(value)
    ) {
      filtered.push(object);
    }
  }
  return filtered;
};

// when called on a button it console.log the selected html
export function getHTMLOfSelection() {
  var range;
  if (document.selection && document.selection.createRange) {
    range = document.selection.createRange();
    console.log(range.htmlText);
  } else if (window.getSelection) {
    var selection = window.getSelection();
    if (selection.rangeCount > 0) {
      range = selection.getRangeAt(0);
      var clonedSelection = range.cloneContents();

      var div = document.createElement("div");
      div.appendChild(clonedSelection);
      console.log(div.innerHTML);
    } else {
      return "";
    }
  } else {
    return "";
  }
}

/**
 * LOADS ONLY THE FORM, so the result staythe same until refreshed
 */
export const loadInputsSessionGoal = () => {
  const ph = new PageHandler();
  const view = new View();
  //set the page in the page handler, for the dom selector and view
  ph.setCurrentPage("LOAD-SESSION-GOAL");
  //inside the domSelector set the element needed for this page
  const elementsArray = domSelector(ph.getCurrentPage());
  // give the array to the view to load the form
  view.fill(elementsArray, ph);
};

export const setGoal = form => {
  const goal = form.querySelector("[loading-id=session-goal-input]").value;
  if (!goal || goal === "" || goal === " " || goal === "  ") {
    // NOTHING WRITTEN NO GOAL
    return;
  } else {
    // SOMETHING WRITTEN INSIDE :: CONTINUE
    // SAVE GOAL IN LOCAL STORAGE UNDER THIS SESSION ID
    const currentSessionId = getIdSession();
    // set as storage an object named sessionsgoals,
    let ref;
    // check for the record
    if (localStorage.getItem("session-goals")) {
      ref = localStorage.getItem("session-goals");
    } else {
      localStorage.setItem("session-goals", "[]");
      ref = localStorage.getItem("session-goals");
    }
    //if array empty add the obj
    if (ref === "[]") {
      // array empty
      const obj = {
        sessionId: currentSessionId,
        goals: [{ name: goal, done: false, resetted: false, info: "", last: 0 }]
      };
      let data = [obj];
      //console.log(data);
      localStorage.setItem("session-goals", JSON.stringify(data));
    } else {
      //parse array from local storage
      const arr = JSON.parse(ref);
      console.log(
        currentSessionId + " ------   " + arr[0].sessionId + "   " + arr[0]
      );
      if (currentSessionId === arr[0].sessionId) {
        //push to array
        const goalsArray = arr[0].goals;
        let lock = false;
        // check if there is already the same goal in the array
        goalsArray.forEach(x => {
          if (x.name === goal) {
            lock = true;
          }
        });
        //if there is no goal with this name add goal
        if (!lock) {
          goalsArray.push({
            name: goal,
            done: false,
            resetted: false,
            info: "",
            last: 0
          });
          arr[0].goals = goalsArray;
          localStorage.setItem("session-goals", JSON.stringify(arr));
        } else {
          //continue
          console.log(lock + "goal already set for this session");
        }
      } else {
        // the storage has an object but the name of [0] does not match
        // create a new session object
        const obj = {
          sessionId: currentSessionId,
          goals: [
            { name: goal, done: false, resetted: false, info: "", last: 0 }
          ]
        };
        // getting from the local storage the array stored and parse
        const dataArr = JSON.parse(ref);
        //[{},{},...]
        // pushing in the forst position [0] the new object
        dataArr.unshift(obj);
        // parsing back the object to string and set in local storage
        localStorage.setItem("session-goals", JSON.stringify(dataArr));
        console.log(localStorage.getItem("session-goals"));
        console.log("new session for new goals");
      }
    }
  }
};

/// G O A L S   G O A L S   G O A L S    G O A L S

export const checkGoal = goalElement => {
  const call = new Calls();
  const goalName = goalElement.getAttribute("loading-id");
  const sessionId = goalElement.getAttribute("session-id");
  const form = goalElement.parentElement;
  const inputText = form.querySelector("[loading-id=goal-info-input]");
  // find the right input
  const input = form.querySelectorAll("[loading-id=goal-info-input]");
  // add class visible
  input.forEach(i => i.classList.add("active"));

  form.addEventListener("submit", e => {
    e.preventDefault();
    const info = inputText.value || "";
    inputText.value = "";
    call.checkGoal(goalName, sessionId, info);
    input.forEach(i => i.classList.remove("active"));
    // if call returns something..
    loadRecords();
  });
  // add listener to form on submit
  //and call...

  // refresh the result
};

export const loadInputAlarm = () => {
  const ph = new PageHandler();
  const view = new View();
  //set the page in the page handler, for the dom selector and view
  ph.setCurrentPage("LOAD-ALARM-INPUT");
  //inside the domSelector set the element needed for this page
  const elementsArray = domSelector(ph.getCurrentPage());
  // give the array to the view to load the form
  view.fill(elementsArray, ph);
};

export const setAlarm = form => {
  console.log("set alarm submitted");
  // take parameters out of thhe form,
  const title = form.querySelector("[loading-id=alarm-name]").value;
  const body = "";
  const date = form.querySelector("[loading-id=alarm-day]").value.split("-");
  // extracting the date
  const year = date[0];
  const month = parseInt(date[1]) - 1;
  const day = date[2];

  let hours = form.querySelector("[loading-id=alarm-time-hours]").value;
  const minutes = form.querySelector("[loading-id=alarm-time-minutes]").value;
  // creating a date hakdlebar string

  // cheks day undefined
  if (
    title === "" ||
    title === " " ||
    hours === "" ||
    minutes === "" ||
    isNaN(month) ||
    date.length < 1
  ) {
    console.log(" something empty ");
  } else {
    const d = new Date(year, month, day, hours, minutes, 0, 0);
    // parse to ms
    const dateParsedMs = Date.parse(d);

    console.log("something empty");
    // is alarm field is false
    const sessionId = getIdSession();
    const newObj = {
      title,
      body,
      date: Date.now(),
      checked: false,
      sessionId,
      alarm: dateParsedMs
    };
    console.log(newObj);

    if (addAlarm(newObj)) {
      console.log("the alarm is set");
      // write object in records
      const call = new Calls();
      call.pushDataToIndexedDb(newObj);
      loadRecords();
    } else {
      //
      console.log("the record could not be inserted");
    }

    // set as local storage alarms[{nameb, .. when}]
    // loading the page if there are alarms check every minute.. until there are alarms loop goes
    // it just checks in the alarms array when , if the time is up, show card popup and remove.
  }
};

const addAlarm = obj => {
  const alarms = JSON.parse(localStorage.getItem("alarms"));
  let result = alarms || [];
  // are used for the final chech to compare if the array has more elements

  if (alarms) {
    if (alarms.length < 1) {
      // if for some reason push to []
      console.log("array is empty, but inserting ");
      result.push(obj);
    } else {
      // there are other records
      result.push(obj);
      console.log("isert in existing array");
    }
  } else {
    //set item and return true
    console.log("no object in local storage");
    result.push(obj);
  }
  // last check
  if (result && result.length > 0) {
    localStorage.setItem("alarms", JSON.stringify(result));
    return true;
  } else {
    return false;
  }
};

export const refreshResultGoals = () => {
  console.log("refresh goals");
  const call = new Calls();
  // RESPONSE
  const view = new View();
  const ph = new PageHandler();

  //inside the domSelector set the element needed for this page
  ph.setCurrentPage("LOAD-GOALS");
  ph.setResultSet(call.getGoals());
  //
  const elementsArray = domSelector(ph.getCurrentPage());
  // the view needs this instance of the object to load the html template extracting the oject of records
  view.fill(elementsArray, ph);

  // add event listener for buttons in the result

  const result = document.querySelector("[loading-id=result-container]");
  const buttons = result.querySelectorAll("[loading-id=delete-goal]");
  const buttonsStatus = result.querySelectorAll("[loading-id=btn-goal-status]");

  if (buttons) {
    console.log(buttons);
    buttons.forEach(btn => {
      btn.addEventListener("click", e => deleteGoal(e));
    });
  }

  console.log(buttonsStatus);
  if (buttonsStatus) {
    console.log(buttonsStatus);
    buttonsStatus.forEach(btn => {
      btn.addEventListener("click", btnGoalCkeck);
    });
  }
};

function deleteGoal(e) {
  const name = e.target.getAttribute("info");
  const parent = e.target.parentElement;
  const grandParent = parent.parentElement;
  grandParent.removeChild(parent);
  //get the goal name and delete
  Calls.prototype.deleteGoal(name);
}

function btnGoalCkeck(e) {
  // best is make a form same as the other
}
