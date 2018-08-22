import React from 'react';
import { connect } from 'dva';
import { Switch, Icon } from "antd";

class SwitchC extends React.Component {
  onChange = (checked) =>{
    console.log(`switch to ${checked}`);
  }
  render(){

    return (
      
      <div>
        <Switch defaultChecked onChange={this.onChange} /><br /><br />
        <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked onChange={this.onChange} />
        <br /><br />
        <Switch size='small' checkedChildren="1" unCheckedChildren="0" onChange={this.onChange} />
        <br /><br />
        <Switch checkedChildren={<Icon type="check" />} onChange={this.onChange} unCheckedChildren={<Icon type="cross" />} defaultChecked />
      </div>
    );
  }
  
}

SwitchC.propTypes = {
};

export default connect()(SwitchC);
