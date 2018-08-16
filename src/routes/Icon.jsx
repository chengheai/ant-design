import React from 'react';
import { connect } from 'dva';
import { Icon } from 'antd';


class IconC extends React.Component {

  render(){

    return (
      
      <div>
        <Icon type="step-backward" />
        <Icon type="github" />
      </div>
    );
  }
  
}

IconC.propTypes = {
};

export default connect()(IconC);
