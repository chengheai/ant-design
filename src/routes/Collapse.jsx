import React from 'react';
import { connect } from 'dva';


class CollapseC extends React.Component {

  render(){

    return (
      
      <div>
        Collapse
      </div>
    );
  }
  
}

CollapseC.propTypes = {
};

export default connect()(CollapseC);
