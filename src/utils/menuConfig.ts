import type { MenuProps } from "antd";
import useUiStore from "../stores/uiStore";

type OptionsWithRoles = {
  key: number;
  label: string;
  onClick?: () => void;
  roles: string[];
};

type SiderOption = Required<MenuProps>["items"][number];

type SiderOptionsByHeader = {
  [key: string]: SiderOption[];
};

export const useHeaderMenuOptions = (role: string): MenuProps["items"] => {
  const { setSelectedHeaderOption } = useUiStore();

  const allOptions: OptionsWithRoles[] = [
    {
      key: 1,
      label: "Users",
      onClick: () => setSelectedHeaderOption("users"),
      roles: ["admin"],
    },
    {
      key: 2,
      label: "Inventory",
      onClick: () => setSelectedHeaderOption("inventory"),
      roles: ["admin", "user"],
    },
    {
      key: 3,
      label: "Production",
      onClick: () => setSelectedHeaderOption("production"),
      roles: ["admin", "user"],
    },
  ];

  return (
    allOptions
      .filter((option) => option.roles.includes(role))
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .map(({ roles, ...rest }) => rest)
  );
};

export const useSiderMenuOptions = () => {
  const { selectedHeaderOption } = useUiStore();

  if (!selectedHeaderOption) {
    return [];
  }
  const siderOptions: SiderOptionsByHeader = {
    users: [
      {
        key: "users",
        label: "Users",
      },
      {
        key: "roles",
        label: "Roles",
      },
    ],
    inventory: [
      {
        key: "supplies",
        label: "Supplies",
      },
      {
        key: "suppliers",
        label: "Suppliers",
      },
    ],
  };

  return siderOptions[selectedHeaderOption] || [];
};
