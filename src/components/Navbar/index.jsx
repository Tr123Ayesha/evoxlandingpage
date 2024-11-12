import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import EvoxLogo from '../../assets/EvoxLogo.svg';
import './Navbar.css';

const pages = ["Home", "About us", "Properties", "Contact us"];
const settings = ["Home", "About us", "Properties", "Contact us"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return ( 
    <AppBar position="static" sx={{backgroundColor:'transparent' , boxShadow:'none'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <div className='MaindivNav'>
            <div>
                <img className='EvoxLogo' src={EvoxLogo} alt="Evox Logo" />
            </div>
            <Box
              className="navbarItems"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {pages.map((page) => (
                <Button
                  className="ItemText"
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ color: "rgba(196, 196, 196, 1)", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          <Box 
          className="NavButtons"
              sx={{ display: { xs: "none", md: "flex" } }}>
                 <button className="registerButton">Register</button>
                 <button className="signinButton">Sign In</button>
          </Box>

        </div>

       
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;