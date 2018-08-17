import React from 'react';
import { connect } from 'dva';
import { Icon } from 'antd';


class IconC extends React.Component {

  render(){

    return (
      
      <div>
        <Icon style={{fontSize: 36 }} type="step-backward" />
        <Icon style={{fontSize: 36 }} type="github" />
        <Icon style={{fontSize: 36, color: '#08c'}} type="alipay" />
      </div>
    );
  }
  
}

IconC.propTypes = {
};

export default connect()(IconC);
