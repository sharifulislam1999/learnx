import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";




const Footer = () => {
  return (
    <div className="bg-[#222222] mt-24">
      <div className="container mx-auto px-3">
        <div className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-3">
            <div className="col-span-1 space-y-4">
              <div>
                <h1 className="text-5xl text-[#FAB519] font-bold">Learn.<span className="text-[#fff]">X</span></h1>
              </div>
              <div className="text-[#c6c6c6] font-normal">
                <p>
                Unlock collaborative learning potential effortlessly with our footer. Quick links to study tools, group sessions, and support ensure a smooth academic journey. Optimize your study experience with our intuitive interface.
                </p>
              </div>
              <div className="flex gap-4 text-[#fff] text-xl">
                <Link to="https://www.facebook.com">
                    <FaFacebook/>
                </Link>
                <Link to="https://www.twitter.com">
                    <FaTwitter/>
                </Link>
                <Link to="https://www.linkedin.com">
                    <FaLinkedin/>
                </Link>
              </div>
            </div>
            <div className="col-span-1 text-left lg:text-center space-y-8">
              <div className="text-[#FAB519] text-xl font-normal">
                <h1>Popular</h1>
              </div>
              <div className="text-[#c6c6c6]">
                <ul className="space-y-2">
                  <li>Upcomming Event</li>
                  <li>Upcomming Assignment</li>
                  <li>New Assignment</li>
                  <li>All Assignment</li>                 
                </ul>
              </div>
            </div>
            <div className="col-span-1  text-left lg:text-center space-y-8">
              <div className="text-[#FAB519] text-xl font-normal">
                <h1>Quick links</h1>
              </div>
              <div className="text-[#c6c6c6] font-normal">
                <ul className="space-y-2">
                  <li>Terms of Use</li>
                  <li>Privacy Police</li>
                  <li>Contact Support</li>                  
                  <li>FAQs</li>
                </ul>
              </div>
            </div>
            <div className="col-span-1  text-left lg:text-center space-y-4">
              <div>
                <h1 className="text-2xl text-[#FAB519] font-medium">News Letter</h1>
              </div>
              <div className="text-[#c6c6c6] font-normal">
                <p>Subscribe to our newsletter.</p>
              </div>
              <div className="text-[#c6c6c6]">
                <div className="flex items-center bg-white rounded-full">
                  <div className="flex-grow">
                    <input
                      className="w-full text-base px-6  rounded-full border-none outline-none"
                      type="email"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="p-2">
                    <h1 className="py-2 cursor-pointer bg-[#222222] text-white font-semibold px-4 rounded-full">
                      Submit
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-10 text-[#ABABAB]">
            <span>All Right Reserved By @learnx.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
