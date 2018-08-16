
import Button from './Button';
import Icon from './Icon';
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
                  <Menu.Item key="5">Grid 栅格</Menu.Item>
                  <Menu.Item key="6">Layout布局</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span>Navigation</span>}>
                  <Menu.Item key="9">Affix 固钉</Menu.Item>
                  <Menu.Item key="10">Breadcrumb 面包屑</Menu.Item>
                  <Menu.Item key="11">Dropdown 下拉菜单</Menu.Item>
                  <Menu.Item key="12">Menu 导航菜单</Menu.Item>
                  <Menu.Item key="13">Pagination 分页</Menu.Item>
                  <Menu.Item key="14">Steps 步骤条</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span>Data Entry</span>}>
                  <Menu.Item key="15">AutoComplete 自动完成</Menu.Item>
                  <Menu.Item key="16">Cascader 级联选择</Menu.Item>
                  <Menu.Item key="17">Checkbox 多选框</Menu.Item>
                  <Menu.Item key="18">DatePicker 日期选择框</Menu.Item>
                  <Menu.Item key="19">Form 表单</Menu.Item>
                  <Menu.Item key="20">Input 输入框</Menu.Item>
                  <Menu.Item key="21">InputNumber 数字输入框</Menu.Item>
                  <Menu.Item key="22">Mention 提及</Menu.Item>
                  <Menu.Item key="23">Rate 评分</Menu.Item>
                  <Menu.Item key="24">Radio 单选框</Menu.Item>
                  <Menu.Item key="25">Select 选择器</Menu.Item>
                  <Menu.Item key="26">Switch 开关</Menu.Item>
                  <Menu.Item key="27">TreeSelect 树选择</Menu.Item>
                  <Menu.Item key="28">TimePicker 时间选择框</Menu.Item>
                  <Menu.Item key="29">Transfer 穿梭框</Menu.Item>
                  <Menu.Item key="30">Upload 上传</Menu.Item>
                </SubMenu>
                <SubMenu key="sub5" title={<span>Data Display</span>}>
                  <Menu.Item key="31">Avatar 头像</Menu.Item>
                  <Menu.Item key="32">Badge 徽标数</Menu.Item>
                  <Menu.Item key="33">Calendar 日历</Menu.Item>
                  <Menu.Item key="34">Card 卡片</Menu.Item>
                  <Menu.Item key="35">Carousel 走马灯</Menu.Item>
                  <Menu.Item key="36">Collapse 折叠面板</Menu.Item>
                  <Menu.Item key="37">List 列表</Menu.Item>
                  <Menu.Item key="38">Popover 气泡卡片</Menu.Item>
                  <Menu.Item key="39">Tooltip 文字提示</Menu.Item>
                  <Menu.Item key="40">Table 表格</Menu.Item>
                  <Menu.Item key="41">Tabs 标签页</Menu.Item>
                  <Menu.Item key="42">Tag 标签</Menu.Item>
                  <Menu.Item key="43">Timeline 时间轴</Menu.Item>
                  <Menu.Item key="44">Tree 树形控件</Menu.Item>
                </SubMenu>
                <SubMenu key="sub6" title={<span>Feedback</span>}>
                  <Menu.Item key="45">Alert 警告提示</Menu.Item>
                  <Menu.Item key="46">Drawer 抽屉</Menu.Item>
                  <Menu.Item key="47">Modal 对话框</Menu.Item>
                  <Menu.Item key="48">Message 全局提示</Menu.Item>
                  <Menu.Item key="49">Notification 通知提醒框</Menu.Item>
                  <Menu.Item key="50">Progress 进度条</Menu.Item>
                  <Menu.Item key="51">Popconfirm 气泡确认框</Menu.Item>
                  <Menu.Item key="52">Spin 加载中</Menu.Item>
                  <Menu.Item key="53">Tooltip 文字提示</Menu.Item>
                  <Menu.Item key="54">Table 表格</Menu.Item>
                  <Menu.Item key="55">Tabs 标签页</Menu.Item>
                  <Menu.Item key="56">Tag 标签</Menu.Item>
                  <Menu.Item key="57">Timeline 时间轴</Menu.Item>
                  <Menu.Item key="58">Tree 树形控件</Menu.Item>
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
