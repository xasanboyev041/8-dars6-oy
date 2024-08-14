import React from "react";
import { Card, Col, Row, Button, Typography, Divider } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import "./PopularCar.css";
import Rolls from "../../images/rolls.png";
import Nissan from "../../images/nissan.png";
import Koengis from "../../images/koengis.png";

const { Title, Text } = Typography;

const carData = [
  {
    name: "Koenigsegg",
    type: "Sport",
    img: "../../images/koengis.png",
    fuel: "90L",
    transmission: "Manual",
    seats: "2 People",
    price: "$99.00",
    oldPrice: "",
    liked: true,
  },
  {
    name: "Nissan GT - R",
    type: "Sport",
    img: "../../images/nissan.png",
    fuel: "80L",
    transmission: "Manual",
    seats: "2 People",
    price: "$80.00",
    oldPrice: "$100.00",
    liked: false,
  },
  {
    name: "Rolls - Royce",
    type: "Sedan",
    img: "../../images/rolls.png",
    fuel: "70L",
    transmission: "Manual",
    seats: "4 People",
    price: "$96.00",
    oldPrice: "",
    liked: true,
  },
  {
    name: "Nissan GT - R",
    type: "Sport",
    img: "../../images/nissan.png",
    fuel: "80L",
    transmission: "Manual",
    seats: "2 People",
    price: "$80.00",
    oldPrice: "$100.00",
    liked: false,
  },
];

const PopularCar = () => {
  return (
    <div className="container">
      <div className="popular-car-section">
        <div className="popular-car-header">
          <Title level={4}>Popular Car</Title>
          <Button type="link">View All</Button>
        </div>
        <Row gutter={16}>
          {carData.map((car, index) => (
            <Col span={6} key={index}>
              <Card
                actions={[
                  <Button type="primary">Rent Now</Button>,
                  car.liked ? (
                    <HeartFilled style={{ color: "red" }} />
                  ) : (
                    <HeartOutlined />
                  ),
                ]}
              >
                <Title level={5}>{car.name}</Title>
                <Text type="secondary">{car.type}</Text>
                <img src={Nissan} alt="" />
                <Divider />
                <div className="car-info">
                  <Text>{car.fuel}</Text>
                  <Text>{car.transmission}</Text>
                  <Text>{car.seats}</Text>
                </div>
                <Divider />
                <div className="car-price">
                  <Title level={5} style={{ margin: 0 }}>
                    {car.price} <Text delete>{car.oldPrice}</Text>
                  </Title>
                  <Text type="secondary">/day</Text>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default PopularCar;
