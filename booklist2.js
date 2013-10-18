var Book = function(title, genre, author, read, readDate) {
    this.bookTitle = title;
    this.genre = genre;
    this.author = author;
    this.read = read;
    this.readDate = new Date(readDate);
};


var BookList = function(books){ //books is an array
    this.numBooksRead = function(){
        return this.booksRead.length;
    };

    this.numBooksUnread = function(){
        return this.booksUnread.length;
    };

    this.lastBook = function() {
        for (var i = 0; i < this.booksRead.length; i++) {
            latestRead = this.booksRead[i];

               for (var j = 0; j < this.booksRead.length; j++) {
                if (this.booksRead[j].readDate > latestRead.readDate) {
                    latestRead = this.booksRead[j];
                }
            }
        }
        return latestRead;
    };

    this.currentBook = function(){
        return this.booksUnread[0];
    };

    this.nextBook = function(){
        if (this.numBooksUnread===0) {
            return console.log("You have no unread books. Go to the library.");
        } else {
            return this.booksUnread[1];
        }
    };

    this.add = function(oneBook) {
        this.bookShelf.push(oneBook);
        if (oneBook.read === true) {
            this.booksRead.push(oneBook);
        } else {
            this.booksUnread.push(oneBook);
        }
    };

    this.finishCurrentBook = function() {
            this.currentBook().read = true;
            this.currentBook().readDate = new Date(Date.now());
            this.booksRead.push(this.currentBook());
            this.booksUnread.shift(this.currentBook());
    };
 
    //---------------------------------

    this.booksRead = [];
    this.booksUnread = [];
    this.bookShelf = [];

    for (var i = 0; i < books.length; i++) {
        this.add(books[i]);
    }

}; //end of the booklist

var harryPotter = new Book("Harry Potter & the Sorcerer's Stone", "Fiction", "J.K.Rowling", true, "01 Sep 1998");
var theBible = new Book("The Bible", "Religion", "God", false);
var warAndPeace = new Book("War And Peace", "Fiction", "Leo Tolstoy", false);
var pridePrejudice = new Book("Pride and Prejudice", "Fiction", "Jane Austen", true, "01 Jan 2008");

myBooks = [];
myBooks.push(harryPotter, warAndPeace, theBible, pridePrejudice);
var micasBookList = new BookList(myBooks);
//Test adding a book
var foodMatters = new Book("Food Matters", "Non-Fiction", "Michael Pollan", true, "01 Jan 2013");
micasBookList.add(foodMatters);


console.log("My last book: ", micasBookList.lastBook());
console.log("My current book: ",micasBookList.currentBook());
console.log("My next book: ", micasBookList.nextBook());

console.log("**************************");
micasBookList.finishCurrentBook();


console.log("My last book: ", micasBookList.lastBook());
console.log("My current book: ",micasBookList.currentBook());
console.log("My next book: ", micasBookList.nextBook());

