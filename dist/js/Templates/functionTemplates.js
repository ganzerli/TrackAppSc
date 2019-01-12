import { getIdSession } from "../actions";

export const fillResultFromRecord = recordObj => {
  // takes the object and returns a template
  const theDate = new Date(recordObj.date).toLocaleString();
  const jsonString = JSON.stringify(recordObj);
  const bgClass = recordObj.checked === "true" ? "checked" : "";

  const sessionBorder1 = () => "style=''";
  console.log(recordObj);

  const sessionBorder = () => {
    let style;
    let sessionNumbers;
    // the encrypted string should be tested to be NaN..
    if (isNaN(recordObj.sessionId)) {
      console.log(recordObj.sessionId);
      sessionNumbers = "999999";
    } else {
      sessionNumbers = recordObj.sessionId
        .toString()
        .split("")
        .splice(recordObj.sessionId.length - 6, recordObj.sessionId.length)
        .join("");
    }
    style = `style="
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

  const isAlarm = recordObject => {
    if (recordObject.alarm) {
      if (recordObj.alarm !== "" || recordObj.body === "") {
        return true;
      }
    } else {
      return false;
    }
  };

  isAlarm(recordObj);

  const setAlarmStyle = recordObj => {
    if (isAlarm(recordObj)) {
      //return a class for alarm
      return "alarm";
    } else {
      return "";
    }
  };

  return `
  <div class="result-record-container ${bgClass} ${setAlarmStyle(
    recordObj
  )}" json-data='${jsonString}' loading-id="result-record-${
    recordObj.id
  }"  ${sessionBorder()}   >

    <h6 class="result-record-session" >${
      isAlarm(recordObj) ? "ALARM" : checkSession()
    }  </h6>

    <small> ${insertGoals()} </small>
    <h3 class="result-record-title" crypt >${recordObj.title}</h3>

    ${
      isAlarm(recordObj)
        ? ""
        : '<button class="result-record-btn-marktext" loading-id="select-highlighted">selext</button>'
    }
    
    <p class="result-record-body" crypt>${recordObj.body}</p>
    <span class="result-record-date" crypt-date crypt loading-id="${
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

//#####################################################################################################################################################
//####################################################################################################################################################
//####################################################################################################################################################
//####################################################################################################################################################

export const fillResultFromGoal = obj => {
  const btnStatus = goal => {
    const js = JSON.stringify(goal);

    console.log(js);
    if (goal.resetted) {
      return `
      <form
        session-id="${obj.sessionId}"
        info-obj='${js}'
        onsubmit="return false"
        loading-id="form-info-goal"
        class="the-form"
      >
        <input
          loading-id="goal-info-inputField"
          type="text"
          name="infogoal"
          class="goal-info-inputField"
        />
        <input
          type="submit"
          loading-id="goal-info-submit"
          name="submit"
          class="btn-submit-goals"
          value="x"
        />
        </form>
        `;
    }
    if (goal.done) {
      return `
      <form
        session-id="${obj.sessionId}"
        info-obj='${js}'
        onsubmit="return false"
        loading-id="form-info-goal"
        class="the-form"
      >
        <input
          loading-id="goal-info-inputField"
          type="text"
          name="infogoal"
          class="goal-info-inputField"
        />
        <input
          type="submit"
          loading-id="goal-info-submit"
          name="submit"
          class="btn-submit-goals"
          value="Unset"
        />
        </form>
        `;
    } else {
      return `
      <form
      session-id="${obj.sessionId}"
      info-obj='${js}'
      onsubmit="return false"
      loading-id="form-info-goal"
      class="the-form"
    >
      <input
        loading-id="goal-info-inputField"
        type="text"
        name="infogoal"
        class="goal-info-inputField"
      />
      <input
        type="submit"
        loading-id="goal-info-submit"
        name="submit"
        class="btn-submit-goals"
        value="Done !"
      />
      </form>
      `;
    }
  };

  const getStauts = goal => {
    if (goal.resetted) {
      return '<span class="goal">Goal Resetted</span>';
    }
    if (goal.done) {
      return '<span class="green">Goal Done</span>';
    } else {
      return '<span class="goal">Goal To Do</span>';
    }
  };

  const goalsInfo = goals => {
    let result = goals.map(
      g => `<div class="goal-container loading-id="${g.name}">
      <h3 class="result-goal-name">${g.name}</h3>
      <span class="result-goal-status">${getStauts(g)}</span>
      <span class="result-goal-status-btn">${btnStatus(g)}</span>
      <p class="result-goal-info">${g.info}</p>
      <button class="btn-goal-delete" sessionId="${
        obj.sessionId
      }" loading-id="delete-goal" info="${g.name}">delete</button>
      </div>`
    );
    return result.join("");
  };
  return `<div class="result-goal-container" loading-id="result-goal">
  <h3 class="result-record-title">${obj.sessionId}</h3>
  <div class="goal-display">${goalsInfo(obj.goals)}</div>
  </div>`;
};
