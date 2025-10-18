const my_library = [];

function Book(name, author, pages, id){
    if(!new.target){
        throw Error("You must use the 'new operator to call this function")
    }
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.id = id;
    this.info = function() {
        var returnString = `${this.name} by \n ${this.author}. ${this.pages} pages long.`;
        return returnString;
    };
}

function add_book_to_library(name, author, pages){
    const book = new Book(name, author, pages, crypto.randomUUID());
    my_library.push(book);
}

function remove_book_from_library(){
    // button event from book div to pop/remove it from library
}

add_book_to_library("Lord of the schlajna", "Eddi Perz", 666);
add_book_to_library("Lord of the schlajna", "Eddi Perz", 669);

// Create library div
const library_div = document.querySelector(".library");


for(var book of my_library){
    // Create the book-div and add content
    var book_div = document.createElement("div")
    book_div.className = "book";
    book_div.textContent = book.info();

    // Add book to library
    library_div.appendChild(book_div);
}

