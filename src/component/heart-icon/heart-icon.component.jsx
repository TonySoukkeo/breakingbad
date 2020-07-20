import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import mojs from "@mojs/core";

// Styles
import HeartIconStyles from "./heart-icon.styles";

const SCALE_UP_SIZE = 1.2;
const DURATION = 280;

const HeartIcon = ({
  style: userStyles = {},
  className: userClassName = "",
}) => {
  // const [animation, setAnimation] = React.useState(() => new mojs.Html());
  const [isClicked, setIsClicked] = React.useState(false);

  const classes = HeartIconStyles();

  const classNames = [...Object.values(classes), userClassName]
    .join(" ")
    .trim();

  const iconRef = React.useRef(null);

  const handleOnMouseEnter = () => {
    if (iconRef.current && !isClicked) {
      new mojs.Html({
        el: iconRef.current,
        duration: DURATION,
        fill: "#ffb3c8",
        fillOpacity: ".3",
      }).play();
    }
  };

  const handleOnMouseLeave = () => {
    if (iconRef.current && !isClicked) {
      new mojs.Html({
        el: iconRef.current,
        duration: DURATION,
        fill: "white",
        fillOpacity: ".5",
      }).play();
    }
  };

  const handleOnIconClick = () => {
    setIsClicked((prevClickState) => !prevClickState);
  };

  React.useEffect(() => {
    if (isClicked) {
      new mojs.Html({
        el: iconRef.current,
        fill: "#ffb3c8",
        fillOpacity: "1",
        stroke: "#093009",
        scale: { 1: 1.8 },
      })
        .then({
          scale: { 2: SCALE_UP_SIZE },
        })
        .play();
    } else {
      new mojs.Html({
        el: iconRef.current,
        fill: "white",
        scale: 1,
      }).play();
    }
  }, [isClicked]);

  return (
    <FavoriteIcon
      ref={iconRef}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      onClick={handleOnIconClick}
      style={userStyles}
      className={classNames}
    />
  );
};

export default HeartIcon;
