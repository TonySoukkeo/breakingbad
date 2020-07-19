import React from "react";

const LikeButton = () => {
  const handleLikeClick = () => {
    console.log("Liked");
  };
  return (
    <button onClick={handleLikeClick}>
      like
      {/** heart icon ***/}
    </button>
  );
};

export default LikeButton;
