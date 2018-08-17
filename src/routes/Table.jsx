import React from 'react';
import { connect } from 'dva';


class TableC extends React.Component {

  render(){

    return (
      
      <div>
        Table
      </div>
    );
  }
  
}

TableC.propTypes = {
};

export default connect()(TableC);
