import { Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import styles from "./ZapBond.module.scss";

const ZapBond: React.FC = () => {
  return (
    <div className={styles.zapBond_wrapper}>
      <Container>
        <Grid container spacing={2} className={styles.zapBond_content}>
          <Grid item md={6} sm={6} xs={12} className={styles.zapBond_left_side}>
            {/* <span className={styles.zapBond_new}>New</span> */}
            <Typography
              variant="h6"
              color="inherit"
              className={styles.zapBond_left_title}
            >
              Focus on Treasury
            </Typography>
            <Typography
              variant="subtitle1"
              color="inherit"
              className={styles.zapBond_left_description}
            >
              UCC
            </Typography>
            {/* <div className={styles?.button_wrapper}>
              <Button
                variant="contained"
                color="primary"
                className={styles.zapBond_left_button}
              >
                Zap-Stake
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={styles.zapBond_right_button}
              >
                Zap-Stake <span>Coming Soon</span>
              </Button>
            </div> */}
          </Grid>
          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            className={styles.zapBond_right_side}
          >
            <div className={styles.img_wrapper}></div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ZapBond;
