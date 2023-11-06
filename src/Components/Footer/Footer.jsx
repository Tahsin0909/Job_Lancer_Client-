/* eslint-disable react/no-unescaped-entities */
const Footer = () => {
    return (
        <div className="">
            <footer className="footer py-10 bg-base-200 text-base-content lg:px-32 md:px-10 px-4">
                <aside>
                    <div className="flex">
                        <h1
                            className="text-2xl font-bold bg-gradient-to-r from-green-400 via-blue-300 to-purple-400 bg-clip-text text-transparent"><span>job</span><span className="font-[BlackOpsOne]">lancer</span>
                        </h1>
                        <img className="w-4 h-4 relative -top-1 right-1" src="https://cdn-icons-png.flaticon.com/128/1432/1432368.png" alt="" />
                    </div>
                    <p>JobLancer EnterPrice. <br />Providing reliable Services's since 2020</p>
                </aside>
                <nav className="flex flex-col">
                    <h1 className="text-gray-400">Services</h1>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="flex flex-col">
                    <h1 className="text-gray-400">Company</h1>
                    <a className="link link-hover">Find Jobs</a>
                    <a className="link link-hover">Find FreeLancer</a>
                    <a className="link link-hover">Profile</a>
                    <a className="link link-hover">Home</a>
                </nav>
                <nav className="flex flex-col border">
                    <h1 className="text-gray-400">Legal</h1>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav className="flex flex-col border">
                    <h1 className="text-gray-400">Contact Us</h1>
                    <a className="link link-hover">Email: ghost@gmail.com</a>
                    <a className="link link-hover">Phone: 01970199189</a>
                    <a className="link link-hover">Kawla, Dakshin khan <br /> Dhaka-1200</a>
                </nav>
            </footer>
            <div className="text-center pb-2 px-4 bg-base-200 ">
                <p className="text-md">Copyright © 2023 - All right reserved by JobLancer EnterPrice.</p>
            </div>
        </div>
    );
};

export default Footer;