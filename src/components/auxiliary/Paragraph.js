import React from "react";
import { useTranslation } from "react-i18next";

const Paragraph = props => {
	const { t } = useTranslation();

	return (
		<p>
			{props.children}
			{t(props.title)}
		</p>
	);
};

export default Paragraph;
