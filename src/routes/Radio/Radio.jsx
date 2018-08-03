import React from 'react';
import { connect } from 'dva';
import { Radio, Switch, 
  Upload, Icon, Modal, 
  Carousel, Select, Pagination,
  Spin, Tag, Timeline
} 
  from 'antd';

const Option = Select.Option; 
const RadioGroup = Radio.Group;
const RadioOptions = [
  {label: 'A', value: 1},
  {label: 'B', value: 2},
  {label: 'C', value: 3},
  {label: 'D', value: 4},
]
class RadioTest extends React.Component{
  constructor(){
    super();
    this.state = {
      value1: '',
      value3: '',
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: -1,
        name: 'xx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      }]
    };
  }

  handleCancel = () =>this.setState({ previewVisible: false})

  handlePreview = (file) =>{
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }
  handleChange = ({ fileList }) => this.setState({fileList})
  onChange1 = (e) =>{
    this.setState({
      value1: e.target.value
    })
  }
  onChange2 = checked =>{
    console.log(`switch to ${checked}`)
  }
  onChange3 = value3 =>{
    console.log(`selected ${value3}`)
    this.setState({
      value3,
    },() =>this.logger())
  }
  logger = () =>{
    alert(1)
  }
  render(){
    const { value1, previewImage, previewVisible, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    return (
    <div>
      <div className='radio-wrapper'>
        <RadioGroup defaultValue={2} options={RadioOptions} onChange={this.onChange1} value={value1}></RadioGroup>
        <span>====>{value1}</span>
        <Switch defaultChecked onChange={this.onChange2} />
        <div className="clearfix">
          <Upload
            action="//jsonplaceholder.typicode.com/posts/"
            listType="picture-card"
            fileList={fileList}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
          >
          {fileList.length >= 3? null :uploadButton}
          </Upload>
          <Modal 
            visible={previewVisible} 
            footer={null} 
            onCancel={this.handleCancel}>
              <img alt='example' style={{width: '100%'}} src={previewImage} />
            </Modal>
        </div>
        <Carousel vertical>
          <div><h2>1</h2></div>
          <div><h2>2</h2></div>
          <div><h2>3</h2></div>
          <div><h2>4</h2></div>
        </Carousel>
      </div>
      <div>
        <Select defaultValue="lucy" style={{width:120}} onChange={this.onChange3}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Pagination showQuickJumper defaultCurrent={2} total={100} onChange={this.onChange4} />
        <Spin />
        <Tag color='orange'>orange</Tag> 
        <Timeline>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Technical testing 2015-09-01</Timeline.Item>
          <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
        </Timeline>
      </div>
    </div>
    )
  }
}
RadioTest.propTypes = {
};

export default connect()(RadioTest);