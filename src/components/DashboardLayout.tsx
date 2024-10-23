import {
  Breadcrumb,
  Layout,   
  theme,
} from "antd";
import DashboardHeader from "./DashboardHeader";
import DashboardSider from "./DashboardSider";

const DashboardLayout = () => {
  const {Content } = Layout;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <DashboardHeader />
      <Layout>
        <DashboardSider />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb
            items={[{ title: "Home" }, { title: "List" }, { title: "App" }]}
            style={{ margin: "16px 0" }}
          />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
