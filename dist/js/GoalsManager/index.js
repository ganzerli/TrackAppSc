export default class GoalsManager {
  constructor(name, sessionId) {
    //console.log("goalsmanager instanciated and redy");
    this.name = name;
    this.sessionId = sessionId;
    this.dataObj = {};
  }
  goalStatus() {
    // GOAL STATUS
    console.log("setting goal" + this.sessionId);
    let status = "to-do";
    // get from storage
    // parse
    // look at the session id
    // find the name of the goal
    // returns the status of this goal "to-do", "done" " unset"
    // if done mark and write info
    // if reminded mark and write info.. info
    // set the data object as this old data
    return status;
  }

  writeGoal(newInfo) {
    const info = newInfo || "";
    const status = this.goalStatus();
    switch (status) {
      case "to-do":
        // mark and if there isthe info write
        console.log(status);
        break;
      case "done":
        // mark and if there is no new info let empty
        console.log(status);
        break;
      case "unset":
        // continue
        console.log(status);
        break;
      default:
        console.log("default case writing goal");
    }
  }
}
