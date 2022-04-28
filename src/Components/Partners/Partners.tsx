import { Container, Grid, Typography, Button, Paper } from "@mui/material";
import React from "react";
import styles from "./Partners.module.scss";

import theCafeDao from "../../assets/theCafeDao.png";
import gourmetLatte from "../../assets/gourmetLatte.png";
import redBucketCoffee from "../../assets/redBucketCoffee.png";

const Partners: React.FC = () => {
  return (
    <div className={styles.introduc_wrapper}>
      <Container>
        <Typography
          variant="h6"
          color="inherit"
          className={styles.introduc_left_title}
        >
          Our Partners
        </Typography>

        <Grid container spacing={2}>
          <Grid item md={4} sm={4} xs={12} className={styles.content}>
            <a
              target="_blank"
              style={{
                textDecoration: "none",
              }}
              href="https://www.thecafedao.com/"
            >
              <img src={theCafeDao} alt="TheCafeDAO" />
            </a>
            <Typography
              variant="h6"
              color="inherit"
              className={styles.description}
            >
              The Café DAO is the first ever DAO-powered coffee stand in
              Seattle.
            </Typography>
          </Grid>
          <Grid item md={4} sm={4} xs={12} className={styles.content}>
            <a
              target="_blank"
              style={{ textDecoration: "none" }}
              href="https://gourmetlatte.com/"
            >
              <img src={gourmetLatte} alt="Gourmet Latte" />
            </a>
            <Typography
              variant="h6"
              color="inherit"
              className={styles.description}
            >
              Gourmet Latte is a drive-thru chain offering espresso, smoothies &
              other drinks, plus baked goods, bagels & sandwiches.
            </Typography>
          </Grid>
          <Grid item md={4} sm={4} xs={12} className={styles.content}>
            <a
              target="_blank"
              style={{ textDecoration: "none" }}
              href="https://redbucketcoffee.com/"
            >
              <img src={redBucketCoffee} alt="Red Bucket Latte" />
            </a>
            <Typography
              variant="h6"
              color="inherit"
              className={styles.description}
            >
              Red Bucket Coffee sells the highest quality coffee beans from all
              over the world.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Partners;
