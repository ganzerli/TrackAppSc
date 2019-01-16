import { getIdSession } from "../actions";

export const fillResultFromRecord = recordObj => {
  // takes the object and returns a template
  const theDate = new Date(recordObj.date).toLocaleString();
  const jsonString = JSON.stringify(recordObj);
  const bgClass = recordObj.checked === "true" ? "checked" : "";

  // if comes from backend get is-crypt attr
  const isCryptAttr = () => {
    // getting one attribute undefined if msg comes from backend
    if (recordObj.alarm === undefined) {
      return `is-crypt=${recordObj.id}`;
    } else {
      return "";
    }
  };

  console.log(recordObj);

  // taking the numers of the session give border color
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
      const date = new Date(parseInt(recordObj.sessionId))
        .toLocaleString()
        .substr(0, 9);
      return date;
    }
  };

  // display goals with textfield and button to update goal
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

  // style goals with his vslue
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

  // true if is an alarm
  const isAlarm = recordObject => {
    if (recordObject.alarm) {
      if (recordObj.alarm !== "" || recordObj.body === "") {
        return true;
      }
    } else {
      return false;
    }
  };

  // other styling for alarms set
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

    <small class="result-record-goals"> ${insertGoals()} </small>
    <h3 class="result-record-title" crypt >${recordObj.title}</h3>

    <!--

    ${
      isAlarm(recordObj) || isCryptAttr() !== ""
        ? ""
        : '<button class="result-record-btn-marktext" loading-id="select-highlighted">selext</button>'
    }
    -->
    
    <p class="result-record-body" crypt>${recordObj.body}</p>

    <span class="result-record-date" crypt-date crypt loading-id="${
      recordObj.date
    }">${theDate}</span>

    <span class="result-record-marked" loading-id="check-record-${
      recordObj.id
    }"> ${
    recordObj.checked === "false"
      ? "<span class='goal result-record-marked-text'>...</span>"
      : "<span class='red result-record-marked-text'>IMPORTANT!</span>"
  }</span>

    <span class="result-record-delete">
      
      <button  ${isCryptAttr()} class="btn-record-delete" loading-id="delete-record-${
    recordObj.id
  }">DELETE</button>
      
    </span>
  
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
      return '<span class="red result-goals-status">Goal Resetted</span>';
    }
    if (goal.done) {
      return '<span class="green result-goals-status">Goal Done</span>';
    } else {
      return '<span class="goal result-goals-status">Goal To Do</span>';
    }
  };

  const sessionBorder = () => {
    let style;
    let sessionNumbers;
    // the encrypted string should be tested to be NaN..
    if (isNaN(obj.sessionId)) {
      console.log(obj.sessionId);
      sessionNumbers = "999999";
    } else {
      sessionNumbers = obj.sessionId
        .toString()
        .split("")
        .splice(obj.sessionId.length - 6, obj.sessionId.length)
        .join("");
    }
    style = `style="
    border-right:5px solid #${sessionNumbers}; 
    border-bottom: 1px solid #${sessionNumbers};
    "`;

    return style;
  };

  const goalsInfo = goals => {
    let result = goals.map(
      g => `
      <div class="result-goals-wrap loading-id="${g.name}">
        <h3 class="result-goals-name">${g.name}</h3>
        <span class="result-goals-status">${getStauts(g)}</span>
        <span class="result-goals-status-btn">${btnStatus(g)}</span>
        
        <span class="result-goals-delete">
          <button class="btn-record-delete" sessionId="${
            obj.sessionId
          }" loading-id="delete-goals" info="${g.name}">delete</button>
        </span>

        <p class="result-goals-info">${g.info}</p>
      </div>`
    );
    return result.join("");
  };

  // main
  return `<div class="result-goals-display loading-id="result-goal"" ${sessionBorder()}>

    <h3 class="result-goals-title">
    ${new Date(parseInt(obj.sessionId)).toLocaleString().substr(0, 9)}
      </h3>
  
    ${goalsInfo(obj.goals)}
  
  </div>`;
};
