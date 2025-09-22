const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mern-bootcamp')
.then(() => console.log('Conneceted to MongoDB'))
.catch(err => console.error('MongoDB connection error;', err));

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    content:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

const Blog = mongoose.model('Blog', blogSchema);

async function createBlog(blogDaata) {
    const blog = new Blog(blogDaata);
    return await blog.save();
}

async function getAllBlogs() {
    return await Blog.find().sort({ createdAt: -1 });
}

async function getBlogById(id){
    return await Blog.findById(id);
}

async function updateBlog(id, updates){
    return await Blog.findByIdAndUpdate(id, updates, {new: true});
}

async function deleteBlog(id){
    return await Blog.findByIdAndDelete(id);
}

async function testoperations(){
    const blog = await createBlog({
        title: 'My First Blog',
        content: 'This is the content of my first blog and Welcome to my blog!',
        author: 'AKA Freelance'
    });
    console.log('Created Blog:', blog);

    const blogs = await getAllBlogs();
    console.log('All Blogs:', blogs);

    const updatedBlog = await updateBlog(blog._id, {
        content: 'Updated blog content'
    });
    console.log('Updated Blog:', updatedBlog);

    await deleteBlog(blog._id);
    console.log('Blog deleted successfully');
}

testoperations().catch(console.error);