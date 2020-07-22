import React from "react";

// Components
import HeartIcon from "../heart-icon/heart-icon.component";

// Custom hooks
import useLikeButtonState from "../../hooks/like-button/useLikeButtonState";

// Context
import LikeButtonContext from "./like-button.context";

// Styles
import likeButtonStyles from "./like-button.styles";

const LikeButton = ({
  children,
  style: userStyles = {},
  className,
  onClick = null,
  onMouseLeave = null,
  onMouseEnter = null,
  ...otherProps
}) => {
  const ownClassName = likeButtonStyles();

  const classNames = [...Object.values(ownClassName), className]
    .join(" ")
    .trim();

  const { setRefs, eventHandlerProps } = useLikeButtonState();

  return (
    <LikeButtonContext.Provider value={setRefs}>
      <button
        style={userStyles}
        className={classNames}
        {...otherProps}
        {...eventHandlerProps({
          onClick,
          onMouseLeave,
          onMouseEnter,
        })}
      >
        {children}
      </button>
    </LikeButtonContext.Provider>
  );
};

LikeButton.HeartIcon = HeartIcon;

export default LikeButton;
