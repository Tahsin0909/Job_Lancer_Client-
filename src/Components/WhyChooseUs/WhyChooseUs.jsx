import { SiSecurityscorecard } from 'react-icons/si';
import { BiSupport } from 'react-icons/bi';
import { TbClockDollar } from 'react-icons/tb';
import { FaHandHoldingDollar } from 'react-icons/fa6';
import { PiHandshakeThin } from 'react-icons/pi';

const WhyChooseUs = () => {
    return (
        <div className='lg:mb-20 mb-10 mt-10'>
            <div className="bg-blue-900 md:py-10 lg:pb-40 md:mt-20   flex flex-col justify-center lg:mx-16 lg:px-20 md:px-10 px-4 ">
                <div className=''>
                    <div>
                        <p className="text-2xl lg:text-3xl text-white text-center pt-5">Why Over 1 Million People Choose Us</p>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 lg:gap-[500px] mt-5 text-white'>
                        {/* grid 1 */}
                        <div>
                            <div className='md:w-96 mt-4'>
                                <div className='flex lg:flex-row flex-col items-center text-xl md:text-3xl  lg:text-2xl gap-2' ><PiHandshakeThin /> <p>Credibility</p></div> <br />
                                <p className='lg:block hidden' >  We verify Freelancers, publish their feedback scores and All-Time Transaction Data to help you identify time-tested professionals across the globe.</p>
                            </div>
                            <div className='md:w-96 mt-4'>
                                <div className='flex lg:flex-row flex-col items-center text-xl md:text-3xl lg:text-2xl gap-2' ><SiSecurityscorecard /> <p>Security</p></div> <br />
                                <p className='lg:block hidden' >
                                    We offer SafePay payment protection and your choice of preferred payment method for financial peace of mind.
                                </p>
                            </div>
                            <div className='md:w-96 mt-4'>
                                <div className='flex lg:flex-row flex-col items-center text-xl md:text-3xl lg:text-2xl gap-2' ><BiSupport /> <p>Support</p></div> <br />
                                <p className='lg:block hidden' >
                                    Our dedicated support team works 24/7 to resolve all of your queries over the phone or email, no matter where you are located.
                                </p>
                            </div>
                            
                        </div>
                        {/* grid-2 */}
                        <div>
                            <div className='md:w-96 mt-4'>
                                <div className='flex lg:flex-row flex-col items-center text-xl md:text-3xl lg:text-2xl gap-2' ><TbClockDollar /> <p>Flexibility</p></div> <br />
                                <p className='lg:block hidden' >
                                    We provide multiple Payment terms and flexible Agreements to enable you to work the way you want.
                                </p>
                            </div>
                            <div className='md:w-96 mt-4'>
                                <div className='flex lg:flex-row flex-col items-center text-xl md:text-3xl lg:text-2xl gap-2' ><FaHandHoldingDollar /> <p>Value</p></div> <br />
                                <p className='lg:block hidden' >
                                    We have the lowest fees in the industry, providing you with maximum value at minimum cost.
                                </p>
                            </div>
                            <button className='btn mt-4 btn-sm lg:btn-md lg:block hidden'>Why Choose Joblancer</button>
                        </div>
                    </div>
                    <button className='btn mt-4 text-center lg:hidden block md:ml-20 mb-4'>Why Choose Joblancer</button>
                </div>
            </div>
            <div className='hidden lg:flex justify-center'>
                <img
                style={{
                    transform: 'translateY(-534px)'

                }}
                className='w-[800px] absolute' src="https://i.ibb.co/JHrR59t/image-removebg-preview-15.png" alt="" />
            </div>
        </div>
    );
};

export default WhyChooseUs;