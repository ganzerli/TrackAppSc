import Templates from "../Templates";

export default class View {
  constructor() {}

  fill(array, ph = null) {
    // looping throught the interested elements
    let value;
    array.forEach(domElement => {
      // removing old elements
      domElement.innerHTML = "";
      // getting the page to send for the tmeplate
      const interestedAttribute = domElement.attributes["loading-id"].value;
      // see which template matches the attributes and return the right html for this element
      switch (interestedAttribute) {
        case "result-container":
          //get dinamic template from object
          // get the template with results from the pages handler
          if (false) {
          } else {
            const resultSet = ph.getResultSet();
            value = document.createElement("div");
            value = Templates.prototype.getResultElements(resultSet, ph);
            console.log(value, domElement);
            value ? domElement.appendChild(value) : null;
          }
          break;
        case "form-commands":
          // get static templates
          value = Templates.prototype.getAssignedHtml(ph);
          // set the template as content of the dom element in scope  ---  domElement  --
          value ? (domElement.innerHTML = value) : null;

          break;
        case "subtitle":
          // get static templates
          const page = ph.getCurrentPage();
          value = Templates.prototype.refreshSubtitle(page);
          value ? (domElement.innerHTML = value) : null;

          break;
        default:
          console.log("ERROR : switch in View/index.js does not work fine");
          console.log(" A VIEW FOR THIS ATTRIBUTE IS NOT SET in class View");
      }
    });
  }
}
