import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../Components/Hooks/useAuth";
import AttempRow from "./AttempRow";

const MyAttemp = () => {
  document.title = "My Attempt"
    const {user} = useAuth();
    const [attemp,setAttemp] = useState([]);
    const [loader,setLoader] = useState(true);
    const email = user.email || user?.reloadUserInfo?.providerUserInfo[0]?.screenName+'@github.com';
    const url = `https://learnx-omega.vercel.app/myattemp?email=${email}`;
    console.log(url)  
    useEffect(()=>{
        axios.get(url,{withCredentials:true})
        .then(res => {
            setAttemp(res.data)
            setLoader(false)
            
        })

    },[url])
    return (
        <div className='container mx-auto px-3 mt-16'>
           <div className="my-6 border-l-4 border-l-[#FAB519] px-4">
              <h1 className="text-2xl font-semibold md:text-3xl">My Submission</h1>
            </div>
           <div className="overflow-x-auto ">
  <table className="table mt-20 md:mt-6">
    {/* head */}
    <thead>
      <tr>
        <th>Title</th>
        <th>Status</th>
        <th>Total Mark</th>
        <th>Marks obtained</th>
        <th>Feedback</th>
      </tr>
    </thead>
    <tbody>
      
        {attemp.map((item,i)=> <AttempRow key={i} item={item}></AttempRow> )}
     
    

    </tbody>
  </table>
    {loader && <div className="flex mt-10 justify-center">
    <span className="loading loading-spinner text-warning"></span>
      </div>}
</div>
        </div>
    );
};

export default MyAttemp;