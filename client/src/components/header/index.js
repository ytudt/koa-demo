import React from "react"
import { Layout } from 'antd';
import Cookie from 'js-cookie';
import {browserHistory} from 'react-router';
import './index.scss'
const { Header } = Layout;

export default class component extends React.Component{
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this)

    this.state = {
      isLogin: Cookie.get('token'),
    };
  }
  render(){
    const isLogin = this.state.isLogin;
    return (
      <Layout>
        <Header className="header-wrap">
          <div className="logo fl" />
          <div className="content fl">
            {
              React.Children.map(this.props.children,function(child){
                return child;
              })
            }
          </div>
          <div onClick={this.logout} className="login fr">{isLogin?'退出':'登录'}</div>
        </Header>
      </Layout>
    );
  }
  logout(){
    const isLogin = this.state.isLogin;
    console.log(isLogin);
    Cookie.remove('token');
    browserHistory.push('/login')
  }
}