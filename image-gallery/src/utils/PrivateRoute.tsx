import { Navigate, Outlet } from 'react-router-dom'
import { verifyToken } from './helpers'


const PrivateRoute = () => {
  let auth = verifyToken(localStorage.getItem('token')!);
  return (
    auth ? <Outlet /> : <Navigate to='/' />
  )
}

export default PrivateRoute;