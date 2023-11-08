import { Link } from "react-router-dom";


const MyGig = () => {
    return (
        <div className='flex justify-center lg:px-32 md:px-10 px-4 pt-4 '>
            <Link to={"/addGig"}>
                <p className="py-40 text-xl hover:text-green-600 "><span className="text-lg">+</span>Add Gig</p>
            </Link>
        </div>
    );
};

export default MyGig;