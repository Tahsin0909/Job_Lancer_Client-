/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";


const SliderMotiv = () => {
    const [select, setSelect] = useState(1)
    const changeItem = (x) => {
        setSelect(x)
    }
    console.log(select);
    return (
        <div className="py-10">
            <div className="carousel w-full text-center lg:px-32 md:px-10 px-4">


                <div id="item1" className={select == 1 ? 'block carousel-item w-full' : 'hidden'}>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/g-jwWYX7Jlo?si=mRyCS_O4Bmv49O6b&amp;start=6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <p className="text-xl font-[Kenia]">"Great things in business are never done by one person. They're done by a team of people."<br />- Steve Jobs </p>
                    </div>
                </div>


                <div id="item2" className={select == 2 ? 'block carousel-item w-full' : 'hidden'}>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/g-jwWYX7Jlo?si=mRyCS_O4Bmv49O6b&amp;start=6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <p className="text-xl font-[Kenia]">"Unity is strength... when there is teamwork and collaboration, wonderful things can be achieved."<br />- Mattie Stepanek </p>
                    </div>
                </div>
                <div id="item3" className={select == 3 ? 'block carousel-item w-full' : 'hidden'}>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/g-jwWYX7Jlo?si=mRyCS_O4Bmv49O6b&amp;start=6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <p className="text-xl font-[Kenia]">"Collaboration allows teachers to capture each other's fund of collective intelligence."<br />- Mike Schmoker </p>
                    </div>
                </div>
                <div id="item4" className={select == 4 ? 'block carousel-item w-full' : 'hidden'}>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/g-jwWYX7Jlo?si=mRyCS_O4Bmv49O6b&amp;start=6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <p className="text-xl font-[Kenia]">"If you can dream it, you can do it. Teamwork makes the dream work." <br />- John C. Maxwell</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <button onClick={() => changeItem(1)} className="btn btn-xs">1</button>
                <button onClick={() => changeItem(2)} className="btn btn-xs">2</button>
                <button onClick={() => changeItem(3)} className="btn btn-xs">3</button>
                <button onClick={() => changeItem(4)} className="btn btn-xs">4</button>
            </div>

        </div>
    );
};

export default SliderMotiv;