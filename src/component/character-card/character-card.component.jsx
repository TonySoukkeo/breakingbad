import React from "react";
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

const CharacterCard = React.forwardRef(({ name, img, nickname, id }, ref) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <Grid ref={ref} item xs={12} md={3}>
      <CardActionArea component="div">
        <Link to={`/character/${id}`} className={globalClasses.link}>
          <Card className={classes.card}>
            {/** Like Button */}
            <LikeButton
              style={{
                position: "absolute",
                top: 0,
                right: 0,
              }}
            >
              <LikeButton.HeartIcon />
            </LikeButton>
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
          </Card>
        </Link>
      </CardActionArea>
    </Grid>
  );
});

CharacterCard.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  nickname: PropTypes.string,
  id: PropTypes.number,
};

export default CharacterCard;
