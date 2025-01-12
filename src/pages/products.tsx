import React from 'react';
import { Tabs, theme } from 'antd';
import type { TabsProps } from 'antd';
import StickyBox from 'react-sticky-box';
import axios from 'axios';
import { Outlet, useMutation, useQuery, useQueryClient } from 'umi';

import styles from './products.less';
import ProductList from '@/components/ProductList';

const UserPage = () => {
  const queryClient = useQueryClient();
  const productsQuery = useQuery(['products'], {
    queryFn() {
      return axios.get('/api/products').then((res) => res.data);
    },
  });
  const productsDeleteMutation = useMutation({
    mutationFn(id: string) {
      return axios.delete(`/api/products/${id}`);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
  if (productsQuery.isLoading) return null;
  const onChange = (key: string) => {
    console.log(key);
  };
  
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Tab 1',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
  ];

  const renderTabBar: TabsProps['renderTabBar'] = (props, DefaultTabBar) => (
    <StickyBox offsetTop={64} offsetBottom={20} style={{ zIndex: 1 }}>
      <DefaultTabBar {...props} />
    </StickyBox>
  );

  return (
    <div>
      <Tabs defaultActiveKey="1" renderTabBar={renderTabBar} items={items} onChange={onChange} />
      <Outlet />
      <h1 className={styles.title}>Page products</h1>
      <ProductList
        products={productsQuery.data.data}
        onDelete={(id) => {
          productsDeleteMutation.mutate(id);
        }}
      />
    </div>
  );
}

export default UserPage
