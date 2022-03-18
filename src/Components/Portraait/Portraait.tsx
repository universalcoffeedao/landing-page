import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./Portraait.module.scss";

const balanceData = [
  {
    id: 1,
    title: "Treasury Balance",
    price: 560697738,
  },
  {
    id: 2,
    title: "Total Value Locked",
    price: 949067990,
  },
  {
    id: 3,
    title: "Current APY",
    price: 3828,
  },
];

const Portraait: React.FC = () => {
  return (
    <div className={styles.portraait_wrapper}>
      <Container>
        <Grid container spacing={2}>
          {balanceData?.map((item) => (
            <Grid
              key={item.id}
              item
              md={4}
              sm={12}
              xs={12}
              className={styles.portraait_content}
            >
              <Typography variant="h5" color="inherit">
                {item.title}
              </Typography>
              <Typography variant="subtitle1" color="inherit">
                ${item.price}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Portraait;
