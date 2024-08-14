import React from "react";
import {
  Card,
  Button,
  Row,
  Col,
  Form,
  Select,
  DatePicker,
  TimePicker,
  Radio,
} from "antd";
import Koengis from "../../images/koengis.png";
import Nissan from "../../images/nissan.png";
import "./Section.css";

const { Option } = Select;

const Section = () => {
  return (
    <div className="container">
      <div style={{ padding: "20px" }}>
        <Row gutter={16}>
          <Col span={12}>
            <Card
              style={{ backgroundColor: "#f0f9ff", borderRadius: "12px" }}
              title={
                <h2 style={{ color: "#1a73e8" }}>
                  The Best Platform for Car Rental
                </h2>
              }
              extra={
                <Button
                  type="primary"
                  style={{ backgroundColor: "#1a73e8", borderColor: "#1a73e8" }}
                >
                  Rental Car
                </Button>
              }
            >
              <p>
                Ease of doing a car rental safely and reliably. Of course at a
                low price.
              </p>
              <img
                src={Koengis}
                alt="Car 1"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card
              style={{ backgroundColor: "#f0f9ff", borderRadius: "12px" }}
              title={
                <h2 style={{ color: "#1a73e8" }}>
                  Easy way to rent a car at a low price
                </h2>
              }
              extra={
                <Button
                  type="primary"
                  style={{ backgroundColor: "#1a73e8", borderColor: "#1a73e8" }}
                >
                  Rental Car
                </Button>
              }
            >
              <p>
                Providing cheap car rental services and safe and comfortable
                facilities.
              </p>
              <img
                src={Nissan}
                alt="Car 2"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Card>
          </Col>
        </Row>

        <div
          style={{
            marginTop: "20px",
            backgroundColor: "#f7f9fc",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <div className="wrapper-section">
          <Form className="wrapper-form" layout="inline">
            <Radio.Group
              defaultValue="pick-up"
              buttonStyle="solid"
              style={{ marginBottom: "20px" }}
            >
              <Radio.Button value="pick-up">Pick - Up</Radio.Button>
              <Radio.Button value="drop-off">Drop - Off</Radio.Button>
            </Radio.Group>

            <Form.Item>
              <Select placeholder="Select your city" style={{ width: 160 }}>
                <Option value="city1">City 1</Option>
                <Option value="city2">City 2</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <DatePicker placeholder="Select your date" />
            </Form.Item>
            <Form.Item>
              <TimePicker placeholder="Select your time" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
            </Form.Item>
          </Form>

          <Form className="wrapper-form"  layout="inline">
            <Radio.Group
              defaultValue="pick-up"
              buttonStyle="solid"
              style={{ marginBottom: "20px" }}
            >
              <Radio.Button value="pick-up">Pick - Up</Radio.Button>
              <Radio.Button value="drop-off">Drop - Off</Radio.Button>
            </Radio.Group>

            <Form.Item>
              <Select placeholder="Select your city" style={{ width: 160 }}>
                <Option value="city1">City 1</Option>
                <Option value="city2">City 2</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <DatePicker placeholder="Select your date" />
            </Form.Item>
            <Form.Item>
              <TimePicker placeholder="Select your time" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
            </Form.Item>
          </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
