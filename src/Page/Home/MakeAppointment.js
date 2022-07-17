import React from 'react';
import doctor from '../../Assets/Image/doctor.png'
import Appointment from '../../Assets/Image/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section style={{
            background:`url(${Appointment})`
        }} className='flex justify-center items-center mt-20'>
            <div className='flex-1 hidden lg:block'>
              <img className='mt-[-165px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-5'>
                <h3 className='text-xl text-primary'>Appointment</h3>
            <h2 className='text-3xl text-white'> Make an Appointment Today</h2>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eius suscipit fugiat aliquid alias vitae quos voluptatum? Beatae molestiae facilis voluptatum maiores laborum fugit libero hic dolorem voluptatem pariatur. Possimus vitae quis nobis maxime minima ipsum repellendus natus distinctio amet.</p>
            <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;