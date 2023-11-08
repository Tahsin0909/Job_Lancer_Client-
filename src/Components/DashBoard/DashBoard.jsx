import { useContext} from "react";
import { AuthContext } from "../ContextApi/ContextApi";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { VscVerifiedFilled } from "react-icons/vsc";
import 'react-tabs/style/react-tabs.css';
import WatchList from "./WatchList/WatchList";
import MyJobPost from "./MyJobPost/MyJobPost";
import MyGig from "./MyGig/MyGig";

const DashBoard = () => {
    const { User } = useContext(AuthContext)
    return (
        <div className="lg:px-32 md:px-10 px-4 pt-24">
            {/* profile */}
            <div className="flex flex-col md:flex-row gap-4 justify-between w-full mb-4">
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <img className="w-24 rounded-full" src={User.userPhoto} alt="" />
                    <div>
                        <div className="flex gap-1 items-center">
                            <p className="text-green-600">Name: {User.userName}</p>
                            {
                                User?.UserVerified == true ? <VscVerifiedFilled fill="blue" /> : ' '
                            }
                        </div>
                        <p className="text-green-600">Email: <span className="hover:underline">{User.userEmail}</span></p>
                        <div className="flex items-center gap-4 mt-1">
                            <p className="text-green-600">City: {User.userCity}</p>
                            <p className="text-green-600">Zip: {User.userZip}</p>
                        </div>
                        <p className="mt-1 text-green-600">Billing Code: {User._id}</p>
                        <p className="mt-1 border-2 w-fit p-2 text-green-600 border-green-700 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-200">JOB COMPLETED: <span className="font-bold ">$$</span></p>
                    </div>
                </div>
                <div>
                    <button className=" bg-green-800 text-white p-3 rounded-md hover:text-green-600 hover:bg-white border">Be a FreeLancer</button>
                </div>
            </div>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>My Posted Job</Tab>
                        <Tab>Bid Request</Tab>
                        <Tab>My Bids</Tab>
                        <Tab>My GiG</Tab>
                        <Tab>Fav Freelancer</Tab>
                        <Tab>WatchList</Tab>
                    </TabList>

                    <TabPanel>
                        <MyJobPost/>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                    <TabPanel>
                        <MyGig/>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 5</h2>
                    </TabPanel>
                    <TabPanel>
                        <WatchList />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default DashBoard;