
const myLibrary = [];
const library = document.querySelector('.library');
const form = document.querySelector('.popup-form');
const formBtn = document.getElementById('add-book');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pageInput = document.getElementById('pages');
const isRead = document.getElementById('read');
const closeFormBtn = document.querySelector('.cancel-btn');

// MARK: book constructor + functions
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
Book.prototype.createBookCard = function createBookCard() {
    const card = document.createElement('div');
    const bookTitle = document.createElement('h3') ;
    bookTitle.textContent = this.title;
    const bookAuthor = document.createElement('h4');
    bookAuthor.textContent = `By ${this.author}`;
    const bookPages = document.createElement('p');
    bookPages.textContent = `${this.pages} Pages`;
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => {
        library.removeChild(card);
    });
    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(deleteButton);
    card.classList.add('book-card');
    card.dataset.index = myLibrary.indexOf(this);
    library.appendChild(card);
}

Book.prototype.addToLibrary = function addToLibrary() {
    // adds this(book) to array
    myLibrary.push(this);
}


function addBook(e) {
    // prevent form from trying to submit to server-side
    e.preventDefault();
    const book = new Book(titleInput.value, authorInput.value, pageInput.value, isRead);
    book.addToLibrary();
    book.createBookCard();
}


form.addEventListener('submit', addBook);
closeFormBtn.addEventListener('click', () => {
    // hides form so it disappears
    form.style.display = 'none';
})
formBtn.addEventListener('click', () => {
    form.style.display = 'block';
});
const book = new Book('The Hobbit', 'C.S Lewis', 400, false);
book.createBookCard();
