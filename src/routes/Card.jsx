import React from 'react';
import { connect } from 'dva';


class CardC extends React.Component {

  render(){

    return (
      
      <div>
        Card
      </div>
    );
  }
  
}

CardC.propTypes = {
};

export default connect()(CardC);
