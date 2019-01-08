import PageHandler from "./pages/pageHandler";
import { domSelector } from "./pages/domSelector";
import View from "./View";
import {
  activateFormButton,
  listenNavbar,
  listenResult
} from "./eventListeners";
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

  mainClickListenerForClosingContents();

  listenNavbar();
  activateFormButton();
  listenResult();
});

function mainClickListenerForClosingContents() {
  document.addEventListener("click", e => {
    //check for elements
    const goalFormStuff = document.querySelectorAll(
      "[loading-id=goal-info-input]"
    );
    if (goalFormStuff && goalFormStuff.length > 0) {
      console.log("there is the form somewhere");
      if (
        e.target.getAttribute("loading-id") !== "goal-info-input" &&
        !e.target.hasAttribute("session-id")
      ) {
        console.log("other attribute");
        const input = document.querySelectorAll("[loading-id=goal-info-input]");
        input.forEach(i => i.classList.remove("active"));
      }
    }
  });
}
