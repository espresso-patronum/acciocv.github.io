import React from "react";
import Oca from '../assets/oca-badge.png';
import Ocp from '../assets/ocp-badge.png';

const CertificationsBadge = () => {
    return (
        <div className='certification-container'>
            <a href='https://www.youracclaim.com/badges/e314e78b-ea91-4259-b241-71ac27b46ac0'>
                <img src={Oca} alt="OCA" className='certification-pic' />
            </a>
            <a href='https://www.youracclaim.com/badges/866820aa-0629-4948-9b95-4b73f85dfc4e'>
                <img src={Ocp} alt="OCP" className='certification-pic' />
            </a>
        </div>
    );
};

export default CertificationsBadge;
