import React from 'react';
import { connect } from 'dva';


class MessageC extends React.Component {

  render(){

    return (
      
      <div>
        Message
      </div>
    );
  }
  
}

MessageC.propTypes = {
};

export default connect()(MessageC);
