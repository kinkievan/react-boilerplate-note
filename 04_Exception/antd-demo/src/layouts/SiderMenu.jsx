import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import './BasicLayout.less';
import { Link } from "react-router-dom";
class SiderMenu extends React.Component {
    state = { collapsed: false,}
  render() {
    const { Sider } = Layout;
    const SubMenu = Menu.SubMenu;
    return (
        <Sider style={{ width: 256, minHeight: '100vh' }} collapsed={this.state.collapsed}>
          <Menu mode="inline" theme="dark">
            <SubMenu key="sub1" title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}>
              <Menu.Item key="1"><Link to="/analysis">分析頁</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/monitor">監控頁</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/workplace">工作臺</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
    );
  }
}
export default SiderMenu;
