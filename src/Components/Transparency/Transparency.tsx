import { Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import styles from "./Transparency.module.scss";

import whitePaper from "../../assets/whitePaper.pdf";

import Fade from "react-reveal/Fade";

const Transparency: React.FC = () => {
  return (
    <div className={styles.introduc_wrapper}>
      <Container>
        <Grid container spacing={2} className={styles.introduc_content}>
          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            order={{ lg: 1, md: 1, sm: 1, xs: 2 }}
            className={styles.introduc_left_side}
          >
            <Fade>
              <Typography
                variant="h6"
                color="inherit"
                className={styles.introduc_left_title}
              >
                A Protocol You Can Trust
              </Typography>
              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles.introduc_left_description}
              >
                UCC has a 1 billion fixed supply. 43% of the total supply is
                locked for 1 year and another 42% is locked for 2 years. The
                founding team’s shares are vested for 4 years. All of the above
                are implemented in the smart contracts.
              </Typography>
              <a
                href="https://polygonscan.com/token/0x35C3c8096CDe3c13a565b68d17b9Bf1f9836B9eB#balances"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  className={styles.introduc_left_button}
                >
                  Check on Polygonscan
                </Button>
              </a>
            </Fade>
          </Grid>
          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            order={{ lg: 2, md: 2, sm: 2, xs: 1 }}
            className={styles.introduc_right_side}
          >
            <Fade>
              <div className={styles.img_wrapper}></div>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Transparency;
