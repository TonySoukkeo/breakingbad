import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: "gray",
    paddingTop: "2rem",
    paddingBottom: "2rem",
    marginBottom: "2rem",
  },
  typography: {
    fontWeight: "bold",
  },
  linksContainer: {
    marginLeft: "auto",
    fontSize: "1.2rem",
    display: "flex",
  },
  link: {
    marginRight: "1rem",
  },
}));

export default useStyles;
