import { Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import styles from "./Introduc.module.scss";

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
            className={styles.introduc_left_side}
          >
            <Typography
              variant="h6"
              color="inherit"
              className={styles.introduc_left_title}
            >
              Like Levi's in the Gold Rush
            </Typography>
            <Typography
              variant="subtitle1"
              color="inherit"
              className={styles.introduc_left_description}
            >
              {` NFT artists are gold miners. We supercharge them by adding utility in ther NFTs.
							Purchase UCC with the minting price, distribute it to NFT holders, and let them enjoy the staking profit while holding your beautiful NFTs.  
`}
            </Typography>
            {/* <a
              href=""
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                color="primary"
                className={styles.introduc_left_button}
              >
                View Documentation
              </Button>
            </a> */}
          </Grid>
          {/* <Grid
            item
            md={6}
            sm={6}
            xs={12}
            className={styles.introduc_right_side}
          >
            <div className={styles.img_wrapper}></div>
          </Grid> */}
        </Grid>
      </Container>
    </div>
  );
};

export default Introducing;
