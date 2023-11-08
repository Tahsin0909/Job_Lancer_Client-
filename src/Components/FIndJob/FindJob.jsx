import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../ContextApi/ContextApi";
import { AiOutlineHeart } from "react-icons/ai";

const FindJob = () => {
    const { User } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [jobData, setJobData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/job')
            .then(res => res.json())
            .then(data => {
                setJobData(data)
                setLoading(false)
            })
    }, [])
    const jobPOsted = (time) => {
        const currentDate = new Date();
        console.log(currentDate);
        const jobPostedDate = time;
        const postedDate = new Date(jobPostedDate);
        console.log(postedDate);
        const timeDifference = currentDate.getTime() - postedDate.getTime();
        console.log(timeDifference);
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) {
            return `Posted ${days} day${days > 1 ? 's' : ''} ago`;
        } else if (hours > 0) {
            return `Posted ${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else if (minutes > 0) {
            return `Posted ${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        } else {
            return `Posted just now`;
        }
    }
    const handleBid = (data) => {
        console.log(data);
        const {email, jobTitle,jobCategory, postedDate, } = data
        const watchListData ={
            userFirebaseUid: User?.userFirebaseUid,
            email: email,
            jobTitle: jobTitle,
            jobCategory: jobCategory,
            postedDate: postedDate,
            jobId: data._id
        }
        fetch('http://localhost:5000/watchList', {
            method: `PUT`,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(watchListData)
        })
            .then(res => res.json())
            .then(resData=> console.log(resData))
    }
    return (
        <div className="lg:px-32 md:px-10 px-4 pt-24">
            <div className="flex justify-center">
                <div>
                    {
                        loading ? <span className="loading loading-infinity loading-lg text-green-600  py-80"></span> : <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                            {
                                jobData?.map(data => <div key={data._id}>
                                    <div className="border-2 p-3 rounded-md">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <p className="text-xl font-semibold">{data?.jobTitle}</p>
                                                <AiOutlineHeart size={20} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-300">{jobPOsted(data?.postedDate)}</p>
                                            </div>
                                        </div>
                                        <p className="border-2 mt-1 rounded-md w-[180px] p-1 border-green-600">{data.jobCategory}</p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <p>Price Range: {data.minPrice} -</p>
                                            <p>{data.maxPrice}</p>
                                        </div>
                                        <p className="">{data.description}</p>
                                        <div className="flex items-center gap-3 mt-2">
                                            <p className="border-2 py-1 px-2 bg-gray-300 rounded-lg">{data.tag1}</p>
                                            <p className="border-2 py-1 px-2 bg-gray-300 rounded-lg">{data.tag2}</p>
                                        </div>
                                        <div>
                                            {
                                                data?.userFirebaseUid == User?.userFirebaseUid ?
                                                    <button disabled className="btn border-2 border-green-900 mt-3 bg-green-900 text-white rounded-md hover:text-green-600 hover:bg-white">Bid Now</button>
                                                    :
                                                    <button onClick={() => handleBid(data)} className="btn border-2 border-green-900 mt-3 bg-green-900 text-white rounded-md hover:text-green-600 hover:bg-white">Bid Now</button>
                                            }
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>

                    }
                </div>
            </div>
        </div>
    );
};

export default FindJob;