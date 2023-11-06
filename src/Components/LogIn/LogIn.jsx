import { AiOutlineCheck } from "react-icons/ai";
const LogIn = () => {
    return (
        <div>
            <div className="pt-24 pb-10">
                <div className="flex flex-col-reverse lg:flex-row gap-4  justify-center items-center">
                    <div className=" lg:w-[500px]">
                        <div >
                            <p className="text-xl text-green-900">Register Now :</p>
                            <form>
                                <div className=" w-full ">
                                    <label className="label">
                                        <span className="label-text text-green-900">Email?</span>
                                    </label>
                                    <input name="email" required type="email" placeholder="ghost@email.com" className="input input-bordered input-success  w-full max-w-md" />
                                </div>
                                <div className=" w-full ">
                                    <label className="label">
                                        <span className="label-text text-green-900">Password?</span>
                                    </label>
                                    <input name="password" required type="password" placeholder="1234A@" className="input input-bordered input-success  w-full max-w-md" />
                                </div>
                                <input type="submit" value='Submit' className="btn glass mt-4 w-full max-w-md bg-green-900 text-white hover:text-green-900" />
                            </form>
                            <div className="divider max-w-md text-green-900">OR Sign Up With</div>

                            <div className=" max-w-md w-full mt-2 rounded-xl border  bg-white ">
                                <div className=" flex gap-8 md:gap-16 items-center justify-center py-4 ">
                                    <img className="w-10 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-200" src="https://cdn-icons-png.flaticon.com/128/281/281764.png" alt="Google Sign Up" />
                                    <img className="w-10 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-200" src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="Facebook Sign Up" />
                                    <img className="w-10 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-200" src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="Instagram Sign up" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-400 to-green-900 w-[410px] pl-10 pt-4 lg:block hidden">
                        <h1 className="text-white text-2xl mb-4">Success starts here</h1>
                        <div className="flex items-center gap-2  mt-2 text-white max-w-xs">
                            <AiOutlineCheck size={20} />
                            <p>Over 100 Categories</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2 text-white max-w-xs">
                            <AiOutlineCheck size={20} />
                            <p>Pay per project, not per hour</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2 text-white max-w-md">
                            <AiOutlineCheck size={20} />
                            <p>Access to talent and businesses <br /> across the globe</p>
                        </div>
                        <img className=" w-[400px]  " src="https://i.ibb.co/T001XN6/portrait-pensive-bearded-man-with-eyes-closed-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;