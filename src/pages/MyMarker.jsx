import React from "react";

const MyMarker = ({ text, tooltip, $hover }) => {
  const handleClick = () => {
    console.log(`You clicked on ${tooltip}`);
  };

  return (
    <div className={$hover ? "blob red" : "blob red"} onClick={handleClick}>
      <span className="circleText" title={tooltip}>
        {text}
      </span>
    </div>
  );
};

export default MyMarker;
