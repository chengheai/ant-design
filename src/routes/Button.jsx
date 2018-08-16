import React from 'react';
import { connect } from 'dva';
import { Button, Row, Col, Radio, Icon, Dropdown, Menu } from 'antd';

class ButtonC extends React.Component {
  state = {
    size: 'large',
    loading: false,
    iconloading: false
  }
  handleSizeChange = (e) =>{
    this.setState({
      size: e.target.value
    })
  }
  enterLoading = () =>{
    this.setState({
      loading: true
    })
  }
  enterIconLoading = () =>{
    this.setState({
      iconloading: true
    })
  }
  handleMenuClick = (e) => {
    console.log('click', e);
  }
  

  render(){
    const size = this.state.size;
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    );
    return (
      <div>  
        <Row>
          <Col span={12} className='my-flex-item'>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="danger">Danger</Button>
          </Col>
          <Col span={12} className='my-flex-item'>
            <Button type="primary" shape="circle" icon="search" />
            <Button type="primary" icon="search">Search</Button>
            <Button shape="circle" icon="search" />
            <Button icon="search">Search</Button>
            <br />
            <Button shape="circle" icon="search" />
            <Button icon="search">Search</Button>
            <Button type="dashed" shape="circle" icon="search" />
            <Button type="dashed" icon="search">Search</Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={12} className='my-flex-item'>
            <Radio.Group value={size} onChange={this.handleSizeChange}>
              <Radio.Button value="large">Large</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
            <br /><br />
            <Button type="primary" size={size}>Primary</Button>
            <Button size={size}>Normal</Button>
            <Button type="dashed" size={size}>Dashed</Button>
            <Button type="danger" size={size}>Danger</Button>
            <br />
            <Button type="primary" shape="circle" icon="download" size={size} />
            <Button type="primary" icon="download" size={size}>Download</Button>
            <br />
            <Button.Group size={size}>
              <Button type="primary">
                <Icon type="left" />Backward
              </Button>
              <Button type="primary">
                Forward<Icon type="right" />
              </Button>
            </Button.Group>
          </Col>
          <Col span={12} className='my-flex-item'>
            <Button type="primary">Primary</Button>
            <Button type="primary" disabled>Primary(disabled)</Button>
            <br />
            <Button>Default</Button>
            <Button disabled>Default(disabled)</Button>
            <br />
            <Button type="dashed">Dashed</Button>
            <Button type="dashed" disabled>Dashed(disabled)</Button>
            <div style={{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)' }}>
              <Button ghost>Ghost</Button>
              <Button ghost disabled>Ghost(disabled)</Button>
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={12} className='my-flex-item'>
            <span>
              <Button type="primary" loading>
                Loading
              </Button>
              <Button type="primary" size="small" loading>
                Loading
              </Button>
              <br />
              <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
                Click me!
              </Button>
              <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
                Click me!
              </Button>
              <br />
              <Button shape="circle" loading />
              <Button type="primary" shape="circle" loading />
            </span>
          </Col>
          <Col span={12} className='my-flex-item'>
          <Button type="primary">primary</Button>
          <Button>secondary</Button>
          <Dropdown overlay={menu}>
            <Button>
              Actions <Icon type="down" />
            </Button>
          </Dropdown>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{width:150}}>
          <Button type="primary" block="true">Primary</Button>
          </Col>
        </Row>
      </div>
    );
  }
  
}

ButtonC.propTypes = {
};

export default connect()(ButtonC);
