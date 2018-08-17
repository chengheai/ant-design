import React from 'react';
import { connect } from 'dva';


class AvatarC extends React.Component {

  render(){

    return (
      
      <div>
        Avatar
      </div>
    );
  }
  
}

AvatarC.propTypes = {
};

export default connect()(AvatarC);
