
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 my-10 p-4 bg-slate-200">
            <div className="w-[95%] ">
            <div>
                <h3 className='text-4xl
                '>Reading Time: {readingTime}</h3>
            </div>
                <h2 className='text-3xl text-center'>Bookmark Blogs: {bookmarks.length} </h2>
                <div>
                    {
                        bookmarks.map(bookmark => <Bookmark 
                            key= {bookmark.id}
                            bookmark={bookmark}
                            readingTime={readingTime}></Bookmark>)
                    }
                </div>

            </div>
        </div>
    );
};


Bookmarks.propTypes = {
    bookmarks : PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;