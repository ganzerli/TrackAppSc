export function domSelector(page) {
  let elementsArray = new Array();
  const loadingId = x => document.querySelector("[loading-id=" + x + "]");
  switch (page) {
    case "INSERT-DATA":
      // return the array of elements that the view needs
      elementsArray = [];
      elementsArray.push(loadingId("form-commands"));
      break;
    case "LOAD-RESULTS":
      elementsArray = [];
      elementsArray.push(loadingId("result-container"));
      break;
    case "SEARCH-DATA":
      elementsArray = [];
      elementsArray.push(loadingId("form-commands"));
      break;
    default:
      console.log("default");
  }
  return elementsArray;
}
