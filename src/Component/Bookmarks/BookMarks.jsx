
const BookMarks = ({bookmark}) => {
    return (
        <div className="md:w-1/3">
            <h2>Bookmarks:{bookmark.length}</h2>
        </div>
    );
};

export default BookMarks;