/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextApi/ContextApi";

const MyGig = () => {
    const { User } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [GigData, setGigData] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:5000/gig/${User.userFirebaseUid}`)
            .then(res => res.json())
            .then(data => {
                setGigData(data)
                setLoading(false)
            })
            .catch(err =>{
                setLoading(false)
            })
    }, [User.userFirebaseUid])
    console.log(GigData);
    return (
        <div className='flex justify-center lg:px-32 md:px-10 px-4'>
            <div className="flex justify-center items-center py-4">
                {
                    loading ?
                        <span className="loading loading-infinity text-green-900 loading-lg py-52"></span>
                        :
                        GigData ?
                            <div className="card w-72 md:w-96 bg-base-100 shadow-xl">
                                <figure><img src={GigData.photoUrl} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-sm md:text-base font-bold">
                                    {GigData.gigTitle}
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p className="text-sm md:text-base">{GigData.description}</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">{GigData.tag1}</div>
                                        <div className="badge badge-outline">{GigData.tag2}</div>
                                    </div>
                                </div>
                            </div>
                            :
                            <Link to={"/addGig"}>
                                <p className="py-40 text-xl hover:text-green-600 "><span className="text-lg">+</span>Add Gig</p>
                            </Link>
                }
            </div >
        </div>
    );
};

export default MyGig;
