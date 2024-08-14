import React from "react";
import { Card, Button, Row, Col, Typography, Space, Badge } from "antd";
import {
  UserOutlined,
  CarOutlined,
  SettingOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import Nissan from "../../images/nissan.png";

const { Title, Text } = Typography;

const carData = [
  {
    name: "All New Rush",
    type: "SUV",
    capacity: "70L",
    transmission: "Manual",
    seats: "6 People",
    price: 72,
    discountPrice: 80,
    liked: false,
  },
  {
    name: "CR - V",
    type: "SUV",
    capacity: "80L",
    transmission: "Manual",
    seats: "6 People",
    price: 80,
    discountPrice: null,
    liked: true,
  },
  {
    name: "All New Terios",
    type: "SUV",
    capacity: "90L",
    transmission: "Manual",
    seats: "6 People",
    price: 74,
    discountPrice: 90,
    liked: false,
  },
  {
    name: "MG ZX Exclucise",
    type: "Hatchback",
    capacity: "70L",
    transmission: "Manual",
    seats: "4 People",
    price: 76,
    discountPrice: 80,
    liked: true,
  },
  {
    name: "New MG ZS",
    type: "SUV",
    capacity: "80L",
    transmission: "Manual",
    seats: "6 People",
    price: 80,
    discountPrice: null,
    liked: false,
  },
  {
    name: "MG ZX Excite",
    type: "Hatchback",
    capacity: "90L",
    transmission: "Manual",
    seats: "4 People",
    price: 74,
    discountPrice: 80,
    liked: true,
  },
  {
    name: "New MG ZS",
    type: "SUV",
    capacity: "80L",
    transmission: "Manual",
    seats: "6 People",
    price: 80,
    discountPrice: null,
    liked: false,
  },
  {
    name: "MG ZX Excite",
    type: "Hatchback",
    capacity: "70L",
    transmission: "Manual",
    seats: "4 People",
    price: 76,
    discountPrice: 80,
    liked: true,
  },
];

const CarRecommendations = () => {
  return (
    <div className="container">
      <div style={{ padding: "24px", background: "#f5f5f5" }}>
        <Title level={4} style={{ marginBottom: "16px" }}>
          Recomendation Car
        </Title>
        <Row gutter={[16, 16]}>
          {carData.map((car, index) => (
            <Col key={index} xs={24} sm={12} md={12} lg={6}>
              <Card
                hoverable
                style={{ width: "100%" }}
                // cover={<img alt={car.name} src={car.image} />}
                actions={[<Button type="primary">Rent Now</Button>]}
              >
                <Badge
                  count={
                    car.liked ? (
                      <HeartFilled style={{ color: "#f5222d" }} />
                    ) : (
                      <HeartOutlined style={{ color: "#ccc" }} />
                    )
                  }
                />
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: "100%" }}
                >
                  <Title level={5}>{car.name}</Title>
                  <img src={Nissan} alt="" />
                  <Text type="secondary">{car.type}</Text>
                  <Space>
                    <CarOutlined />
                    <Text>{car.capacity}</Text>
                    <SettingOutlined />
                    <Text>{car.transmission}</Text>
                    <UserOutlined />
                    <Text>{car.seats}</Text>
                  </Space>
                  <Text strong style={{ fontSize: "1.2em" }}>
                    ${car.price}.00/day
                  </Text>
                  {car.discountPrice && (
                    <Text delete>${car.discountPrice}.00</Text>
                  )}
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <Button type="primary">Show more car</Button>
        </div>
      </div>
    </div>
  );
};

export default CarRecommendations;
