import { useContext, useEffect, useState } from "react";
import AboutUs from "../Components/AboutUS/AboutUs";
import Banner from "../Components/Banner/Banner";
import ForClients from "../Components/ForClients/ForClients";
import ForFreelancer from "../Components/ForFreelancer/ForFreelancer";
import Motivation from "../Components/MotivationSlider/Motivation";
import SliderMotiv from "../Components/MotivationSlider/SliderMotiv";
import PopularServices from "../Components/PopularServices/PopularServices";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Components/ContextApi/ContextApi";


const HomeOutlet = () => {
    const { AuthUser } = useContext(AuthContext)
    const ToastData = localStorage.getItem('ToastShow')
    const willShowToast = JSON.parse(ToastData)
    // console.log(JSON.parse(willShowToast))
    const [logInToast, setLogInToast] = useState(true)
    useEffect(() => {
        if (!ToastData) {
            toast.error("Please Log In Or Sign Up")
            setLogInToast(false)
        }
        if (willShowToast == "false") {
            // console.log('Toast dekhaw')
            const demo = AuthUser.email
            toast.success(`Authenticating As ${demo}`)
            localStorage.setItem('ToastShow', JSON.stringify('True'))
        }
    }, [willShowToast, AuthUser.email, logInToast, ToastData])
    return (
        <div className="pt-20 ">
            <div className="">
                <Banner></Banner>
                <SliderMotiv></SliderMotiv>
                <PopularServices></PopularServices>
                <ForClients></ForClients>
                <Motivation></Motivation>
                <ForFreelancer></ForFreelancer>
                <AboutUs></AboutUs>
                <WhyChooseUs></WhyChooseUs>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={true}
            />
        </div>
    );
};

export default HomeOutlet;