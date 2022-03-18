import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
// import { Link } from "react-router-dom";
import { FaDiscord, FaMedium, FaTwitter, FaReddit } from "react-icons/fa";

type Anchor = "right";

export default function MenuDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{
        boxShadow:
          "rgb(0 0 0 / 7%) 0px 1px 2px, rgb(0 0 0 / 7%) 0px 2px 4px, rgb(0 0 0 / 7%) 0px 4px 8px, rgb(0 0 0 / 7%) 0px 8px 16px, rgb(0 0 0 / 7%) 0px 16px 32px, rgb(0 0 0 / 7%) 0px 32px 64px)",
        height: "100%",
      }}
    >
      <List style={{ marginTop: "50px" }}>
        <ListItem button>
          <ListItemText
            primary={
              <li>
                {/* <a
                  href={whitePaper}
                  style={{
                    textDecoration: "none",
                    color: "#000000",
                    paddingLeft: "15px",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                  target="_blank"
                  rel="noreferrer"
                >
                  Whitepaper
                </a> */}
                {/* <a
                  href=""
                  style={{
                    textDecoration: "none",
                    color: "#000000",
                    paddingLeft: "15px",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                  target="_blank"
                >
                  FAQs
                </a> */}
              </li>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <ul style={{ display: "flex" }}>
                <li>
                  <a
                    href="https://twitter.com/coffee_unversal"
                    style={{
                      textDecoration: "none",
                      color: "#000000",
                      fontSize: "30px",
                      padding: "0 10px",
                    }}
                    target="_blank"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/7D22JUbqPW"
                    style={{
                      textDecoration: "none",
                      color: "#000000",
                      fontSize: "30px",
                      padding: "0 10px",
                    }}
                    target="_blank"
                  >
                    <FaDiscord />
                  </a>
                </li>
                {/* <li>
                  <a
                    href="https://medium.com"
                    style={{
                      textDecoration: "none",
                      color: "#000000",
                      fontSize: "30px",
                      padding: "0 10px",
                    }}
                    target="_blank"
                  >
                    <FaMedium />
                  </a>
                </li> */}
                <li>
                  <a
                    href="/"
                    style={{
                      textDecoration: "none",
                      color: "#000000",
                      fontSize: "30px",
                      padding: "0 10px",
                    }}
                    target="_blank"
                  >
                    <FaReddit />
                  </a>
                </li>
              </ul>
            }
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            aria-label="menu"
            onClick={toggleDrawer(anchor, true)}
            style={{ color: "#ffffff" }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
