import React from "react";
import PropTypes from "prop-types";

// Components
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CharacterCard from "../../component/character-card/character-card.component";
import Loading from "../../component/loading/loading.component";

// Styles
import useStyles from "../../util/styles";

// Custom Hooks
import useInfiniteScroll from "../../hooks/infinite-scroll/useInfiniteScroll";

const CharactersShowcase = ({
  characters,
  hasMore,
  getCharactersStart,
  isCharactersLoading,
  addCharacterToFavorites,
}) => {
  const classes = useStyles();

  const lastElement = useInfiniteScroll(getCharactersStart, hasMore);

  return (
    <Container maxWidth="xl">
      <Grid className={classes["mt-sm"]} container spacing={2}>
        {characters.map((character, index) => {
          return (
            <CharacterCard
              ref={characters.length === index + 1 ? lastElement : null}
              key={character.char_id}
              id={character.char_id}
              name={character.name}
              img={character.img}
              nickname={character.nickname}
              addCharacterToFavorites={addCharacterToFavorites}
            />
          );
        })}
        {isCharactersLoading && <Loading />}
      </Grid>
    </Container>
  );
};

CharactersShowcase.defaultProps = {
  characters: [],
};

CharactersShowcase.propTypes = {
  characters: PropTypes.array,
  getCharactersStart: PropTypes.func,
  hasMore: PropTypes.bool,
  isCharactersLoading: PropTypes.bool,
};

export default CharactersShowcase;
