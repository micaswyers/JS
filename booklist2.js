var Book = function(title, genre, author,read, readDate) {
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

    this.addBook = function(oneBook) {
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
        this.addBook(books[i]);
    }

}; //end of the booklist

function displayBooks(arrayOfBooks) {

    var bookDisplay = document.getElementById("container");

    var ul = document.createElement("ul");
    bookDisplay.appendChild(ul);

    for (var i = 0; i < arrayOfBooks.length; i++){
        var li = document.createElement("li");
        var bookTitle = arrayOfBooks[i].bookTitle;
        var bookAuthor = arrayOfBooks[i].author;
        li.innerHTML = bookTitle +", written by " + bookAuthor;
        ul.appendChild(li);
    }

    document.body.appendChild(bookDisplay);
}

var submitButton = document.getElementById('submit');
function onButtonClick() {
    submitButton.innerHTML =  micasBookList.addBook();
}

var harryPotter = new Book("Harry Potter & the Sorcerer's Stone", "Fiction", "J.K.Rowling", true, "01 Sep 1998");
var theBible = new Book("The Bible", "Religion", "God", false);
var warAndPeace = new Book("War And Peace", "Fiction", "Leo Tolstoy", false);
var pridePrejudice = new Book("Pride and Prejudice", "Fiction", "Jane Austen", true, "01 Jan 2008");
var foodMatters = new Book("Food Matters", "Non-Fiction", "Michael Pollan", true, "01 Jan 2013");
var theHobbit = new Book("The Hobbit", "Fiction", "JRR Tolkien", false);



myBooks = [];
myBooks.push(harryPotter, warAndPeace, theBible, pridePrejudice, foodMatters, theHobbit);
var micasBookList = new BookList(myBooks);
var testBook = new Book("Book Title", "Fiction", "Mica", "true", "09/30/2013");
console.log(testBook);


displayBooks(micasBookList.bookShelf);
submitButton.addEventListener('click', onButtonClick, false);