import React from "react";
import idFlag from "../../assets/id-flag.png";
import usFlag from "../../assets/us-flag.png";

const I18nFlags = props => {
  return (
    <>
      <img
        src={idFlag}
        onClick={() => props.changeLanguage("id")}
        alt="Indonesia Flag"
        className="flag"
      />
      <img
        src={usFlag}
        onClick={() => props.changeLanguage("en")}
        alt="US Flag"
        className="flag"
      />
    </>
  );
};

export default I18nFlags;
