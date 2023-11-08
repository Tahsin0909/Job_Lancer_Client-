import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextApi/ContextApi";


const MyJobPost = () => {
    const { User } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [MyJobPostData, setMyJobPostData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/job/${User.userFirebaseUid}`)
            .then(res => res.json())
            .then(data => {
                setMyJobPostData(data)
                setLoading(false)
            })
    }, [User.userFirebaseUid])
    console.log(MyJobPostData);
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
                                        <th>Posted Email</th>
                                        <th>Job Title</th>
                                        <th>Job Category</th>
                                        <th>Min Price</th>
                                        <th>Max Price</th>
                                        <th>Description</th>
                                        <th>Posted Date</th>
                                        <th>Deadline</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        MyJobPostData?.map(data => <tr className="hover" key={data._id}>
                                            {/* row 1 */}
                                            <td>{data?.email}</td>
                                            <td>{data?.jobTitle}</td>
                                            <td>{data?.jobCategory}</td>
                                            <td>{data?.minPrice}</td>
                                            <td>{data?.maxPrice}</td>
                                            <td>{data?.description.slice(0, 200)}</td>
                                            <td>{data?.postedDate}</td>
                                            <td>{data?.deadLine}</td>
                                            <td className="flex flex-col items-center gap-1">
                                                <button className="py-1 px-2 w-24 border-2 hover:bg-green-900 hover:text-white border-green-900 bg-white text-green-900 ">Delete</button>
                                                <button className="py-1 px-2 w-24 border-2 hover:bg-green-900 hover:text-white border-green-900 bg-white text-green-900 ">Update</button>
                                            </td>
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

export default MyJobPost;