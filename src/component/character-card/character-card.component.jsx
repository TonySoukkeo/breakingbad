import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Components
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import LikeButton from "../like-button/like-button.component";

import useStyles from "./character-card.style";
import { default as useGlobalStyles } from "../../util/styles";

const CharacterCard = React.forwardRef(
  ({ name, img, nickname, id, addCharacterToFavorites }, ref) => {
    const classes = useStyles();
    const globalClasses = useGlobalStyles();

    return (
      <Grid ref={ref} item xs={12} md={3}>
        <CardActionArea component="div">
          <Card className={classes.card}>
            {/** Like Button */}
            <LikeButton
              onClick={() => addCharacterToFavorites({ name, id })}
              className={classes.likeButton}
            >
              <LikeButton.HeartIcon />
            </LikeButton>

            <Link to={`/character/${id}`}>
              {/** Character Card Image **/}
              <CardMedia
                className={classes.media}
                component="img"
                image={img}
                title={name}
              />

              {/** Character Card Details **/}
              <CardContent>
                <Typography
                  className={globalClasses["text-bold"]}
                  component="h2"
                  align="center"
                >
                  {name} ({nickname})
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </CardActionArea>
      </Grid>
    );
  }
);

CharacterCard.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  nickname: PropTypes.string,
  id: PropTypes.number,
};

export default memo(CharacterCard);
