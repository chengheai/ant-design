import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Link } from 'dva/router';
import { Menu, Dropdown, Icon,
   Steps, AutoComplete, Checkbox, 
   DatePicker, Cascader } 
   from 'antd';

const options1 = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];
const Option = AutoComplete.Option;
const Step = Steps.Step;
const CheckboxGroup = Checkbox.Group;
const plainOtions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];
const menu = (
  <Menu>
    <Menu.Item>
      <a>item1</a>
    </Menu.Item>
    <Menu.Item>
      <a>item2</a>
    </Menu.Item>
    <Menu.Item>
      <a>item3</a>
    </Menu.Item>
  </Menu>
);

class IndexPage extends React.Component {
  constructor(){
    super();
    this.state = {
      result: [],
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false
    }
  }
  dateChange = (date, dateString) =>{
    console.log(date, dateString)
  }
  handleSearch = (value) =>{
    let result;
    if(!value || value.indexOf('@') >=0){
      result = [];
    } else {
      result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }
    this.setState({result});
  }
  onChange = (checkedList) =>{
    // console.log('aa:',!!checkedList.length && (checkedList.length < plainOtions.length))
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOtions.length),
      checkAll: checkedList.length === plainOtions.length
    })
  }
  onChange1 = (value) =>{
    console.log(value)
  }
  onCheckAllChange = (e) =>{
    this.setState({
      checkedList: e.target.checked? plainOtions: [],
      indeterminate: false,
      checkAll: e.target.checked
    })
  }
  render(){
    const { result } = this.state;
    const children = result.map((email) => {
      return <Option key={email}>{email}</Option>
    });
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <h2><Link to='/radio'>测试页面</Link></h2>  
        <div className={styles.welcome} />
        <Link to='/test'><h1>去测试页面看看</h1></Link>
        <Steps current={0}>
            <Step title="Finished" description="this is description" />
            <Step title="In Progress" description="this is description" />
            <Step title="Waiting" description="this is description" />
        </Steps>
        <Steps progressDot current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
        <div className={styles.test}>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#.">
              Hover me <Icon type="down" />
            </a>
          </Dropdown>
          <AutoComplete
            style={{ width: 200 }}
            onSearch={this.handleSearch}
            placeholder="input here"
            >
            {children}
          </AutoComplete>
          <div>
            <div style={{borderBottom: '1px solid #e9e9e9'}}>
              <Checkbox
                indeterminate={this.state.indeterminate}
                onChange={this.onCheckAllChange}
                checked={this.state.checkAll}
              >
                Check all
              </Checkbox>
            </div>
            <br />
            <CheckboxGroup options={plainOtions} value={this.state.checkedList} onChange={this.onChange} />
          </div> 
          <DatePicker onChange={this.dateChange} />
            {/* 问题 */}
          {/* <MonthPicker onChange={dateChange} />
          <RangePicker onChange={dateChange} />
          <WeekPicker onChange={this.dateChange} /> */}
          <Cascader options={options1} onChange={this.onChange1} placeholder="Please select" />
        </div>
      </div>
    );
  }
  
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
