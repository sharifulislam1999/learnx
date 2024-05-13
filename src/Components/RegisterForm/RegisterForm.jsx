import googleImg from "../../assets/Images/google.png"
import githubImg from "../../assets/Images/github.png"
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { useRef, useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { useForm } from "react-hook-form"
import useAuth from "../Hooks/useAuth";
import { signInWithPopup, updateProfile } from "firebase/auth";
import auth from "../../AuthProvider/firebase.config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";


const RegisterForm = () => {
    const {createUser,setUser} = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    const [eyeToggle,setEyeToggle] = useState(false);
    const formRef = useRef();
    const handleRegister = (data)=>{
        const name = data.name;
        const email = data.email;
        const photo = data.photo;
        const password = data.password;
        createUser(email,password)
        .then((res)=>{
            updateProfile(auth.currentUser,{
                displayName: name,
                photoURL: photo
            })
            .then(()=>{
                setUser({photoURL:photo})
                successMessage("Registation Success")
                setTimeout(()=>{
                  navigate("/")
                },1000)
                console.log(res.user)
            })
        })
        .catch((err)=> {
            if(err.code === "auth/email-already-in-use"){
                errorMessage("Already Use this email");
            }
        });
        
          
    }
    const errorMessage = (msg)=>{
        toast.error(msg)
    }
    const successMessage = (msg)=>{
        toast.success(msg)
    }
    const handleEye = ()=>{
        setEyeToggle(!eyeToggle)
        if(formRef.current.password.type === "password"){
            formRef.current.password.type = "text"
        }else{
            formRef.current.password.type = "password"
        }
       }

    const popupRegister = (provider)=>{
        if(provider === "google"){
            signInWithPopup(auth,new GoogleAuthProvider())
            .then((res)=>{
                if(res.user){
                    successMessage("Registation Success")
                    setTimeout(()=>{
                      navigate("/")
                    },1000)
                }
            })    
        }else if(provider === 'github'){
            signInWithPopup(auth,new GithubAuthProvider())
            .then((res)=>{
              if(res.user){              
                successMessage("Registation Success")       
                setTimeout(()=>{
                  navigate("/")
                },1000)        
              }
                          
            })    
        }

    }
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
      <div className="w-full lg:w-1/3 space-y-1">
        <div className="text-2xl text-center md:text-left md:text-5xl leading-snug font-bold">
          <h1 className="leading-snug mb-3">
            Create An New <br></br> Account
          </h1>
        </div>
        <div className="text-[#888282] text-sm">
          <p>Start your collaborative learning journey! Enter your details to access shared resources and connect with study groups. Join us now and shape your academic success!</p>
        </div>
      </div>
      <div className="w-full lg:w-2/3 px-5 py-10 border rounded-lg">
        <div>
          <form ref={formRef} onSubmit={handleSubmit(handleRegister)}>
            <div className="text-center text-4xl font-bold mb-10">
                <h1>Register</h1>
            </div>
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex-1 space-y-1">
                
                <div>
                  <h1 className="mb-2">Name</h1>
                  <input {...register("name",{
                    required:{
                        value:true,
                        message:"Required"
                    },
                    pattern:{
                        value: /^[a-zA-Z\s'-]+$/,
                        message: "No Speacial Character Allow"
                    }
                  })} className="border w-full py-2 px-3 rounded-md text- focus:outline-none" placeholder="Enter Your Name"  type="text" />
                  {errors?.name?.message ? <span className="text-sm text-red-600">{errors.name.message}</span>: <span className="opacity-0">.</span>}
                </div>
                <div>
                  <h1 className="mb-0 lg:mb-2">Photo Url</h1>
                  <input {...register("photo",{
                    required:{
                        value:true,
                        message:"Required"
                    },
                    pattern:{
                        value: /^(ftp|http|https):\/\/[^ "]+$/,
                        message:"Invalid Url"
                    }
                  })} className="border w-full py-2 px-3 rounded-md text- focus:outline-none" placeholder="Enter Your Photo Url"  />
                  {errors?.photo?.message ? <span className="text-sm text-red-600">{errors.photo.message}</span> : <span className="opacity-0">.</span>}
                </div>
              </div>
              <div className="flex-1 space-y-1">
                <div>
                  <h1 className="mb-2">E-mail</h1>
                  <input {...register("email",{
                     required:{
                        value:true,
                        message:"Required"
                    },
                    pattern:{
                        value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message:"Invalid Email Format"
                    }
                  })} className="border w-full py-2 px-3 rounded-md text- focus:outline-none" placeholder="Enter Your Email" />
                   {errors?.email?.message ? <span className="text-sm text-red-600">{errors.email.message}</span> : <span className="opacity-0">.</span>}
                </div>
                <div className="relative">
                  <h1 className="mb-2">Password</h1>
                <input {...register("password",{
                     required:{
                        value:true,
                        message:"Required"
                    },
                    pattern:{
                        value:/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                        message: "Your password must contain at least one uppercase and one lowercase letter, and be at least 6 characters long"
                    }
                })} className="border  w-full py-2 px-3 rounded-md text- focus:outline-none" placeholder="Enter Your Password" type="password" />
                {errors?.password?.message ? <span className="text-sm text-red-600">{errors.password.message}</span> : <span className="opacity-0">.</span>}
                <div className="absolute right-3 top-11 cursor-pointer" onClick={handleEye}>
                    {eyeToggle ? <IoEyeOffOutline></IoEyeOffOutline>: <IoEyeOutline></IoEyeOutline>}
                    
                </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
                <input type="submit" className="w-full bg-[#FAB519] text-[#282649] rounded-md cursor-pointer py-2 text-base font-medium" value="Regsiter" />
            </div>
          </form>
          <div className="space-y-2">
            <div className="text-center text-base font-medium mt-8 text-[#1F2937]">
                <h1>Continue With</h1>
            </div>
            <div className="flex justify-center">
               <div className="flex gap-2">
               <img onClick={()=>popupRegister('google')} className="w-12 cursor-pointer" src={googleImg} alt="" />
                <img onClick={()=>popupRegister('github')} className="w-12 cursor-pointer" src={githubImg} alt="" />
               </div>
            </div>
            <div className="text-center">
                <h1>Already Have An Account Please <Link className="text-[#FAB519] font-bold" to="/login">Login</Link></h1>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center"></ToastContainer>
    </div>
  );
};

export default RegisterForm;
