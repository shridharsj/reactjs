import BookShow from "./BookShow";

function BookList({ books, onDelete ,onEdit}){
    const rendereBooks = books.map((book) => {
        return <BookShow onDelete={onDelete} book={book} key={book.id} onEdit={onEdit}/>;
    });
    return <div className="book-list" >{rendereBooks}</div>
}


export default BookList;
