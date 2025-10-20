// Constants
const my_library = [];
const add_book = document.querySelector(".show_dialog_button");
const show_dialog = document.querySelector("#add_book_dialog");
const submit_book = document.querySelector("#add_book_button");



function Book(name, author, pages, id, read){
    if(!new.target){
        throw Error("You must use the 'new operator to call this function")
    }
    this.name = name;
    this.author = `Author: ${author}`;
    this.pages = `Pages: ${pages}`;
    this.id = id;
    this.read = read;
}

Book.prototype.toggleRead= function (){
    this.read = !this.read;
    
};
function set_read_status(book, book_div){
    console.log(book_div)
    if(book.read){
        book_div.classList.add("read");
        book_div.classList.remove("unread");
    }
    else{
        book_div.classList.add("unread");
        book_div.classList.remove("read");
    }
}


function add_book_to_library(name, author, pages, read){
    const book = new Book(name, author, pages, crypto.randomUUID(), read);
    console.log(book.read);
    my_library.push(book);
}

function remove_book_from_library(id){
    const index = my_library.findIndex(book => book.id === id);
    if(index !== -1){
        my_library.splice(index,1);
    }
    displayBooks(my_library);

}

function clear_inputs(){
    const inputs = document.querySelectorAll(".val");
    console.log(inputs);
    inputs.forEach((input) => {
        input.value="";
})


}

function displayBooks(array){
    const library_div = document.querySelector(".library");
    library_div.innerHTML = "";

    for(let i = 0; i<array.length; i++){
        const book = array[i];
        // Create the book-div and add content
        const book_div = document.createElement("div")
        book_div.className = "book";
        // Book info
        const book_info_div = document.createElement("div");
        book_info_div.className = "book_info_div";

        const book_title = document.createElement("h1");
        book_title.textContent = book.name;
        const book_author = document.createElement("p");
        book_author.textContent = book.author;
        const book_pages = document.createElement("p");
        book_pages.textContent = book.pages;
        const book_read = document.createElement("p");
        book_read.textContent = "Have you read it? " + book.read;

        set_read_status(array[i], book_div);

        
        

        // Book buttons
        const buttons_div = document.createElement("div");
        buttons_div.className = "buttons-div";

        const remove_button = document.createElement("button");
        remove_button.textContent = "Delete";
        const read_button = document.createElement("button");
        read_button.textContent = "Read";

        remove_button.addEventListener("click", () => {
            console.log(array[i].id)
            remove_book_from_library(array[i].id);
        })

        read_button.addEventListener("click", () => {
            book.toggleRead();
            set_read_status(book, book_div);
            displayBooks(my_library);
        })

        // Add book to library
        library_div.appendChild(book_div);

        book_div.appendChild(book_info_div);
        book_div.appendChild(buttons_div);

        book_info_div.appendChild(book_title);
        book_info_div.appendChild(book_author);
        book_info_div.appendChild(book_pages);
        book_info_div.appendChild(book_read);

        buttons_div.appendChild(remove_button);
        buttons_div.appendChild(read_button);

    }
}

add_book.addEventListener("click", () => {
    show_dialog.showModal();
});

submit_book.addEventListener("click", (e) =>{
    e.preventDefault();

    // Fetch values from inputs
    const add_book_name = document.querySelector("#book_name");
    const add_book_author = document.querySelector("#author_name");
    const add_book_pages = document.querySelector("#book_pages");
    const add_book_read = document.querySelector("#book_read")
    add_book_to_library(add_book_name.value, add_book_author.value, add_book_pages.value, add_book_read.checked);
    
    // Clear values, close modal and re-display books
    clear_inputs();
    show_dialog.close();
    displayBooks(my_library);
})

add_book_to_library("Harry Potter", "J K Rowling", 432, true);
add_book_to_library("The Bible", "Unknown", 1534, false);
displayBooks(my_library);
