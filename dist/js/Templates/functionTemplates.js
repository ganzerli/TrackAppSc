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

    const style = `style="
                          border-right:5px solid #${sessionNumbers}; 
                          border-bottom: 1px solid #${sessionNumbers};
                          
                          "`;
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
        if (recordObj.sessionId === storedArray[i].sessionId) {
          // if this session Object has ever had goals, they are displayed
          goals = [...storedArray[i].goals];
        }
      }

      //if for this session there are goals;
      if (goals) {
        let result = goals.map(
          goal =>
            ` 
            <form onsubmit="return false" loading-id="form-info-goal" class="the-form">
            <span
              class="result-record-onegoal ${goalStyle(
                goal.done,
                goal.resetted
              )}"
              session-id="${recordObj.sessionId}"
              loading-id="${goal.name}"
            >
              ${goal.name}

            </span>
            <br />
      
            <input
              loading-id="goal-info-input"
              type="text"
              name="infogoal"
              class="result-record-textfield"
            />
            <input type="submit" loading-id="goal-info-input" name="submit" class="btn-submit-goals" />
          </form>
          
            `
        );
        return `
        <span loading-id="goals-listener" class="result-record-goals">
          ${result.join("")}
        </span>
        `;
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

  // style goals
  const goalStyle = (done, resetted) => {
    let resClass = "goal";
    if (done && !resetted) {
      resClass = "green";
    }
    if (resetted) {
      resClass = "red";
    }
    return resClass; //different class or styles for different value
  };

  return `
  <div class="result-record-container ${bgClass}" json-data='${jsonString}' loading-id="result-record-${
    recordObj.id
  }"  ${sessionBorder()}   >
    <h4 class="result-record-session">${checkSession()}  </h4>
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
