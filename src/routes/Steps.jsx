import React from 'react';
import { connect } from 'dva';
import { Steps, Col, Row, Icon, Button, message, Popover  } from 'antd'; 
const Step = Steps.Step;
const steps = [{
  title: 'First',
  content: 'First-content',
}, {
  title: 'Second',
  content: 'Second-content',
}, {
  title: 'Last',
  content: 'Last-content',
}];
const customDot = (dot, { status, index }) => (
  <Popover content={<span>step {index} status: {status}</span>}>
    {dot}
  </Popover>
);
class StepsC extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      current: 0
    }
  }
  next(){
    const current = this.state.current + 1;
    this.setState({current});
  }
  prev(){
    const current = this.state.current -1;
    this.setState({current})
  }

  render(){
    const { current } = this.state;
    return (
      
      <div>
        <Row>
          <Col>
          <Steps current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Steps><br />
          <Steps size="small" current={1}>
            <Step title="Finished" />
            <Step title="In Progress" />
            <Step title="Waiting" />
          </Steps><br />
          <Steps>
            <Step status="finish" title="Login" icon={<Icon type="user" />} />
            <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
            <Step status="process" title="Pay" icon={<Icon type="loading" />} />
            <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
          </Steps><br /><br /><br />
          <div>
            <Steps current={current}>
              {steps.map(item => <Step key={item.title} title={item.title} />)}
            </Steps>
            <div className="steps-content flex-center-center" style={{height:200}}>{steps[current].content}</div>
            <div className="steps-action">
              {
                current < steps.length - 1
                && <Button type="primary" onClick={() => this.next()}>Next</Button>
              }
              {
                current === steps.length - 1
                && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
              }
              {
                current > 0
                && (
                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                  Previous
                </Button>
                )
              }
            </div>
          </div><br />
          <Steps direction="vertical" current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Steps><br />
          <Steps direction="vertical" size="small" current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Steps><br />
          <Steps current={1} status="error">
            <Step title="Finished" description="This is a description" />
            <Step title="In Process" description="This is a description" />
            <Step title="Waiting" description="This is a description" />
          </Steps><br />
          <Steps progressDot current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Steps><br />
          <Steps current={1} progressDot={customDot}>
            <Step title="Finished" description="You can hover on the dot." />
            <Step title="In Progress" description="You can hover on the dot." />
            <Step title="Waiting" description="You can hover on the dot." />
            <Step title="Waiting" description="You can hover on the dot." />
          </Steps>
          </Col>
        </Row>
      </div>
    );
  }
  
}

StepsC.propTypes = {
};

export default connect()(StepsC);
