import React from "react";
import styles from "./StakingAPY.module.scss";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography, Button } from "@mui/material";

const StakingAPY: React.FC = () => {
  return (
    <div className={styles.stackingAPY_wrapper}>
      <Container>
        <div className={styles.stackingAPY_title}>
          <Typography variant="h5" color="inherit">
            Run By DAO
          </Typography>
        </div>
        {/* <Grid
          container
          spacing={1}
          justifyContent="center"
          className={styles.stackingAPY_content_wrapper}
        >
          <Grid container item md={8} className={styles.stackingAPY_content}>
            <Grid
              item
              xs={12}
              sm={5}
              className={styles.stackingAPY_left_content}
            >
              <>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={styles.stackingAPY_left_title}
                >
                  3,692%
                </Typography>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={styles.stackingAPY_subtitle}
                >
                  OHM Staking APY
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  className={styles.stackingAPY_button}
                >
                  Stake now
                </Button>
              </>
            </Grid>
            <Grid
              item
              xs={12}
              sm={1}
              className={styles.stackingAPY_center_wrapper}
            >
              <div className={styles.stackingAPY_center_content} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              className={styles.stackingAPY_right_content}
            >
              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles.stackingAPY_right_title}
              >
                Treasury Regulated APY
              </Typography>
              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles.stackingAPY_subtitle}
              >
                Treasury inflow will always outperform staking rewards
              </Typography>
              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles.stackingAPY_sub_sub_title}
              >
                Olympus is designed with long-term protocol health in mind. All
                OHM minted for staking rewards are backed with a reserve from
                the Treasury.
              </Typography>
            </Grid>
          </Grid>
        </Grid> */}
        {/* 2nd part */}
        <Grid
          container
          spacing={1}
          justifyContent="center"
          className={styles.secondan_part}
        >
          <Typography
            variant="subtitle1"
            color="inherit"
            className={styles.secondan_part_title}
          >
            DAO members can suggest policies and vote for proposals to
            contribute to the community and get rewards with UCC.
          </Typography>
        </Grid>
      </Container>
    </div>
  );
};

export default StakingAPY;
