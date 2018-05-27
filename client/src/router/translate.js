import React from "react"
import routes from './routes'
import { connect } from 'react-redux'


class Translate extends React.Component{
  render(){
    return (
      <div>
        {routes}
      </div>
    )
  }
}

function mapStateToProps(state) {
  let { common } = state;

  return {
    langKey: common.langKey
  }
}

export default connect(mapStateToProps)(Translate);