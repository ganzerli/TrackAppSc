export const fillResultFromObject = recordObj => {
  // takes the object and returns a template
  const theDate = new Date(recordObj.date).toLocaleString();
  const jsonString = JSON.stringify(recordObj);
  return `
  <div class="result-record-container" json-data='${jsonString}' loading-id="result-record-${
    recordObj.id
  }">
    <h3 class="result-record-title">${recordObj.title}</h3>
    <p class="result-record-body">${recordObj.body}</p>
    <span class="result-record-date" loading-id="date-${
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
