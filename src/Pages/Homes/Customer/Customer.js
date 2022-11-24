import React from 'react';
import user1 from '../../../asset/student-1.png'
import user2 from '../../../asset/student-2.png'
import user3 from '../../../asset/student-3.png'
const Customer = () => {
    return (
        <div>
            <section class="text-gray-600 body-font pt-10">
                <h2 className='text-4xl text-center pt-10'>Our Happy Customer</h2>
                <p className='text-xl text-center py-4'>Over 5600 happy customer. Don' t just take our more</p>
                <div class="container px-5 py-14 mx-auto">
                    <div class="flex flex-wrap justify-between -m-4">
                        <div class="lg:w-3/12 lg:mb-0 mb-6 p-2  bg-gray-100 ">
                            <div class="h-full text-center">
                                <img alt={user1} class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={user1} />
                                <p class="leading-relaxed">
                                    The overall purpose of a review article should be to provide a valuable, solid, informative, critical summary of a well-defined topic/area to the reader.</p>
                                <span class="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                            </div>
                        </div>
                        <div class="lg:w-3/12 lg:mb-0 mb-6 p-2  bg-gray-100 ">
                            <div class="h-full text-center">
                                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={user2} />
                                <p class="leading-relaxed">A very Trusty Site. I have buy a lot of books from them. There service is very well .</p>
                                <span class="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
                            </div>
                        </div>
                        <div class="lg:w-3/12 lg:mb-0 p-2 bg-gray-100">
                            <div class="h-full text-center">
                                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={user3} />
                                <p class="leading-relaxed">An awsome site for buing secoand hand book. Here you can buy best books at a resonable price.</p>
                                <span class="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Customer;