import React from "react";
import { useTranslation } from "react-i18next";

const CustomH3 = props => {
  const { t } = useTranslation();

  return <h3>{t(props.title)}</h3>;
};

export default CustomH3;
