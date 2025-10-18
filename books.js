Book.prototype.price = 20;

function Book(name, author, read, pages){
 
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        var returnString = `${this.name} by ${this.author}, ${this.pages}. ${this.price}`;
        if(this.read == true) returnString += ", read."
        else returnString +=", not read yet."
        return returnString;
    }
}

const hobbit = new Book("The hobbit", "JRR tolkien", false, "295");
console.log(hobbit.info());

