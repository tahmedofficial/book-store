
const getBooksFromLocalStorage = () => {

    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
        return JSON.parse(storedBooks);
    }
    else {
        return [];
    }

}

const getBooksFromLocalStorageForRead = () => {

    const storedBooks = localStorage.getItem('read');
    if (storedBooks) {
        return JSON.parse(storedBooks);
    }
    else {
        return [];
    }

}

const saveBooksToLocalStorage = (id) => {

    const storedBooks = getBooksFromLocalStorage();
    const exist = storedBooks.find(bookId => bookId === id);
    if (!exist) {
        storedBooks.push(id);
        localStorage.setItem('books', JSON.stringify(storedBooks));
    }

}

const saveBooksToLocalStorageForRead = (id) => {

    const storedBooks = getBooksFromLocalStorageForRead();
    const exist = storedBooks.find(bookId => bookId === id);
    if (!exist) {
        storedBooks.push(id);
        localStorage.setItem('read', JSON.stringify(storedBooks));
    }

}

export {
    saveBooksToLocalStorage,
    getBooksFromLocalStorage,
    saveBooksToLocalStorageForRead,
    getBooksFromLocalStorageForRead
}