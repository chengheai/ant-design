import React from 'react';
import { connect } from 'dva';


class CalendarC extends React.Component {

  render(){

    return (
      
      <div>
        Calendar
      </div>
    );
  }
  
}

CalendarC.propTypes = {
};

export default connect()(CalendarC);
