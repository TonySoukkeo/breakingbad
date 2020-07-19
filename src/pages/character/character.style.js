import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  image: {
    height: 500,
    width: "100%",
    backgroundImage: ({ image }) => `url(${image})`,
    backgroundPosition: "cover",
    backgroundRepeat: "no-repeat",
  },
});

export default useStyles;
