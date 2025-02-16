import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Spin } from "antd";
import axios from "axios";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [id]);

    if (loading) return <Spin size="large" />;
    if (!product) return <p>Продукт не найден</p>;

    return (
        <Card title={product.title} cover={<img alt={product.title} src={product.image} style={{ height: 300, objectFit: "cover" }} />}>
            <p>{product.description}</p>
            <p><strong>Цена:</strong> ${product.price}</p>
            <p><strong>Категория:</strong> {product.category}</p>
        </Card>
    );
};

export default ProductDetail;
