import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Logo from "../../../assets/logo.png";
import styles from "./Footer.module.scss";
import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaMedium,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import whitePaper from "../../../assets/whitePaper.pdf";
import roadmap from "../../../assets/roadmap.pdf";

import { Link } from "react-scroll";

// import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer_wrapper}>
      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            md={3}
            sm={6}
            xs={12}
            className={styles.footer_one_wrapper}
          >
            <div className={styles.footer_logo_wrapper}>
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
            </div>
            <div>
              <nav className={styles.header_icon}>
                <ul>
                  <li>
                    <a href="https://twitter.com/coffeedao_eth" target="_blank">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/7D22JUbqPW" target="_blank">
                      <FaDiscord />
                    </a>
                  </li>
                  {/* <li>
                    <a href="https://t.me/ucdaoopenchat" target="_blank">
                      <FaTelegram />
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="https://github.com/universalcoffeedao"
                      target="_blank"
                    >
                      <FaGithub />
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
                    <a
                      href={`mailto:universalcoffeecoin@gmail.com`}
                      target="_blank"
                    >
                      <FaEnvelope />
                    </a>
                  </li>
                </ul>
              </nav>
              <nav className={styles.header_nav}>
                <ul>
                  <li>
                    <a
                      href={whitePaper}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.text}
                    >
                      Whitepaper
                    </a>
                    <Link
                      to="roadmap"
                      smooth={true}
                      style={{ marginLeft: "-0.6rem", marginRight: "-0.6rem" }}
                    >
                      <a href="" className={styles.text}>
                        Roadmap
                      </a>
                    </Link>
                    <a href="https://docs.universalcoffee.xyz/" target="_blank">
                      FAQs
                    </a>
                    <a
                      href="https://snapshot.org/#/universalcoffee.xyz"
                      target="_blank"
                    >
                      Vote
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </Grid>
          {/* <Grid
            item
            md={3}
            sm={6}
            xs={12}
            className={styles.footer_two_wrapper}
          >
            <div className={styles.footer_two_title}>
              <Typography variant="subtitle1" color="inherit">
                Products
              </Typography>
            </div>

            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li>
                <a href="/">Bonds</a>
              </li>
              <li>
                <a href="/">Staking</a>
              </li>
              <li>
                <a href="/">UniversalCoffeeDAO</a>
              </li>
            </ul>
          </Grid> */}
          {/* <Grid
            item
            md={3}
            sm={6}
            xs={12}
            className={styles.footer_three_wrapper}
          >
            <div className={styles.footer_three_title}>
              <Typography variant="subtitle1" color="inherit">
                Learn
              </Typography>
            </div>

            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li>
                <a href="/">Documention</a>
              </li>
              <li>
                <a href="/">Medium</a>
              </li>
            </ul>
          </Grid> */}
          {/* <Grid
            item
            md={3}
            sm={6}
            xs={12}
            className={styles.footer_four_wrapper}
          >
            <div className={styles.footer_four_title}>
              <Typography variant="subtitle1" color="inherit">
                Join the community
              </Typography>
            </div>

            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li>
                <a
                  href="https://discord.gg/7D22JUbqPW"
                  target="_blank"
                  style={{ fontWeight: "bold" }}
                >
                  Join Discord
                </a>
              </li>
            </ul>

            <div className={styles.footer_four_title}>
              <Typography variant="subtitle1" color="inherit">
                UniversalCoffeeDAO Weekly
              </Typography>
              <Typography variant="subtitle1" color="inherit">
                Get updates on new products, features, events, and more.
              </Typography>
            </div>
          </Grid> */}
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
