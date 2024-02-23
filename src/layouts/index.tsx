import { ProLayout } from '@ant-design/pro-layout';
import { Link, Outlet, useAppData, useLocation } from 'umi';
import styles from './index.less';

export default function Layout() {
  const { clientRoutes } = useAppData();
  
  const location = useLocation();
  if (location.pathname === '/login') {
    return <><Outlet /></>
  }

  return (
    <ProLayout
      route={clientRoutes[0]}
      location={location}
      title="Umi x Ant Design"
      menuItemRender={(menuItemProps: any, defaultDom: any) => {
        if (menuItemProps.isUrl || menuItemProps.children) {
          return defaultDom;
        }
        if (menuItemProps.path && location.pathname !== menuItemProps.path) {
          return (
            <Link to={menuItemProps.path} target={menuItemProps.target}>
              {defaultDom}
            </Link>
          );
        }
        return defaultDom;
      }}
    >
      <Outlet />
    </ProLayout>
  );
}
