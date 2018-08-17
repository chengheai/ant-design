import React from 'react';
import { connect } from 'dva';


class PopoverC extends React.Component {

  render(){

    return (
      
      <div>
        Popover
      </div>
    );
  }
  
}

PopoverC.propTypes = {
};

export default connect()(PopoverC);
