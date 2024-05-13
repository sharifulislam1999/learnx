import RegisterForm from "../../Components/RegisterForm/RegisterForm";

const Register = () => {
    document.title = "Register"
    return (
        <div className="container mx-auto px-3 mt-16">
           <RegisterForm></RegisterForm>
        </div>
    );
};

export default Register;