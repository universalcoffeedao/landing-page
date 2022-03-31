import { Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import styles from "./HeroArea.module.scss";
import polygonImage from "../../assets/poweredByPolygon.png";

const HeroArea: React.FC = () => {
  return (
    <div className={styles.heroArea_wrapper}>
      <Container>
        <Grid container spacing={1} className={styles.heroArea_content}>
          <Grid item md={6} sm={12} xs={12}>
            <div className={styles.heroArea_info}>
              <Typography variant="h5" color="inherit">
                Blockchain-Based Universal Coffee Rewards Program
              </Typography>
              <Typography variant="h6" color="inherit">
                Universal Coffee Coin (UCC) is the reward point for all coffee
                shops in the world.
              </Typography>
              <img
                src={polygonImage}
                alt="Powered by Polygon"
                style={{ marginLeft: "-9px" }}
              />
            </div>
            <a
              target="_blank"
              style={{ textDecoration: "none", display: "flex" }}
              className={styles.heroArea_right_wrapper}
            >
              <Button
                variant="contained"
                color="primary"
                className={styles.heroArea_rightButton}
                href="https://quickswap.exchange/#/swap?inputCurrency=&outputCurrency=0x35C3c8096CDe3c13a565b68d17b9Bf1f9836B9eB"
                target="_blank"
              >
                Buy On Quickswap
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={styles.heroArea_rightButton}
                href="https://discord.gg/7D22JUbqPW"
                target="_blank"
              >
                Join Our Discord
              </Button>
            </a>
          </Grid>
          {/* <Grid
            item
            md={6}
            sm={12}
            xs={12}
            className={styles.heroArea_joinDiscord_wrapper}
          >
            <a
              href="https://discord.gg/7D22JUbqPW"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                color="primary"
                className={styles.heroArea_joinDiscord}
              >
                Join Our Discord
              </Button>
            </a>
          </Grid> */}
        </Grid>
      </Container>
    </div>
  );
};

export default HeroArea;
