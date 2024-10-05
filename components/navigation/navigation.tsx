"use client";

import React, { useState } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";

import MenuIcon from "@/icons/menu";

import Logo from "../logo";
import { DRAWER_WIDTH, NAV_ITEMS } from "./constants";

interface Props {
  window?: () => Window;
}

const Navigation = (props: Props) => {
  const { window } = props;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const drawer = (
    <List onClick={handleDrawerToggle}>
      <ListItem>
        <Logo />
      </ListItem>
      {NAV_ITEMS.map((item, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton component={Link} href={item.href}>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{ fontWeight: "fontWeightMedium" }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar elevation={0} color="inherit" position="static">
        <Container>
          <Toolbar disableGutters>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Logo />
            <Box sx={{ display: { xs: "none", sm: "block" }, ml: "auto" }}>
              {NAV_ITEMS.map((item, index) => (
                <Button
                  key={index}
                  component={Link}
                  href={item.href}
                  color="inherit"
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
};

export default Navigation;
