import Banner from "../Components/Banner/Banner";
import ForClients from "../Components/ForClients/ForClients";
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
            </div>
        </div>
    );
};

export default HomeOutlet;