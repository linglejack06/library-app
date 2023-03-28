
const myLibrary = [];
const library = document.querySelector('.library');
const form = document.querySelector('.popup-form');
const formContainer = document.querySelector('.form-container');
const formBtn = document.getElementById('add-book');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const booksRead = document.getElementById('books-read');
const pageInput = document.getElementById('pages');
const isRead = document.getElementById('read-status');
const closeFormBtn = document.querySelector('.cancel-btn');
let bookNumber = 0;

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
    deleteButton.classList.add('red-btn');
    deleteButton.addEventListener('click', () => {
        library.removeChild(card);
        bookNumber -= 1;
        booksRead.textContent = `${bookNumber} Books Read`
    });

    const isReadButton = document.createElement('button');
    isReadButton.type = 'button';
    isReadButton.textContent = this.read === '1' ? 'read' : 'not read';
    isReadButton.classList.add(this.read === '1' ? 'green-btn' : 'red-btn');
    isReadButton.addEventListener('click', () => {
        if(this.read === '1') {
            this.read = '0';
        } else {
            this.read = '1';
        }
        isReadButton.textContent = this.read === '1' ? 'Read' : 'Not Read';
        isReadButton.classList.add(this.read === '1' ? 'green-btn' : 'red-btn');
    })
    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(deleteButton);
    card.appendChild(isReadButton);
    card.classList.add('book-card');
    card.dataset.index = myLibrary.indexOf(this);
    library.appendChild(card);
}

Book.prototype.addToLibrary = function addToLibrary() {
    // adds this(book) to array
    myLibrary.push(this);
    bookNumber += 1;
    booksRead.textContent = `${bookNumber} Books Read`;
}


function addBook(e) {
    // prevent form from trying to submit to server-side
    e.preventDefault();
    const book = new Book(titleInput.value, authorInput.value, pageInput.value, isRead.value);
    book.addToLibrary();
    book.createBookCard();
}

function clearForm() {
    titleInput.value = '';
    authorInput.value = '';
    pageInput.value = 0;
    formContainer.style.display = 'none';
}

form.addEventListener('submit', (e) => {
    addBook(e);
    clearForm();
});
closeFormBtn.addEventListener('click', () => {
    // hides form so it disappears
    formContainer.style.display = 'none';
})
formBtn.addEventListener('click', () => {
    formContainer.style.display = 'block';
});

