import likes from "../modules/like.module.js"

const likesController = {};

likesController.getLikes = (req,res) =>{
    res.send(likes);
}

export default likesController;