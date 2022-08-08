import LocalStore from './localStore.js';

export default class FullBook {
  static displayBooks() {
    const books = LocalStore.getBooks();
    books.forEach((book) => FullBook.addToBooks(book));
  }

  static addToBooks(book) {
    const bookList = document.getElementById('ourBooksListId');
    const ListedBooks = document.createElement('div');
    ListedBooks.classList.add('listed-books');
    ListedBooks.innerHTML = `
        <p>${book.title}</p>
        <p>by</p>
        <p>${book.author}</p>
        <button class="remove">Remove</button>`;
    bookList.appendChild(ListedBooks);
  }

  static removalBook(element) {
    if (element.classList.contains('remove')) {
      element.parentElement.remove();
    }
  }

  static clearField() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}