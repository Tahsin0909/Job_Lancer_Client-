

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[75vh] "
                style={{ backgroundImage: 'url(https://i.ibb.co/yPwM0hV/Top-freelancing-countries-2-1280x720.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content relative flex text-start text-neutral-content">
                    <div className="lg:relative lg:right-[330px]  lg:w-[600px]">
                        <h1 className="mb-5 text-3xl md:text-5xl font-bold text-transparent bg-green-700 bg-clip-text font-Oswald "> <span className=" md:text-6xl text-4xl">Find & Hire </span><br />
                            Expert Freelancers</h1>
                        <p className="mb-5 text-lg md:text-xl">Work with the best freelance talent from around the world on our secure,
                            flexible and cost-effective platform. </p>
                        <p className="font-[Montserrat Alternates] md:text-base text-sm">
                            Forget the old rules. You can have the best people.
                            Right now. Right here. <br />
                            <button className="p-4 rounded-sm shadow-lg bg-green-700  text-white mt-4">Get Started</button>
                        </p>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <div className="border border-gray-400 text-gray-400 p-2 hover:border-green-800 hover:text-green-800">
                                <p>Web Development</p>
                            </div>
                            <div className="border border-gray-400 text-gray-400 p-2 hover:border-green-800 hover:text-green-800">
                                <p>Digital Marketing</p>
                            </div>
                            <div className="border border-gray-400 text-gray-400 p-2 hover:border-green-800 hover:text-green-800">
                                <p>Graphic Design</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center lg:relative bottom-10 ">
                <div className="lg:flex sm:grid grid-cols-1 md:grid-cols-2 lg:gap-0 gap-4 items-center justify-center lg:w-fit  bg-white py-2" >
                    <div className=" py-4 lg:px-12 flex gap-2 items-center">
                        <img className="w-20" src="https://i.ibb.co/M8k0RVC/icons8-digital-60.png" alt="" />
                        <p><span className="text-xl font-bold">1000</span><br />Freelancer Worldwide</p>
                    </div>
                    <div className=" py-4 lg:px-12 flex gap-2 items-center">
                        <img className="w-20" src="https://i.ibb.co/C5HkCpV/icons8-new-job-100.png" alt="" />
                        <p><span className="text-xl font-bold">20000</span><br />Job Posted</p>
                    </div>
                    <div className=" py-4 lg:px-12 flex gap-2 items-center">
                        <img className="w-20" src="https://i.ibb.co/MsHcBdS/icons8-money-80.png" alt="" />
                        <p><span className="text-xl font-bold">!00M</span><br />Paid To FreeLancer</p>
                    </div>
                    <div className=" py-4 lg:px-12 flex gap-2 items-center">
                        <img className="w-20" src="https://i.ibb.co/4skmn92/icons8-guarantee-80.png" alt="" />
                        <p><span className="text-xl font-bold">99%</span><br />Customer Satisfaction</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Banner;