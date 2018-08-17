import React from 'react';
import { connect } from 'dva';


class TooltipC extends React.Component {

  render(){

    return (
      
      <div>
        Tooltip
      </div>
    );
  }
  
}

TooltipC.propTypes = {
};

export default connect()(TooltipC);
