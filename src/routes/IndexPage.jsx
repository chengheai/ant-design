
import Button from './Button';
import Icon from './Icon';
import Grid from './Grid';
import Affix from './Affix';
import Alert from './Alert';
import AutoComplete from './AutoComplete';
import Avatar from './Avatar';
import Badge from './Badge';
import Breadcrumb1 from './Breadcrumb';
import Calendar from './Calendar';
import Card from './Card';
import Carousel from './Carousel';
import Cascader from './Cascader';
import Checkbox from './Checkbox';
import Collapse from './Collapse';
import DatePicker from './DatePicker';
import Drawer from './Drawer';
import Dropdown from './Dropdown';
import Form from './Form';
import Input from './Input';
import InputNumber from './InputNumber';
import Layout1 from './Layout';
import List from './List';
import Mention from './Mention';
import Menu1 from './Menu';
import Message from './Message';
import Modal from './Modal';
import Notification from './Notification';
import Pagination from './Pagination';
import Popconfirm from './Popconfirm';
import Popover from './Popover';
import Progress from './Progress';
import Radio from './Radio';
import Rate from './Rate';
import Select from './Select';
import Slider from './Slider';
import Spin from './Spin';
import Steps from './Steps';
import Switch from './Switch';
import Table from './Table';
import Tabs from './Tabs';
import Tag from './Tag';
import Timeline from './Timeline';
import TimePicker from './TimePicker';
import Tooltip from './Tooltip';
import Transfer from './Transfer';
import Tree from './Tree';
import TreeSelect from './TreeSelect';
import Upload from './Upload';
import React from 'react';
import { connect } from 'dva';
import { Link, Route } from 'dva/router';
import { Layout, Menu, Breadcrumb } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;



