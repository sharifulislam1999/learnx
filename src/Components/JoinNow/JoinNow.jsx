import joinImg from "../../assets/Images/join.png";
import { Link } from 'react-router-dom';
import { RiTeamFill } from "react-icons/ri";
import blob from "../../assets/Images/blob.png";
import bar from "../../assets/Images/bar.png";


const JoinNow = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center gap-3'>
            <div className='flex-1'>
                <div className="flex justify-center">
                    <div className="relative">
                    <img className="z-20" src={joinImg} alt="" />
                    <img className="absolute top-0 -z-10" src={blob} alt="" />
                    <img className="absolute right-0 top-0 -z-10" src={bar} alt="" />
                    </div>
                    
                </div>

            </div>
            <div className='flex-1'>
                <div className="space-y-3">
                    <div className="flex gap-2 items-center">
                    <RiTeamFill className="text-[#FAB519]"></RiTeamFill>
                        <h1 className="font-medium">Join Our Team</h1>
                    </div>
                    <div className=" text-3xl md:text-5xl font-semibold leading-snug text-[#FAB519]">
                        <h1>Join Us Become an Instructor & Inspire Learning</h1>
                    </div> 
                    <div className="text-sm font-medium">
                        <p>As an instructor with us, you`ll have the opportunity to inspire, guide, and mentor our diverse community of students. Whether you`re an industry expert, an academic guru, or an experienced professional</p>
                    </div>
                    <div>
                        <Link to="/register" className="py-2 mt-3 inline-block hover:bg-transparent border-2 border-[#FAB519]  px-4 hover:text-black duration-200 font-semibold rounded-md text-white bg-[#FAB519]">Join Now</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default JoinNow;