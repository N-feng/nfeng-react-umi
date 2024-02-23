import { notification } from "antd";
import { Navigate, Outlet } from "umi"

const useAuth = () => {
  const isLogin = localStorage.getItem('token')
  if (!isLogin) {
    // notification.error({
    //   message: '登录信息过期',
    //   description: '请重新登录',
    // });
  }
  return {
    isLogin
  }
}

export default  (props: any) => {
  const { isLogin } = useAuth()
  console.log('isLogin: ', isLogin);

  return isLogin ? <Outlet /> : <Navigate to="/login" />
}