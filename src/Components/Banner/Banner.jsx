import "./Banner.css"
import user1 from "../../assets/Images/User/user4.jpg"
import user2 from "../../assets/Images/User/user2.png"
import user3 from "../../assets/Images/User/user3.jpg"
import user4 from "../../assets/Images/User/user1.jpg"
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Banner = () => {
    return (
        <div className="bgimage py-20 lg:py-40 bg-cover bg-center">
           <div className="container mx-auto px-3">
            <div className="flex gap-2 flex-col lg:flex-row justify-between">
                <div className="flex-1">
                    <div className="mb-2 md:mb-6">
                    <h1 className="text-3xl md:text-6xl leading-snug font-bold text-white" data-aos="fade-up" data-aos-duration="700"   data-aos-easing="ease-in-out">Unlock Knowledge in <br/><span className="text-[#FAB519]">learn.<span className="text-white">X</span></span></h1>
                    </div>
                    <div className="text-[#d3d1d1e3] text-sm leading-6 font-medium" data-aos="fade-up" data-aos-duration="700" data-aos-delay="600"   data-aos-easing="ease-in-out">
                        <p>Join forces with fellow learners on our interactive group study platform. Enhance your understanding, share insights, and conquer challenges together. Experience the power of collective knowledge as you collaborate, discuss, and achieve academic excellence. Start studying smarter, not harder, with our group study website today!</p>
                    </div>
                    <div className="flex items-center mt-6" data-aos="fade-up" data-aos-duration="700" data-aos-delay="1000"   data-aos-easing="ease-in-out">
                        <div className="h-12 w-12 border-2 border-[#FAB519] rounded-full">
                        <img src={user1} className="w-full h-full rounded-full" alt="" />    
                        </div>                        
                        <div className="-ml-4 h-12 w-12 border-2 border-[#FAB519] rounded-full">
                        <img src={user2} className="w-full h-full rounded-full" alt="" />    
                        </div>                        
                        <div className="-ml-4 h-12 w-12 border-2 border-[#FAB519] rounded-full">
                        <img src={user3} className="w-full h-full rounded-full" alt="" />    
                        </div>                        
                        <div className="-ml-4 h-12 w-12 border-2 border-[#FAB519] rounded-full">
                        <img src={user4} className="w-full h-full rounded-full" alt="" />    
                        </div>  
                        <div className="text-white font-medium text-sm ml-2">
                            <h1>+ 1k Students</h1>

                        </div>             
                    </div>
                    <div className="mt-8" data-aos="fade-up" data-aos-duration="700" data-aos-delay="1100"   data-aos-easing="ease-in-out">
                        <Link className="px-6 py-2 rounded-lg text-lg font-semibold border border-[#FAB519] duration-200 hover:bg-transparent text-white hover:text-white  bg-[#FAB519]" to='/assignments'>All Assingment</Link>
                        </div> 
                </div>
                <div className="flex-1"></div>
            </div>

           </div>
        </div>
    );
};

export default Banner;