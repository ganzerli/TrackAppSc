export function domSelector(page) {
  let elementsArray = new Array();
  const loadingId = x => document.querySelector("[loading-id=" + x + "]");
  switch (page) {
    case "INSERT-DATA":
      // return the array of elements that the view needs
      elementsArray = [];
      elementsArray.push(loadingId("form-commands"));
      elementsArray.push(loadingId("subtitle"));
      break;
    case "LOAD-RESULTS":
      elementsArray = [];
      elementsArray.push(loadingId("result-container"));
      break;
    case "SEARCH-DATA":
      elementsArray = [];
      elementsArray.push(loadingId("form-commands"));
      elementsArray.push(loadingId("subtitle"));
      break;
    case "LOAD-SESSION-GOAL":
      elementsArray = [];
      elementsArray.push(loadingId("form-commands"));
      elementsArray.push(loadingId("subtitle"));
      break;
    case "LOAD-ALARM-INPUT":
      elementsArray = [];
      elementsArray.push(loadingId("form-commands"));
      elementsArray.push(loadingId("subtitle"));
      break;
    case "LOAD-GOALS":
      elementsArray = [];
      elementsArray.push(loadingId("result-container"));
      break;

    case "LOAD-CRYPT-OPT":
      elementsArray = [];
      elementsArray.push(loadingId("form-commands"));
      elementsArray.push(loadingId("subtitle"));
      break;

    default:
      console.log("default");
  }
  return elementsArray;
}
