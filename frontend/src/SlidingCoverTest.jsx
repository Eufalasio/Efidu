import React, { useState, useRef, useEffect } from 'react';
import './SlidingCoverTest.css';

const SlidingCover = () => {
  const [active, setActive] = useState(false);
  const coverRef = useRef();

  const handleClick = () => {
    setActive(prev => !prev);
  };

  useEffect(() => {
    let start = null;
    const duration = 1000;
    const el = coverRef.current;

    const fromColors = active
      ? [[42, 123, 155], [56, 178, 194], [0, 234, 255]]
      : [[117, 18, 14], [237, 19, 19], [255, 81, 0]];

    const toColors = active
      ? [[117, 18, 14], [237, 19, 19], [255, 81, 0]]
      : [[42, 123, 155], [56, 178, 194], [0, 234, 255]];

    const fromLeft = active ? 0 : 50;
    const toLeft = active ? 50 : 0;

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);

      const interpolatedColors = fromColors.map((startColor, i) =>
        startColor.map((val, j) => Math.round(lerp(val, toColors[i][j], progress)))
      );

      const leftPosition = lerp(fromLeft, toLeft, progress);
      el.style.left = `${leftPosition}%`;
      el.style.setProperty('--color1', `rgb(${interpolatedColors[0].join(',')})`);
      el.style.setProperty('--color2', `rgb(${interpolatedColors[1].join(',')})`);
      el.style.setProperty('--color3', `rgb(${interpolatedColors[2].join(',')})`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [active]);

  return (
    <div
      className="sliding-cover"
      ref={coverRef}
      onClick={handleClick}
    />
  );
};

export default SlidingCover;
