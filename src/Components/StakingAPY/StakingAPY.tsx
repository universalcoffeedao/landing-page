import React, { useState } from "react";
import styles from "./StakingAPY.module.scss";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography, Button } from "@mui/material";

import Fade from "react-reveal/Fade";

const StakingAPY: React.FC = () => {
  return (
    <div className={styles.stackingAPY_wrapper}>
      <Container>
        <div className={styles.stackingAPY_title}>
          <Typography variant="h5" color="inherit">
            Decentralization + Centralization
          </Typography>
        </div>
        <Grid
          container
          spacing={1}
          justifyContent="center"
          className={styles.secondan_part}
        >
          <Fade>
            <Typography
              variant="subtitle1"
              color="inherit"
              className={styles.secondan_part_title}
            >
              UniversalCoffeeDAO will be decentralized enough for UCC holders to
              participate in the DAO governance and centralized enough for the
              founding team to develop the protocol at a fast pace.
            </Typography>
          </Fade>
        </Grid>
      </Container>
    </div>
  );
};

export default StakingAPY;
