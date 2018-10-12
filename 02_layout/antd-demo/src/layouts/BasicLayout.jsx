import React from 'react';
import { Layout } from 'antd';

class BasicLayout extends React.Component {
  render() {
    const { Header, Footer, Sider, Content } = Layout;
    return (
      <Layout >
        <Sider style={{ width: 256, minHeight: '100vh' }}>Sider</Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}> Header</Header>
          <Content>Content</Content>
          <Footer style={{ textAlign: 'center' }}> Ant Design ©2018 Created by Kiki</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default BasicLayout;
