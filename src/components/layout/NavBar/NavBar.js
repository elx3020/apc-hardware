import { Link } from "react-router-dom";

import { useScrollTrigger } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { theme } from "../../../utils/theme";
import { ThemeProvider } from "@mui/system";
import Slide from "@mui/material/Slide";

import NavBarButtons from "./NavBarButtons";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const NavBar = (props) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <HideOnScroll {...props}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" component="div">
                APC-Store
              </Typography>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <NavBarButtons sx={{ flex: 1 }} />
              </Box>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </ThemeProvider>
    </div>
  );
};

export default NavBar;
