import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

// Components
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import CharacterList from "../../component/character-list/character-list.component";

// Styles
import useStyles from "./character.style";

const Character = ({ getCharacterStart, character }) => {
  const { id } = useParams();
  const classes = useStyles({ image: character.img });
  const history = useHistory();

  useEffect(() => {
    getCharacterStart(id);
  }, [id, getCharacterStart]);

  const handleGoBack = () => history.push("/");

  const {
    name,
    birthday,
    occupation,
    status,
    appearance,
    portrayed,
  } = character;

  return (
    <Container maxWidth={"xl"}>
      <Button
        style={{
          marginBottom: "1rem",
        }}
        onClick={handleGoBack}
        variant="contained"
        color="secondary"
        elevation={2}
      >
        GO BACK
      </Button>

      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Paper className={classes.image} component="img" />
        </Grid>

        <Grid item xs={12} md={7}>
          <Paper style={{ height: "100%" }} elevation={2}>
            <CharacterList
              name={name}
              birthday={birthday}
              occupation={occupation}
              status={status}
              appearance={appearance}
              portrayed={portrayed}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

Character.defaultProps = {
  character: {},
};

Character.propTypes = {
  getCharacterStart: PropTypes.func,
  character: PropTypes.object,
};

export default Character;
