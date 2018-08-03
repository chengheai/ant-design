import React from 'react';
import { connect } from 'dva';

import { Button, Form, Input, Icon, 
  Checkbox, InputNumber, Select, Rate,Transfer 
} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const mockData = [];
for(let i =0;i<20; i++){
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3 < 1
  })
}
const targetKeys = mockData
  .filter(item => +item.key % 3 > 1)
  .map(item =>item.key);

class Test extends React.Component {
  constructor(){
    super()
    this.state ={
      value:0,
      targetKeys,
      selectedKeys: [],
    }
  }
  trChange = (nextTargetKeys, direction, moveKeys) =>{
    this.setState({targetKeys: nextTargetKeys})
    console.log('targetKeys: ', targetKeys);
    console.log('direction: ', direction);
    console.log('moveKeys: ', moveKeys);
  }
  trSelectChange = (sourceSelectedKeys, targetSelectedKeys) =>{
    this.setState({selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys]})
    console.log('sourceSelectedKeys: ', sourceSelectedKeys);
    console.log('targetSelectedKeys: ', targetSelectedKeys);
  }
  trScroll = (direction, e) =>{
    console.log('direction:', direction);
    console.log('target:', e.target);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  onChange = value =>{
    console.log('changed', value)
  }
  logStar = value =>{
    this.setState({value})
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { value } = this.state;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form" style={{maxWidth: 300}}>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="" style={{float: 'right'}}>Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
              Log in
            </Button>
            Or <a href="">register now!</a>
          </FormItem>
        </Form>
        <div>
          <InputNumber
          defaultValue={1000}
          formatter={value =>`$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 
          parser={value =>value.replace(/\$\s?|(,*)/g, '')}
          onChange={this.onChange}
          />
          <Select defaultValue="Option1">
            <Option value="Option1">Option1</Option>
            <Option value="Option2">Option2</Option>
          </Select>
          <div>
            <Rate value={value} onChange={this.logStar} character={<Icon type='heart' />} allowHalf/>
            {value && <span className="ant-rate-text">{value} stars</span>}
            <br />
            <Rate character='A' allowHalf style={{fontSize: 24}} />
            <br/>
            <Rate character="好" allowHalf/>
          </div>
          <div>
          <Transfer
            dataSource={mockData}
            titles={['Source', 'Target']}
            targetKeys={this.state.targetKeys}
            selectedKeys={this.state.selectedKeys}
            onChange={this.trChange}
            onSelectChange={this.trSelectChange}
            onScroll={this.trScroll}
            render={item => item.title}
          />
          </div>
        </div>
      </div>
    );
  }
}
const WrappedNormalLoginForm = Form.create()(Test)
Test.prototypes = {};
export default connect()(WrappedNormalLoginForm)