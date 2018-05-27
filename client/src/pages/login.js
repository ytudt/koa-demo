/**
 * Created by Daguang Li on 11/24/2017.
 */
import React from 'react'
import { connect } from "react-redux"
import { Layout } from 'antd';
const { Header } = Layout;

class Login extends React.Component{
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(params) {
    this.props.handleSubmit(params);
  }

  render() {
    return (
      <div className="login-body">
        <Layout>
          <Header className="header">header</Header>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let { loading, login } = state;
  return {
    loading: loading.loading,
    loginInfo: login.loginInfo
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (params) => {

    }
  }
};
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;