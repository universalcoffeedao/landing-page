import { Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import styles from "./ZapBond.module.scss";

const ZapBond: React.FC = () => {
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
              Fully Decentralized
            </Typography>
            <Typography
              variant="subtitle1"
              color="inherit"
              className={styles.zapBond_left_description}
            >
              The founding team has renounced the ownership of the UCC contract.
              This means that there will be no UCC minted anymore, the UCC
              contract can’t be manipulated, and the protocol is fully
              decentralized.
            </Typography>
            <div className={styles?.button_wrapper}>
              <Button
                variant="contained"
                color="primary"
                className={styles.zapBond_left_button}
                target="_blank"
                href="https://polygonscan.com/tx/0x1e4356a4815caf6b502070d805262551cad6eeffe74743f202718251580e9e48#eventlog"
              >
                Check on Polygonscan
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ZapBond;
