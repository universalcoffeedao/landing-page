import { Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import styles from "./Team.module.scss";

const Team: React.FC = () => {
  return (
    <div className={styles.introduc_wrapper} id="team">
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
              Team Led By Eric
            </Typography>
            <Typography
              variant="subtitle1"
              color="inherit"
              className={styles.introduc_left_description}
            >
              Eric is leading the protocol to build a worldwide community for
              all the coffee lovers and small businesses in the world. Other
              than being a coffee lover himself, he was previously a software
              engineer, graduated from Harvard University with a Master’s in
              Data Science, and graduated from the University of Notre Dame with
              a Bachelor’s in Mathematics.
            </Typography>
            <a
              href="https://calendly.com/eric6/30min"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                color="primary"
                className={styles.introduc_left_button}
              >
                Meet Eric 1-on-1
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

export default Team;
