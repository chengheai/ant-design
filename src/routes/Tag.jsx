import React from 'react';
import { connect } from 'dva';


class TagC extends React.Component {

  render(){

    return (
      
      <div>
        Tag
      </div>
    );
  }
  
}

TagC.propTypes = {
};

export default connect()(TagC);
