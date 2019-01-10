import PageHandler from "./pages/pageHandler";
import { domSelector } from "./pages/domSelector";
import View from "./View";

import {
  activateFormButton,
  listenNavbar,
  listenResult,
  mainClickListenerForClosingContents,
  alarmsCheck,
  loginForm
} from "./eventListeners";
//on page loaded
document.addEventListener("DOMContentLoaded", () => {
  loginForm(start);
});

const start = () => {
  const ph = new PageHandler();
  const view = new View();
  const page = ph.getCurrentPage();
  // having the page to load fill the components needed
  const elementsArray = domSelector(page); // swithc for to find the layout
  // call view with the page and the elements to load
  view.fill(elementsArray, ph);
  // event listener fr the navbar
  listenNavbar();
  activateFormButton();
  listenResult();
  mainClickListenerForClosingContents();
  alarmsCheck();
}; //end if login
