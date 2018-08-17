import React from 'react';
import { connect } from 'dva';


class TimelineC extends React.Component {

  render(){

    return (
      
      <div>
        Timeline
      </div>
    );
  }
  
}

TimelineC.propTypes = {
};

export default connect()(TimelineC);
