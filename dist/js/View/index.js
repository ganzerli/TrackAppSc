import Templates from "../Templates";

export default class View {
  constructor() {}

  fill(array, ph = null) {
    // looping throught the interested elements
    let value;
    array.forEach(x => {
      // removing old elements
      x.innerHTML = "";
      // getting the page to send for the tmeplate
      const interestedAttribute = x.attributes["loading-id"].value;
      // see which template matches the attributes and return the right html for this element
      switch (interestedAttribute) {
        case "result-container":
          //get dinamic template from object
          // get the template with results from the pages handler
          if (false) {
          } else {
            const resultSet = ph.getResultSet();
            value = Templates.prototype.getResultElements(resultSet);

            value ? (x.innerHTML = value) : undefined;
          }
          break;
        case "form-commands":
          // get static templates
          value = Templates.prototype.getAssignedHtml(ph);
          value ? (x.innerHTML = value) : undefined;

          break;
        case "subtitle":
          // get static templates
          const page = ph.getCurrentPage();
          value = Templates.prototype.refreshSubtitle(page);
          value ? (x.innerHTML = value) : undefined;

          break;
        default:
          console.log("ERROR : switch in View/index.js does not work fine");
          console.log(" A VIEW FOR THIS ATTRIBUTE IS NOT SET in class View");
      }
    });
  }
}
