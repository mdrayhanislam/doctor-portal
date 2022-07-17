import React from 'react';
import fluoride from '../../Assets/Image/fluoride.png'
import cavity from '../../Assets/Image/cavity.png'
import whitening from '../../Assets/Image/whitening.png'
import Service from './Service';
const Services = () => {
    const Services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
            img: whitening
        }
    ]
    return (
        <div className='py-12'>
            <div className='text-center'>
            <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
            <h2 className='text-4xl'> Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12'>
             {
                Services.map(service => <Service 
                    key={service._id}
                    service={service}
                ></Service>)
             }
            </div>
        </div>
    );
};

export default Services;