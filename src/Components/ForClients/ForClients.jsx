import { BiCommentAdd, BiDna } from 'react-icons/bi';
import { BiSolidFileFind } from 'react-icons/bi';
import { AiOutlineFileDone } from 'react-icons/ai';

const ForClients = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="">
                <div className="hero w-[90vw] h-[80vh]"
                    style={{ backgroundImage: 'url(https://i.ibb.co/8m3Jtrj/Adobe-Stock-347526190.png)' }}>
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content relative flex text-start text-neutral-content">
                        <div className="lg:relative lg:right-[330px] -top-10 lg:w-[600px]">
                            <p className="">For Clients</p>
                            <h1 className="mb-5 text-3xl md:text-5xl font-bold text-transparent bg-green-700 bg-clip-text font-Oswald "> <span className=" md:text-6xl text-4xl">Find talent</span><br />
                                your way</h1>
                            <p className="font-[Montserrat Alternates] md:text-base text-sm">
                                Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations. <br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center text-white">
                    <div className="lg:flex sm:grid grid-cols-2 md:grid-cols-3 lg:gap-10 gap-4 items-center justify-center lg:w-fit  lg:relative bottom-[150px] py-2 " >
                        <div className=" py-8 px-2 lg:px-12 flex flex-col gap-2 items-center  bg-green-700 hover:bg-white hover:text-green-600">
                            <p><BiCommentAdd /> <span className="text-xl font-bold">Post A Job</span><br />to Hire A Professional</p>
                        </div>
                        <div className=" py-8 px-2 lg:px-12 flex flex-col gap-2 items-center  bg-green-700 hover:bg-white hover:text-green-600">
                            <p><BiSolidFileFind/> <span className="text-xl font-bold">Or Find Freelancer</span><br />To do Your Job</p>
                        </div>
                        <div className=" py-8 px-2 lg:px-12 flex flex-col gap-2 items-center  bg-green-700 hover:bg-white hover:text-green-600">
                            <p><BiDna/> <span className="text-xl font-bold">Wait For Biding</span><br />To get A Better Deal</p>
                        </div>
                        <div className=" py-8 px-2 lg:px-12 flex flex-col gap-2 items-center  bg-green-700 hover:bg-white hover:text-green-600">
                            <p><AiOutlineFileDone/><span className="text-xl font-bold">Accept The Pro</span><br />With BEtter Deals</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForClients;