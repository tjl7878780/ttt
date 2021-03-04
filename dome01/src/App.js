import { Form, Row, Col, Input, Select, DatePicker, Space, Button } from 'antd';
import './App.css';
import moment from 'moment';

const { RangePicker } = DatePicker;

const { Option } = Select;
function App() {
  const [form] = Form.useForm();
  const onFinish = value => {
    console.log(value, '11')
  }
  return (
    <div className="App">
      <Form
        form={form}
        onFinish={onFinish}
        initialValues={{
          aa: '11', bb: '22', cc: '33', dd: '44', ee: '55', gg: '1', ii: [moment(), moment()], ss: '66'
        }}
      >
        <Row gutter={[16]}>
          <Col sm={24} md={6}>
            <Form.Item name="aa">
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
          <Col sm={24} md={6}>
            <Form.Item name="bb">
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
          <Col sm={24} md={6}>
            <Form.Item name="cc">
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
          <Col sm={24} md={6}>
            <Form.Item name="dd">
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
          <Col sm={24} md={6}>
            <Form.Item name="ee">
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
          <Col sm={24} md={6}>
            <Form.Item name="gg">
              <Select placeholder="请选择">
                <Option value="0">Jack</Option>
                <Option value="1">Lucy</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col sm={24} md={8}>
            <Form.Item name="ii">
              <RangePicker
                style={{width:'100%'}}
                // defaultValue={[moment('2015-02-25'),moment('2020-10-05')]}
                dateRender={(current) => {
                  const style = {};
                  if (current.date() === 1) {
                    style.border = '1px solid #1890ff';
                    style.borderRadius = '50%';
                  }
                  return (
                    <div className="ant-picker-cell-inner" style={style}>
                      {current.date()}
                    </div>
                  );
                }}
              />
            </Form.Item>
          </Col>
          <Col sm={24} md={4}>
            <Form.Item name="ss">
              <Input placeholder="请输入"></Input>
            </Form.Item>
          </Col>
          <Col sm={24} md={6}>
            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">提交</Button>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default App;
