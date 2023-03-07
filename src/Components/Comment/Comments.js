import { Avatar, Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Comments = ({ comment }) => {
    const { author, text } = comment

    return (
        <Card className="comment-card">
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>

                    <Avatar>{author.charAt(0).toUpperCase()}</Avatar>  <Typography variant="body2">{author}</Typography>
                </Box>
                <Typography variant="body1">{text}</Typography>
            </CardContent>
        </Card>
    )
}

export default Comments;