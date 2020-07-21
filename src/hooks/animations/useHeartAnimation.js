import { useLayoutEffect, useRef, useState } from "react";
import mojs from "@mojs/core";

const SCALE_UP_SIZE = 2.8;
const DURATION = 50;

const mojsTimeline = () => new mojs.Timeline();

const useHeartAnimation = ({ heartIcon }) => {
  const [onClickTimeline, setOnClickTimeline] = useState(mojsTimeline);

  useLayoutEffect(() => {
    if (!heartIcon) return;

    const clickAnimation = new mojs.Html({
      el: heartIcon,
      duration: DURATION,
      scale: { 1: SCALE_UP_SIZE },
      fill: { "#fff": "#ffb3c8" },
      easing: mojs.easing.ease.in,
      stroke: { "#fff": "#093009" },
    }).then({
      delay: 100,
      scale: 1,
      easing: mojs.easing.ease.out,
    });

    // Initialize initial node styles
    heartIcon.style.fill = "#fff";
    heartIcon.style.transform = "scale(1)";
    heartIcon.style.stroke = "#fff";

    const newOnClickTimeline = onClickTimeline.add([clickAnimation]);

    setOnClickTimeline(newOnClickTimeline);
  }, [heartIcon, onClickTimeline]);

  return onClickTimeline;
};

export default useHeartAnimation;
