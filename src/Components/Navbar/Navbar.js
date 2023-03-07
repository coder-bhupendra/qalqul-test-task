import { IconButton, Menu, MenuItem, Popover } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const user = useSelector((state) => state?.user?.user)

  const navigate = useNavigate()

  const handlePageChange = (page) => {
    navigate(page)
  };

  const pages = [{ name: 'Home', path: "/" }, { name: 'Dashboard', path: "/dashboard" }, { name: 'Profile', path: "/profile" }];

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <AppBar position="static" className="nav-bar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Qulqul Engine
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }} className="menus">
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={() => handlePageChange(page.path)}
                sx={{ my: 2, color: 'white', display: 'block' }}
                className="page-btn"
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Typography variant="h4" sx={{ marginRight: 2, textTransform: 'capitalize', display: { xs: 'none', md: 'block' }, }}>{user}</Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" onClick={() => handlePageChange(page.path)}>{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Avatar onClick={handleClick} sx={{ my: 1 }}>{user?user.charAt(0).toUpperCase():<PersonIcon/> }</Avatar>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              sx={{ marginTop: "10px" }}
            >
              <Typography sx={{ padding: "10px 16px", cursor: 'pointer' }} onClick={() => navigate("/profile")}>Profile</Typography>
            </Popover>
            {/*  */}
          </Box>
        </Toolbar>

      </Container>
    </AppBar>
  );
}
export default Navbar;