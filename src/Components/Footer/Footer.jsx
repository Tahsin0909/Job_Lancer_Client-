/* eslint-disable react/no-unescaped-entities */
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside>
                    <div>
                        <h1
                            className="text-2xl font-bold bg-gradient-to-r from-green-400 via-blue-300 to-purple-400 bg-clip-text text-transparent"><span>job</span><span className="font-[BlackOpsOne]">lancer</span></h1>
                    </div>
                    <p>JobLancer EnterPrice. <br />Providing reliable Services's since 2020</p>
                </aside>
                <nav>
                    <h1 className="text-gray-400">Services</h1>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h1 className="text-gray-400">Company</h1>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h1 className="text-gray-400">Legal</h1>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <div className="text-center pb-2 px-4 bg-base-200 ">
                <p className="text-md">Copyright © 2023 - All right reserved by JobLancer EnterPrice.</p>
            </div>
        </div>
    );
};

export default Footer;