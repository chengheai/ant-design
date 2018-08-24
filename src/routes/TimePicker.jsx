import React from 'react';
import { connect } from 'dva';
import { TimePicker } from "antd";

import moment from 'moment'
class TimePickerC extends React.Component {
  onChange = (time, timeString) =>{
    console.log(time, timeString)
  }
  render(){

    return (
      
      <div>
        <TimePicker onChange={this.onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
      </div>
    );
  }
  
}

TimePickerC.propTypes = {
};

export default connect()(TimePickerC);
