import { useContext, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { AuthContext } from "../ContextApi/ContextApi";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
const LogIn = () => {
    // Navigate After LOgIn
    const location = useLocation()
    const navigate = useNavigate()

    const { PasswordSignIn, GoogleSignUp } = useContext(AuthContext)
    //Error MAssage State for password
    const [passwordError, setPasswordError] = useState('')
    const handleLogIn = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const User = {
            email, password
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
                    PasswordSignIn(email, password)
                        .then(result => {
                            console.log(result.user)

                            const loggedUser = {
                                userLastSignInTime: result.user.metadata.lastSignInTime,
                            }
                            fetch(`http://localhost:5000/user/${result.user.uid}`, {
                                method: `PATCH`,
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(loggedUser)
                            })
                                .then(res => res.json())
                                .then(data => console.log(data))
                            localStorage.setItem('ToastShow', JSON.stringify('false'))
                            axios.post('http://localhost:5000/jwt', {
                                email: email,
                                password: password
                            }, { withCredentials: true })
                                .then(res => console.log(res.data))
                            location?.search ? navigate(`${location?.search?.slice(1, location.search.length)}`) : navigate('/')
                        })
                        .catch((error) => {
                            const errorMessage = error.message;
                            console.log(errorMessage);
                        });
                    form.reset()
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
    const handleGoogle = () => {
        GoogleSignUp()
            .then(result => {
                console.log(result.user)

                const loggedUser = {
                    userLastSignInTime: result.user.metadata.lastSignInTime,
                }
                fetch(`http://localhost:5000/user/${result.user.uid}`, {
                    method: `PATCH`,
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
                localStorage.setItem('ToastShow', JSON.stringify('false'))
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Log In</title>
            </Helmet>
            <div className="pt-24 pb-10">
                <div className="flex flex-col-reverse lg:flex-row gap-4  justify-center items-center">
                    <div className=" lg:w-[500px]">
                        <div >
                            <p className="text-xl text-green-900">Log In Now :</p>
                            <form onSubmit={(e) => handleLogIn(e)}>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text text-green-900">Email?</span>
                                    </label>
                                    <input name="email" required type="email" placeholder="ghost@email.com" className="input input-bordered input-success w-full max-w-md" />
                                </div>
                                <div className=" ">
                                    <label className="label">
                                        <span className="label-text text-green-900">Password?</span>
                                    </label>
                                    <input name="password" required type="password" placeholder="1234A@" className="input input-bordered input-success  w-full max-w-md" />
                                </div>
                                <p className="text-xs text-red-600 w-[60vw]">{passwordError}</p>
                                <input type="submit" value='Submit' className="btn glass mt-4 w-full max-w-md bg-green-900 text-white hover:text-green-900" />
                            </form>
                            <div className="divider max-w-md text-green-900">OR Sign Up With</div>

                            <div className=" max-w-md w-full mt-2 rounded-xl border  bg-white ">
                                <div className=" flex gap-8 md:gap-16 items-center justify-center py-4 ">
                                    <img onClick={handleGoogle} className="w-10 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-200" src="https://cdn-icons-png.flaticon.com/128/281/281764.png" alt="Google Sign Up" />
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