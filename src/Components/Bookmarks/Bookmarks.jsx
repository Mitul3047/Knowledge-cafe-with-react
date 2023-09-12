
import PropTypes from 'prop-types';

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="md:w-1/3 my-10">
            <div className="w-[95%]">
                <h1 className='text-3xl'>Bookmark: {bookmarks.length} </h1>
                <div>
                    
                </div>

            </div>
        </div>
    );
};


Bookmarks.propTypes = {
    bookmarks : PropTypes.array
}
export default Bookmarks;