import React, { useState, useEffect, useRef } from "react";
import "./Background.css";
import NET from "vanta/dist/vanta.net.min";

const Background = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xffbc2020,
          backgroundColor: 0xff141414,
          points: 20.0,
          maxDistance: 25.0,
          spacing: 20.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div id="vanta-canvas" ref={myRef}>
      {props.children}
    </div>
  );
};

export default Background;
