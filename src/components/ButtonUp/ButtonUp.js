import React, { useState } from "react";
import { ArrowUpward, ArrowUp, Wrapper } from "./ButtonUpElements";
import useButtonUp from "./useButtonUp";

const ButtonUp = () => {
  const { showButton } = useButtonUp();
  const [hover,setHover]=useState(false)
  const onHover=()=>{
      setHover(!hover)
  }

  return (
    <>
      {showButton && (
        <Wrapper
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
        >
          {hover ? <ArrowUpward /> : <ArrowUp />}
        </Wrapper>
      )}
    </>
  );
};

export default ButtonUp;
