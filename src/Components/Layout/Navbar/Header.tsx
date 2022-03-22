import { Container, Grid, Typography } from "@mui/material";
import React from "react";
// import { Link, Outlet } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import styles from "./Header.module.scss";
import { FaDiscord, FaMedium, FaTwitter, FaReddit } from "react-icons/fa";
import MenuDrawer from "./MenuDrawer";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header: React.FC = () => {
  const matches = useMediaQuery("(min-width:900px)");
  return (
    <div className={styles.header_wrapper}>
      <Container>
        <Grid
          container
          spacing={1}
          direction="row"
          alignItems="center"
          alignContent="center"
          className={styles.header_content}
        >
          <Grid
            item
            md={3}
            sm={6}
            xs={6}
            className={styles.header_left_content}
          >
            <>
              <img src={Logo} alt="logo" className={styles.header_logo} />
              <Typography
                variant="h6"
                color="inherit"
                className={styles.header_title}
              >
                UniversalCoffeeDAO
              </Typography>
            </>
          </Grid>
          <Grid
            item
            md={9}
            sm={6}
            xs={6}
            className={styles.header_right_content}
          >
            {matches === true ? (
              <>
                <>
                  <nav className={styles.header_nav}>
                    <ul>
                      <li>
                        {/* <a href={whitePaper} target="_blank" rel="noreferrer">
                          Whitepaper
                        </a> */}
                        <a
                          href="https://docs.universalcoffee.xyz/"
                          target="_blank"
                        >
                          FAQs
                        </a>
                      </li>

                      {/* <li>
                      <Link to="/account/add">Add Account</Link>
                    </li>
                    <li>
                      <Link to="/account/list">List Accounts</Link>
                    </li>
                    <li>
                      <Link to="/account/1">View Account</Link>
                    </li>
                    <li>
                      <Link to="/something-else">Not Found</Link>
                    </li> */}
                    </ul>
                  </nav>
                  {/* <Outlet /> */}
                </>
                <>
                  <nav className={styles.header_icon}>
                    <ul>
                      <li>
                        <a
                          href="https://twitter.com/coffee_unversal"
                          target="_blank"
                        >
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href="https://discord.gg/7D22JUbqPW" target="_blank">
                          <FaDiscord />
                        </a>
                      </li>
                      {/* <li>
                        <a href="https://medium.com/" target="_blank">
                          <FaMedium />
                        </a>
                      </li> */}
                      {/* <li>
                        <a href="/">
                          <FaReddit />
                        </a>
                      </li> */}
                      {/* <li>
                        <a
                          href="https://discord.gg/7D22JUbqPW"
                          target="_blank"
                          className={styles.discord_button}
                        >
                          Join our Discord
                        </a>
                      </li> */}
                    </ul>
                  </nav>
                  {/* <Outlet /> */}
                </>
              </>
            ) : (
              <MenuDrawer />
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Header;
