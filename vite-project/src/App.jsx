import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

const { Header, Content } = Layout;

const App = () => {
    const menuItems = [
        { key: "1", label: <Link to="/">Home</Link> },
        { key: "2", label: <Link to="/products">Products</Link> },
    ];

    return (
        <Layout>
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={menuItems} />
            </Header>
            <Content style={{ padding: "20px" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                </Routes>
            </Content>
        </Layout>
    );
};

export default App;
