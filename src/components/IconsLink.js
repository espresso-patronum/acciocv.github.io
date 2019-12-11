import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconsLink = props => {
	return (
		<div className='icons-container'>
			{props.links.map((link, i) => {
				return (
					<a key={i} href={link.href}>
						<FontAwesomeIcon icon={["fab", link.name]} size="3x" color='lightgray' />
					</a>
				);
			})}
		</div>
	);
};

export default IconsLink;
