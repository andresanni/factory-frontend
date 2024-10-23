import { Menu, Dropdown, Space, Button, Avatar, Layout } from "antd";
import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import useAuthStore from "../stores/authStore";
import { useHeaderMenuOptions } from "../utils/menuConfig";

const DashboardHeader = () => {
  const { Header } = Layout;
const {logout, username, role } = useAuthStore();
const items = useHeaderMenuOptions(role!);
  

  const userMenu: MenuProps["items"] = [
    { key: 1, label: <span>{username}</span> },
    { key: 2, label: <span>{role}</span> },
    { key: 3, label: <Button onClick={logout}>Log out</Button>},
  ];
  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items}
        style={{ flex: 1, minWidth: 0 }}
      />
      <Dropdown
        menu={{ items: userMenu }}
        trigger={["click"]}
        placement="bottomRight"
      >
        <Space>
          <Avatar
            size={"large"}
            icon={<UserOutlined style={{ color: "black" }} />}
            style={{ cursor: "pointer", backgroundColor: "ghostwhite" }}
          />
        </Space>
      </Dropdown>
    </Header>
  );
};

export default DashboardHeader;
