import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Components/Hooks/useAuth";
import { PropTypes } from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user,loader} = useAuth();
    const location = useLocation();
    if(user){
       return children
    }
    if(loader){
        return <div className="my-4 flex justify-center"><span className="loading loading-ring loading-lg"></span></div>
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;