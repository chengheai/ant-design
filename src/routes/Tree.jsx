import React from 'react';
import { connect } from 'dva';


class TreeC extends React.Component {

  render(){

    return (
      
      <div>
        Tree
      </div>
    );
  }
  
}

TreeC.propTypes = {
};

export default connect()(TreeC);
