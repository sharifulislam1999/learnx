import googleImg from "../../assets/Images/google.png"
import githubImg from "../../assets/Images/github.png"
import { useForm } from "react-hook-form"
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from './../Hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import auth from "../../AuthProvider/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRef, useState } from "react";
const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const {signIn} = useAuth();
  const [eyeToggle,setEyeToggle] = useState(false);
  const formRef = useRef();
  const handleEye = ()=>{
    setEyeToggle(!eyeToggle)
    if(formRef.current.password.type === "password"){
        formRef.current.password.type = "text"
    }else{
        formRef.current.password.type = "password"
    }
   }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const handleLogin = (data)=>{
    const email = data.email;
    const password = data.password;
    signIn(email,password)
    .then((res)=> {
      if(res.user){
        successMessage("Login Success")
        setTimeout(()=>{
          navigate(location.state ? location.state : "/")
      },1000)
      }      
    })
    .catch((err)=>{
      if(err.code === "auth/invalid-credential"){
        errorMessage("Invalid Email or Password")
      }
    })
  }
  const errorMessage = (msg)=>{
    toast.error(msg)
}
const successMessage = (msg)=>{
    toast.success(msg)
}
const popupLogin = (provider)=>{
  if(provider === "google"){
      signInWithPopup(auth,new GoogleAuthProvider())
      .then((res)=>{
          if(res.user){
              successMessage("Registation Success")
              setTimeout(()=>{
                navigate(location.state ? location.state : "/")
            },1000)
          }
      })    
  }else if(provider === 'github'){
      signInWithPopup(auth,new GithubAuthProvider())
      .then((res)=>{
          if(res.user){
              successMessage("Registation Success")
              setTimeout(()=>{
                navigate(location.state ? location.state : "/")
            },1000)
          }
      })    
  }

}
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
      <div className="w-full lg:w-1/3 space-y-1">
        <div className="text-2xl text-center md:text-left md:text-5xl leading-snug font-bold">
          <h1>
           Already Have An<br></br> Account
          </h1>
        </div>
        <div className="text-[#888282]">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            optio alias blanditiis at corrupti perferendis magni ea adipisci
            recusandae iure.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-2/3 px-5 py-10 border rounded-lg">
        <div>
          <form ref={formRef} onSubmit={handleSubmit(handleLogin)}>
            <div className="text-center text-4xl font-bold mb-10">
                <h1>Login</h1>
            </div>
            <div className="space-y-1">
              <div className="flex-1 space-y-3">                
                <div>
                  <h1 className="mb-2">E-Mail</h1>
                  <input className="border w-full py-2 px-3 rounded-md text- focus:outline-none" placeholder="Enter Your Email"  {...register("email",{
                    required:{
                        value:true,
                        message:"Required"
                    },
                    pattern:{
                        value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message:"Invalid Email Format"
                    }
                  })} />
                  {errors?.email?.message ? <span className="text-sm text-red-600">{errors.email.message}</span>: <span className="opacity-0">.</span>}
                </div>
              </div>
              <div className="flex-1 space-y-1">
                <div className="relative">
                  <h1 className="mb-2">Password</h1>
                  <input  className="border w-full py-2 px-3 rounded-md text- focus:outline-none" placeholder="Enter Your Password" type="password" {...register("password",{
                    required:{
                      value: true,
                      message: "required"
                    },
                    pattern:{
                      value:/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                      message: "Your password must contain at least one uppercase and one lowercase letter, and be at least 6 characters long"
                    }
                  })} />
                   {errors?.password?.message ? <span className="text-sm text-red-600">{errors.password.message}</span>: <span className="opacity-0">.</span>}
                   <div className="absolute top-11 right-2 cursor-pointer" onClick={handleEye}>
                   {eyeToggle ? <IoEyeOffOutline></IoEyeOffOutline>: <IoEyeOutline></IoEyeOutline>}
                   </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
                <input type="submit" className="w-full bg-[#FAB519] text-[#282649] rounded-md cursor-pointer py-2 text-base font-medium" value="Log in" />
            </div>
          </form>
          <div className="space-y-2">
            <div className="text-center text-base font-medium mt-8 text-[#1F2937]">
                <h1>Continue With</h1>
            </div>
            <div className="flex justify-center">
               <div className="flex gap-2">
               <img onClick={()=>popupLogin("google")} className="w-12 cursor-pointer" src={googleImg} alt="" />
                <img onClick={()=>popupLogin("github")} className="w-12 cursor-pointer" src={githubImg} alt="" />
               </div>
            </div>
            <div className="text-center">
                <h1>Don`t Have An Account Please <Link className="text-[#FAB519] font-bold" to="/register">Register</Link></h1>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center"></ToastContainer>
    </div>
  );
};

export default LoginForm;
