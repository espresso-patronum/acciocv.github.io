import React from 'react';
import { useTranslation } from "react-i18next";

const PlaceAndPeriod = props => {
	const { placeName, startDate, endDate } = props;
	const { t } = useTranslation();

	return (
		<div className="job-period">
			<a href={props.href} target="_blank" rel="noopener noreferrer">
				<h4 className="job-period-subtitle">{placeName}</h4>
			</a>
			<h4 className="job-period-subtitle">{startDate} - {endDate ? endDate : t("now")}</h4>
		</div>
	)
}

export default PlaceAndPeriod;
