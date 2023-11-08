import {  useEffect, useState } from "react";




const FindFreeLancer = () => {
    const [loading, setLoading] = useState(true)
    const [FreelancerData, setFreelancerData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/gig`)
            .then(res => res.json())
            .then(data => {
                setFreelancerData(data)
                setLoading(false)
            })
    }, [FreelancerData])
    console.log(FreelancerData);
    return (
        <div className="flex justify-center items-center py-8 pt-24">
            {
                loading ?
                    <span className="loading loading-infinity text-green-900 loading-lg py-40"></span>
                    :
                    <div>
                        {/* {
                            "_id": "654b16e6b5dd194106f0a7f0",
                        "userFirebaseUid": "FgxVApLUydbUXdATmQNJCqCP70t1",
                        "description": "Elevate Your Ideas with Adobe Illustrator Designs! Your Vision, My Expertise.",
                        "email": "tajisan789@gmail.com",
                        "gigCategory": "Graphic Design",
                        "gigTitle": "I will design anything with adobe illustrator",
                        "maxPrice": "$150",
                        "minPrice": "$100",
                        "photoUrl": "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/290476092/original/deef2156258fcabbc1cfbd06904f43a13e6acf4b/design-your-fiverr-gig-cover-image.png",
                        "rating": "s",
                        "tag1": "Urgents",
                        "tag2": "NewBie",
                        "userName": "Tahsin jisan",
                        "userPhoto": "https://lh3.googleusercontent.com/a/ACg8ocKHJUMm9Ve2SiHOMUQWn5G3OjG86eGANqq_GNuEHi7y-g=s96-c"
  }, */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {
                                FreelancerData?.map(data => <div key={data._id}>
                                    <div className="card w-72 md:w-96 bg-base-100 shadow-xl">
                                        <figure><img src={data.photoUrl} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title text-sm md:text-base font-bold">
                                                {data?.gigTitle.slice(0, 20)}
                                                <div className="badge badge-secondary">NEW</div>
                                            </h2>
                                            <p className="text-sm md:text-base">{data?.description.slice(0, 60)}</p>
                                            <div className="card-actions justify-end">
                                                <div className="badge badge-outline">{data.tag1}</div>
                                                <div className="badge badge-outline">{data.tag2}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
            }
        </div >
    );
};

export default FindFreeLancer;