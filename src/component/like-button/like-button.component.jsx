import React, { useRef } from "react";

// Components
import HeartIcon from "../heart-icon/heart-icon.component";

// Custom hooks
import useDOMRefs from "../../hooks/refs/useDOMRefs";
import useHeartAnimation from "../../hooks/animations/useHeartAnimation";

// Context
import LikeButtonContext from "./like-button.context";

// Styles
import likeButtonStyles from "./like-button.styles";

const LikeButton = ({ children, style: userStyles = {}, className }) => {
  const ownClassName = likeButtonStyles();

  const classNames = [...Object.values(ownClassName), className]
    .join(" ")
    .trim();

  const [setRefs, refsState] = useDOMRefs();
  const {
    onClickTimeline,
    onHoverTimeline,
    onHoverOutTimeline,
  } = useHeartAnimation(refsState);

  const isClicked = useRef(false);

  const handleLikeClick = () => {
    isClicked.current = !isClicked.current;
    onClickTimeline.replay();
  };

  const handleMouseEnter = () => {
    if (!isClicked.current) onHoverTimeline.replay();
  };

  const handleMouseLeave = () => {
    if (!isClicked.current) onHoverOutTimeline.replay();
  };

  return (
    <LikeButtonContext.Provider value={setRefs}>
      <button
        style={userStyles}
        className={classNames}
        onClick={handleLikeClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </button>
    </LikeButtonContext.Provider>
  );
};

LikeButton.HeartIcon = HeartIcon;

export default LikeButton;
