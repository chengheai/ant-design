import React from 'react';
import { connect } from 'dva';
import { Input, Select, Icon, DatePicker, Col } from 'antd';
const Option = Select.Option;
const InputGroup = Input.Group;
const Search = Input.Search
const selectBefore = (
  <Select defaultValue='Http://' style={{width: 90}}>
    <Option value='Http://'>Http://</Option>
    <Option value='Https://'>Https://</Option>
  </Select>
);
const selectAfter =(
  <Select defaultValue='.com' style={{width: 80}}>
    <Option value='.com'>.com</Option>
    <Option value='.jp'>.jp</Option>
    <Option value='.cn'>.cn</Option>
    <Option value='.org'>.org</Option>
  </Select>
)
class InputC extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userName: '',
    }
  }
  emitEmpty = () =>{
    this.userNameInput.focus();
    this.setState({ userName: ''})
  }
  onChangeUserName = (e) =>{
    this.setState({userName: e.target.value})
  }
  render(){
    const { userName } = this.state;
    const suffix = userName ? <Icon type='close-circle' onClick={this.emitEmpty} />:null;
    return (
      
      <div>
        <Col span={12}>
          <div className='my-flex-item-new'>
            <Input placeholder='basic usage' />
          </div>
          <div className='my-flex-item-new'>
            <Input size="large" placeholder="large size" />
          </div>
          <div className='my-flex-item-new'>
            <Input placeholder="default size" />
          </div>
          <div className='my-flex-item-new'>
            <Input size="small" placeholder="small size" />
          </div>
          <Input style={{marginTop:10}} addonAfter={selectAfter} addonBefore={selectBefore} defaultValue='my site' />
          <InputGroup compact  style={{marginTop:10}}>
            <Input style={{ width: '50%' }} defaultValue="input content" />
            <DatePicker />
          </InputGroup>
          <Input
            placeholder="Enter your username"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            suffix={suffix}
            value={userName}
            onChange={this.onChangeUserName}
            ref={node => this.userNameInput = node}
            style={{marginTop:10}}
        />
        <Search 
          placeholder='input search text'
          onSearch={value =>console.log(value)}
          style={{width: 200,marginTop:10}}
         />
         <br /><br />
         <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          enterButton
        />
        <br /><br />
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={value => console.log(value)}
        />
        </Col>
      </div>
    );
  }
  
}

InputC.propTypes = {
};

export default connect()(InputC);
