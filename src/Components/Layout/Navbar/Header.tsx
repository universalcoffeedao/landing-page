import { Container, Grid, Typography } from "@mui/material";
import React from "react";
// import { Link, Outlet } from "react-router-dom";
import whitePaper from "../../../assets/whitePaper.pdf";

import Logo from "../../../assets/logo.png";
import styles from "./Header.module.scss";
import { FaMedium, FaTwitter, FaYoutube } from "react-icons/fa";
import MenuDrawer from "./MenuDrawer";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Link } from "react-scroll";

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
            <button
              style={{ all: "unset", cursor: "pointer" }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <div style={{ display: "flex" }}>
                <img src={Logo} alt="logo" className={styles.header_logo} />
                <Typography
                  variant="h6"
                  color="inherit"
                  className={styles.header_title}
                >
                  UniversalCoffeeDAO
                </Typography>
              </div>
            </button>
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
                        <a href={whitePaper} target="_blank" rel="noreferrer">
                          Whitepaper
                        </a>
                        <Link to="roadmap" smooth={true}>
                          <a
                            href=""
                            style={{
                              marginLeft: "-0.95rem",
                              marginRight: "-0.95rem",
                            }}
                          >
                            Roadmap
                          </a>
                        </Link>

                        <a
                          href="#team"
                          onClick={() => {
                            window.location.replace("/#team");
                          }}
                        >
                          Team
                        </a>
                        <a
                          href="https://docs.universalcoffee.xyz/"
                          target="_blank"
                        >
                          FAQs
                        </a>
                        <a
                          href="https://snapshot.org/#/universalcoffee.xyz"
                          target="_blank"
                        >
                          Vote
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
                          href="https://twitter.com/coffeedao_eth"
                          target="_blank"
                        >
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=j8Qat7-QWqc"
                          target="_blank"
                        >
                          <FaYoutube />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://medium.com/@universalcoffeecoin/introducing-universalcoffeedao-ea64c87be613"
                          target="_blank"
                        >
                          <FaMedium />
                        </a>
                      </li>
                      <li>
                        <div className={styles.app}>
                          <a
                            href="https://app.universalcoffee.xyz/#/dashboard"
                            target="_blank"
                          >
                            Enter App
                          </a>
                        </div>
                      </li>
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
