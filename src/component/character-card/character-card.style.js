import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    position: "relative",
    minWidth: 275,
  },
  media: {
    height: 560,
  },
  likeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default useStyles;
