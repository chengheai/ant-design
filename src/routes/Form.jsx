import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox, DatePicker, Col, TimePicker, Select,Cascader, InputNumber } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};
class FormC extends React.Component {
  state = {
    visible: false
  }
  componentDidMount(){
    this.props.form.validateFields();
  }
  handleSubmit = (e) =>{ 
    e.preventDefault();
    this.props.form.validateFields((err, values) =>{
      if(!err){
        console.log('Received values of form', values);
      }
    })
  }
  hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field =>fieldsError[field]);
  }
  showModal = () => {
    this.setState({ visible: true });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
    });
  }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }
  render(){
    console.log(this.props)
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    // Only show error after a field is touched.
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    //#endregion
    // const { visible, onCancel, onCreate, form } = this.props;
    // const { getFieldDecorator } =form;
    return (
      
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <FormItem
            validateStatus={userNameError ? 'error' : ''}
            help={userNameError || ''}
          >
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem
            validateStatus={passwordError ? 'error' : ''}
            help={passwordError || ''}
          >
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              disabled={this.hasErrors(getFieldsError())}
            >
              Log in
            </Button>
          </FormItem>
        </Form>
        <br />
        <Form onSubmit={this.handleSubmit} className='login-form'>
          <FormItem>
            {getFieldDecorator('userName',{
              rules: [{required: true, message:'please input your username!'}],
            })(
              <Input prefix={<Icon type='user' style={{color:'rgba(0,0,0.25)'}} />}  placeholder='user' />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password',{
              rules: [{required: true, message:'please input your password!'}],
            })(
              <Input prefix={<Icon type='lock' style={{color:'rgba(0,0,0.25)'}} />} value='123' type='password' placeholder='Password' />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember',{
              valuePropsName:'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className='login-form-forget' href=''>Forget password</a>
            <Button type='paimary' htmlType='submit' className='login-form-button'>
              Log in
            </Button>
            Or<a href=''>register now!</a>
          </FormItem>
        </Form>
        <br/>
        <br/>
        {/* <Modal
          visible={visible}
          title="Create a new collection"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <FormItem label="Title">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="Description">
              {getFieldDecorator('description')(<Input type="textarea" />)}
            </FormItem>
            <FormItem className="collection-create-form_last-form-item">
              {getFieldDecorator('modifier', {
                initialValue: 'public',
              })(
                <Radio.Group>
                  <Radio value="public">Public</Radio>
                  <Radio value="private">Private</Radio>
                </Radio.Group>
              )}
            </FormItem>
          </Form>
        </Modal>
        <div>
        <Button type="primary" onClick={this.showModal}>New Collection</Button>
        <FormCnForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div> */}
      <Form>
    <FormItem
      {...formItemLayout}
      label="Fail"
      validateStatus="error"
      help="Should be combination of numbers & alphabets"
    >
      <Input placeholder="unavailable choice" id="error" />
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="Warning"
      validateStatus="warning"
    >
      <Input placeholder="Warning" id="warning" />
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="Validating"
      hasFeedback
      validateStatus="validating"
      help="The information is being validated..."
    >
      <Input placeholder="I'm the content is being validated" id="validating" />
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="Success"
      hasFeedback
      validateStatus="success"
    >
      <Input placeholder="I'm the content" id="success" />
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="Warning"
      hasFeedback
      validateStatus="warning"
    >
      <Input placeholder="Warning" id="warning" />
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="Fail"
      hasFeedback
      validateStatus="error"
      help="Should be combination of numbers & alphabets"
    >
      <Input placeholder="unavailable choice" id="error" />
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="Success"
      hasFeedback
      validateStatus="success"
    >
      <DatePicker style={{ width: '100%' }} />
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="Warning"
      hasFeedback
      validateStatus="warning"
    >
      <TimePicker style={{ width: '100%' }} />
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="Error"
      hasFeedback
      validateStatus="error"
    >
      <Select defaultValue="1">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="Validating"
      hasFeedback
      validateStatus="validating"
      help="The information is being validated..."
    >
      <Cascader defaultValue={['1']} options={[]} />
    </FormItem>

    <FormItem
      label="inline"
      {...formItemLayout}
    >
      <Col span={11}>
        <FormItem validateStatus="error" help="Please select the correct date">
          <DatePicker />
        </FormItem>
      </Col>
      <Col span={2}>
        <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
          -
        </span>
      </Col>
      <Col span={11}>
        <FormItem>
          <DatePicker />
        </FormItem>
      </Col>
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="Success"
      hasFeedback
      validateStatus="success"
    >
      <InputNumber style={{ width: '100%' }} />
    </FormItem>
  </Form>
      </div>
    );
  }
  
}


const FormCnForm = Form.create()(FormC);
export default connect()(FormCnForm);
