export const fillResultFromObject = recordObj => {
  // takes the object and returns a template
  return `
  <div class="result-record-container" loading-id="result-record">
    <h3 class="result-record-title"> ${recordObj.title} </h3>
    <p class="result-record-body"> ${recordObj.body} </p>
  </div>
  `;
};
