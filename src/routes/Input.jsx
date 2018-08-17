import React from 'react';
import { connect } from 'dva';


class InputC extends React.Component {

  render(){

    return (
      
      <div>
        Input
      </div>
    );
  }
  
}

InputC.propTypes = {
};

export default connect()(InputC);
