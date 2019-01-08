import { getIdSession } from "../actions";

export const fillResultFromObject = recordObj => {
  // takes the object and returns a template
  const theDate = new Date(recordObj.date).toLocaleString();
  const jsonString = JSON.stringify(recordObj);
  const bgClass = recordObj.checked === "true" ? "checked" : "";
  const sessionBorder = () => {
    const sessionNumbers = recordObj.sessionId
      .split("")
      .splice(recordObj.sessionId.length - 6, recordObj.sessionId.length)
      .join("");

    const style = `style="border-right:5px solid #${sessionNumbers};"`;
    return style;
  };
  //see if current session using get sessionid
  const checkSession = () => {
    if (getIdSession() === recordObj.sessionId) {
      return "Current Session";
    } else {
      return recordObj.sessionId;
    }
  };
  // get the goals from local storage
  const insertGoals = () => {
    const storedArray = JSON.parse(localStorage.getItem("session-goals"));
    if (storedArray) {
      let goals;
      // loop throught sessions {sessionId:12345, goals[]}
      for (let i in storedArray) {
        //check which is the session
        console.log(recordObj.sessionId);
        console.log(storedArray[i].sessionId);

        if (recordObj.sessionId === storedArray[i].sessionId) {
          console.log(storedArray[i].sessionId);
          // if this session Object has ever had goals, they are displayed
          goals = [...storedArray[i].goals];
        }
      }

      //if for this session there are goals;
      if (goals) {
        let result = goals.map(
          goal => ` <span class="result-record-onegoal"> ${goal.name} </span> `
        );

        return `<span class="result-record-goals>${result.join("")}</span>`;
        //make span line
      } else {
        //if no goals for this session return an empty string
        return "  ----> no goals";
      }
    } else {
      // no local storage
      return "---> no goals";
    }
  };

  return `
  <div class="result-record-container ${bgClass}" json-data='${jsonString}' loading-id="result-record-${
    recordObj.id
  }"  ${sessionBorder()}   >
    <h4>${checkSession()}  ${recordObj.sessionId}</h4>
    <small> ${insertGoals()} </small>
    <h3 class="result-record-title">${recordObj.title}</h3>
    <button class="result-record-btn-marktext" loading-id="select-highlighted">selext</button>
    <p class="result-record-body">${recordObj.body}</p>
    <span class="result-record-date" loading-id="date-${
      recordObj.date
    }">${theDate}</span>
    <span class="result-record-marked" loading-id="check-record-${
      recordObj.id
    }"> ${recordObj.checked}</span>
    <button class="result-record-delete" loading-id="delete-record-${
      recordObj.id
    }">DELETE</button>
    
  </div>
  `;
};
