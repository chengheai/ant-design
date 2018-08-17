import React from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, Icon, Col, Row, Button, message } from 'antd';
const SubMenu = Menu.SubMenu;
const menu3 = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu>
  </Menu>
);
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
    </Menu.Item>
  </Menu>
);
const menu2 = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
    </Menu.Item>
  </Menu>
);
const onClick = (key) =>{
  message.info(`Click on item ${key.key}`)
}
const menu1 = (
  <Menu onClick={onClick}>
    <Menu.Item key='1'>1st menu item</Menu.Item>
    <Menu.Item key='2'>2st menu item</Menu.Item>
    <Menu.Item key='3'>3st menu item</Menu.Item>
  </Menu>
);
const menu4 = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);
const handleButtonClick = (e) =>{
  message.info('Click on left button');
  console.log('click left button', e)
}
const handleMenuClick = (e) =>{
  message.info('Click on menu item.');
  console.log('click', e)
}
const menu5 = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1"><Icon type="user" />1st menu item</Menu.Item>
    <Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
    <Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
  </Menu>
);

class DropdownC extends React.Component {

  render(){

    return (
      
      <div>
        <Row>
          <Col span={12} className='my-flex-item'>
            <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="">
              Hover me <Icon type="down" />
            </a>
          </Dropdown>
          <Dropdown overlay={menu1}>
            <a className="ant-dropdown-link" href="">
              Click menu item<Icon type="down" />
            </a>
          </Dropdown>
          <Dropdown overlay={menu3}>
            <a className="ant-dropdown-link" href="">
              Cascading menu <Icon type="down" />
            </a>
          </Dropdown>
          <Dropdown overlay={menu4} trigger={['contextMenu']}>
            <span style={{ userSelect: 'none' }}>Right Click on Me</span>
          </Dropdown>
          </Col>
          <Col span={12} className='my-flex-item'>
          <Dropdown overlay={menu} placement="bottomLeft">
            <Button>bottomLeft</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="bottomCenter">
            <Button>bottomCenter</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="bottomRight">
            <Button>bottomRight</Button>
          </Dropdown>
          <br />
          <Dropdown overlay={menu} placement="topLeft">
            <Button>topLeft</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="topCenter">
            <Button>topCenter</Button>
          </Dropdown>
          <Dropdown overlay={menu} placement="topRight">
            <Button>topRight</Button>
          </Dropdown>
          <Dropdown overlay={menu2} trigger={['click']}>
            <a className="ant-dropdown-link" href="">
              Click me <Icon type="down" />
            </a>
          </Dropdown>
          <br />
          <br />
          <Dropdown.Button onClick={handleButtonClick} overlay={menu5}>
            Dropdown
          </Dropdown.Button>
          <Dropdown.Button
          overlay={menu5}
          onClick={this.handleMenuClick}
          disabled
          style={{marginLeft:8}}
          >
            Dropdown
          </Dropdown.Button>
          <Dropdown overlay ={menu5}>
            <Button style={{marginLeft:8}}>
              Button <Icon type='down' />
            </Button>
          </Dropdown>
          </Col>
        </Row>     
      </div>
    );
  }
  
}

DropdownC.propTypes = {
};

export default connect()(DropdownC);
