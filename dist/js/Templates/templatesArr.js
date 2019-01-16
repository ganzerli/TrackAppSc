export const templatesArr = [
  // FIRST WRAPPER MUST HAVE THE LOADING-ID ATTRIBUTE TO CALL THE FUNCTION FROM THE FORM
  {
    name: "INSERT-DATA",
    html: `
    <div class="form-wrap" loading-id="INSERT-DATA"> 
      
      <div class="form-group form-group-input">
          <input loading-id="title" type="text" name="title" placeholder="title" class="form-input-textfield" />
      </div>

      <div class="form-group form-group-body">
          <textarea
          class="form-input-textarea"
          loading-id="body"
          type="text"
          name="body"
          placeholder="body"
        /></textarea>
    
      </div>

      <div class="form-group form-group-submit">
          <input
          type="submit"
          name="submit"
          value="submit"
          class="form-input-submit"
          />
      </div>
    
    </div>
    `,
    subtitle: "Add records to remember!"
  },
  // FIRST WRAPPER MUST HAVE THE LOADING-ID ATTRIBUTE TO CALL THE FUNCTION FROM THE FORM
  {
    name: "SEARCH-DATA",
    html: `
    <div class="form-wrap" loading-id="SEARCH-DATA"> 

      <div class="form-group form-group-input-search">
          <input loading-id="input-search" type="text" name="search" class="form-input-textfield" />
      </div>
      
      <div class="form-group form-group-submit">
          <input
          type="submit"
          name="submit"
          value="ALL"
          class="form-input-submit"
          />
      </div>

      <div class="form-group form-group-info-search">
        <p class="form-info-text"> Type something in the field to serch throught your records. The search works also for values of the date and time, then you can directly search a date in the field, a part of it, a part of the title or body of your record, to get the info you need! </p>
      </div>
      
    </div>
    `,
    subtitle: "Search between al your records!"
  },
  // FIRST WRAPPER MUST HAVE THE LOADING-ID ATTRIBUTE TO CALL THE FUNCTION FROM THE FORM
  {
    name: "LOAD-SESSION-GOAL",
    html: `
    <div class="form-wrap" loading-id="LOAD-SESSION-GOAL"> 

      <div class="form-group form-group-input">
          <input loading-id="session-goal-input" type="text" name="goal" class="form-input-textfield" />
      </div>
      
      <div class="form-group form-group-setgoal">
          <input
          type="submit"
          name="submit"
          value="set Goal"
          class="form-input-submit"
          />
      </div>
      
      <div class="form-group form-group-manage-goal">
        <button class="btn-load-goals" loading-id="load-goals" >MANAGE GOALS</button>
      </div>
    

      <div class="form-group form-group-info">
        <p class="form-info-text">
          Click <b>Manage Goals</b> to <b>display</b> all the goal set until now, in which session and the status of the goal, so u can set the goal done or change idea and reset it, in every case you can leave a message about your choice
        </p>
      </div>
      

      </div>
    `,
    subtitle: "Manage your goals!"
  },
  // FIRST WRAPPER MUST HAVE THE LOADING-ID ATTRIBUTE TO CALL THE FUNCTION FROM THE FORM
  {
    name: "LOAD-ALARM-INPUT",
    html: `
    <div class="form-wrap" loading-id="LOAD-ALARM-INPUT"> 
    
      <div class="form-group form-group-input">
          <input loading-id="alarm-name" type="text" name="alarm-name" placeholder="alarm" class="form-input-textfield" />
      </div>
    
      <div class="form-group form-group-input-date">
          <input loading-id="alarm-day" type="date" name="alarm-day" class="form-input-date" />
      </div>
      
      <div class="form-group form-group-input-hour">

          <label for="alarm-time-hours" class="form-input-radio-label">Hr:</label>
          <input loading-id="alarm-time-hours"  type="number" name="alarm-time-hours" placeholder="00" min="0" max="23" class="form-input-radio" />
      
          <label for="alarm-time-minutes" class="form-input-radio-label">Min:</label>
          <input loading-id="alarm-time-minutes"  type="number" name="alarm-time-minutes" placeholder="00" min="0" max="59" class="form-input-radio" />
          
      </div>

      <div class="form-group form-group-submit">
          <input
          type="submit"
          name="submit"
          value="submit"
          class="form-input-submit"
          />
      </div>


      <div class="form-group form-group-info">
        <p class="form-info-text"> Leave a message for later, and get notified when the time is gone! </p>
      </div>
      


    </div>
    `,
    subtitle: "Set an alarm for later!"
  },
  // FIRST WRAPPER MUST HAVE THE LOADING-ID ATTRIBUTE TO CALL THE FUNCTION FROM THE FORM
  {
    name: "LOAD-CRYPT-OPT",
    html: `
    <div class="form-wrap" loading-id="LOAD-CRYPT-OPT"> 

      <div class="form-group form-group-input-crypt">
        <input
          loading-id="crypt-field-title"
          type="text"
          name="infogoal"
          class="form-input-textfield-crypt"
        />
      </div>

        <div class="form-group form-group-body">
        <textarea
          loading-id="crypt-textarea-input"
          type="text"
          name="crypt"
          class="form-input-textarea"
        /></textarea>
      </div>

      <div class="form-group form-group-input-crypt">
        <input
          loading-id="crypt-field-key"
          placeholder="Your Key"
          type="text"
          name="infogoal"
          class="form-input-textfield-crypt"
        />
      </div>

      <div class="form-group form-group-submit">
        <input
          type="submit"
          loading-id="crypt-submit"
          name="submit"
          class="btn-submit-form-crypt"
        />
      </div>


    </div>
    `,
    subtitle: "Crypt and Decrypt with your Key!"
  }

  // FIRST WRAPPER MUST HAVE THE LOADING-ID ATTRIBUTE TO CALL THE FUNCTION FROM THE FORM

  // FIRST WRAPPER MUST HAVE THE LOADING-ID ATTRIBUTE TO CALL THE FUNCTION FROM THE FORM
  // FIRST WRAPPER MUST HAVE THE LOADING-ID ATTRIBUTE TO CALL THE FUNCTION FROM THE FORM

  // FIRST WRAPPER MUST HAVE THE LOADING-ID ATTRIBUTE TO CALL THE FUNCTION FROM THE FORM
];
