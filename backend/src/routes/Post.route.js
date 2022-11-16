import { Router } from "express"
import { addPost, deletePost, getAllPosts, getSinglePost, updatePost } from "../controllers/Post.controller.js"

export const PostRouter = Router()


//ALL
PostRouter.get('/post', getAllPosts)


//Single

PostRouter.get('/post/:id', getSinglePost)

//ADD Post
PostRouter.post('/post/add', addPost)

//Update Post
PostRouter.patch('/update/:id', updatePost)

//Delete Post
PostRouter.delete('/delete/:id', deletePost)


