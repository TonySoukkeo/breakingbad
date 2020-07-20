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
    top: 0,
    right: 0,
  },
  heartIcon: {
    fontSize: "3rem",
  },
});

export default useStyles;
