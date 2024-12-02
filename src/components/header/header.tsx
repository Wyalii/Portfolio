"use client";
import * as React from "react";
import { motion } from "framer-motion";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";

const pages = ["Home", "About", "Portfolio", "Contacts"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ width: "100vw" }} // Ensures full width
    >
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", marginBottom: 10 }}
      >
        <Box sx={{ width: "100%" }}>
          <Toolbar disableGutters>
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
                sx={{
                  display: { xs: "block", md: "none", fontFamily: "GeistMono" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontFamily: "GeistMono",
                      }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontFamily: "GeistMono",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                flexGrow: 0,
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontFamily: "GeistMono",
                marginRight: 3,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontFamily: "GeistMono",
                  bgcolor: "blue",
                  borderRadius: 4,
                  padding: "5px",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
                className="typing-effect font-GeistMono"
              >
                Contact Me
              </Typography>
              <motion.div
                animate={{ y: [-5, 0, -5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/chip.jpeg"
                  sx={{ height: 45, width: 45 }}
                />
              </motion.div>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </motion.header>
  );
}
export default ResponsiveAppBar;
