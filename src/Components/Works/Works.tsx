import { Container, Typography, Grid } from "@mui/material";
import React from "react";
import styles from "./Works.module.scss";
import arrayicon from "../../assets/array_icon.png";
import arrayicon_two from "../../assets/array_icon_two.png";

const Works: React.FC = () => {
  return (
    <div className={styles.works_wrapper}>
      <Container>
        <div className={styles.works_title}>
          <Typography variant="h6" color="inherit">
            How UniversalCoffeeDAO works
          </Typography>
        </div>
        {/* 1st part */}
        <Grid container spacing={1} justifyContent="center">
          <Grid container item md={8} className={styles.works_first_div}>
            <Grid
              item
              xs={12}
              sm={6}
              className={styles.works_first_div_wrapper}
            >
              <>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={styles.works_first_div_title}
                >
                  <span>1</span> Treasury Revenue
                </Typography>
                <Typography
                  variant="h5"
                  color="inherit"
                  className={styles.works_first_div_subtitle}
                >
                  Bonds & LP fees
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="inherit"
                  className={styles.works_first_div_description}
                >
                  Bond sales and LP Fees increase Treasury Revenue and lock in
                  liquidity and help control OHM supply
                </Typography>
              </>
            </Grid>
            <Grid item xs={12} sm={6} className={styles.work_image_wrapper}>
              <div className={styles.work_image} />
            </Grid>
            <img
              src={arrayicon}
              alt="icon array"
              className={styles.work_position}
            />
          </Grid>
        </Grid>
        {/* 2nd part */}
        <Grid container spacing={1} justifyContent="center">
          <Grid container item md={8} className={styles.works_two_div}>
            <Grid item xs={12} sm={6} className={styles.work_image_wrapper}>
              <div className={styles.work_image} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              className={styles.works_first_div_wrapper}
            >
              <>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={styles.works_first_div_title}
                >
                  <span>2</span>
                  Treasury Growth
                </Typography>
                <Typography
                  variant="h5"
                  color="inherit"
                  className={styles.works_first_div_subtitle}
                >
                  Olympus Treasury
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="inherit"
                  className={styles.works_first_div_description}
                >
                  Treasury inflow is used to increase Treasury Balance and back
                  outstanding OHM tokens and regulate staking APY
                </Typography>
              </>
            </Grid>

            <img
              src={arrayicon_two}
              alt="icon array"
              className={styles.work_position}
            />
          </Grid>
        </Grid>
        {/* 3rd part */}
        <Grid container spacing={1} justifyContent="center">
          <Grid container item md={8} className={styles.works_three_div}>
            <Grid
              item
              xs={12}
              sm={6}
              className={styles.works_first_div_wrapper}
            >
              <>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={styles.works_first_div_title}
                >
                  <span>3</span> Staking Rewards
                </Typography>
                <Typography
                  variant="h5"
                  color="inherit"
                  className={styles.works_first_div_subtitle}
                >
                  OHM Token
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="inherit"
                  className={styles.works_first_div_description}
                >
                  Compounds yields automatically through a treasury backed
                  currency with intrinsic value
                </Typography>
              </>
            </Grid>
            <Grid item xs={12} sm={6} className={styles.work_image_wrapper}>
              <div className={styles.work_image} />
            </Grid>
            {/* <img
              src={arrayicon}
              alt="icon array"
              className={styles.work_position}
            /> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Works;
