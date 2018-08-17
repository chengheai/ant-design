import React from 'react';
import { connect } from 'dva';


class AlertC extends React.Component {

  render(){

    return (
      
      <div>
        Alert
      </div>
    );
  }
  
}

AlertC.propTypes = {
};

export default connect()(AlertC);
