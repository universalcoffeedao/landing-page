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
                Universal coffee coin is the reward point for all coffee shops
                in the world.
              </Typography>
              <img
                src={polygonImage}
                alt="Powered by Polygon"
                style={{ marginLeft: "-9px" }}
              />
            </div>
            <a
              href="TO_DO"
              target="_blank"
              style={{ textDecoration: "none" }}
              className={styles.heroArea_right_wrapper}
            >
              <Button
                variant="contained"
                color="primary"
                className={styles.heroArea_rightButton}
              >
                Buy on Uniswap
              </Button>
            </a>
          </Grid>
          {/* <Grid
            item
            md={6}
            sm={12}
            xs={12}
            className={styles.heroArea_right_wrapper}
          >
            <a
              href="https://discord.gg/7D22JUbqPW"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                color="primary"
                className={styles.heroArea_rightButton}
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
