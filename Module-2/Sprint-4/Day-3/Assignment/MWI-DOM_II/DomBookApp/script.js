let books = [];

document.getElementById("bookForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const category = document.getElementById("category").value;

  const book = {
    title,
    author,
    category,
    imageUrl: "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg"
  };

  books.push(book);
  displayBooks(books);
  this.reset();
});

function displayBooks(bookArray) {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";
  
  bookArray.forEach((book, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${book.imageUrl}" alt="Book">
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <p>${book.category}</p>
      <button onclick="deleteBook(${index})">Delete</button>
    `;
    bookList.appendChild(card);
  });
}

function deleteBook(index) {
  books.splice(index, 1);
  displayBooks(books);
}

function sortBooks(order) {
  books.sort((a, b) => {
    if (order === "asc") return a.title.localeCompare(b.title);
    else return b.title.localeCompare(a.title);
  });
  displayBooks(books);
}

function filterBooks() {
  const category = document.getElementById("filterCategory").value;
  if (category === "All") displayBooks(books);
  else displayBooks(books.filter(book => book.category === category));
}
