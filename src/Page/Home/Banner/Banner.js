import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton';
import doctorGettingPatient from './../../../Assets/Image/doctorGettingPatient.webp'
import bg from './../../../Assets/Image/bg.png'
const Banner = () => {
    return (
        <div className="hero min-h-screen"
        style={{
          background:`url(${bg})`
      }}
        >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={doctorGettingPatient}  className="w-full lg:max-w-screen-md rounded-lg shadow-2xl" alt=''/>
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Start Here</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
           <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    );
};

export default Banner;