/* eslint-disable react/no-unescaped-entities */


const ForFreelancer = () => {
    return (
        <div className="flex justify-center mt-10 lg:mt-32">
            <div className="flex flex-col-reverse lg:flex-row  justify-center w-[90vw] text-white">
                <div className="bg-gradient-to-r from-blue-400 to-blue-900 flex flex-col md:flex-row  items-center lg:gap-8 px-10 pt-8">
                    <div className="md:w-[600px]">
                        <p className="">For Freelancers</p>
                        <h1 className="mb-5 text-3xl md:text-5xl font-bold text-transparent bg-blue-700 bg-clip-text font-Oswald "> <span className=" md:text-6xl text-4xl">Find </span><br />
                            great work</h1>
                        <p className="font-[Montserrat Alternates] md:text-base text-sm">
                            Meet clients you’re excited to work with and take
                            your career or business to new heights. <br />
                        </p>
                        <div className="flex flex-col md:flex-row mt-20">
                            <p className="border-t py-4 px-8">Find opportunities for every stage of your <br /> freelance career</p>
                            <p className="border-t py-4 px-8">
                                Control when, where,and how you work
                            </p>
                            <p className="border-t py-4 px-8">
                                Explore different ways  to earn
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="lg:w-[700px]" src="https://i.ibb.co/dgxFN9H/image.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ForFreelancer;