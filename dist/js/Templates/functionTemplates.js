export const fillResultFromObject = recordObj => {
  // takes the object and returns a template
  const theDate = new Date(recordObj.date).toLocaleString();
  const jsonString = JSON.stringify(recordObj);
  const bgClass = recordObj.checked === "true" ? "checked" : "";
  const sessionBorder = () => {
    const sessionNumbers = recordObj.sessionId
      .split("")
      .splice(recordObj.sessionId.length - 6, recordObj.sessionId.length)
      .join("");

    const style = `style="border-right:5px solid #${sessionNumbers};"`;
    return style;
  };

  return `
  <div class="result-record-container ${bgClass}" json-data='${jsonString}' loading-id="result-record-${
    recordObj.id
  }"  ${sessionBorder()}   >
    <h4>${recordObj.sessionId}</h4>
    <h3 class="result-record-title">${recordObj.title}</h3>
    <button class="result-record-btn-marktext" loading-id="select-highlighted">selext</button>
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
