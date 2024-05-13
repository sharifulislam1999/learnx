import { useForm } from "react-hook-form"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateAssignment = () => {
    const {user} = useAuth()
    const [selectedDate, setselectedDate] = useState(null);
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    const handleCreate = (data)=>{
        const title = data.title;
        const mark = data.marks;
        const level = data.difficulty;
        const date = selectedDate.toLocaleDateString('en-GB');
        const photo = data.photo;
        const des = data.description;
        const makeGithubEmail = user?.reloadUserInfo?.providerUserInfo[0]?.screenName;
        const filterEmail = makeGithubEmail + "@github.com";
        const addedby = user?.email || filterEmail;
        const assignment = {title,mark,level,date,photo,des,addedby}
        axios.post('http://localhost:5000/assignment',assignment)
        .then(res => {
            if(res.data.insertedId){
                successMessage("Added Success")
                setTimeout(()=>{
                    navigate('/assignments');                    
                },1000)
            }else{
                errorMessage("Added Not Success")
            }
        })
    }
    const errorMessage = (msg)=>{
        toast.error(msg)
    }
    const successMessage = (msg)=>{
        toast.success(msg)
    }
    return (
        <div className="px-3 md:px-6 py-10 rounded-lg border">
            <div className='text-center text-xl md:text-4xl font-semibold mb-4'>
                <h1>Post An Assignment</h1>
            </div>
            <div>
                <form className="space-y-1" onSubmit={handleSubmit(handleCreate)} autoComplete="off">
                    <div className="flex gap-3 flex-col md:flex-row">
                        <div className="flex-1">                            
                                <div className="mb-1 font-medium">
                                    <h1>Tittle</h1>
                                </div>
                                <div>
                                    <input {...register("title",{
                                        required:{
                                            value: true,
                                            message: "Required"
                                        },
                                        pattern:{
                                            value: /^[a-zA-Z0-9\s'-]+$/,
                                            message: "No Speacial Character Allow"
                                        }
                                    
                                    })} className="border w-full py-2 px-3 rounded-md text- focus:outline-none" type="text" placeholder="Assignment Name" required />
                                     {errors?.title?.message ? <span className="text-sm text-red-600">{errors.title.message}</span>: <span className="opacity-0">.</span>}
                                </div>                            
                        </div>
                        <div className="flex-1">                            
                            <div className="mb-1 font-medium">
                                <h1>Total Marks</h1>
                            </div>
                            <div>
                            <input type="number" {...register("marks",{
                                required:{
                                    value: true,
                                    message: "Required"
                                },
                                max:{
                                    value:100,
                                    message:"Maxium 100"
                                }
                            })} className="border w-full py-2 px-3 rounded-md text- focus:outline-none" placeholder="Total Marks" required />
                            {errors?.marks?.message ? <span className="text-sm text-red-600">{errors.marks.message}</span>: <span className="opacity-0">.</span>}
                            </div>                          
                        </div>
                    </div>
                    <div className="flex gap-3 flex-col md:flex-row">
                        <div className="flex-1">                            
                                <div className="mb-1 font-medium">
                                    <h1>Difficulty Level</h1>
                                </div>
                                <div>
                                    <select  {...register("difficulty")} className="border w-full py-2 px-3 rounded-md text- focus:outline-none"  id="" required>
                                        <option value="easy">Easy</option>
                                        <option value="medium">Medium</option>
                                        <option value="hard">Hard</option>
                                    </select>
                                    {errors?.difficulty?.message ? <span className="text-sm text-red-600">{errors.difficulty.message}</span>: <span className="opacity-0">.</span>}
                                </div>                            
                        </div>
                        <div className="flex-1">                            
                            <div className="mb-1 font-medium">
                                <h1>Date</h1>
                            </div>
                            <div className="border rounded-md">                        
                            <><DatePicker {...register("date")} dateFormat="dd/MM/yyyy" showIcon className="w-full h-10 px-3 rounded-md text- focus:outline-none"  selected={selectedDate} onChange={date=>setselectedDate(date)} minDate={new Date()} required></DatePicker></>                             
                            </div>                          
                        
                        </div>
                    </div>
                    <div>
                        <div className="mb-1 mt-8 md:mt-0 font-medium">
                            <h1>Thumbnail Image Url</h1>
                        </div>
                        <div>
                        <input {...register('photo',{
                             required:{
                                value: true,
                                message: "Required"
                            },
                            pattern:{
                                value:/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                                message: "Invalid Url"
                            }

                        })} className="border w-full py-2 px-3 rounded-md text- focus:outline-none" type="url" placeholder="Thumbnail Image Url" required />
                         {errors?.photo?.message ? <span className="text-sm text-red-600">{errors.photo.message}</span>: <span className="opacity-0">.</span>}
                        </div>
                    </div>
                    <div>
                        <div className="mb-1 font-medium">
                            <h1>Description</h1>
                        </div>
                        <div>
                        <textarea {...register('description')} placeholder="Description" className="border focus:outline-none py-2 px-3 w-full rounded-md resize-y h-52" id="" required></textarea>
                          {errors?.description?.message ? <span className="text-sm text-red-600">{errors.description.message}</span>: <span className="opacity-0">.</span>}
                        
                        </div>
                    </div>
                    <div>
                        <input type="submit" value="Create" className="w-full bg-[#FAB519] text-[#282649] rounded-md cursor-pointer py-2 text-base font-medium" />
                    </div>
                </form>
            </div>
            <ToastContainer position="top-center"></ToastContainer>
        </div>
    );
};

export default CreateAssignment;