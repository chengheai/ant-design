import React from 'react';
import { connect } from 'dva';


class TransferC extends React.Component {

  render(){

    return (
      
      <div>
        Transfer
      </div>
    );
  }
  
}

TransferC.propTypes = {
};

export default connect()(TransferC);
