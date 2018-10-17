import React from 'react';
import { Layout } from 'antd';
import './BasicLayout.less';
import FooterView from './FooterView';
import HeaderView from './HeaderView';
import SiderMenu from './SiderMenu';
import { Switch, Route } from 'react-router-dom'
import Analysis from '../components/dashboard/Analysis'
import Monitor from '../components/dashboard/Monitor'
import Workplace from '../components/dashboard/Workplace'
import Exception404 from '../components/Exception/Exception404'

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
              <Route  component={Exception404} />
            </Switch>
          </Content>
          <FooterView />
        </Layout>
      </Layout>
    );
  }
}
export default BasicLayout;
