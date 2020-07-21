import { useLayoutEffect, useRef, useState } from "react";
import mojs from "@mojs/core";

const SCALE_UP_SIZE = 2.8;
const DURATION = 50;

const mojsTimeline = () => new mojs.Timeline();

const useHeartAnimation = ({ heartIcon }) => {
  const [onClickTimeline, setOnClickTimeline] = useState(mojsTimeline);

  const [onHoverTimeline, setOnHoverTimeline] = useState(mojsTimeline);

  const [onHoverOutTimeline, setOnHoverOutTimeline] = useState(mojsTimeline);

  useLayoutEffect(() => {
    if (!heartIcon) return;

    const clickAnimation = new mojs.Html({
      el: heartIcon,
      duration: DURATION,
      scale: { 1: SCALE_UP_SIZE },
      fill: { "#fff": "#ffb3c8" },
      easing: mojs.easing.ease.in,
      stroke: { "#fff": "#093009" },
      fillOpacity: { "30%": "100%" },
    }).then({
      delay: 100,
      scale: 1,
      easing: mojs.easing.ease.out,
    });

    const hoverAnimation = new mojs.Html({
      el: heartIcon,
      duration: DURATION,
      scale: { 1: 1.2 },
      fill: { "#fff": "#ffb3c8" },
      fillOpacity: { "100%": "30%" },
      easing: mojs.easing.ease.in,
      stroke: { "#fff": "#093009" },
    });

    const hoverOutAnimation = new mojs.Html({
      el: heartIcon,
      duration: DURATION,
      scale: { 1.2: 1 },
      fill: { "#ffb3c8": "#fff" },
      fillOpacity: { "30%": "60%" },
      easing: mojs.easing.ease.in,
      stroke: { "#093009": "#fff" },
    });

    // Initialize initial node styles
    heartIcon.style.fill = "#fff";
    heartIcon.style.transform = "scale(1)";
    heartIcon.style.stroke = "#fff";
    heartIcon.style.fillOpacity = "60%";

    const newOnClickTimeline = onClickTimeline.add([clickAnimation]);
    const newOnHoverTimeline = onHoverTimeline.add([hoverAnimation]);
    const newOnHoverOutTimeline = onHoverOutTimeline.add([hoverOutAnimation]);

    setOnClickTimeline(newOnClickTimeline);
    setOnHoverTimeline(newOnHoverTimeline);
    setOnHoverOutTimeline(newOnHoverOutTimeline);
  }, [heartIcon, onClickTimeline, onHoverTimeline, onHoverOutTimeline]);

  return { onClickTimeline, onHoverTimeline, onHoverOutTimeline };
};

export default useHeartAnimation;
