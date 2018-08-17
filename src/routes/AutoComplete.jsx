import React from 'react';
import { connect } from 'dva';


class AutoCompleteC extends React.Component {

  render(){

    return (
      
      <div>
        AutoComplete
      </div>
    );
  }
  
}

AutoCompleteC.propTypes = {
};

export default connect()(AutoCompleteC);
