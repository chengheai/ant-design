import React from 'react';
import { connect } from 'dva';


class SpinC extends React.Component {

  render(){

    return (
      
      <div>
        Spin
      </div>
    );
  }
  
}

SpinC.propTypes = {
};

export default connect()(SpinC);
