import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  MenuItem,
  Select,
} from "@mui/material";

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
          <Select
            labelId="label-cur"
            id="currency"
            variant="filled"
            style={{
              color: "white",
              width: 100,
              height: 40,
              marginRight: 15,
              paddingBottom: 15,
              overflow: "hidden",
            }}
            label="Currency"
            value={currency}
            onChange={handleChange}
            MenuProps={{
              PaperProps: {
                style: {
                  backgroundColor: "transparent",
                },
              },
            }}
          >
            <MenuItem className={classes.items} value={"USD"}>
              USD
            </MenuItem>
            <MenuItem className={classes.items} value={"AUD"}>
              AUD
            </MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
