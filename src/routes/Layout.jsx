import React from 'react';
import { connect } from 'dva';


class LayoutC extends React.Component {

  render(){

    return (
      
      <div>
        Layout
      </div>
    );
  }
  
}

LayoutC.propTypes = {
};

export default connect()(LayoutC);
