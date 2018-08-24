import React from 'react';
import { connect } from 'dva';
import { Avatar, Badge } from 'antd';


class AvatarC extends React.Component {

  render(){

    return (
      
      <div className='my-flex-item'>
        <Avatar icon="user" />
        <Avatar>U</Avatar>
        <Avatar>USER</Avatar>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
        <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
        <span style={{ marginRight: 24 }}>
          <Badge count={999}><Avatar shape="square" icon="user" /></Badge>
        </span>
      </div>
    );
  }
  
}

AvatarC.propTypes = {
};

export default connect()(AvatarC);