class IndexPage extends React.Component {
  render(){
    return (
      <div>
        <Layout>
          <Header className="header">
            {/* <img className="logo" style={{objectFit:'cover',width:100,height:64}} src={'https://www.baidu.com/img/bd_logo1.png'} /> */}
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              {/* <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item> */}
            </Menu>
          </Header>
          <Layout>
            <Sider width={280} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu key="sub1" title={<span>General</span>}>
                  <Menu.Item key="1"><Link to='/index/button'>Button 按钮</Link></Menu.Item>
                  <Menu.Item key="2"><Link to='/index/icon'>Icon 图标</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span>Layout</span>}>
                  <Menu.Item key="5"><Link to='/index/grid'>Grid 栅格</Link></Menu.Item>
                  <Menu.Item key="6"><Link to='/index/layout'>Layout布局</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span>Navigation</span>}>
                  <Menu.Item key="9"><Link to='/index/affix'>Affix 固钉</Link></Menu.Item>
                  <Menu.Item key="10"><Link to='/index/breadcrumb'>Breadcrumb 面包屑</Link></Menu.Item>
                  <Menu.Item key="11"><Link to='/index/dropdown'>Dropdown 下拉菜单</Link></Menu.Item>
                  <Menu.Item key="12"><Link to='/index/menu'>Menu 导航菜单</Link></Menu.Item>
                  <Menu.Item key="13"><Link to='/index/pagination'>Pagination 分页</Link></Menu.Item>
                  <Menu.Item key="14"><Link to='/index/steps'>Steps 步骤条</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span>Data Entry</span>}>
                  <Menu.Item key="15"><Link to='/index/autoComplete'>AutoComplete 自动完成</Link></Menu.Item>
                  <Menu.Item key="16"><Link to='/index/cascader'>Cascader 级联选择</Link></Menu.Item>
                  <Menu.Item key="17"><Link to='/index/checkbox'>Checkbox 多选框</Link></Menu.Item>
                  <Menu.Item key="18"><Link to='/index/datePicker'>DatePicker 日期选择框</Link></Menu.Item>
                  <Menu.Item key="19"><Link to='/index/form'>Form 表单</Link></Menu.Item>
                  <Menu.Item key="20"><Link to='/index/input'>Input 输入框</Link></Menu.Item>
                  <Menu.Item key="21"><Link to='/index/inputNumber'>InputNumber 数字输入框</Link></Menu.Item>
                  <Menu.Item key="22"><Link to='/index/mention'>Mention 提及</Link></Menu.Item>
                  <Menu.Item key="23"><Link to='/index/rate'>Rate 评分</Link></Menu.Item>
                  <Menu.Item key="24"><Link to='/index/radio'>Radio 单选框</Link></Menu.Item>
                  <Menu.Item key="25"><Link to='/index/select'>Select 选择器</Link></Menu.Item>
                  <Menu.Item key="26"><Link to='/index/switch'>Switch 开关</Link></Menu.Item>
                  <Menu.Item key="27"><Link to='/index/treeSelect'>TreeSelect 树选择</Link></Menu.Item>
                  <Menu.Item key="28"><Link to='/index/timePicker'>TimePicker 时间选择框</Link></Menu.Item>
                  <Menu.Item key="29"><Link to='/index/transfer'>Transfer 穿梭框</Link></Menu.Item>
                  <Menu.Item key="30"><Link to='/index/upload'>Upload 上传</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub5" title={<span>Data Display</span>}>
                  <Menu.Item key="31"><Link to='/index/avatar'>Avatar 头像</Link></Menu.Item>
                  <Menu.Item key="32"><Link to='/index/badge'>Badge 徽标数</Link></Menu.Item>
                  <Menu.Item key="33"><Link to='/index/calendar'>Calendar 日历</Link></Menu.Item>
                  <Menu.Item key="34"><Link to='/index/card'>Card 卡片</Link></Menu.Item>
                  <Menu.Item key="35"><Link to='/index/carousel'>Carousel 走马灯</Link></Menu.Item>
                  <Menu.Item key="36"><Link to='/index/collapse'>Collapse 折叠面板</Link></Menu.Item>
                  <Menu.Item key="37"><Link to='/index/list'>List 列表</Link></Menu.Item>
                  <Menu.Item key="38"><Link to='/index/popover'>Popover 气泡卡片</Link></Menu.Item>
                  <Menu.Item key="39"><Link to='/index/tooltip'>Tooltip 文字提示</Link></Menu.Item>
                  <Menu.Item key="40"><Link to='/index/table'>Table 表格</Link></Menu.Item>
                  <Menu.Item key="41"><Link to='/index/tabs'>Tabs 标签页</Link></Menu.Item>
                  <Menu.Item key="42"><Link to='/index/tag'>Tag 标签</Link></Menu.Item>
                  <Menu.Item key="43"><Link to='/index/timeline'>Timeline 时间轴</Link></Menu.Item>
                  <Menu.Item key="44"><Link to='/index/tree'>Tree 树形控件</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub6" title={<span>Feedback</span>}>
                  <Menu.Item key="45"><Link to='/index/alert'>Alert 警告提示</Link></Menu.Item>
                  <Menu.Item key="46"><Link to='/index/drawer'>Drawer 抽屉</Link></Menu.Item>
                  <Menu.Item key="47"><Link to='/index/modal'>Modal 对话框</Link></Menu.Item>
                  <Menu.Item key="48"><Link to='/index/message'>Message 全局提示</Link></Menu.Item>
                  <Menu.Item key="49"><Link to='/index/notification'>Notification 通知提醒框</Link></Menu.Item>
                  <Menu.Item key="50"><Link to='/index/progress'>Progress 进度条</Link></Menu.Item>
                  <Menu.Item key="51"><Link to='/index/popconfirm'>Popconfirm 气泡确认框</Link></Menu.Item>
                  <Menu.Item key="52"><Link to='/index/spin'>Spin 加载中</Link></Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 750 }}>
                <Route path='/index/button' component={Button} />
                <Route path='/index/icon' component={Icon} />
                <Route path='/index/grid' component={Grid} />
                <Route path='/index/layout' component={Layout1} />
                <Route path='/index/spin' component={Spin} />
                <Route path='/index/popconfirm' component={Popconfirm} />
                <Route path='/index/progress' component={Progress} />
                <Route path='/index/notification' component={Notification} />
                <Route path='/index/message' component={Message} />
                <Route path='/index/modal' component={Modal} />
                <Route path='/index/drawer' component={Drawer} />
                <Route path='/index/alert' component={Alert} />
                <Route path='/index/tree' component={Tree} />
                <Route path='/index/timeline' component={Timeline} />
                <Route path='/index/tag' component={Tag} />
                <Route path='/index/tabs' component={Tabs} />
                <Route path='/index/table' component={Table} />
                <Route path='/index/tooltip' component={Tooltip} />
                <Route path='/index/popover' component={Popover} />
                <Route path='/index/list' component={List} />
                <Route path='/index/collapse' component={Collapse} />
                <Route path='/index/carousel' component={Carousel} />
                <Route path='/index/card' component={Card} />
                <Route path='/index/calendar' component={Calendar} />
                <Route path='/index/avatar' component={Avatar} />
                <Route path='/index/upload' component={Upload} />
                <Route path='/index/transfer' component={Transfer} />
                <Route path='/index/timePicker' component={TimePicker} />
                <Route path='/index/treeSelect' component={TreeSelect} />
                <Route path='/index/switch' component={Switch} />
                <Route path='/index/select' component={Select} />
                <Route path='/index/radio' component={Radio} />
                <Route path='/index/rate' component={Rate} />
                <Route path='/index/mention' component={Mention} />
                <Route path='/index/inputNumber' component={InputNumber} />
                <Route path='/index/input' component={Input} />
                <Route path='/index/form' component={Form} />
                <Route path='/index/datePicker' component={DatePicker} />
                <Route path='/index/checkbox' component={Checkbox} />
                <Route path='/index/cascader' component={Cascader} />
                <Route path='/index/badge' component={Badge} />
                <Route path='/index/autoComplete' component={AutoComplete} />
                <Route path='/index/steps' component={Steps} />
                <Route path='/index/menu' component={Menu1} />
                <Route path='/index/dropdown' component={Dropdown} />
                <Route path='/index/breadcrumb' component={Breadcrumb1} />
                <Route path='/index/affix' component={Affix} />
                <Route path='/index/pagination' component={Pagination} />
                <Route path='/index/slider' component={Slider} />
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
              </Footer>
            </Layout>
          </Layout>
        </Layout>
      </div>
      )   
  }
  
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
