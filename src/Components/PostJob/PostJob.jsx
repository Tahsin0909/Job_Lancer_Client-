import { useContext } from "react";
import { AuthContext } from "../ContextApi/ContextApi";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

// onSubmit={(e) => handleSignUp(e)}
const PostJob = () => {

    const { User } = useContext(AuthContext)
    // console.log(User);
    const handlePostJob = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const jobTitle = form.jobTitle.value
        const description = form.description.value
        const minPrice = form.minPrice.value
        const maxPrice = form.maxPrice.value
        const tag1 = form.tag1.value
        const tag2 = form.tag2.value
        const deadLine = form.deadLine.value
        const userFirebaseUid = User.userFirebaseUid
        const postedDate = new Date()
        // const postedHour = postedDate.getDate()
        // console.log(postedHour);

        const jobCategory = form.jobCategory.value

        const PostJobData = {
            email, jobTitle, description, minPrice, maxPrice, tag1, tag2, deadLine, jobCategory, postedDate, userFirebaseUid
        }
        // console.log(PostJobData);
        fetch('https://joblancernewserver.vercel.app/job', {
            method: `POST`,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(PostJobData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Your Job Posted Successfully',
                        icon: 'success',
                        confirmButtonColor: "#14532d",
                        confirmButtonText: 'DONE'
                    })
                }
                else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Do you want to continue',
                        icon: 'error',
                        confirmButtonText: 'Try Again'
                    })
                }
            })
    }
    return (
        <div className="lg:px-32 md:px-10 px-4 pt-24">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Post</title>
            </Helmet>
            <div className="flex  justify-center mb-5">
                <form onSubmit={(e) => handlePostJob(e)}>
                    <div className=" w-full ">
                        <label className="label">
                            <span className="label-text text-green-900">Email:</span>
                        </label>
                        <input name="email" type="email" defaultValue={User?.userEmail} readOnly className="input input-bordered input-success  w-full max-w-md" />
                    </div>
                    <div className="flex items-center">
                        <div className=" w-full ">
                            <label className="label">
                                <span className="label-text text-green-900">Job Title?</span>
                            </label>
                            <input name="jobTitle" type="text" placeholder="Job Title" className="input input-bordered input-success  w-full max-w-md" />
                        </div>
                    </div>
                    <div className="lg:flex gap-2 pb-2">
                        <div className=" w-full ">
                            <label className="label">
                                <span className="label-text text-green-900">Description?</span>
                            </label>
                            <input name="description" type="text" placeholder="What To Do" className="input input-bordered input-success  w-full max-w-md" />
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
                            <input name="tag1" type="text" defaultValue={"Urgent"} className="input input-bordered input-success w-full  max-w-[218px]" />
                        </div>
                        <div className=" w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-green-900">Tag-2?</span>
                            </label>
                            <input name="tag2" type="text" defaultValue={"NewBie"} className="input input-bordered input-success  w-full max-w-[218px]" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-3">
                        <div className=" w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-green-900">Deadline?</span>
                            </label>
                            <input name="deadLine" type="date" className="input input-bordered input-success  w-full max-w-[218px]" />
                        </div>
                        <div className=" w-full ">
                            <label className="label">
                                <span className="label-text text-green-900">Job Category?</span>
                            </label>
                            <select name="jobCategory" className="select select-success  w-full max-w-[218px]">
                                <option disabled selected>Select Your Skill</option>
                                <option>Web Development</option>
                                <option>Digital Marketing</option>
                                <option>Graphic Design</option>
                            </select>
                        </div>
                    </div>
                    <input type="submit" value='Submit' className="btn glass mt-4 w-full max-w-md bg-green-900 text-white hover:text-green-900" />
                </form>
            </div>
        </div>
    );
};

export default PostJob;