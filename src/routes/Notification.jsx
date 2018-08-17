import React from 'react';
import { connect } from 'dva';


class NotificationC extends React.Component {

  render(){

    return (
      
      <div>
        Notification
      </div>
    );
  }
  
}

NotificationC.propTypes = {
};

export default connect()(NotificationC);
