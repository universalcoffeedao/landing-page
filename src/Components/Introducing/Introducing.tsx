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
              {`Coffee lovers can cash out reward points any time in the exchange. Cafes can greatly reduce the payment processing fee and enjoy viral marketing effects by incorporating the blockchain into their reward system. 
`}
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
