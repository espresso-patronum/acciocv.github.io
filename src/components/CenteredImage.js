import React from "react";

const CenteredImage = props => {
  return (
    <div className="centered">
      <img src={props.image} alt="Restin" className="profile-pic" />
    </div>
  );
};

export default CenteredImage;
