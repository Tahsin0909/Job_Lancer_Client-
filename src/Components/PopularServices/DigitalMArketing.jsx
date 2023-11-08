import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../ContextApi/ContextApi";
import { AiOutlineHeart } from "react-icons/ai";

const Digital = () => {
    const { User } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [jobData, setJobData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/jobCategory/Digital%20Marketing')
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
        const { email, jobTitle, jobCategory, postedDate, _id, deadLine } = data
        const BdiData = {
            bidRequestEmail: User?.userEmail,
            userFirebaseUid: User?.userFirebaseUid,
            email: email,
            jobTitle: jobTitle,
            jobCategory: jobCategory,
            postedDate: postedDate,
            deadLine: deadLine,
            jobId: _id,
            status: "applied"
        }
        fetch('http://localhost:5000/myBid', {
            method: `PUT`,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(BdiData)
        })
            .then(res => res.json())
            .then(resData => console.log(resData))
    }
    const handleWatchList = (data) => {
        console.log(data);
        const { email, jobTitle, jobCategory, postedDate, deadLine, _id } = data
        const watchListData = {
            userFirebaseUid: User?.userFirebaseUid,
            JobId: _id,
            email: email,
            jobTitle: jobTitle,
            jobCategory: jobCategory,
            postedDate: postedDate,
            deadLine: deadLine,
            jobId: data._id
        }
        fetch('http://localhost:5000/jobCategory/Graphic%20Design', {
            method: `PUT`,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(watchListData)
        })
            .then(res => res.json())
            .then(resData => console.log(resData))
    }
    const deadLinExceed = (data) => {
        // console.log(data);
        const dateString = data?.deadLine;
        console.log(dateString);
        const parts = dateString.split('-');

        const day = parseInt(parts[2], 10);
        const currentDate = new Date()
        const currentDay = parseInt(currentDate.getDate())
        console.log(currentDay);
        console.log(day);
        if (day < currentDay) {
            console.log("job closed");
            return (
                <button className="btn border-2 border-green-900 mt-3 bg-green-900 text-white rounded-md hover:text-green-600 hover:bg-white">Job Closed</button>
            )
        }
        else {
            if (data?.userFirebaseUid == User?.userFirebaseUid) {
                return (
                    <button disabled className="btn border-2 border-green-900 mt-3 bg-green-900 text-white rounded-md hover:text-green-600 hover:bg-white">Bid Now</button>
                )
            }
            return (
                <button onClick={() => handleBid(data)} className="btn border-2 border-green-900 mt-3 bg-green-900 text-white rounded-md hover:text-green-600 hover:bg-white">Bid Now</button>
            )
        }

    }
    return (
        <div className=" pb-6">
            <div className="flex justify-center">
                <div>
                    {
                        loading ? <span className="loading loading-infinity loading-lg text-green-600  py-40"></span> : <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                            {
                                jobData?.slice(0, 4).map(data => <div key={data._id}>
                                    <div className="border-2 p-3 rounded-md">
                                        <div className="flex flex-col md:flex-row items-center md:justify-between">
                                            <div className="flex items-center gap-4">
                                                <p className="md:text-xl text-md font-semibold text-green-700">{data?.jobTitle}</p>
                                                <AiOutlineHeart size={20} onClick={() => handleWatchList(data)} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-300">{jobPOsted(data?.postedDate)}</p>
                                            </div>
                                        </div>
                                        <p className="border-2 mt-1 md:text-sm text-xs rounded-md md:w-[150px] w-[130px] p-1 border-green-600">{data.jobCategory}</p>
                                        <div className="flex items-center gap-2 mt-2 ">
                                            <p className="text-sm font-semibold">Price Range: {data.minPrice} -</p>
                                            <p className="text-sm font-semibold">{data.maxPrice}</p>
                                        </div>
                                        <p className="text-sm font-semibold mt-1">Deadline:{data?.deadLine}</p>
                                        <div className="flex items-center gap-3 mt-2">
                                            <p className="border-2 py-1 px-2 bg-gray-300 rounded-lg text-xs">{data.tag1}</p>
                                            <p className="border-2 py-1 px-2 bg-gray-300 rounded-lg text-xs">{data.tag2}</p>
                                        </div>
                                        <div>
                                            {
                                                deadLinExceed(data)
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

export default Digital;