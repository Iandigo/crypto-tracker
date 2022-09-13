import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import classes from "./Header.module.css";
import { CryptoState } from "../CrytoContext";

const Header = () => {
  const { currency, setCurrency } = CryptoState();

  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            Cryto Tracker
          </Typography>
          <Select
            variant="filled"
            style={{
              color: "white",
              width: 100,
              height: 40,
              marginRight: 15,
            }}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem className={classes.items} value={"USD"}>USD</MenuItem>
            <MenuItem className={classes.items} value={"AUD"}>AUD</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
