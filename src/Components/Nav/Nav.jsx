import { Link, NavLink } from "react-router-dom";
import { MdCall } from "react-icons/md";
import { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import "./Nav.css"
import { MdDarkMode } from "react-icons/md";
import themeToggle from "../../assets/Utils/themeToggle";
import { CiLight } from "react-icons/ci";
import { HiOutlineMenu } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";
import useAuth from "../Hooks/useAuth";
const Nav = () => {
  const {user,logOut,loader} = useAuth();
  const [toggle,setToggle] = useState(false);
  const [theme,setTheme] = useState(false);
  const [profile,setProfile] = useState(false)
  const handleTheme = ()=>{
    themeToggle();
    setTheme(!theme);
  }
  const handleToggle = ()=>{
    setToggle(!toggle)
  }
  const handleProfile = ()=>{
    setProfile(!profile)
  }
  const handleLogOut = ()=>{
    logOut()
    setProfile(false)
  }
  return (
    <div>
    <div className="py-1 md:py-3 bg-[#222222] text-[#c6c6c6] z-50">
            <div className="container mx-auto px-3">
            <div className="flex z-20 flex-col md:flex-row gap-2 md:gap-0 justify-between">
              <div className="hidden md:flex gap-2 md:gap-3 text-center flex-wrap text-[14px]">
                <div className="flex gap-2 md:gap-3 items-center">
                  <div>
                    <MdCall></MdCall>                   
                  </div>
                  <div className="">
                    <h1>+65978451</h1>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div>
                    <TfiEmail></TfiEmail>                  
                  </div>
                  <div>
                    <h1>support@learnx.com</h1>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div>
                    <IoLocationOutline></IoLocationOutline>                   
                  </div>
                  <div>
                    <h1>Pangsha, Rajbari</h1>
                  </div>
                </div>
                
              </div>
             {loader ? <div className="flex justify-end"> <span className="loading loading-spinner text-warning"></span></div>
: user ?  <div className="relative justify-end flex gap-2 items-center">
              <div className="text-sm">
                <h1>{user?.displayName}</h1>
              </div>
              <div className="" onClick={handleProfile}>
                <img src={user.photoURL} className="h-8 w-8 rounded-full border-2 border-[#FAB519] cursor-pointer" alt="" />
              </div>
              <div className="cursor-pointer" onClick={handleTheme}>
                  {theme ? <CiLight></CiLight>: <MdDarkMode></MdDarkMode> }
                </div>
              <div className={`absolute  ${profile ? "block" : "hidden"} space-y-3 w-40 right-0 top-9 p-2 rounded-lg bg-[#222222] border-2 border-[#FAB519] z-[1000]`}>
                <div>
                  <Link onClick={()=>setProfile(!profile)} to="/attempte" className="text-center block">My Attempt</Link>
                </div>
                <div className="flex justify-center">
                  <button className="py-1 px-3 text-sm rounded-md bg-[#FAB519] text-black font-medium" onClick={handleLogOut}>LogOut</button>
                </div>
              </div>
             </div> :<div className="flex justify-end">
             <div className="flex gap-3 items-center text-[14px]">
                <div>
                  <FaUser></FaUser>
                </div>
                <div className="">
                 <Link to='/register'>Register</Link>
                </div>
                <div className="bg-[#FAB519] p-[1px] h-full">

                </div>
                <div>
                <Link to='/login'>Log In</Link>
                </div>
                <div className="cursor-pointer" onClick={handleTheme}>
                  {theme ? <CiLight></CiLight>: <MdDarkMode></MdDarkMode> }
                </div>
              </div></div>}
                 
            </div>
            </div>
            </div> 
            <div className="border-b">
            <div className="container mx-auto px-3 py-2">
              <div className="flex justify-between items-center">
                <div className="text-4xl font-bold">
                  <Link to='/'>Learn.<span className="text-[#FAB519]">X</span></Link>
                </div>
                <div className={`absolute duration-300 bg-black md:static scale-0 md:scale-100 -top-96 right-10 ${toggle && "top-36 rounded-lg right-10 scale-100"} p-6 bg-black md:bg-transparent`}>
                 <div className="flex md:flex-row flex-col gap-2 md:gap-4 text-[#6b6c6e]">
                  <NavLink onClick={()=>handleToggle(!toggle)} className={({isActive})=> isActive ? "active": "pending"} to="/">Home</NavLink>
                  <NavLink onClick={()=>handleToggle(!toggle)} className='hover:text-[#FAB519] duration-200' to="/assignments">Assignments</NavLink>
                  {user && <NavLink onClick={()=>handleToggle(!toggle)} className='hover:text-[#FAB519] duration-200' to="/create">Create Assignment</NavLink>}
                  {user && <NavLink onClick={()=>handleToggle(!toggle)} className='hover:text-[#FAB519] duration-200' to="/pending">Pending Assignment</NavLink>}
                 </div>
                </div>
                <div className="md:hidden" onClick={handleToggle}>
                  <div className="text-4xl">
                    {toggle ? <HiMenuAlt3></HiMenuAlt3>:<HiOutlineMenu></HiOutlineMenu>}

                  </div>
                </div>
              </div>

            </div> 
            </div>
    </div>
  );
};

export default Nav;
