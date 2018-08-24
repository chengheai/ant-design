import React from 'react';
import { connect } from 'dva';
import { Upload, Icon, Modal } from 'antd';

class UploadC extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [{
      uid:'-1',
      name:'xxx.png',
      status: 'done',
      url:'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }]
  }
  handleCancel = () => this.setState({previewVisible: false})
  handlePreview = (file) =>{
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }
  handleChange = ({fileList}) => this.setState({fileList})
  render(){
    const { previewImage, previewVisible, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type='plus' />
        <div className='ant-upload-text'>Upload</div>
      </div>
    )
    return (
      
      <div className='clearfix'>
        <Upload
          action='//jsonplaceholder.typicode.com/posts/'
          listType='picture-card'
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 10 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt='example' style={{width:'100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
  
}

UploadC.propTypes = {
};

export default connect()(UploadC);
