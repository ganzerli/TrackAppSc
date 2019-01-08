export default class GoalsManager {
  constructor(name, sessionId) {
    //console.log("goalsmanager instanciated and redy");
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
      ///////////////////////    SCREEN FOR BUGS   ////////////////////////////////
      let status;
      this.dataObj.forEach((session, index) => {
        //     console.log(session.sessionId);
        //    console.log(session.goals);
        //   console.log(index);
        if (session.sessionId === this.sessionId) {
          this.sessionIndex = index;
        }
        // searching for a goal, no duplicates
        //looping throught the {session:"123" , goals:[]}
        // find which index is this goal
        session.goals.forEach((g, i) => {
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
      /////////////////////screen for bugs -- keep -- ///////
      //
    } else {
      console.log("something wrong:     first screen not passed");
      return false;
    }
  }

  writeGoal(newInfo) {
    const info = newInfo || "";
    this.info = info;

    console.log("status  " + this.goalStatus());
    // boolean
    if (this.goalStatus()) {
      // everything should have a sense now
      //getting reference from stored object from the local storage
      const goalObjRef = this.dataObj[this.sessionIndex].goals[this.goalIndex];
      //
      const newObject = {
        name: this.name,
        done: this.done,
        resetted: this.resetted,
        info: this.info,
        last: this.lastEnter
      };

      this.dataObj[this.sessionIndex].goals[this.goalIndex] = newObject;
      localStorage.setItem("session-goals", JSON.stringify(this.dataObj));
    }
  }
}
