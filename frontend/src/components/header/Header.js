import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import ModeOfTravelIcon from "@mui/icons-material/ModeOfTravel";
const linksArr = ["Home", "Diaries", "Auth"];

const Header = () => {
  const [value, setValue] = useState();
  return (
    <AppBar sx={{ bgcolor: "transparent" }}>
      <Toolbar>
        <ModeOfTravelIcon sx={{ color: "black" }} />
        <Tabs
          value={value}
          onChange={(e, val) => setValue(val)}
          sx={{ ml: "auto", textDecoration: "none" }}
        >
          {linksArr.map((link) => (
            <Tab
              sx={{
                textDecoration: "none",
                ":hover": {
                  textDecoration: "underline",
                  textUnderlineOffset: "18px",
                },
              }}
              key={link}
              label={link}
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
