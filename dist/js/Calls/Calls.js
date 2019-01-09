import ClientDb from "../ClientDb";
import GoalsManager from "../GoalsManager";
export default class Calls {
  constructor() {
    this.response = [];
  }

  // functions for fetching the local storage

  getDataFromIndexedDb() {
    let promise;
    const db = new ClientDb();
    promise = db.getRecords();
    return promise;
    // return this.response;
  }

  // called from the action of the form to add an element
  pushDataToIndexedDb(data) {
    const db = new ClientDb();
    db.insertRecord(data);
  }

  deleteFromIndexedDb(id) {
    const db = new ClientDb();
    db.deleteOne(id);
  }

  updateRecord(dataObj) {
    const db = new ClientDb();
    db.updateOne(dataObj);
  }

  checkGoal(name, sessionId, info) {
    //update the goal in the storage
    const gm = new GoalsManager(name, sessionId);
    gm.writeGoal(info);
  }

  getGoals() {
    const gm = new GoalsManager();
    return gm.getGoals();
  }
  // functions to get something from remote storage
  getDataFromBackend() {}
  pushDataToBackend() {}
}
