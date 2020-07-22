import { useState, useRef, useLayoutEffect, useCallback } from "react";
import mojs from "@mojs/core";

// Util
import callFnsInSequence from "../../util/callFnsInSequence";

// Custom hooks
import useDOMRefs from "../refs/useDOMRefs";

// Animation configurations
const SCALE_UP_SIZE = 2.8;
const DURATION = 50;
const mojsTimeline = () => new mojs.Timeline();

const useLikeButtonState = () => {
  const [onClickTimeline, setOnClickTimeline] = useState(mojsTimeline);

  const [onHoverTimeline, setOnHoverTimeline] = useState(mojsTimeline);

  const [onHoverOutTimeline, setOnHoverOutTimeline] = useState(mojsTimeline);

  const [setRefs, refsState] = useDOMRefs();
  const { heartIcon } = refsState;

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

  const isClicked = useRef(false);

  // Event handlers functions
  const handleLikeClick = useCallback(() => {
    isClicked.current = !isClicked.current;
    onClickTimeline.replay();
  }, [onClickTimeline]);

  const handleMouseEnter = useCallback(() => {
    if (!isClicked.current) onHoverTimeline.replay();
  }, [onHoverTimeline]);

  const handleMouseLeave = useCallback(() => {
    if (!isClicked.current) onHoverOutTimeline.replay();
  }, [onHoverOutTimeline]);

  const eventHandlerProps = ({
    onClick,
    onMouseEnter,
    onMouseLeave,
    ...otherProps
  }) => ({
    onClick: callFnsInSequence(handleLikeClick, onClick),
    onMouseEnter: callFnsInSequence(handleMouseEnter, onMouseEnter),
    onMouseLeave: callFnsInSequence(handleMouseLeave, onMouseLeave),
    ...otherProps,
  });

  return {
    setRefs,
    eventHandlerProps,
    isClicked,
  };
};

export default useLikeButtonState;
