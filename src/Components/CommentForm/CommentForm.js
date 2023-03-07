import { Box, Button, TextareaAutosize, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComments } from "../../Redux/CommentsSlice";

const CommentForm = ({ articleId }) => {

  const author = useSelector((state) => state?.user?.user)
  const [text, setText] = useState('');

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (text.trim()) {
      dispatch(addComments({ articleId, author, text }));
      setText('');
    }
  }

  const handleInputChange = (event) => {
    setText(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextareaAutosize
  maxRows={4}
  minRows={3}
  id="outlined-basic"
  aria-label="maximum height"
  placeholder="Commnets"
  value={text}
  onChange={handleInputChange}
  style={{ width: '100%',borderColor: 'rgba(0, 0, 0, 0.23)',padding: '16.5px 14px',borderRadius: '5px',    maxWidth: '-webkit-fill-available' }}
/>
      <Button variant="contained" type="submit" sx={{marginTop: '10px', display: 'block'}} size="large">Save</Button>
    </form>
  )
}

export default CommentForm;