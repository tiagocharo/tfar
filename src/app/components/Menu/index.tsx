"use client";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

import Link from "next/link";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Menu() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const menuItems = [
    { text: "Inicio", href: "/" },
    { text: "Sobre", href: "/sobre" },
    { text: "Serviços", href: "/servicos" },
    { text: "Contato", href: "/contato" },
  ];

  return (
    <>
      {/* Responsive Navbar */}
      <header className="bg-black-900 text-zinc-100 p-4 flex justify-between items-center">
        <Link href="/" className="text-lg font-semibold">
          TFAR
        </Link>
        {/* Desktop Menu */}
        {matches ? (
          <nav className="hidden sm:flex sm:items-center sm:gap-4 ml-auto">
            {menuItems.map((item) => (
              <Link
                key={item.text}
                href={item.href}
                className="p-2 hover:text-zinc-100"
              >
                {item.text}
              </Link>
            ))}
          </nav>
        ) : (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            // className="md:hidden lg:hidden"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        )}
      </header>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <div
          className="w-64"
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text}>
                <Link href={item.href} passHref>
                  <ListItemText primary={item.text} />
                </Link>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
}
