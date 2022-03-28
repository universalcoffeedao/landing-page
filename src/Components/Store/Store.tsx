import React from "react";
import styles from "./Store.module.scss";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import roadmap from "./roadmap.png";

const Store: React.FC = () => {
  return (
    <div className={styles.store_wrapper}>
      <Container>
        <Grid container className={styles.store_content}>
          <Grid
            item
            md={12}
            sm={12}
            xs={12}
            className={styles.store_left_content}
          >
            <img
              src={roadmap}
              alt="roadmap"
              style={{ width: "100%" }}
              id="roadmap"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Store;
