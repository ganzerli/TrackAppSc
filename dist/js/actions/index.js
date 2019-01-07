import { domSelector } from "../pages/domSelector";
import View from "../View";
import PageHandler from "../pages/pageHandler";
import Calls from "../Calls/Calls";

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
  //result set must be  in the format [{id title body},{},...]
  promise.then(data => {
    /// first order the array!!
    let sortedArray = sortObjectsByDate(data);
    console.log(sortedArray);
    ph.setResultSet(sortedArray);
    // set the new page to load
    ph.setCurrentPage("LOAD-RESULTS");
    // take the element wanted and prepare layout with page
    const page = ph.getCurrentPage();
    const elementsArray = domSelector(page);
    // the view needs this instance of the object to load the html template extracting the oject of records
    view.fill(elementsArray, ph);
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
      sessionId
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

const getIdSession = () => {
  // check in local storage if there is
  let storage = localStorage.getItem("current-session-id");
  let lastSessionEnter = localStorage.getItem("last-session-enter");
  const nowStr = Date.now().toString();

  if (!storage || !lastSessionEnter) {
    // set the first session id
    localStorage.setItem("current-session-id", nowStr);
    localStorage.setItem("last-session-enter", nowStr);
    console.log("item set in local storage .." + nowStr);
    return nowStr;
  } else {
    // there is a current-session-id item in local storage
    // later
    //
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
      console.log("is about the same time.. keep id " + storage);
      localStorage.setItem("last-session-enter", nowStr);
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
    //chech if the title contains the value
    if (object.title.includes(value) || object.body.includes(value)) {
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
