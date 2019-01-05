import { loadRecords, loadInsertData, loadSearchData } from "../actions";

const loadingId = x => document.querySelector("[loading-id=" + x + "]");

export const activateFormButton = () => {
  const form = loadingId("form-commands");

  if (form) {
    form.addEventListener("submit", () => {
      submitForm();
    });
  }
};

const submitForm = () => {
  console.log("form submitted");
  loadRecords();
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
