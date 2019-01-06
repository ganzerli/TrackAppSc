import { resolve } from "path";

export default class ClientDb {
  constructor() {
    this.set = [];
    this.storeArray = [];
    this.DB; //needed for the indexed db result
    //setup the transaction type
    //
    // connection to db
    // instanciate a new indexed database with name and version
    this.recordsDb = window.indexedDB.open("recordsDb", 1);

    // this method runs only once when instanciated
    /**
     * IN THE TOOLBOX OF THE BROWSER SELECTING APPLICATION STORAGE INDEXED DB IS POSSIBLE TO DELETE AN INSTANCIATED DB IN THE BROWSER;
     *  DELETING THE DB USED; WHEN THE NEW DB GET CREATED THIS METHOD RUNS AGAIN; ONLY ONCE PER DB
     */
    this.recordsDb.onupgradeneeded = e => {
      // IDBDatabase {name: "recordsDb", version: 1, objectStoreNames: DOMStringList, onabort: null, onclose: null, …}
      let db = e.target.result;
      // ####################### INDEXED DB   -  S C H E M A  -
      // keyPath is the indexes
      let objectStore = db.createObjectStore("recordsDb", {
        keyPath: "key",
        autoIncrement: true
      });
      // create the Index 1) field name, 2) keypath 3)options
      objectStore.createIndex("title", "title", { unique: false });
      objectStore.createIndex("body", "body", { unique: false });
      objectStore.createIndex("date", "date", { unique: false });
      objectStore.createIndex("checked", "checked", { unique: false });

      console.log("database ready first time running");
    };
  }

  // methods of this class must get set in the db and map to this.set
  fetchRecordsFromIndexedDb() {
    return new Promise(resolve => {
      // load the connection
      // SUCCESS opening
      this.recordsDb.onsuccess = () => {
        this.DB = this.recordsDb.result;
        // set transaction and get the object store from the store of transaction in thid db
        let objectStore = this.DB.transaction("recordsDb").objectStore(
          "recordsDb"
        );
        // this is the method to use to get the data
        objectStore.openCursor().onsuccess = e => {
          // assing the cursor
          // the cursor has the forst key and a proprty move next
          let cursor = e.target.result;
          if (cursor) {
            cursor.continue();
            const respObj = {
              title: cursor.value.title,
              body: cursor.value.body,
              date: cursor.value.date,
              checked: cursor.value.checked
            };
            this.storeArray.push(respObj);
          } else {
            // when the cursor has finished , then return!!
            resolve(this.storeArray);
          }
        };
      };
      //errors on connection
      this.recordsDb.onerror = e => {
        console.log("error" + e);
      };
    });
  }

  async loadSetFromIndexedDb() {
    let result;
    await this.fetchRecordsFromIndexedDb().then(res => {
      result = [...res];
    });

    return result;
  }
  /**
   * INSERT RECORT MIST SUPPLY TO THE INDEXED DB AN OBJECT WITH THE PROPS SET AS THE SCHEMA FOR TTHE DB
   *
   */
  insertRecord(record) {
    // taking the record and push into array
    const theRecord = record;
    // load the set
    this.loadSetFromIndexedDb();

    // activate db
    // ERROR on open
    this.recordsDb.onerror = e => {
      console.log("error" + e);
    };

    // SUCCESS opening
    this.recordsDb.onsuccess = () => {
      this.DB = this.recordsDb.result;
      // then
      let transaction = this.DB.transaction(["recordsDb"], "readwrite");
      // objectStore has the keypath
      let objectStore = transaction.objectStore("recordsDb");
      // make the request to the db
      let request = objectStore.add(theRecord);
      // SUCCESS
      request.onsuccess = () => {
        // if refresh form needed or something
      };
      transaction.oncomplete = () => {
        console.log("the record is been added");
      };
      transaction.onerror = () => {
        console.log("something went wrong");
      };
      // SET THE SET!!
      this.set.push(record);
    };
    // returns the set after new element is been pushed
    return this.set;
  }

  async getRecords() {
    let a = await this.loadSetFromIndexedDb();
    return a;
  }
}
