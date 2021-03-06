export default class GoalsManager {
  constructor(name, sessionId) {
    console.log("goalsmanager instanciated and redy");
    this.name = name;
    this.sessionId = sessionId;
    this.dataObj = JSON.parse(localStorage.getItem("session-goals"));
    this.info = "";
    this.sessionIndex;
    this.goalIndex;
    this.done;
    this.resetted = false; // is anyway not accessed from the check if not alredy checked
    this.lastEnter = 0;
  }

  //localStorage.removeItem(key);

  goalStatus() {
    // GOAL STATUS
    if (this.name !== "goal-info-input" && this.sessionId) {
      ////////////////////  ^-----   SCREEN FOR BUGS   ////////////////////////////////
      let status;
      this.dataObj.forEach((session, index) => {
        if (session.sessionId === this.sessionId) {
          this.sessionIndex = index;
        }
        // searching for a goal, looping throught the {session:"123" , goals:[]}
        session.goals.forEach((g, i) => {
          // find which index is this goal
          if (g.name === this.name) {
            //remember index
            this.goalIndex = i;
            /// check for last time !!!!
            const tenSeconds = 1000 * 10;
            if (Date.now() - g.last > tenSeconds * 6) {
              console.log("time check ok");
              if (!g.done) {
                //to check as done
                this.done = true;
              } else if (g.done) {
                this.resetted = true;
                //to check as reminded
              }
              this.lastEnter = Date.now();
              status = true;
            } else {
              console.log("something wrong:   date.now was to near  ");
              status = false;
            }
          }
        });
      });
      return status;
      /////////////////////screen for bugs -- keep -- ///////-------v
    } else {
      console.log("something wrong:     first screen not passed");
      return false;
    }
  }

  // UPDATE STATE GOAL
  writeGoal(newInfo) {
    const info = newInfo || "";
    this.info = info;

    if (this.goalStatus()) {
      //getting reference from stored object from the local storage
      const newObject = {
        name: this.name,
        done: this.done,
        resetted: this.resetted,
        info: this.info,
        last: this.lastEnter
      };

      this.dataObj[this.sessionIndex].goals[this.goalIndex] = newObject;
      localStorage.setItem("session-goals", JSON.stringify(this.dataObj));
      return newObject;
    }
  }

  // GET GOALS
  getGoals() {
    let goals = [];
    const itemArr = JSON.parse(localStorage.getItem("session-goals"));
    console.log(itemArr);
    // loop to check for .goals.length;
    for (let i in itemArr) {
      if (itemArr[i].goals.length > 0) {
        goals.push(itemArr[i]);
      }
    }

    return goals;
  }

  // DELETE SINGLE GOAL
  deleteGoal(name) {
    let sessionIndex;
    let goalIndex;
    const itemArr = JSON.parse(localStorage.getItem("session-goals"));
    // search throught
    itemArr.forEach((session, i) => {
      session.goals.forEach((goal, ind) => {
        console.log(i, ind);
        if (goal.name === name) {
          // remember the indexes
          sessionIndex = i;
          goalIndex = ind;
        }
      });
    });

    //removing from goals array with indexes
    itemArr[sessionIndex].goals.splice([goalIndex], 1);

    // if no goals remove the session object from array
    if (itemArr[sessionIndex].goals.length < 1) {
      itemArr.splice([sessionIndex], 1);
    }

    //reset storage
    localStorage.setItem("session-goals", JSON.stringify(itemArr));

    return itemArr;
  }
}
