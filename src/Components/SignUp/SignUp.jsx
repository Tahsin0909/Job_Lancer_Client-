import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

const SignUp = () => {
    //Error MAssage State for password
    const [passwordError, setPasswordError] = useState('')
    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const city = form.city.value
        const zip = form.zip.value
        const skill = form.skill.value
        const picture_Url = form.picture.value
        const User = {
            name, email, password, city, zip, skill, picture_Url
        }

        const UpperRegX = /(?=.*[A-Z])/;

        // regx to check special charecter
        const SpecialRegX = /(?=.*[@$!%*?&])/

        if (password.length >= 6) {

            // to check UpperCAse
            if (UpperRegX.test(password)) {

                // to check special charecter
                if (SpecialRegX.test(password)) {
                    console.log(User);
                    setPasswordError('')
                }
                else {
                    setPasswordError('*Password must contain at least one special character.')
                }
            }
            else {
                setPasswordError('*Password must contain at least one uppercase letter')
            }
        }
        else { setPasswordError('*Password must be at least 6 characters long.') }
    }
    return (
        <div>
            <div className="pt-24 pb-10">
                <div className="flex flex-col-reverse lg:flex-row gap-4  justify-center ">
                    <div className="flex justify-center">
                        <div >
                            <p className="text-xl text-green-900">Register Now :</p>
                            <form onSubmit={(e) => handleSignUp(e)}>
                                <div className=" w-full ">
                                    <label className="label">
                                        <span className="label-text text-green-900">Name?</span>
                                    </label>
                                    <input name="name" type="text" placeholder="Username" className="input input-bordered input-success  w-full max-w-md" />
                                </div>
                                <div className="lg:flex gap-2 pb-2">
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
                                        <input name="password" required type="password" placeholder="1234A@" className="input input-bordered input-success  lg:max-w-[218px] max-w-md w-full" />
                                    </div>
                                </div>
                                <p className="text-xs text-red-600 ">{passwordError}</p>
                                <div className="flex items-center gap-3">
                                    <div className="">
                                        <label className="label">
                                            <span className="label-text text-green-900">City?</span>
                                        </label>
                                        <input name="city" type="text" placeholder="Dhaka" className="input input-bordered input-success   max-w-[218px]" />
                                    </div>
                                    <div className=" w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-green-900">Zip?</span>
                                        </label>
                                        <input name="zip" required type="text" placeholder="1234" className="input input-bordered input-success  w-full max-w-[218px]" />
                                    </div>
                                </div>
                                <div className=" w-full ">
                                    <label className="label">
                                        <span className="label-text text-green-900">Skill?</span>
                                    </label>
                                    <select name="skill" className="select select-success w-full max-w-md">
                                        <option disabled selected>Select Your Skill</option>
                                        <option>Web Development</option>
                                        <option>Digital MArketing</option>
                                        <option>Graphic Design</option>
                                    </select>
                                </div>
                                <div className=" w-full ">
                                    <label className="label">
                                        <span className="label-text text-green-900">picture Url?</span>
                                    </label>
                                    <input name="picture" type="text" placeholder="1234" className="input input-bordered input-success  w-full max-w-md" />
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
                    <div className="bg-gradient-to-r from-green-400 to-green-900 w-[610px] pl-10 pt-4 lg:block hidden">
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
                        <img className=" w-[400px] translate-x-7 translate-y-5 " src="https://i.ibb.co/vLPX91D/portrait-excited-young-african-man-eyeglasses-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;