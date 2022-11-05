const Blog = require('../models/blog.model')

// get all blogs
exports.getAllBlogs = async (req, res) => {
	const users = await Blog.find({}).limit(10)
	if (!users) {
		return res.status(404).json({
			message: 'There are no blogs here',
		})
	}else{
		return res.status(200).json({
			message: 'Blogs retrieved',
			users
		})
	}
}
//get blog by id
exports.getBlogById = async (req, res) => {

	const blog = await Blog.findById(req.params.id)
	if (!blog){
		return res.status(404).json({
			message: 'Blog with id ${req.params.id} does not exist',
		})
	}else {
		return res.status(200).json({
			message: 'Blog retrieved',
			blog
		})
	}
}
// create a new blog
exports.createNewBlog = async (req, res) => {
	const blog = new Blog({
		...req.body
	})
	await blog.save()

	res.status(201).json({
		message: 'Blog created',
		blog
	})
}
//update blog
exports.updateBlog = async (req, res) => {
	const blog = await Blog
			.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
	return  res.status(200).json({
		message: 'Blog updated',
		blog
	})
}
exports.deleteBlog = async (req, res) => {
	const blog = await Blog.findByIdAndRemove(req.params.id)
	if (!blog){
		return res.status(404).json({
			message: 'Blog with id ${req.params.id} does not exist',
		})
	}else{
		return res.status(200).json({
			message: 'Blog deleted'
		})
	}
}