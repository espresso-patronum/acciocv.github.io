import React from 'react';
import { useTranslation } from "react-i18next";

const Qualifications = props => {
	const { t } = useTranslation();
	
	return (
		<div className="qualifications">
			{
				props.numbers.map(number => {
					return (
						<>
							<p>{t(`qualifications-subtitle-${number}`)}</p>
							<ul>
								<li>{t(`qualifications-desc-${number}`)}</li>
							</ul>
						</>
					)
				})
			}
		</div>
	)
}

export default Qualifications;
