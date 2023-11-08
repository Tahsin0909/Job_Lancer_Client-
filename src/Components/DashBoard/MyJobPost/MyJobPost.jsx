import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextApi/ContextApi";
import { Link } from "react-router-dom";
import './MyJobPost.css'

const MyJobPost = () => {
    const { User } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [MyJobPostData, setMyJobPostData] = useState([])
    useEffect(() => {
        fetch(`https://job-lancer-server-g4ql1g75m-tahsins-projects-38f8b810.vercel.app/job/${User.userFirebaseUid}`)
            .then(res => res.json())
            .then(data => {
                setMyJobPostData(data)
                setLoading(false)
            })
    }, [User.userFirebaseUid])
    console.log(MyJobPostData);
    return (
        <div className="flex justify-center items-center py-2">
            {
                loading ?
                    <span className="loading loading-infinity text-green-900 loading-lg py-40"></span>
                    :
                    MyJobPostData.length > 0 ?
                        <div>
                            <div className="overflow-x-auto">
                                <table className="table ">
                                    {/* head */}
                                    <thead>
                                        <tr className="text-green-900 ">
                                            <th className="hide-on-tablet">
                                                <p>Posted Email</p>
                                            </th>
                                            <th className=" ">
                                                <p>Job Title</p>
                                            </th>
                                            <th className="hide-on-small">
                                                <p>Job Category</p>
                                            </th>
                                            <th className="hide-on-tablet">
                                                <p>Price Range</p>
                                            </th>
                                            <th className="hide-on-tablet">
                                                <p>
                                                    Description
                                                </p>
                                            </th>
                                            <th className="hide-on-tablet">
                                                <p>Posted Date</p>
                                            </th>
                                            <th className=" ">
                                                <p>Deadline</p>
                                            </th>
                                            <th className=" ">
                                                <p> Action</p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            MyJobPostData?.map(data => <tr key={data._id}>
                                                {/* row 1 */}
                                                <td className="text-xs md:text-sm hide-on-tablet">{data?.email}</td>
                                                <td className="text-xs md:text-sm">{data?.jobTitle}</td>
                                                <td className="text-sm hide-on-small">{data?.jobCategory}</td>
                                                <td className="text-sm border hide-on-tablet">{data?.minPrice} - {data?.maxPrice}</td>
                                                <td className="text-xs  w-64 hide-on-tablet">{data?.description.slice(0, 200)}</td>
                                                <td className="text-xs  border-2 w-fit hide-on-tablet">{data?.postedDate.slice(0, 10)}</td>
                                                <td className="text-xs md:text-sm border w-fit">{data?.deadLine.slice(5, 11)}</td>
                                                <td className=" ">
                                                    <div className="flex flex-col items-center gap-1 ">
                                                        <button className="text-xs py-1 md: px-2 md:w-24 w-14 border-2 hover:bg-green-900 hover:text-white border-green-900 bg-white text-green-900 ">Delete</button>
                                                        <Link to={`/updateJob/${data._id}`}>                                                        <button className="text-xs py-1 md:px-2 md:w-24 w-14 border-2 hover:bg-green-900 hover:text-white border-green-900 bg-white text-green-900 ">Update</button></Link>
                                                    </div>
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
                            <p className="py-40 text-xl hover:text-green-600 "><span className="text-lg">+</span>Post A Job</p>
                        </Link>
            }
        </div >
    );
};

export default MyJobPost;