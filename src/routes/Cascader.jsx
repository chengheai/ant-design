import React from 'react';
import { connect } from 'dva';


class CascaderC extends React.Component {

  render(){

    return (
      
      <div>
        Cascader
      </div>
    );
  }
  
}

CascaderC.propTypes = {
};

export default connect()(CascaderC);
