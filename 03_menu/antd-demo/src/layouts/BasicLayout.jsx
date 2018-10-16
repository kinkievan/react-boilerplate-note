import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import './BasicLayout.less';
import FooterView from './FooterView';
import HeaderView from './HeaderView';
import SiderMenu from './SiderMenu';
import { Switch, Route } from 'react-router-dom'
import Analysis from '../dashboard/Analysis'
import Monitor from '../dashboard/Monitor'
import Workplace from '../dashboard/Workplace'
class BasicLayout extends React.Component {
  state = {
    collapsed: false,
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const { Content } = Layout;
    return (
      <Layout >
        <SiderMenu></SiderMenu>
        <Layout>
          <HeaderView />
          <Content>
            <Switch>
              <Route exact path='/' component={Analysis} />
              <Route path='/analysis' component={Analysis} />
              <Route path='/monitor' component={Monitor} />
              <Route path='/workplace' component={Workplace} />
            </Switch>
          </Content>
          <FooterView />
        </Layout>
      </Layout>
    );
  }
}
export default BasicLayout;
