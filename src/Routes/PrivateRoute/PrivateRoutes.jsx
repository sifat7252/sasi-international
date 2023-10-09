import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
const PrivateRoutes = ({children: routes}) => {
    const { user, loading } = useContext(AuthContext)
    if (loading){
        return <span className="flex items-center justify-center loading loading-spinner loading-lg"></span>
    }
    if(user){
        return routes;
    }
    return <Navigate to='/login'></Navigate>
};


export default PrivateRoutes;
PrivateRoutes.propTypes = {
    children: PropTypes.node
}