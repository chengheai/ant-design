import React from 'react';
import { connect } from 'dva';


class ModalC extends React.Component {

  render(){

    return (
      
      <div>
        Modal
      </div>
    );
  }
  
}

ModalC.propTypes = {
};

export default connect()(ModalC);
