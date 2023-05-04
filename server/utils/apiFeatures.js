class APIFeatures {
  constructor(results, queryString) {
    const data = {};
    data.results = results;
    this.data = data;
    this.queryString = queryString;
  }

  // Pagination
  paginate() {
    const page = +this.queryString.page || 1;
    const limit = +this.queryString.limit || 9;
    //e.g. page=2&limit=10 , 1-10 page 1, 11-20 page 2 ...

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const resultsLength = this.data.results.length;

    if (endIndex < resultsLength) {
      this.data.next = {
        page: page + 1,
        limit: limit,
      };
    }
    if (startIndex > 0) {
      this.data.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    this.data.results = this.data.results.slice(startIndex, endIndex);
    this.data.totalPages = Math.ceil(resultsLength / limit);
    this.data.totalResults = this.data.results.length;
    this.data.page = page;
    return this;
  }


  // Sort
  sort() {
    if (this.queryString.sort) {
      this.data.results = this.data.results.sort((a, b) => {
        const { id } = a;
        const { id: idB } = b;

        switch (this.queryString.sort) {
          case '-id':
            return idB - id;
          case 'id':
            return id - idB;
          default:
            return id.localeCompare(idB);
        }
      });
    }

    return this;
  }
}

module.exports = APIFeatures;
