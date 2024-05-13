import LoginForm from "../../Components/LoginForm/LoginForm";

const Login = () => {
    document.title = "Log in"
    return (
        <div className="container mx-auto px-3 mt-16">
            <LoginForm></LoginForm>                        
        </div>
    );
};

export default Login;