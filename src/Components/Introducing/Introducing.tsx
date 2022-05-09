import { Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import styles from "./Introduc.module.scss";

import whitePaper from "../../assets/whitePaper.pdf";

const Introducing: React.FC = () => {
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
            <Typography
              variant="h6"
              color="inherit"
              className={styles.introduc_left_title}
            >
              Universal Coffee Coin Benefits Everyone
            </Typography>
            <Typography
              variant="subtitle1"
              color="inherit"
              className={styles.introduc_left_description}
            >
              Customers can cash out UCC at any time in the exchange or will be
              able to use them to purchase products. Small businesses can enjoy
              viral marketing effects since they provide an actual benefit to
              the customers by providing blockchain-based reward points that
              never expire and have monetary values.
            </Typography>
            <a
              href={whitePaper}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                color="primary"
                className={styles.introduc_left_button}
              >
                Read Whitepaper
              </Button>
            </a>
          </Grid>
          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            order={{ lg: 2, md: 2, sm: 2, xs: 1 }}
            className={styles.introduc_right_side}
          >
            <div className={styles.img_wrapper}></div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Introducing;
