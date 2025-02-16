import React from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";

const Home = () => {
    const onFinish = async (values) => {
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts", values);
            if (response.status === 201) {
                message.success("Запрос успешно отправлен!");
            }
        } catch (error) {
            message.error("Ошибка при отправке запроса");
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: "0 auto", padding: "20px", background: "#fff", borderRadius: "8px" }}>
            <h2>Отправка формы</h2>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label="Заголовок" name="title" rules={[{ required: true, message: "Введите заголовок" }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Описание" name="body" rules={[{ required: true, message: "Введите описание" }]}>
                    <Input.TextArea rows={4} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Отправить</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Home;
