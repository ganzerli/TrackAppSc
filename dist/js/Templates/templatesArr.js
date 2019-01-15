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
    `
  },
  // FIRST WRAPPER MUST HAVE THE LOADING-ID ATTRIBUTE TO CALL THE FUNCTION FROM THE FORM
  {
    name: "SEARCH-DATA",
    html: `
    <div class="form-wrap" loading-id="SEARCH-DATA"> 

      <div class="form-group form-group-input">
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

      <div class="form-group form-group-info">
        <p class="form-info-text"> HERE THE INFO </p>
      </div>
      
    </div>
    `
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
        <p class="form-info-text"> HERE THE INFO </p>
      </div>
      

      </div>
    `
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
      
      <div class="form-group form-group-input-radio">
          <input loading-id="alarm-time-hours"  type="number" name="alarm-time-hours" placeholder="00" min="0" max="23" class="form-input-radio" />
          <label for="alarm-time-hours" class="form-input-radio-label">Hour</label>
        
          <input loading-id="alarm-time-minutes"  type="number" name="alarm-time-minutes" placeholder="00" min="0" max="59" class="form-input-radio" />
          <label for="alarm-time-minutes" class="form-input-radio-label">Minutes</label>
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
        <p class="form-info-text"> HERE THE INFO </p>
      </div>
      


    </div>
    `
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
    `
  }

  // FIRST WRAPPER MUST HAVE THE LOADING-ID ATTRIBUTE TO CALL THE FUNCTION FROM THE FORM

  // FIRST WRAPPER MUST HAVE THE LOADING-ID ATTRIBUTE TO CALL THE FUNCTION FROM THE FORM
  // FIRST WRAPPER MUST HAVE THE LOADING-ID ATTRIBUTE TO CALL THE FUNCTION FROM THE FORM

  // FIRST WRAPPER MUST HAVE THE LOADING-ID ATTRIBUTE TO CALL THE FUNCTION FROM THE FORM
];
