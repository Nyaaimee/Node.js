import  Posts  from "../modules/post.module.js"

const postsController = {};

postsController.getPosts = (req, res) => {
    response.send(Posts);
}

postsController.addPosts = (req, res) => {
    const newPost = req.body;
    newPost.createdAt = new Date(Date.now());
    Posts.push(newPost);
}

postsController.updatePosts = (req, res) => {
    update
}

postsController.deletePosts = (req, res) => {
    const { id } = req.params;
    const PostsIndex = Posts.findIndex(Posts => Posts.id === id);
    Posts.splice(PostsIndex, 1);
    return res.send();
}

export default postsController;