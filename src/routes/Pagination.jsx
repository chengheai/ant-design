import React from 'react';
import { connect } from 'dva';
import { Pagination, Col, Row } from 'antd';

const onShowSizeChange = (current, pageSize) =>{
  console.log(current, pageSize);
}
const onChange = (pageNumber) =>{
  console.log('Page: ', pageNumber);
}
class PaginationC extends React.Component {
  render(){
    return (
      
      <div>
        <Row>
          <Col span={24}>
            <Pagination defaultCurrent={1} total={50} /><br />
            <Pagination defaultCurrent={6} total={500} /><br />
            <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} /><br />
            <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} /><br />
          </Col>

        </Row>
      </div>
    );
  }
  
}

PaginationC.propTypes = {
};

export default connect()(PaginationC);
