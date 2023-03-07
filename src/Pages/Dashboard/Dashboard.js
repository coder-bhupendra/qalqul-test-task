import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Dashboard = () => {

    const { user, likedArticles } = useSelector((state) => state?.user)

    return (
        <Box className="dashboard-wrapper">
            <Grid container maxWidth="xl" margin="0 auto">
                <Grid item xs={12}>

                    <Typography variant="h3">Welcome {user}</Typography>
                    <Typography variant="subtitle">Following Artical Liked By you :</Typography>

                    {likedArticles?.map((article) => {
                        return (
                            <Card className="article-card">
                                <CardContent key={article?.id}>
                                    <Typography variant="body1"><span>Title:</span>{article?.title}</Typography>
                                    <Typography variant="body2"><span>Author:</span>{article?.author}</Typography>
                                </CardContent>
                            </Card>
                        )
                    })}
                </Grid>
            </Grid>
        </Box>
    )
}

export default Dashboard;