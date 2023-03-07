
import { Box, Button, Card, CardActions, CardContent, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import CategoryFilter from "../../Components/CategoryFilter/CategoryFilter";
import TagFilter from "../../Components/TagFIlter/TagFilter";
import { getArticlesList } from "../../Redux/ArticlesSlice";

const ArticleList = () => {

    const { articles } = useSelector((state) => state?.articles)
    const { filterCategory } = useSelector((state) => state?.filter)
    const { filterTag } = useSelector((state) => state?.filter)
    const { message } = useSelector((state) => state?.articles)
    const dispatch = useDispatch()

    // const categories = articles?.map(obj => obj.category);
    // const tags = articles?.map(obj => obj.tags).flat();

    const categories = new Set(articles?.map((obj) => obj.category));
    const categoryOptions = Array.from(categories).sort();

    const tags = new Set(articles?.map((obj) => obj.tags).flat());
    const tagOptions = Array.from(tags).sort();

    const filteredArticles = articles?.filter((article) => {
        const categoryMatches = !filterCategory || article?.category === filterCategory;
        const tagMatches = !filterTag || article?.tags?.includes(filterTag);
        return (categoryMatches && tagMatches) || (!filterCategory && !filterTag);
    });

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getArticlesList())
    }, [])

    useEffect(() => {
        if (message) {
            toast(message)
        }
    }, [message])

    return (
        <Box className="articles-wrapper">
            <Grid container spacing={2} maxWidth="xl" sx={{ margin: '0 auto', justifyContent: 'flex-end' }} className="filter-wrapper container-wrapper">
                <Grid item lg={2} md={4} xs={12}>
                    <CategoryFilter categories={categoryOptions} />
                </Grid>
                <Grid item lg={2} md={4} xs={12}>
                    <TagFilter tags={tagOptions} />
                </Grid>
            </Grid>
            <Grid container spacing={2} maxWidth="xl" sx={{ margin: '0 auto' }} className="container-wrapper">
                {filteredArticles?.map((article) => {
                    return (
                        <Grid item lg={4} md={6} xs={12} key={article?.id}>
                            <Card className="article-card">
                                <CardContent>
                                    <Box sx={{ display: 'flex' }}>

                                        <Typography variant="subtitle">{article?.category}</Typography>
                                        <Typography variant="subtitle2">{article?.author}</Typography>
                                    </Box>
                                    <Typography variant="body1">{article?.title}</Typography>
                                    <List>


                                        {article?.tags?.map((tag) => {
                                            return (

                                                <ListItem>
                                                    <ListItemText
                                                        primary={tag}
                                                    />

                                                </ListItem>
                                            )
                                        })}

                                    </List>
                                    <Typography variant='body2' className='blog-content'>
                                        {article?.content}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button className="detail-button" onClick={() => navigate(`/${article?.id}`)} size="large">Read More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
            <ToastContainer />
        </Box>
    )
}

export default ArticleList;