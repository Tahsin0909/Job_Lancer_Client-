import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextApi/ContextApi";
import { Link } from "react-router-dom";
import './BidRequest.css'

const BidRequest = () => {
    const { User } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [myBidsData, setMyBidsData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/bidReq/${User.userEmail}`)
            .then(res => res.json())
            .then(data => {
                setMyBidsData(data)
                setLoading(false)
            })
    }, [User.userEmail])
    console.log(myBidsData);
    //Handle Accept 
    const handleAccept = (id) => {
        console.log(id);
        const BidStatus = {
            status: "in Progress"
        }
        fetch(`http://localhost:5000/bid/${id}`, {
            method: `PATCH`,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(BidStatus)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    const handleReject = (id) => {
        console.log(id);
        const BidStatus = {
            status: "rejected"
        }
        fetch(`http://localhost:5000/bid/${id}`, {
            method: `PATCH`,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(BidStatus)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
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

                <div className="flex flex-col items-center gap-1 ">
                    <button className="text-xs py-1 md: px-2 md:w-24 w-14 border-2 hover:bg-blue-900 hover:text-white border-blue-900 bg-white text-blue-900 ">Job Closed</button>
                </div>
            )
        }
        else {
            if (data?.status === "applied") {
                return (
                    <div className="flex flex-col items-center gap-1 ">
                        <button onClick={() => handleAccept(data?.jobId)} className="text-xs py-1 md: px-2 md:w-24 w-14 border-2 hover:bg-blue-900 hover:text-white border-blue-900 bg-white text-blue-900 ">Accept</button>
                        <button onClick={() => handleReject(data?.jobId)} className="text-xs py-1 md: px-2 md:w-24 w-14 border-2 hover:bg-blue-900 hover:text-white border-blue-900 bg-white text-blue-900 ">Reject</button>
                    </div>
                )
            }
        }

    }
    return (
        <div className="flex justify-center items-center py-2">
            {
                loading ?
                    <span className="loading loading-infinity text-green-900 loading-lg py-40"></span>
                    :
                    myBidsData.length > 0 ?
                        <div>
                            <div className="overflow-x-auto">
                                <table className="table ">
                                    {/* head */}
                                    <thead>
                                        <tr className="text-green-900 ">
                                            <th className="">
                                                <p>Bid Request Email</p>
                                            </th>
                                            <th className="hide-on-small ">
                                                <p>Job Title</p>
                                            </th>
                                            <th className="hide-on-small hide-on-tablet">
                                                <p>Job Category</p>
                                            </th>
                                            <th className="hide-on-tablet hide-on-tablet">
                                                <p>Posted Date</p>
                                            </th>
                                            <th className="hide-on-tablet ">
                                                <p>Deadline</p>
                                            </th>
                                            <th className=" ">
                                                <p>Status</p>
                                            </th>
                                            <th className=" ">
                                                <p> Action</p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            // "_id": "654b7b96e1cc6bb0d49c5171",
                                            // "jobId": "654aa08ccf1d635eb2ec706c",
                                            // "userFirebaseUid": "FgxVApLUydbUXdATmQNJCqCP70t1",
                                            // "deadLine": "2023-11-08",
                                            // "email": "tahsin345@gmail.cm",
                                            // "jobCategory": "Digital Marketing",
                                            // "jobTitle": "interactive web development",
                                            // "postedDate": "2023-11-07T20:39:40.871Z",
                                            // "status": "in Progress"
                                            myBidsData?.map(data => <tr key={data._id}
                                                className={data?.status === "in Progress" ? 'text-blue-900' : data?.status === "completed" ? "text-green-600" : ' '}
                                            >
                                                {/* row 1 */}
                                                <td className="text-[10px] md:text-sm">{data?.bidRequestEmail}</td>
                                                <td className="text-[10px] md:text-sm hide-on-small">{data?.jobTitle}</td>
                                                <td className="text-xs md:text-sm hide-on-tablet">{data?.jobCategory}</td>
                                                <td className="text-xs  border-2 w-fit hide-on-tablet">{data?.postedDate?.slice(0, 10)}</td>
                                                <td className="text-xs md:text-sm border w-fit hide-on-tablet">{data?.deadLine}</td>
                                                <td className="text-[10px] md:text-sm ">{data?.status}</td>
                                                <td className=" ">
                                                    {
                                                        deadLinExceed(data)
                                                    }
                                                </td>
                                            </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        :
                        <Link to={"/addGig"}>
                            <p className="py-40 text-xl hover:text-green-600 "><span className="text-lg"></span>No Data Found</p>
                        </Link>
            }
        </div >
    );
};

export default BidRequest;