class PageHandler {
  constructor() {
    this.currentPage = "INSERT-DATA";
    this.resultSet = [];
  }

  // SET GET ter for CurrentPage
  getCurrentPage() {
    return this.currentPage;
  }
  setCurrentPage(page) {
    this.currentPage = page;
  }

  // SET GET ter for resultSet
  getResultSet() {
    return this.resultSet;
  }
  setResultSet(resultSet) {
    this.resultSet = resultSet;
  }
}
export default PageHandler;
