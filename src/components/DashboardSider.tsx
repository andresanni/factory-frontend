import { Layout, Menu, theme } from "antd";
import { useSiderMenuOptions } from "../utils/menuConfig";

const DashboardSider = () => {
  const { Sider } = Layout;

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  const items = useSiderMenuOptions();

  return (
    <Sider width={200} style={{ background: colorBgContainer }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
        items={items}
      />
    </Sider>
  );
};

export default DashboardSider;
