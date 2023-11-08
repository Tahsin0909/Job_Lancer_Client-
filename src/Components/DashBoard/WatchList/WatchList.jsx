import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextApi/ContextApi";


const WatchList = () => {
    const { User } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [WatchListData, setWatchListData] = useState([])
    useEffect(() => {
        fetch(`https://job-lancer-server-g4ql1g75m-tahsins-projects-38f8b810.vercel.app/watchList/${User.userFirebaseUid}`)
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
                    <span className="loading loading-infinity text-green-900 loading-lg py-40"></span>
                    :
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr className="text-green-900">
                                        <th className="md:block hidden">Job Email</th>
                                        <th>Job Title</th>
                                        <th>Job Category</th>
                                        <th className="md:block hidden">Posted Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        WatchListData?.map(data => <tr key={data._id}>
                                            {/* row 1 */}
                                                <td className="md:text-base text-xs md:block hidden">{data?.email}</td>
                                                <td className="md:text-base text-xs">{data.jobTitle}</td>
                                                <td className="md:text-base text-xs">{data?.jobCategory}</td>
                                                <td className="md:text-base text-xs md:block hidden">{data?.postedDate.slice(0, 10)}</td>
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