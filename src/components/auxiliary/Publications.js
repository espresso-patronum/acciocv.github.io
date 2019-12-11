import React from "react";
import { useTranslation } from "react-i18next";

const Publications = props => {
  const { t } = useTranslation();

  return (
    <div className="publications">
      {props.numbers.map(number => {
        return (
          <>
            <p>{t(`publications-subtitle-${number}`)}</p>
            <ul>
              <li>{t(`publications-desc-${number}`)}</li>
            </ul>
          </>
        );
      })}
    </div>
  );
};

export default Publications;
