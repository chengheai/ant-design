import React from 'react';
import { connect } from 'dva';
import { Radio, Col, Row, Button } from 'antd';
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
class RadioC extends React.Component {
  state = {
    value: 1,
    disabled: true,
  }
  onChange = (e) =>{
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value
    })
  }
  toggleDisabled = () =>{
    this.setState({
      disabled: !this.state.disabled,
    })
  }

  render(){

    return (
      
      <div>
        <Row>
          <Col span={12}>
            <RadioGroup onChange={this.onChange} value={this.state.value}>
              <Radio value={1}>A</Radio>
              <Radio value={2}>B</Radio>
              <Radio value={3}>C</Radio>
              <Radio value={4}>D</Radio>
            </RadioGroup>
             <div style={{ marginTop: 16 }}>
              <RadioGroup onChange={this.onChange} defaultValue="a" buttonStyle='solid' size='large'>
                <RadioButton value="a">Hangzhou</RadioButton>
                <RadioButton value="b">Shanghai</RadioButton>
                <RadioButton value="c">Beijing</RadioButton>
                <RadioButton value="d">Chengdu</RadioButton>
              </RadioGroup>
            </div>
            <div style={{ marginTop: 16 }}>
              <RadioGroup onChange={this.onChange} defaultValue="a">
                <RadioButton value="a">Hangzhou</RadioButton>
                <RadioButton value="b" disabled>Shanghai</RadioButton>
                <RadioButton value="c">Beijing</RadioButton>
                <RadioButton value="d">Chengdu</RadioButton>
              </RadioGroup>
            </div>
            <div style={{ marginTop: 16 }}>
              <RadioGroup disabled onChange={this.onChange} defaultValue="a">
                <RadioButton value="a">Hangzhou</RadioButton>
                <RadioButton value="b">Shanghai</RadioButton>
                <RadioButton value="c">Beijing</RadioButton>
                <RadioButton value="d">Chengdu</RadioButton>
              </RadioGroup>
            </div>
          </Col>
          <Col span={12}>
            <Radio defaultChecked={false} disabled={this.state.disabled}>Disabled</Radio>
            <br />
            <Radio defaultChecked disabled={this.state.disabled}>Disabled</Radio>
            <div style={{ marginTop: 20 }}>
              <Button type="primary" onClick={this.toggleDisabled}>
                Toggle disabled
              </Button>
            </div>
          </Col>
        </Row>
        
      </div>
    );
  }
  
}

RadioC.propTypes = {
};

export default connect()(RadioC);
