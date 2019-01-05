import PageHandler from "./pages/pageHandler";
import { domSelector } from "./pages/domSelector";
import View from "./View";
import { activateFormButton, listenNavbar } from "./eventListeners";
//on page loaded
document.addEventListener("DOMContentLoaded", () => {
  // set base to load the components
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
});
