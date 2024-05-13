import { useLoaderData } from "react-router-dom";
import AssignmentCard from "../../Components/AssignmentCard/AssignmentCard";
import Select from 'react-select'
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import useAuth from "../../Components/Hooks/useAuth";
import { ToastContainer, toast } from 'react-toastify';

const Assignments = () => {
    document.title = "All Assignments"
    const {user} = useAuth();
    const assignments = useLoaderData();
    const [filter,setFilter] = useState(assignments);
    const [fitervalue,setFilterValue] = useState(null); 
    const [loader,setLoader] = useState(true)
    useEffect(()=>{
        axios.get(`https://learnx-omega.vercel.app/filter/${fitervalue}`,{withCredentials:true})
        .then(res => {
           if(fitervalue !== "all"){
            if(fitervalue){
                setLoader(false);
                setFilter(res.data)
            }
           }
        })
        setLoader(false)
    },[fitervalue])
    const options = [
        { value: 'all', label: 'All' },
        { value: 'easy', label: 'Easy' },
        { value: 'medium', label: 'Medium' },
        { value: 'hard', label: 'Hard' }
      ]
      const handleFilter = (event)=>{
        const target = event.value;
        if(target === "all"){
            setLoader(true)
            setFilter(assignments)
        }
        setFilterValue(target);
      }
      const deleteItem = (id,addedby)=>{
          if(!user){
              errorMessage("You Must Log In First");
              return
            }
        const githubEmail = user?.reloadUserInfo?.screenName + "@github.com"
        if((addedby === user.email) || (addedby === githubEmail)){
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`https://learnx-omega.vercel.app/assignment/${id}`)
                    .then(res => {
                        if(res.data.deletedCount === 1){
                        const remaining = filter.filter((item)=> item._id !== id);
                        setFilter(remaining)                             
                          Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                        }
                      });
    
               
                }
              });
        }else{
        errorMessage("Permission Denied")
            return
        }
       
      }
    const errorMessage = (msg)=>{
        toast.error(msg)
    }
    return (
        <div className="container mx-auto px-3 mt-16">
            <div className="inline-block my-10">
                <h1 className="text-lg font-semibold mb-3">Filter By</h1>
            <Select onChange={handleFilter} options={options} />
            </div>
            
                {loader && <span className="loading loading-spinner text-warning"></span>}  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">  
                {filter.map((item,i)=><AssignmentCard key={i} deleteItem={deleteItem} item={item}></AssignmentCard>)}        
            </div>     
            <ToastContainer position="top-center"></ToastContainer>       
        </div>
    );
};

export default Assignments;