// Menyimpan buku ke localStorage
function saveToLocalStorage(books) {
    localStorage.setItem('books', JSON.stringify(books));
}

// Mengambil buku dari localStorage
function getBooksFromLocalStorage() {
    const books = localStorage.getItem('books');
    return books ? JSON.parse(books) : [];
}

// Menampilkan buku
function displayBooks() {
    const books = getBooksFromLocalStorage();
    const incompleteBookshelf = document.getElementById('incompleteBookshelf');
    const completeBookshelf = document.getElementById('completeBookshelf');

    incompleteBookshelf.innerHTML = '';
    completeBookshelf.innerHTML = '';

    books.forEach(book => {
        const bookItem = createBookItem(book);
        if (book.isComplete) {
            completeBookshelf.appendChild(bookItem);
        } else {
            incompleteBookshelf.appendChild(bookItem);
        }
    });
}

// Membuat elemen item buku
function createBookItem(book) {
    const bookItem = document.createElement('div');
    bookItem.classList.add('book-item');
    bookItem.innerHTML = `
        <span>${book.title} (${book.year}) - ${book.author}</span>
        <div>
            <button onclick="editBook(${book.id})">Edit</button>
            <button onclick="toggleComplete(${book.id})">${book.isComplete ? 'Belum Selesai' : 'Selesai'}</button>
            <button onclick="deleteBook(${book.id})">Hapus</button>
        </div>
    `;
    return bookItem;
}

// Menambahkan buku baru
document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = Number(document.getElementById('year').value);
    const isComplete = document.getElementById('isComplete').checked;

    const books = getBooksFromLocalStorage();
    const newBook = {
        id: Date.now(),
        title,
        author,
        year,
        isComplete
    };

    books.push(newBook);
    saveToLocalStorage(books);
    displayBooks();
    this.reset();
});

// Menghapus buku
function deleteBook(id) {
    const books = getBooksFromLocalStorage();
    const updatedBooks = books.filter(book => book.id !== id);
    saveToLocalStorage(updatedBooks);
    displayBooks();
}

// Memindahkan buku antar rak
function toggleComplete(id) {
    const books = getBooksFromLocalStorage();
    const book = books.find(book => book.id === id);
    if (book) {
        book.isComplete = !book.isComplete; 
        saveToLocalStorage(books);
        displayBooks();
    }
}

// Mengedit buku
function editBook(id) {
    const books = getBooksFromLocalStorage();
    const book = books.find(book => book.id === id);
    if (book) {
        document.getElementById('title').value = book.title;
        document.getElementById('author').value = book.author;
        document.getElementById('year').value = book.year;
        document.getElementById('isComplete').checked = book.isComplete;
        
        deleteBook(id); // Menghapus buku dari daftar untuk diupdate
    }
}

// Fungsi pencarian buku
function searchBooks() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const books = getBooksFromLocalStorage();
    const incompleteBookshelf = document.getElementById('incompleteBookshelf');
    const completeBookshelf = document.getElementById('completeBookshelf');

    incompleteBookshelf.innerHTML = '';
    completeBookshelf.innerHTML = '';

    books.forEach(book => {
        if (book.title.toLowerCase().includes(query)) {
            const bookItem = createBookItem(book);
            if (book.isComplete) {
                completeBookshelf.appendChild(bookItem);
            } else {
                incompleteBookshelf.appendChild(bookItem);
            }
        }
    });
}

// Menampilkan buku saat halaman dimuat
displayBooks();
