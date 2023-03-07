
import { Box, Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../Redux/UserSlice";

const UserProfile = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser({ name, email }));
  };

  return (
    <Box className="user-profile">
      <Card sx={{ maxWidth: '500px', width: '100%' }} >
        <CardContent>
          <Typography variant="h2">User Profile</Typography>
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <TextField id="name" label="Name:" value={name} onChange={handleNameChange} variant="outlined" />
              <p id="nameErr" className="error"></p>
            </div>
            <div className="form-field">
              <TextField id="email" type="email" label="Email:" value={email} onChange={handleEmailChange} variant="outlined" />
            <p id="emailErr" className="error"></p>
            </div>
            <Button variant="contained" type="submit" size="large">Save</Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  )
}

export default UserProfile;