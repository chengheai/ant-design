import React from 'react';
import { connect } from 'dva';


class BadgeC extends React.Component {

  render(){

    return (
      
      <div>
        Badge
      </div>
    );
  }
  
}

BadgeC.propTypes = {
};

export default connect()(BadgeC);
