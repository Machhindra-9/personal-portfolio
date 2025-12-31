import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import List from "@mui/material/List";
import ListIcon from "@mui/icons-material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

type NavItem = {
  label: string;
  link: string;
  external?: boolean;
};

const navItems: NavItem[] = [
  { label: "Expertise", link: "expertise" },
  { label: "History", link: "history" },
  { label: "Projects", link: "projects" },
  { label: "Resume", link: "resume", external: true },
];

const drawerWidth = 240;

function Navigation({ parentToChild, modeChange }: any) {
  const { mode } = parentToChild;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`;

  useEffect(() => {
    const onScroll = () => {
      const nav = document.getElementById("navigation");
      if (nav) setScrolled(window.scrollY > nav.clientHeight);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  /* ✅ CLEAN, CONSISTENT NAV STYLE */
  const navItemStyle = {
    cursor: "pointer",
    color: "rgba(234, 240, 242, 1)",
    fontSize: "16px",
    fontWeight: 400,
    letterSpacing: "0.5px",
    position: "relative",
    padding: "6px 0",
    marginLeft: "24px",
    textDecoration: "none",
    userSelect: "none",
    transition: "color 0.25s ease",

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: "-4px",
      width: "0%",
      height: "2px",
      backgroundColor: "#3f96cb",
      transition: "width 0.25s ease",
    },

    "&:hover": {
      color: "#3f96cb",
    },

    "&:hover::after": {
      width: "100%",
    },
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        id="navigation"
        className={`navbar-fixed-top${scrolled ? " scrolled" : ""}`}
      >
        <Toolbar className="navigation-bar">
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setMobileOpen(!mobileOpen)}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {mode === "dark" ? (
            <LightModeIcon onClick={modeChange} />
          ) : (
            <DarkModeIcon onClick={modeChange} />
          )}

          {/* DESKTOP NAV */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
            {navItems.map(({ label, link, external }) =>
              external ? (
                <Box
                  key={label}
                  component="a"
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={navItemStyle}
                >
                  {label}
                </Box>
              ) : (
                <Box
                  key={label}
                  sx={navItemStyle}
                  onClick={() => handleScroll(link)}
                >
                  {label}
                </Box>
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <p className="mobile-menu-top">
            <ListIcon /> Menu
          </p>

          <Divider />

          <List>
            {navItems.map(({ label, link, external }) => (
              <ListItem key={label} disablePadding>
                {external ? (
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: "100%",
                      padding: "12px",
                      textAlign: "center",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    {label}
                  </a>
                ) : (
                  <ListItemText
                    primary={label}
                    onClick={() => handleScroll(link)}
                    sx={{ cursor: "pointer" }}
                  />
                )}
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navigation;
