import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
  const {user, loading} = useContext(AuthContext);

  if(loading) {
    return <div className='flex h-screen justify-center items-center'>
      <span className="loading loading-bars loading-lg"></span>
    </div>
  }

  if(user?.email){
    return children;
  }

  return <Navigate to="/login" replace></Navigate>;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
}

export default PrivateRoutes;