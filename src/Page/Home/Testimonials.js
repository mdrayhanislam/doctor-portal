import React from 'react';
import quote from '../../Assets/Icon/quote.svg'
import people1 from '../../Assets/Image/people1.png'
import people2 from '../../Assets/Image/people2.png'
import people3 from '../../Assets/Image/people3.png'
import Review from './Review';
const reviews = [
    {
        _id: 1,
        name: 'winson Herry',
        review: '',
        location: 'california',
        img: people1
    },
    {
        _id: 2,
        name: 'winson Herry',
        review: '',
        location: 'california',
        img: people2
    },
    {
        _id: 3,
        name: 'winson Herry',
        review: '',
        location: 'california',
        img: people3
    },
]
const Testimonials = () => {
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                <h2 className='text-3xl'>What our Patients say</h2>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review =><Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;