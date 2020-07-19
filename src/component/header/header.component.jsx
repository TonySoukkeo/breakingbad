import React from "react";
import { Link } from "react-router-dom";

// Components
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";

// Styles
import useStyles from "./header.styles";
import { default as useGlobalStyles } from "../../util/styles";

const Header = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <AppBar component="nav" position="relative">
      <Toolbar className={classes.toolbar}>
        <Link to="/" className={[globalClasses.link]}>
          <Typography
            className={classes.typography}
            align="center"
            variant="h4"
          >
            Breaking Bad Characters
          </Typography>
        </Link>

        <div className={classes.linksContainer}>
          <Link className={globalClasses.link} to="/">
            <Typography>Characters</Typography>
          </Link>

          <Link className={globalClasses.link} to="/">
            <Typography>Episodes</Typography>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
