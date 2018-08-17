import React from 'react';
import { connect } from 'dva';


class SwitchC extends React.Component {

  render(){

    return (
      
      <div>
        Switch
      </div>
    );
  }
  
}

SwitchC.propTypes = {
};

export default connect()(SwitchC);
