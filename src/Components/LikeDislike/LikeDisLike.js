import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addDislikes, addLikes } from "../../Redux/ArticlesSlice"
import { likeArticles } from "../../Redux/UserSlice"

const LikeDislike = ({ id, articleDetails }) => {

    const { likes, dislikes } = articleDetails

    const [hasLiked, setHasLiked] = useState(false);
    const [hasDisliked, setHasDisliked] = useState(false);

    const dispatch = useDispatch()

    const handleLike = (id, likes) => {
        const body = { id, likes }
        dispatch(addLikes(body))
        dispatch(likeArticles(articleDetails))
        setHasLiked(true);
    }

    const handleDislike = (id, dislikes) => {
        const body = { id, dislikes }
        dispatch(addDislikes(body))
        setHasDisliked(true);
    }

    return (
        <Box className="like-wrapper">
            <Typography variant="body1">{likes}</Typography> <Button variant="contained" onClick={() => handleLike(id, likes)} disabled={hasLiked}>Like</Button>
            <Typography variant="body1">{dislikes}</Typography> <Button variant="contained" onClick={() => handleDislike(id, dislikes)} disabled={hasDisliked}>Dislike</Button>
        </Box>
    )
}

export default LikeDislike;