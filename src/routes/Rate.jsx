import React from 'react';
import { connect } from 'dva';
import { Rate, Icon } from "antd";

class RateC extends React.Component {
  state = {
    value: 3,
  }
  handleChange = (value) =>{
    this.setState({value});
  }
  render(){
    const { value } = this.state;
    return (
      
      <div>
        <Rate /><br />
        <Rate allowHalf  /><br />
        <span>
          <Rate onChange={this.handleChange} value={value} />
          {value && <span className="ant-rate-text">{value} stars</span>}
        </span>
        <br />
        <Rate character={<Icon type="heart" />} allowHalf />
        <br />
        <Rate character="A" allowHalf style={{ fontSize: 36 }} />
        <br />
        <Rate character="好" allowHalf />
      </div>
    );
  }
  
}

RateC.propTypes = {
};

export default connect()(RateC);
