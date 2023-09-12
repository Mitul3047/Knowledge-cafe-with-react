import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';



const Blogs = ({handleAddBookmarks, hadleReadingTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(r => r.json())
            .then(data => setBlogs(data))

    }, [])

    return (
        <div className="md:w-2/3">
            <div className='my-10 w-[95%]'>
                <h1 className="text-4xl">Blog: {blogs.length}</h1>
                {
                    blogs.map(blog => <Blog
                         key={blog.id} 
                         blog={blog}
                         handleAddBookmarks={handleAddBookmarks}
                         hadleReadingTime={hadleReadingTime}
                         >
                        
                         </Blog>)
                    // blogs.map(blog => <Blog
                    //     key={blog.id} 
                    //     blog={blog}
                    //     handleAddBookmarks={handleAddBookmarks}
                    // />)
                
                }

            </div>
        </div>
    );
};

Blogs.propTypes = {
    handleAddBookmarks: PropTypes.func,
    hadleReadingTime: PropTypes.func
}


export default Blogs;