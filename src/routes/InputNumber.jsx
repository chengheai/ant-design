import React from 'react';
import { connect } from 'dva';
import { InputNumber, Button } from 'antd';

class InputNumberC extends React.Component {
  state = {
    disabled: true,
  }
  onChange = (value) =>{
    console.log('changed', value)
  }
  toggle = () =>{
    this.setState({
      disabled: !this.state.disabled
    })
  }
  render(){

    return (
      
      <div className='my-flex-item'>
        <InputNumber min={1} max={10} defaultValue={3} onChange={this.onChange} />
        <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={this.onChange} />
        <InputNumber min={1} max={100000} defaultValue={3} onChange={this.onChange} />
        <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={this.onChange} />
        <InputNumber min={1} max={10} disabled={this.state.disabled} defaultValue={3} />
        <div style={{marginTop: 20}}>
          <Button onClick={this.toggle} type='primary'>Toggle disabled</Button>
        </div>
        <div style={{marginTop: 20}}>
        <InputNumber
          defaultValue={1000}
          formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
          onChange={this.onChange}
        />
        <InputNumber
          defaultValue={100}
          min={0}
          max={100}
          formatter={value => `${value}%`}
          parser={value => value.replace('%', '')}
          onChange={this.onChange}
        />
        </div>
      </div>
    );
  }
  
}

InputNumberC.propTypes = {
};

export default connect()(InputNumberC);
