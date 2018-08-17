import React from 'react';
import { connect } from 'dva';


class UploadC extends React.Component {

  render(){

    return (
      
      <div>
        Upload
      </div>
    );
  }
  
}

UploadC.propTypes = {
};

export default connect()(UploadC);
