import React from "react";
import { useTranslation } from "react-i18next";

const MultiParagraph = props => {
	const { t } = useTranslation();

	return (
		<div>
			{props.fields.map((field, i) => {
				return <p key={i}>{t(field)}</p>;
			})}
		</div>
	);
};

export default MultiParagraph;
