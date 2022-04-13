import { Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import styles from "./Transparency.module.scss";

import whitePaper from "../../assets/whitePaper.pdf";

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
              We won’t stop until we partner with all the coffee shops in the
              world. More than 85% of the total supply of UCC is locked for 1 or
              2 years. The founding team’s shares are vested for 4 years. Trust
              with our community members is a key and UCC will only be used to
              reward them and expand the community.
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

export default Transparency;
