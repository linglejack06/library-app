/* eslint-disable no-multi-assign */
const myLibrary = [];
const library = document.querySelector('.library');
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook() {
    
}
function createBookCard(book) {
    const card = document.createElement('div');
    const bookTitle = document.createElement('h3') ;
    bookTitle.textContent = book.title;
    const bookAuthor = document.createElement('h3');
    bookAuthor.textContent = `By ${book.author}`;
    const bookPages = document.createElement('p');
    bookPages.textContent = `${book.pages} Pages`;
    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    library.appendChild(card)
}
const book = new Book('The Hobbit', 'C.S Lewis', 400, false);
createBookCard(book);