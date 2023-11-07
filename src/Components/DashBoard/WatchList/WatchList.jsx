import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextApi/ContextApi";


const WatchList = () => {
    const { User } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [WatchListData, setWatchListData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/watchList/${User.userFirebaseUid}`)
            .then(res => res.json())
            .then(data => {
                setWatchListData(data)
                setLoading(false)
            })
    }, [User.userFirebaseUid])
    console.log(WatchListData);
    return (
        <div className="flex justify-center items-center py-8">
            {
                loading ?
                    <span className="loading loading-infinity text-green-900 loading-lg"></span>
                    :
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr className="text-green-900">
                                        <th>Job Email</th>
                                        <th>Job Title</th>
                                        <th>Job Category</th>
                                        <th>Posted Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        WatchListData?.map(data => <tr key={data._id}>
                                            {/* row 1 */}
                                                <td>{data?.email}</td>
                                                <td>{data.jobTitle}</td>
                                                <td>{data?.jobCategory}</td>
                                                <td>{data?.postedDate}</td>
                                        </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
            }
        </div >
    );
};

export default WatchList;