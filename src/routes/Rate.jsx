import React from 'react';
import { connect } from 'dva';


class RateC extends React.Component {

  render(){

    return (
      
      <div>
        Rate
      </div>
    );
  }
  
}

RateC.propTypes = {
};

export default connect()(RateC);
