import React from "react";
import { AppBar, Container, Toolbar, Typography, Button } from "@mui/material";

import classes from "./Header.module.css";
import { CryptoState } from "../CrytoContext";

const Header = () => {
  const { currency, setCurrency } = CryptoState();

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            Cryto Tracker
          </Typography>
          <Button
            className={classes.button}
            variant="contained"
            onClick={handleChange}
            style={{ color: "white", marginRight: 20 }}
            value="AUD"
          >
            AUD
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            onClick={handleChange}
            style={{ color: "white" }}
            value="USD"
          >
            USD
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
