import React from 'react';
import { connect } from 'dva';


class DrawerC extends React.Component {

  render(){

    return (
      
      <div>
        Drawer
      </div>
    );
  }
  
}

DrawerC.propTypes = {
};

export default connect()(DrawerC);
