import { useContext } from "react";
import { MyAuth } from "../../AuthProvider/AuthProvider";

const useAuth = () => {
    const AuthData = useContext(MyAuth);
    return AuthData;
};
export default useAuth;