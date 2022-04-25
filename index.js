import Book from './modules/books.js';
import Factory from './modules/factory.js';

const [navList, navAdd, navContact] = document.querySelectorAll('.link');
const allBooks = document.querySelector('.book-list');
const addBook = document.querySelector('.form-title-add');
const contact = document.querySelector('.contact');
const datetime = document.getElementById('current-date');

navList.addEventListener('click', () => {
  allBooks.classList.remove('hidden');
  addBook.classList.add('hidden');
  contact.classList.add('hidden');
  navList.classList.add('active');
  navAdd.classList.remove('active');
  navContact.classList.remove('active');
});

navAdd.addEventListener('click', () => {
  addBook.classList.remove('hidden');
  allBooks.classList.add('hidden');
  contact.classList.add('hidden');
  navAdd.classList.add('active');
  navList.classList.remove('active');
  navContact.classList.remove('active');
});

navContact.addEventListener('click', () => {
  contact.classList.remove('hidden');
  allBooks.classList.add('hidden');
  addBook.classList.add('hidden');
  navContact.classList.add('active');
  navList.classList.remove('active');
  navAdd.classList.remove('active');
});

window.onload = () => {
  contact.classList.add('hidden');
  allBooks.classList.add('hidden');
  addBook.classList.remove('hidden');
};


document.getElementById('form').addEventListener('submit', (e) =>{
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
      
  const book = new Book(title, author);
  
  Factory.createBook(book);
  
});
Factory.retrieveBooks();

const currentDate = new Date();
const date = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)}-${currentDate.getDate()}`;
const time = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
const dateCurrentTime = `${date}, ${time}`;
datetime.innerHTML = dateCurrentTime;