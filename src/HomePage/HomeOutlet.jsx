import AboutUs from "../Components/AboutUS/AboutUs";
import Banner from "../Components/Banner/Banner";
import ForClients from "../Components/ForClients/ForClients";
import ForFreelancer from "../Components/ForFreelancer/ForFreelancer";
import Motivation from "../Components/MotivationSlider/Motivation";
import SliderMotiv from "../Components/MotivationSlider/SliderMotiv";


const HomeOutlet = () => {
    return (
        <div className="pt-20 ">
            <div className="">
                <Banner></Banner>
                <SliderMotiv></SliderMotiv>
                <ForClients></ForClients>
                <Motivation></Motivation>
                <ForFreelancer></ForFreelancer>
                <AboutUs></AboutUs>
            </div>
        </div>
    );
};

export default HomeOutlet;