import React from 'react';
import { connect } from 'dva';


class TimePickerC extends React.Component {

  render(){

    return (
      
      <div>
        TimePicker
      </div>
    );
  }
  
}

TimePickerC.propTypes = {
};

export default connect()(TimePickerC);
