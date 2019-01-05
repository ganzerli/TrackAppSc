import { domSelector } from "../pages/domSelector";
import View from "../View";
import PageHandler from "../pages/pageHandler";

// actions are called from the event listeners to modify the page
export const loadRecords = () => {
  const view = new View();
  const ph = new PageHandler();

  ph.setResultSet([
    {
      id: 1,
      title: "nice title",
      body: "nice body for this thing"
    },
    {
      id: 2,
      title: "nice title for 2",
      body: "nice body for this t wow the second instancehing"
    }
  ]);
  // set the new page to load
  ph.setCurrentPage("LOAD-RESULTS");

  // take the element wanted and prepare layout with page
  const page = ph.getCurrentPage();
  const elementsArray = domSelector(page);
  // the view needs this instance of the object to load the html template extracting the oject of records
  view.fill(elementsArray, ph);
};

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
  console.log("ACTION CALLED; LOADING FORM FOR Searching");
};

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
  console.log("ACTION CALLED; LOADING FORM FOR INSERTING");
};
