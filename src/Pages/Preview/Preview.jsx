import { useLoaderData, useNavigate } from "react-router-dom";
import { PiStudentDuotone } from "react-icons/pi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import useAuth from "../../Components/Hooks/useAuth";


const Preview = () => {
    const navigate = useNavigate()
    const {user} = useAuth();
    const {_id,title,mark,examineeName,link,note} = useLoaderData();
    const handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const archiveMark = form.mark.value;
        const feedback = form.feedback.value;
        const examiner = user?.email;
        const success = {archiveMark,feedback,examiner}
        if(parseInt(mark) <= parseInt(archiveMark)){
            errorMessage("mark error")            
        }else{
            axios.patch(`https://learnx-omega.vercel.app/givenassignment/${_id}`,success)
            .then((res)=>{
                if(res.data.matchedCount){
                    successMessage("success")
                    setTimeout(()=>{
                        navigate("/pending")
                    },1000)
                }
            })
        }

    }
    const errorMessage = (msg)=>{
        toast.error(msg)
    }
    const successMessage = (msg)=>{
        toast.success(msg)
    }
    return (
        <div className='container mx-auto px-3 mt-16'>
           <div className="border px-4 py-10 rounded-lg">
                <div className="space-y-2" >
                    <h1 className="text-xl">{title}</h1>
                    <div className="flex items-center gap-2">
                        <PiStudentDuotone className="text-[#ffbb1c] text-xl" />
                        <h1>{examineeName}</h1> 
                    </div>
                </div>
                
                <div className="flex flex-col lg:flex-row justify-between gap-6">
                    <div className="w-full lg:w-3/4 mt-8">
                    <div className="my-4">
                    <h1>{note}</h1>
                </div>
                        <iframe src={link} className="w-full h-[600px]"></iframe>
                    </div>
                    <div className="w-full lg:w-1/4 border px-4 py-6 rounded-md">
                        <form className="space-y-2" onSubmit={handleSubmit}>
                            <div className="text-center mb-6 text-lg font-medium">
                                <h1>Examiner Feedback</h1>
                            </div>
                            <div className="space-y-2">
                                <h1 className="font-medium">Mark (Above {mark})</h1>
                                <input name="mark" type="number" className="border w-full py-2 px-3 rounded-md text- focus:outline-none" placeholder="Mark" required/>
                            </div>
                            <div className="space-y-2">
                                <h1 className="font-medium">Feedback </h1>
                                <textarea name="feedback" className="border w-full py-2 px-3 rounded-md text- focus:outline-none" placeholder="Feedback" id="" required></textarea>
                            </div>
                            <div>
                                <input type="submit" value="Submit" className="w-full bg-[#FAB519] text-[#282649] rounded-md cursor-pointer py-2 text-base font-medium"  />
                            </div>

                        </form>
                    </div>
                </div>
            </div>        
            <ToastContainer position="top-center"></ToastContainer>   
        </div>
    );
};

export default Preview;