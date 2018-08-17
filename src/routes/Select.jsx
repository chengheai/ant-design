import React from 'react';
import { connect } from 'dva';


class SelectC extends React.Component {

  render(){

    return (
      
      <div>
        Select
      </div>
    );
  }
  
}

SelectC.propTypes = {
};

export default connect()(SelectC);
