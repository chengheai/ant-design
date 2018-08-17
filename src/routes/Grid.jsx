import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import '../common/grid.less';


class GridC extends React.Component {

  render(){

    return ( 
      <div className='grid_wrap'>
        <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
        <Row>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
        </Row>
        <Row>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>
    </div>
    );
  }
  
}

GridC.propTypes = {
};

export default connect()(GridC);
