import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../Assets/Icon/clock.svg'
import marker from '../../Assets/Icon/marker.svg'
import phone from '../../Assets/Icon/phone.svg'
const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
            <InfoCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-primary to-secondary" img={clock}></InfoCard>
            <InfoCard cardTitle="Our Locations" bgClass="bg-[#3A4256]" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact Us" bgClass="bg-gradient-to-r from-primary to-secondary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;