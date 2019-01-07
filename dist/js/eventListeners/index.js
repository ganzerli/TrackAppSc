import {
  loadRecords,
  insertRecord,
  loadInsertData,
  loadSearchData,
  deleteRecord,
  checkRecord
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
