import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextApi/ContextApi";
import './MyBids.css'

const MyBids = () => {
    const { User } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [myBidsData, setMyBidsData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myBid/${User.userFirebaseUid}`)
            .then(res => res.json())
            .then(data => {
                setMyBidsData(data)
                setLoading(false)
            })
    }, [User.userFirebaseUid])
    // console.log(myBidsData);
    const handleComplete = (id) => {
        console.log(id);
        const BidStatus = {
            status: "completed"
        }
        fetch(`http://localhost:5000/bid/${id}`, {
            method: `PATCH`,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(BidStatus)
        })
            .then(res => res.json())
        // .then(data => {
        //     console.log(data);

        // })
    }

    const deadLinExceed = (data) => {
        // console.log(data);
        const dateString = data?.deadLine;
        // console.log(dateString);
        const parts = dateString.split('-');

        const day = parseInt(parts[2], 10);
        const currentDate = new Date()
        const currentDay = parseInt(currentDate.getDate())
        // console.log(currentDay);
        // console.log(day);
        if (day < currentDay) {
            // console.log("job closed");
            return (

                <div className="flex flex-col items-center gap-1 ">
                    <button className="text-xs py-1 md: px-2 md:w-24 w-14 border-2 hover:bg-blue-900 hover:text-white border-blue-900 bg-white text-blue-900 ">Job Closed</button>
                </div>
            )
        }
        else {
            if (data?.status === "in Progress") {
                return (
                    <div className="flex flex-col items-center gap-1 ">
                        <button onClick={() => handleComplete(data?.jobId)} className="text-xs py-1 md: px-2 md:w-24 w-14 border-2 hover:bg-blue-900 hover:text-white border-blue-900 bg-white text-blue-900 ">Completed</button>
                    </div>
                )
            }
        }

    }
    const handleSort = (e) => {
        e.preventDefault()
        setLoading(true)
        const SortBy = e.target.sortBy.value
        const All = SortBy == "All"
        console.log(SortBy);
        if (!All) {
            fetch(`http://localhost:5000/sort/${User.userFirebaseUid}/${SortBy}`)
                .then(res => res.json())
                .then(data => {
                    setMyBidsData(data)
                    setLoading(false)
                })
        }
        else {
            fetch(`http://localhost:5000/myBid/${User.userFirebaseUid}`)
                .then(res => res.json())
                .then(data => {
                    setMyBidsData(data)
                    setLoading(false)
                })
        }
    }
    return (
        <div>
            <div className="flex  justify-end gap-2">
                <form onSubmit={(e) => handleSort(e)} className="flex gap-2">
                    <select name="sortBy" className="select-sm select select-success  w-full max-w-[218px]">
                        <option selected>All</option>
                        <option>in Progress</option>
                        <option>completed</option>
                        <option>rejected</option>
                    </select>
                    <input type="submit" value='Sort By' className="btn-sm btn glass  bg-green-900 text-white hover:text-green-900" />
                </form>
            </div>
            <div className="flex flex-col justify-center items-center py-2">
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
                                                    <p>Job Posted Email</p>
                                                </th>
                                                <th className="hide-on-small">
                                                    <p>Job Title</p>
                                                </th>
                                                <th className="hide-on-small hide-on-tablet">
                                                    <p>Job Category</p>
                                                </th>
                                                <th className="hide-on-tablet">
                                                    <p>Posted Date</p>
                                                </th>
                                                <th className=" hide-on-tablet">
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
                                                    className={data?.status === "in Progress" ? 'text-blue-900' : data?.status === "completed" ? "text-green-600" : data?.status === "rejected" ? 'text-red-700' : ''}
                                                >
                                                    {/* row 1 */}
                                                    <td className="text-[10px] md:text-sm ">{data?.email}</td>
                                                    <td className="text-xs md:text-sm hide-on-small">{data?.jobTitle}</td>
                                                    <td className="text-xs md:text-sm hide-on-tablet">{data?.jobCategory}</td>
                                                    <td className="text-xs  border-2 w-fit hide-on-tablet">{data?.postedDate?.slice(0, 10)}</td>
                                                    <td className="text-xs md:text-sm border w-fit hide-on-tablet">{data?.deadLine}</td>
                                                    <td className="md:text-sm text-[10px]">{data?.status}</td>
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
                            <p className="py-40 text-xl hover:text-green-600 "><span className="text-lg"></span>No Data Found</p>

                }
            </div >
        </div>
    );
};

export default MyBids;