import React from 'react';
import { connect } from 'dva';


class ProgressC extends React.Component {

  render(){

    return (
      
      <div>
        Progress
      </div>
    );
  }
  
}

ProgressC.propTypes = {
};

export default connect()(ProgressC);
