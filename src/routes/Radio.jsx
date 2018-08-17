import React from 'react';
import { connect } from 'dva';


class RadioC extends React.Component {

  render(){

    return (
      
      <div>
        Radio
      </div>
    );
  }
  
}

RadioC.propTypes = {
};

export default connect()(RadioC);
