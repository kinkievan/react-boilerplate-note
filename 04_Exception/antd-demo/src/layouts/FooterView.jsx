import React from 'react';
import { Layout} from 'antd';
class FooterView extends React.Component {
  render() {
    const { Footer } = Layout;
    return (
          <Footer style={{ textAlign: 'center' }}> Ant Design ©2018 Created by Kiki</Footer>
    );
  }
}
export default FooterView;
