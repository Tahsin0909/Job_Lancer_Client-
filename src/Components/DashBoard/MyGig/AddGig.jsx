import { useContext } from "react";
import { AuthContext } from "../../ContextApi/ContextApi";

// onSubmit={(e) => handleSignUp(e)}
const AddGig = () => {

    const { User } = useContext(AuthContext)
    // console.log(User);
    const handlePostGig = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const gigTitle = form.gigTitle.value
        const description = form.description.value
        const minPrice = form.minPrice.value
        const maxPrice = form.maxPrice.value
        const tag1 = form.tag1.value
        const tag2 = form.tag2.value
        const rating = form.rating.value
        const userFirebaseUid = User.userFirebaseUid
        const userName = User.userName
        const userPhoto = User.userPhoto
        const photoUrl = form.photoUrl.value
        const gigCategory = form.gigCategory.value

        const PostGigData = {
            email, gigTitle, description, minPrice, maxPrice, tag1, tag2, rating, gigCategory,  userFirebaseUid, userName, userPhoto, photoUrl
        }
        console.log(PostGigData);
        fetch('http://localhost:5000/gig', {
            method: `PUT`,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(PostGigData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            //UpsertedCount
    }
    return (
        <div className="lg:px-32 md:px-10 px-4 pt-20">
            <div className="flex justify-center mb-5">
                <form onSubmit={(e) => handlePostGig(e)}>
                    <div className=" w-full ">
                        <label className="label">
                            <span className="label-text text-green-900">Email:</span>
                        </label>
                        <input name="email" type="email" defaultValue={User?.userEmail} readOnly className="input input-bordered input-success  w-full max-w-md" />
                    </div>
                    <div className="flex items-center">
                        <div className=" w-full ">
                            <label className="label">
                                <span className="label-text text-green-900">Gig Title?</span>
                            </label>
                            <input name="gigTitle" type="text" placeholder="Gig Title" className="input input-bordered input-success  w-full max-w-md" />
                        </div>
                    </div>
                    <div className="lg:flex gap-2 pb-2">
                        <div className=" w-full ">
                            <label className="label">
                                <span className="label-text text-green-900">Description?</span>
                            </label>
                            <input name="description" type="text" placeholder="What I will Do" className="input input-bordered input-success  w-full max-w-md" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-3">
                        <div className="w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-green-900">Min Price?</span>
                            </label>
                            <input name="minPrice" type="text" placeholder="$100" className="input input-bordered input-success  w-full max-w-[218px]" />
                        </div>
                        <div className=" w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-green-900">Max Price?</span>
                            </label>
                            <input name="maxPrice" type="text" placeholder="$150" className="input input-bordered input-success  w-full max-w-[218px]" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-3">
                        <div className="w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-green-900">Tag-1?</span>
                            </label>
                            <input name="tag1" type="text" defaultValue={"Expert"} className="input input-bordered input-success w-full  max-w-[218px]" />
                        </div>
                        <div className=" w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-green-900">Tag-2?</span>
                            </label>
                            <input name="tag2" type="text" defaultValue={"Professional"} className="input input-bordered input-success  w-full max-w-[218px]" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-3">
                        <div className=" w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-green-900">Rating?</span>
                            </label>
                            <input name="rating" type="text" className="input input-bordered input-success  w-full max-w-[218px]" />
                        </div>
                        <div className=" w-full ">
                            <label className="label">
                                <span className="label-text text-green-900">Gig Category?</span>
                            </label>
                            <select name="gigCategory" className="select select-success  w-full max-w-[218px]">
                                <option disabled selected>Select Your Gig Category</option>
                                <option>Web Development</option>
                                <option>Digital Marketing</option>
                                <option>Graphic Design</option>
                            </select>
                        </div>
                    </div>
                    <div className=" w-full ">
                        <label className="label">
                            <span className="label-text text-green-900">Photo Url?</span>
                        </label>
                        <select name="photoUrl" className="select select-success  w-full max-w-md">
                            <option disabled selected>Select Your Photo Url</option>
                            <option>https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/257758278/original/16185b7dfbcee596e2661e60137542c9d1cc0451.png</option>
                            <option>https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/290476092/original/deef2156258fcabbc1cfbd06904f43a13e6acf4b/design-your-fiverr-gig-cover-image.png</option>
                            <option>https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/259216161/original/902768bc3c1087f5cd794c9f3af1dbef21fc7214/gig-picture-fiverr-thumbnail-gig-image-fiverr-gig-picture.png</option>
                            <option>https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/263142270/original/c7d1ac88343714ad796d6885fd4c238ec09cd596/design-an-imposing-and-high-quality-fiverr-gig-thumbnail-picture.jpg</option>
                            <option>https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/155518318/original/bc759147d985d3fba9afbf8eb4ea689be50fc051.jpg</option>
                        </select>
                    </div>
                    <input type="submit" value='Submit' className="btn glass mt-4 w-full max-w-md bg-green-900 text-white hover:text-green-900" />
                </form>
            </div>
        </div>
    );
};

export default AddGig;