import {
  loadRecords,
  insertRecord,
  loadInsertData,
  loadSearchData,
  deleteRecord
} from "../actions";

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

  // initiate a class that handles the calls
  switch (submitted) {
    case "SEARCH-DATA":
      // console.log(submitted);
      // displaying the result set
      loadRecords();
      // calling action to query api and fill the new view of the result
      break;
    case "INSERT-DATA":
      const form = e.target;
      insertRecord(form);
      //  console.log(submitted);
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
      // loads the result
      loadRecords();
    }
    if (trgt === "add-data") {
      // load the form
      loadInsertData();
      console.log(trgt);
    }
  };
};

export const listenResult = () => {
  const resultContainer = loadingId("result-container");
  if (resultContainer) {
    resultContainer.addEventListener("click", resultDelegation);
  }
};

const resultDelegation = e => {
  // checking if it has a js attribute
  let element = e.target.getAttribute("loading-id") || undefined;
  //checking if an element with attribute there is
  if (element) {
    // split the id and the attribute
    if (element.startsWith("delete-record-")) {
      // A BTN DELETE HS BEEN CLICKED
      // taking as array last numbers of attribute to have the id
      let id = element.split("").splice(14, element.length - 14);
      // id is an array
      id = id.join("");
      // now there is an id to send to the call,
      deleteRecord(id);
    }
  }
};
