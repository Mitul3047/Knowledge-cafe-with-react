import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({ blog, handleAddBookmarks, hadleReadingTime }) => {
    // console.log(blog)
    const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog
    return (
        <div className='mb-10 space-y-4'>

            <img src={cover} alt={`cover pic of the ${title}`} className='w-full' />
            <div className='flex justify-between my-9'>
                <div>
                    <div className='flex items-center gap-4'>
                        <img src={author_img} alt="" className='w-14' />
                        <div>
                            <h3>{author}</h3>
                            <p><small>{posted_date}</small></p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <p>{reading_time} min read</p>
                    <button onClick={() => handleAddBookmarks(blog)} className='text-red-600 text-2xl'> <FaBookmark /> </button>
                </div>
            </div>
            <h1 className='text-3xl'>{title}</h1>
            {/* <h4>{hashtags}</h4> */}
            <p>
                {
                    hashtags.map((hashtag, index) => <span key={index}><a href=""></a>#{hashtag} </span>)
                }
            </p>
            <button onClick={() => hadleReadingTime(reading_time)} className='text-purple-600 underline'>Mark as Read</button>
        </div>



    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmarks: PropTypes.func,
    hadleReadingTime: PropTypes.func
}

export default Blog;


