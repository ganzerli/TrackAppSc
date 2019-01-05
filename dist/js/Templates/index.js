import { templatesArr } from "./templatesArr";

export default class Templates {
  constructor() {
    this.template = "";
  }

  getAssignedHtml(ph) {
    const toset = ph.getCurrentPage();
    // looping throught an pbject of the templates seeing which has the attribute.. and take the html
    //if assigned html is static all good get it from array
    templatesArr.forEach(templateObj => {
      if (templateObj.name === toset) {
        this.template = templateObj.html;
        return this.template;
      }
    });

    return this.template;
  }

  getResultElements(resultSet) {
    this.template = resultSet;
    // somehow pass the obkect and return the template
    return this.template;
  }

  refreshSubtitle(page) {
    this.template = page;
    return this.template;
  }
}
