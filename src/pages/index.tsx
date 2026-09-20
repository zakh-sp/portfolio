import { Layout, Typography, Space } from "antd";

const { Content } = Layout;
const { Title, Text } = Typography;

export default function Home() {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Content
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Space direction="vertical" align="center" size="large">
                    <Title>Portfolio</Title>
                    <Text type="secondary">Coming soon.</Text>
                </Space>
            </Content>
        </Layout>
    );
}
