import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../Components/Hooks/useAuth";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdOutlineSportsScore } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import Comment from "../../Components/Comment/Comment";
import { useEffect, useState } from "react";
import CommentCard from "../../Components/CommentCard/CommentCard";
const Details = () => {
    const {user} = useAuth();
    const navigate = useNavigate();
    const {id} = useParams();
    console.log(user)
    const {_id,title,mark,level,date,photo,des,addedby} = useLoaderData();
    const [loader,setLoader] = useState(true);
    document.title = title;
    const [comments,setComments] = useState([]);
    useEffect(()=>{
        axios.get(`https://learnx-omega.vercel.app/comment/${id}`,{withCredentials:true})
        .then(res => {
            setComments(res.data);
            setLoader(false)
        })
    },[])
    console.log(comments)
    const handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const link = form.url.value;
        const note = form.note.value;
        const status = "Pending"
        const email = user.email || user?.reloadUserInfo?.providerUserInfo[0]?.screenName+'@github.com';
        const takenAssignment = {title,mark,examineeName: user?.displayName,link,note,status,takenuser:email,mainassignmentId:_id}
        axios.post('https://learnx-omega.vercel.app/takeassignment',takenAssignment)
        .then(res => {
            if(res.data.insertedId){
                successMessage("Submitted Success Please Wait For Result")
                setTimeout(()=>{
                    navigate('/attempte');
                },1000)              
            }else{
                errorMessage("Something Wrong")
            }
        })

    }
    
    const errorMessage = (msg)=>{
        toast.error(msg)
    }
    const successMessage = (msg)=>{
        toast.success(msg)
    }
    const taken = ()=>{
        if(user?.email === addedby){
            errorMessage("This item is attached to you so you cannot take it")
        }else{
        document.getElementById('my_modal_4').showModal()
        }
        console.log(user?.email,addedby)

    }

    return (
        <div className="container mx-auto px-3 mt-16">
            <div className="flex gap-10 flex-col lg:flex-row justify-between items-center">
                <div className="flex-1">
                    <div>
                    <img className="w-full rounded-md" src={photo} alt="" />
                    </div>
                </div>
                <div className="flex-1 space-y-3">
                    <div className="text-3xl font-semibold">
                        <h1>{title}</h1>
                    </div>                  
                        <div className="text-base font-medium flex gap-2 items-center">
                            <MdOutlineSportsScore className="text-[#FAB519] text-2xl"></MdOutlineSportsScore>
                            <h1>Total Marks: {mark}</h1>
                        </div>
                        <div className="text-base font-medium flex gap-4 items-center">
                            <BsCalendarDate className="text-[#FAB519]"></BsCalendarDate>
                            <h1>Last Date: {date}</h1>
                        </div>
                        <div className="flex gap-3 items-center"><h1 className="text-lg font-medium">Diffeculty Level:</h1>
                        {level === "easy" && <h1 className='bg-blue-600 capitalize inline-block font-medium text-white px-5 py-1 rounded-md'>{level}</h1>}
                        {level === "medium" && <h1 className='bg-amber-500 capitalize inline-block font-medium text-white px-5 py-1 rounded-md'>{level}</h1>}
                        {level === "hard" && <h1 className='bg-red-600 capitalize inline-block font-medium text-white px-5 py-1 rounded-md'>{level}</h1>}
                        </div>
                        <div>
                            <h1>{des}</h1>
                        </div>
                        <div>
                            <button onClick={taken} className="px-4 py-1 hover:bg-transparent hover:text-black duration-150 bg-[#FAB519] border-2 border-[#FAB519] text-white rounded-lg text-base font-medium">Take Assignment</button>
                        </div>
                    
                </div>
            </div>
            <dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg text-center">{title}</h3>
    <form onSubmit={handleSubmit} autoComplete="off">
    <p className="py-4 text-center">Please Check Your Input Field Before Submit.</p>
    <div className="space-y-4">
        <div>
            <h1 className="mb-1 font-medium">PDF Link</h1>
            <input name="url" type="url" className="border w-full py-2 px-3 rounded-md focus:outline-none" placeholder="Enter Your PDF Link" required />
        </div>
        <div>
            <h1 className="mb-1 font-medium">Note</h1>
            <textarea name="note" placeholder="Enter Your Notes" className="border w-full py-2 px-3 rounded-md focus:outline-none h-20" required></textarea>
        </div>
        <div>
            <input type="submit" value="Submit" className="w-full border-2  hover:bg-transparent hover:text-black duration-150 font-semibold py-2 text-white bg-[#FAB519] border-[#FAB519] cursor-pointer rounded-lg" />
        </div>
    </div>
    </form>
    <div className="modal-action">
    <ToastContainer position="top-center"></ToastContainer>
      <form method="dialog">        
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

<div className="mt-20">
    <div className="my-10">
        <h1 className="text-3xl font-semibold text-[#FAB519] border-l-4 border-[#FAB519] pl-4">Discussion</h1>
    </div>
    {loader && <span className="loading loading-spinner text-warning"></span> }
    <div className="flex flex-col gap-6">
        {comments.map((item,i)=><CommentCard key={i} item={item}></CommentCard>)}
    </div>
    <Comment id={id} comments={comments} setComments={setComments} ></Comment>
</div>
<ToastContainer position="top-center"></ToastContainer>
        </div>
    );
};

export default Details;