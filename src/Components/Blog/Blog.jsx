import PropTypes from 'prop-types';

const Blog = (blog) => {
    console.log(blog)
    return (
        <div>
            
        </div>
    );
};

Blog.propTypes ={
    blog : PropTypes.object.isRequired
}

export default Blog;


git init
git add .
git commit -m "Envioronment and Components create"
git branch -M main
git remote add origin https://github.com/Mitul3047/Knowledge-cafe-with-react.git
git push -u origin main