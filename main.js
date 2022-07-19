// write your code here to make the tests pass
var Library = function () {
  var books = [];

  var addBook = function (book) {
    books.push(book);
  };

  var checkOutBook = function (book) {
    if (books.includes(book)) {
      book.setAttribute('checkedOut', true);
    }
  };

  var returnBook = function (book) {
    if (books.includes(book)) {
      book.setAttribute('checkedOut', false);
    }
  };
  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook,
  };
};

var Book = function (title, author) {
  var attributes = {
    title: title,
    author: author,
    checkedOut: false,
  };

  var getAttribute = function (att) {
    if (attributes.hasOwnProperty(att)) {
      return attributes[att];
    }
  };

  var setAttribute = function (att, val) {
    if (attributes.hasOwnProperty(att)) {
      attributes[att] = val;
    }
  };
  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute,
  };
};
library = Library();
hungerGames = Book('Hunger Games', 'Suzanne Collins');
console.log(hungerGames);
library.addBook(hungerGames);
console.log(hungerGames);
