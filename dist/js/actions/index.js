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

  const data = call.getDataFromIndexedDb();
  //result set must be  in the format [{id title body},{},...]
  ph.setResultSet(data);
  // set the new page to load
  ph.setCurrentPage("LOAD-RESULTS");
  // take the element wanted and prepare layout with page
  const page = ph.getCurrentPage();
  const elementsArray = domSelector(page);
  // the view needs this instance of the object to load the html template extracting the oject of records
  view.fill(elementsArray, ph);
};

export const insertRecord = parentElement => {
  // attribute is defied in the template
  const title = parentElement.querySelector("[loading-id=title]").value;
  const body = parentElement.querySelector("[loading-id=body]").value;

  if (title === "" || title === " " || body === "" || body === " ") {
    console.log("something empty");
  } else {
    // load needed classes
    const view = new View();
    const ph = new PageHandler();
    const call = new Calls();

    // format record
    const record = {
      title,
      body,
      date: Date.now(),
      checked: false
    };
    // in this method of call get <-----------  initialized the DB
    const data = call.pushDataToIndexedDb(record);

    // call a post request to the db
    // get the result from db and display all together
  }
};

/** IN DOM SELECTOR ARE DEFINED WHICH ELEMENTS ARE TO RELOAD WHEN CHANGING THE VIEW, ADDING SIMPLY AN ELEMENT TO THE ARRAY,
 * AND SPECIFYING IN THE VIEW HOW TO GET THE TEMPLATE.
 */

// loads the form to search data
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

// loads the form for to insert the data
export const loadInsertData = () => {
  const view = new View();
  const ph = new PageHandler();
  // set the new page to load
  ph.setCurrentPage("INSERT-DATA");
  // take the element wanted and prepare layout with page
  const page = ph.getCurrentPage();
  const elementsArray = domSelector(page);

  console.log(elementsArray.length + "elements array");
  // the view needs this instance of the object to load the html template extracting the oject of records
  view.fill(elementsArray, ph);
};
