import React from "react";
import styles from "./Store.module.scss";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Store: React.FC = () => {
  return (
    <div className={styles.store_wrapper}>
      <Container>
        <Grid container spacing={1} className={styles.store_content}>
          <Grid
            item
            md={7}
            sm={7}
            xs={12}
            className={styles.store_left_content}
          >
            <Typography variant="h3" color="inherit">
              The New Tokenomics - DeFi 2.0 + NFT
            </Typography>
          </Grid>
          <Grid
            item
            md={5}
            sm={5}
            xs={12}
            className={styles.store_right_content}
          >
            <Typography variant="subtitle1" color="inherit">
              DeFi 2.0 and NFT are here to stay, and we're combining both of
              them.
            </Typography>
            <br />
            <Typography variant="subtitle1" color="inherit">
              UCC
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Store;
