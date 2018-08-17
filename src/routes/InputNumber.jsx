import React from 'react';
import { connect } from 'dva';


class InputNumberC extends React.Component {

  render(){

    return (
      
      <div>
        InputNumber
      </div>
    );
  }
  
}

InputNumberC.propTypes = {
};

export default connect()(InputNumberC);
