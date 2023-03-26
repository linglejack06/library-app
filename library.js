
const myLibrary = [];
const library = document.querySelector('.library');
const form = document.querySelector('.popup-form');
const formBtn = document.getElementById('add-book');
const closeFormBtn = document.querySelector('.cancel-btn');
closeFormBtn.addEventListener('click', () => {
    form.style.display = 'none';
})
formBtn.addEventListener('click', () => {
    form.style.display = 'block';
});

// constructor function
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
// add book to library
function addBook() {
    
}
// make card
function createBookCard(book) {
    const card = document.createElement('div');
    const bookTitle = document.createElement('h3') ;
    bookTitle.textContent = book.title;
    const bookAuthor = document.createElement('h4');
    bookAuthor.textContent = `By ${book.author}`;
    const bookPages = document.createElement('p');
    bookPages.textContent = `${book.pages} Pages`;
    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.classList.add('book-card');
    library.appendChild(card)
}
const book = new Book('The Hobbit', 'C.S Lewis', 400, false);
createBookCard(book);