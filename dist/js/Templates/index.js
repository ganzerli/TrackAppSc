import { templatesArr } from "./templatesArr";
import { fillResultFromRecord, fillResultFromGoal } from "./functionTemplates";

export default class Templates {
  constructor() {
    this.template = "";
  }

  //looking in the templates array the right template for this element of the current page
  matchTemplate(templatesArr, toset) {
    // looping throught an pbject of the templates seeing which has the attribute.. and take the html
    templatesArr.forEach(templateObj => {
      if (templateObj.name === toset) {
        this.template = templateObj.html;
        return this.template;
      }
    });
    // if no template found in the array of templatesArr return the template
    return this.template;
  }

  getAssignedHtml(ph) {
    // taking current page to match the name of the template in templatesArray
    const toset = ph.getCurrentPage();
    // returns the template found
    return this.matchTemplate(templatesArr, toset);
  }

  // resultSet comes from the action, passed with ph in the view, in case of result component to update passes the result set
  getResultElements(resultSet, ph) {
    // getting the result set from the page handler, loop throught the array and generate tempplate for each element,
    this.template = "";
    if (ph.getCurrentPage() === "LOAD-RESULTS") {
      resultSet.forEach(obj => {
        // somehow pass the obkect and return the template
        this.template += fillResultFromRecord(obj);
      });
    } else if (ph.getCurrentPage() === "LOAD-GOALS") {
      resultSet.forEach(obj => {
        // somehow pass the obkect and return the template
        this.template += fillResultFromGoal(obj);
      });
    }
    return this.template;
  }

  refreshSubtitle(page) {
    this.template = page;
    return this.template;
  }
}
