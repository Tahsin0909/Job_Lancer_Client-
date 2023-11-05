import Banner from "../Components/Banner/Banner";
import SliderMotiv from "../Components/MotivationSlider/SliderMotiv";


const HomeOutlet = () => {
    return (
        <div className="pt-20 ">
            <div className="">
                <Banner></Banner>
                <SliderMotiv></SliderMotiv>
            </div>
        </div>
    );
};

export default HomeOutlet;