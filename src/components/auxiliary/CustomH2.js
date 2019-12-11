import React from "react";
import { useTranslation } from "react-i18next";

const CustomH2 = props => {
	const { t } = useTranslation();

	return (
		<>
			<h2>{t(props.title)}</h2>
			<hr />
		</>
	)
};

export default CustomH2;
