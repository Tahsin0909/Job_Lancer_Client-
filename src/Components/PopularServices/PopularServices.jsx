import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import WebDevelopment from "./WebDevelopment";
import Graphic from "./Graphic";
import Digital from "./DigitalMArketing";


const PopularServices = () => {
    return (
        <div className='py-8 flex justify-start items-center lg:px-32 md:px-10 px-4'>
            <div>
                <p className="mb-4 text-xl text-green-700 font-bold">Our Popular Services</p>
                <Tabs>
                    <TabList>
                        <Tab>Web DevelopMent</Tab>
                        <Tab>Graphic Design</Tab>
                        <Tab>Digital MArketing</Tab>
                    </TabList>

                    <TabPanel>
                        <WebDevelopment/>
                    </TabPanel>
                    <TabPanel>
                        <Graphic/>
                    </TabPanel>
                    <TabPanel>
                        <Digital/>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default PopularServices;