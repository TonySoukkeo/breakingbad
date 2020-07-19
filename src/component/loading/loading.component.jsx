import React from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

// Styles
import useStyles from "../../util/styles";

const Loading = () => {
  const classes = useStyles();

  return (
    <Grid
      className={`${classes["mb-sm"]} ${classes["mt-sm"]}`}
      container
      justify="center"
    >
      <CircularProgress />
    </Grid>
  );
};

export default Loading;
