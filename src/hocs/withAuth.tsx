import { Navigate } from "umi"

const useAuth = () => {
  const isLogin = localStorage.getItem('token')
  return {
    isLogin
  }
}

const withAuth = (Component: any) => () => {
  const { isLogin } = useAuth()
  return isLogin ? <Component /> : <Navigate to="/login" />
}


export default withAuth