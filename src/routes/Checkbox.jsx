import React from 'react';
import { connect } from 'dva';
import { Checkbox, Col, Row, Button } from 'antd';
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];
class CheckboxC extends React.Component {
  state = {
    checked: true,
    disabled: false,
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
  }
  onChange = (e) =>{
    console.log(`checked = ${e.target.checked}`);
  }
  toggleChecked = () =>{
    this.setState({checked: !this.state.checked});
  }
  toggleDisable =() =>{
    this.setState({disabled: !this.state.disabled})
  }
  onChange1 = (e) =>{
    console.log('checked=', e.target.checked);
    this.setState({
      checked:e.target.checked
    })
  }
  onChange2 = (checkedList) => {
    console.log('checkedList:',checkedList)
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll: checkedList.length === plainOptions.length,
    });
  }

  onCheckAllChange = (e) => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  }
  render(){
    const label = `${this.state.checked ?'checked':'Unchecked'}-${this.state.disabled ? 'Disabled':'Enabled'}`;

    return (
     
      <div>
        <Row>
          <Col>
            <Checkbox onChange={this.onChange}>checkbox</Checkbox>
            <Checkbox defaultChecked={false} disabled />
            <Checkbox defaultChecked disabled /><br /><br />
            <div>
              <p style={{marginBottom: 20}}>
                <Checkbox
                checked={this.state.checked}
                disabled={this.state.disabled}
                onChange={this.onChange1}
                >
                  {label}
                </Checkbox>
              </p>
              <p>
                <Button
                  type='paimary'
                  size='small'
                  onClick={this.toggleChecked}
                >
                  {!this.state.checked ? 'check':'Uncheck'}
                </Button>
                <Button
                  style={{marginLeft:10}}
                  type='parmary'
                  size='small'
                  onClick={this.toggleDisable}
                >
                {!this.state.disabled ? 'Disable': 'Enable'}
                </Button>
              </p>
            </div><br /><br /><br />
            <div>
              <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                <Checkbox
                  indeterminate={this.state.indeterminate}
                  onChange={this.onCheckAllChange}
                  checked={this.state.checkAll}
                >
                  Check all
                </Checkbox>
              </div>
              <br />
              <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange2} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
  
}

CheckboxC.propTypes = {
};

export default connect()(CheckboxC);
