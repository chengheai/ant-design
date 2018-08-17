import React from 'react';
import { connect } from 'dva';
import { Affix, Button, Col, Row } from 'antd';

class AffixC extends React.Component {
  state = {
    top: 10,
    bottom: 10,
  }
  render(){

    return (
      
      <div style={{height:1000}}>
      <Row>
        <Col span={12}>
          <Affix offsetTop={this.state.top}>
          <Button
            type="primary"
            onClick={() => {
              this.setState({
                top: this.state.top + 10,
              });
            }}
          >
            Affix top
          </Button>
        </Affix>
        <br />
        <Affix offsetBottom={this.state.bottom}>
          <Button
            type="primary"
            onClick={() => {
              this.setState({
                bottom: this.state.bottom + 10,
              });
            }}
          >
            Affix bottom
          </Button>
        </Affix>
        </Col>
        <Col span={12}>
        <Affix offsetTop={50} onChange={affixed => console.log(affixed)}>
          <Button>120px to affix top</Button>
        </Affix>
        </Col>
      </Row>
        
      </div>
    );
  }
  
}

AffixC.propTypes = {
};

export default connect()(AffixC);
