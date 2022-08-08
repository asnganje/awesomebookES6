import Book from "../modules/bookClass.js";
import LocalStore from "../modules/localStore.js";
import FullBook from "../modules/fullBook.js";
import {DateTime} from "../modules/luxon.js";

document.addEventListener("DOMContentLoaded", FullBook.displayBooks);

document.querySelector("#booksForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const book = new Book(title, author);
    FullBook.addToBooks(book);
    LocalStore.addBook(book);
    FullBook.clearField();
});

document.querySelector("#ourBooksListId").addEventListener("click", (e) => {

    FullBook.removalBook(e.target);
    LocalStore.removeBook(e.target.previousElementSibling.textContent);
});

const dateVisit = document.querySelector('.userDate');
const setExactTime = () => {
    const now = DateTime.local();
    const showDate = now.toFormat("dd LLL yyyy");
    dateVisit.innerHTML = showDate;
}
setExactTime();

const listLink = document.querySelector('.ourBooksList');
const booksAddition = document.querySelector('.bookAdded');
const contactUs = document.querySelector('.contactUs');
const navigator = document.querySelectorAll('.book-nav');

navigator.forEach((n, index) => n.addEventListener('click', () => {
    navigator.forEach((link, number) => {
        if (number === index) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    if(index === 0) {
        listLink.classList.remove('hidden');
        booksAddition.classList.add('hidden');
        contactUs.classList.add('hidden');
    } else if(index == 1){
        listLink.classList.add('hidden');
        booksAddition.classList.remove('hidden');
        contactUs.classList.add('hidden');
    } else {
        listLink.classList.add('hidden');
        booksAddition.classList.add('hidden');
        contactUs.classList.remove('hidden');
    }
})); 