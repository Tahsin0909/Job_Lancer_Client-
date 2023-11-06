import { AiOutlineSafetyCertificate } from 'react-icons/ai';


const AboutUs = () => {
    return (
        <div>
            <div className="flex justify-center mt-10 lg:mt-20  bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900">
                <div className="flex flex-col-reverse lg:flex-row  justify-center text-white ">
                    <div className=" w-full  px-10 pt-8 lg:py-20 py-6">
                        <div className="flex md:flex-row flex-col justify-center items-center gap-8">
                            <div className="md:w-[700px]">
                                <div className="flex items-center">
                                    <h1
                                        className="text-2xl font-bold bg-gradient-to-r from-green-400 via-blue-300 to-purple-400 bg-clip-text text-transparent"><span>job</span><span className="font-[BlackOpsOne]">lancer</span>
                                    </h1>
                                    <img className="w-4 h-4 relative -top-1 right-1" src="https://cdn-icons-png.flaticon.com/128/1432/1432368.png" alt="" />
                                    <p className='text-xs md:text-base' >EnterPrice Solution.</p>
                                </div>
                                <p className="lg:mt-4 text-xl lg:text-3xl md:72 lg:w-96">
                                    Advanced solutions and professional talent for businesses <br />
                                </p>
                                <div className="flex flex-col">
                                    <div className='flex items-center gap-2'>
                                        <AiOutlineSafetyCertificate size={30} />
                                        <p className=" py-4 lg:text-base text-xs">Joblancer Pro <br />
                                            Access top freelancers and professional business tools for any project</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <AiOutlineSafetyCertificate size={30} />
                                        <p className=" py-4 lg:text-base text-xs ">
                                            Joblancer Certified <br />
                                            Build your own branded marketplace of certified experts
                                        </p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <AiOutlineSafetyCertificate size={30} />
                                        <p className=" py-4 lg:text-base text-xs">
                                            Joblancer Enterprise <br />
                                            Manage your freelance workforce and onboard additional talent with an end-to-end SaaS solution
                                        </p>
                                    </div>
                                    <button className='btn  w-40'>Learn More</button>
                                </div>
                            </div>
                            <div>
                                <img className="lg:w-[500px]" src="https://i.ibb.co/fQZjC26/EN.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;