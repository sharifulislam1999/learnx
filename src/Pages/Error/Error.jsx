import { Link } from "react-router-dom";
import errorImg from "../../assets/Images/404.jpg"
const Error = () => {
    return (
        <div className="text-center">
           <div className="flex justify-center">
           <img className="w-[50%]" src={errorImg} alt="" />
           
           </div>
           <Link className="btn btn-primary">Back to Home</Link>
        </div>
    );
};

export default Error;