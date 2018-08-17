import React from 'react';
import { connect } from 'dva';


class MentionC extends React.Component {

  render(){

    return (
      
      <div>
        Mention
      </div>
    );
  }
  
}

MentionC.propTypes = {
};

export default connect()(MentionC);
