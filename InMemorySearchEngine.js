// Implement an in-memory search engine

// Implement an in-memory search engine where multiple documents could be stored under a particular namespace and search on them and sort the search results by passing the orderBy parameter.

// const searchEngine = new InMemorySearch();
// searchEngine.addDocuments('Movies',
//                     {name: 'Avenger', rating: 8.5, year: 2017},
//                     {name: 'Black Adam', rating: 8.7, year: 2022},
//                     {name: 'Jhon Wick 4', rating: 8.2, year: 2023},
//                     {name: 'Black Panther', rating: 9.0, year: 2022}
//                    );
// console.log(searchEngine.search('Movies', (e) => e.rating > 8.5, {key: 'rating', asc: false}));

/*
[
  {
    "name": "Black Panther",
    "rating": 9,
    "year": 2022
  },
  {
    "name": "Black Adam",
    "rating": 8.7,
    "year": 2022
  }
]
*/

class InMemorySearch {
  constructor() {
    this.inMemoryMap = new Map();
  }

  addDocuments(key, ...documents) {
    if (this.inMemoryMap.has(key)) {
      this.inMemoryMap.set(key, [...documents]);
    } else {
      let existingDocuments = this.inMemoryMap.get(key);
      existingDocuments?.length > 0
        ? this.inMemoryMap.set(key, [...existingDocuments, ...documents])
        : this.inMemoryMap.set(key, [...documents]);
    }
  }

  search(key, filterCallBackFn, sortObject) {
    return this.inMemoryMap
      .get(key)
      .filter(filterCallBackFn)
      .sort((a, b) =>
        sortObject.asc == "true"
          ? a[sortObject.key] > b[sortObject.key]
          : a[sortObject.key] < b[sortObject.key]
      );
  }
}

const searchEngine = new InMemorySearch();
searchEngine.addDocuments(
  "Movies",
  { name: "Avenger", rating: 8.5, year: 2017 },
  { name: "Black Adam", rating: 8.7, year: 2022 },
  { name: "Jhon Wick 4", rating: 8.2, year: 2023 },
  { name: "Black Panther", rating: 9.0, year: 2022 }
);

console.log(
  searchEngine.search("Movies", (e) => e.rating > 8.5, {
    key: "rating",
    asc: false,
  })
);
