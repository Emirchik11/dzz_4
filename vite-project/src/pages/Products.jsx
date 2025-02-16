import React, { useEffect, useState } from "react";
import { Card, Row, Col, Spin } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке данных:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <Spin size="large" />;

    return (
        <Row gutter={[16, 16]}>
            {products.map((product) => (
                <Col key={product.id} span={6}>
                    <Link to={`/products/${product.id}`}>
                        <Card title={product.title} cover={<img alt={product.title} src={product.image} style={{ height: 200, objectFit: "cover" }} />}>
                            <p>${product.price}</p>
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
    );
};

export default Products;
