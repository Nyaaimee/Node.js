import  Comments from "../modules/comments.module.js"

const commentsController = {};

commentsController.getComments = (req,res) =>{
    res.send(Comments);
}

commentsController.addComments = (req,res) =>{
    const newComment = req.body;
    // newComment.createdAt = new Date(Date.now());
    Comments.push(newComment);
}

commentsController.deleteComments = (req,res) =>{
    const { id } = req.params;
    const CommentsIndex = Comments.findIndex(Comments => Comments.id === id);
    Comments.splice(CommentsIndex, 1);
    return res.send();
}

export default commentsController;