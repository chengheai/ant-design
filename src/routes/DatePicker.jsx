import React from 'react';
import { connect } from 'dva';
import { DatePicker, Col, Row, message } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
    message.info(`选择的时间是${dateString}`)
    console.log(date, dateString);
}
class DatePickerC extends React.Component {
  
  render(){

    return (
      
      <div>
        <Row>
          <Col className='my-flex-item'>
          <DatePicker onChange={onChange} />    
          <MonthPicker onChange={onChange} placeholder="Select month" />
          <RangePicker onChange={onChange} />
          <br />
          </Col>
        </Row>
      </div>
    );
  }
  
}

DatePickerC.propTypes = {
};

export default connect()(DatePickerC);
