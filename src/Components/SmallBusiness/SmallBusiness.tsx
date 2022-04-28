import { Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import styles from "./SmallBusiness.module.scss";

const SmallBusiness: React.FC = () => {
  return (
    <div className={styles.zapBond_wrapper}>
      <Container>
        <Grid container spacing={2} className={styles.zapBond_content}>
          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            className={styles.zapBond_right_side}
          >
            <div className={styles.img_wrapper}></div>
          </Grid>
          <Grid item md={6} sm={6} xs={12} className={styles.zapBond_left_side}>
            {/* <span className={styles.zapBond_new}>New</span> */}
            <Typography
              variant="h6"
              color="inherit"
              className={styles.zapBond_left_title}
            >
              Support For Small Business
            </Typography>
            <Typography
              variant="subtitle1"
              color="inherit"
              className={styles.zapBond_left_description}
            >
              We honor small businesses. So much so that we'll support them and
              grow together with them. Please send a DM to Eric to receive
              grants and partner with us.
            </Typography>
            <div className={styles?.button_wrapper}>
              <Button
                variant="contained"
                color="primary"
                className={styles.zapBond_left_button}
                target="_blank"
                href="https://twitter.com/echoi333"
              >
                Contact Eric
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SmallBusiness;
