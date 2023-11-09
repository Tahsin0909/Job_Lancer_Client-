import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";




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
            <Helmet>
                <meta charSet="utf-8" />
                <title>Freelancer</title>
            </Helmet>
            {
                loading ?
                    <span className="loading loading-infinity text-green-900 loading-lg py-40"></span>
                    :
                    <div>
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