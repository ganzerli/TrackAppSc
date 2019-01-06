import { loadRecords, loadInsertData, loadSearchData } from "../actions";

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

const submitForm = e => {
  // GETTING THE VALUE FROM THE FIRST DIV IN THE TEMPLATE
  const submitted = e.target.firstChild.nextSibling.getAttribute("loading-id");
  console.log(submitted);
  // initiate a class that handles the calls
  switch (submitted) {
    case "SEARCH-DATA":
      console.log(submitted);
      // displaying the result set
      loadRecords();
      // calling action to query api and fill the new view of the result
      break;
    case "INSERT-DATA":
      //loadRecords();
      console.log("inserting data to db");
      console.log(submitted);
      break;
    default:
      console.log("default value of switch for form event listener");
  }

  // take the inputs and send a post request to backend for to load the record
};

export const listenNavbar = () => {
  const navbar = loadingId("navbar-commands");
  if (navbar) {
    navbar.addEventListener("click", e => delegationNavbar(e));
  }
  const delegationNavbar = e => {
    const trgt = e.target.getAttribute("loading-id");

    if (trgt === "search-data") {
      //load form to search
      loadSearchData();
      console.log(trgt);
    }
    if (trgt === "add-data") {
      // load the form
      loadInsertData();
      console.log(trgt);
    }
  };
};
