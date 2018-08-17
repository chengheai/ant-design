import React from 'react';
import { connect } from 'dva';


class FormC extends React.Component {

  render(){

    return (
      
      <div>
        Form
      </div>
    );
  }
  
}

FormC.propTypes = {
};

export default connect()(FormC);
