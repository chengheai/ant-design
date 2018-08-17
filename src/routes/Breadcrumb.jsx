import React from 'react';
import { connect } from 'dva';


class BreadcrumbC extends React.Component {

  render(){

    return (
      
      <div>
        Breadcrumb
      </div>
    );
  }
  
}

BreadcrumbC.propTypes = {
};

export default connect()(BreadcrumbC);
