import React from 'react';
import { connect } from 'dva';


class ListC extends React.Component {

  render(){

    return (
      
      <div>
        List
      </div>
    );
  }
  
}

ListC.propTypes = {
};

export default connect()(ListC);
