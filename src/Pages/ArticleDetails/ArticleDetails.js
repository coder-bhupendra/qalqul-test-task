import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import Comments from '../../Components/Comment/Comments';
import CommentForm from '../../Components/CommentForm/CommentForm';
import LikeDislike from '../../Components/LikeDislike/LikeDisLike';
import { getComments } from '../../Redux/CommentsSlice';

const ArticleDetails = () => {

    const params = useParams()
    const { articles } = useSelector((state) => state?.articles)
    const { comments } = useSelector((state) => state?.comments)
    const comment = useSelector((state)=>state?.comments?.comment)
    const { message } = useSelector((state) => state?.comments)

    const articleDetails = articles?.find((article) => article?.id === Number(params?.id))
    const { id, title, author, content } = articleDetails

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getComments())
    }, [comment])

    useEffect(() => {
        if (message) {
            toast(message)
        }
    }, [message])

    return (
        <Box className="details-wrapper">
            <Grid container spacing={2} maxWidth="xl" margin="0 auto" className="container-wrapper">
                <Grid item xs={12}>

                    <Card className="details-card">
                        <CardContent className="detail-content">
                            <Typography variant="h1" className='detail-title'>{title}</Typography>
                            <Typography variant="h2">{author}</Typography>
                            <Typography variant="body1">{content}</Typography>
                            <Box className="comments-wrapper">
                                <Typography variant="body2" className='comments-header'>Some Comments:</Typography>

                                {comments?.filter(comment => comment?.articleId === articleDetails?.id).map(comment => {
                                    return <Comments comment={comment} />
                                })}

                            </Box>
                        </CardContent>
                        <CardActions>
                            <Box className="comments-wrapper">
                                <Typography variant="body2" className='comments-header'>Leave  Some comments</Typography>
                                <LikeDislike id={id} articleDetails={articleDetails} />
                                <CommentForm articleId={id} />
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>

                </Grid>
            </Grid>
            <ToastContainer />
        </Box>
    )
}

export default ArticleDetails;

