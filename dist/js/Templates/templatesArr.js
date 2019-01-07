export const templatesArr = [
  // FIRST WRAPPER MUST HAVE THE LOADING-ID ATTRIBUTE TO CALL THE FUNCTION FROM THE FORM
  {
    name: "INSERT-DATA",
    html: `
    <div class="form-wrap" loading-id="INSERT-DATA"> 
    <div class="form-group form-group-input">
        <input loading-id="title" type="text" name="title" placeholder="title" class="form-input-text" />
    </div>
    <div class="form-group form-group-input">
        <input loading-id="body" type="text" name="body" placeholder="body" class="form-input-text" />
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
        <input loading-id="input-search" type="text" name="search" class="form-input-text" />
    </div>
    <div class="form-group form-group-submit">
        <input
        type="submit"
        name="submit"
        value="SEARCH SOMETHING"
        class="form-input-submit"
        />
    </div>
    </div>
    `
  }
];
