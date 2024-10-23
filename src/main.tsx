import { createRoot } from "react-dom/client";
import { ConfigProvider, ThemeConfig } from "antd";
import App from "./App.tsx";

const themeSettings: ThemeConfig = {  
   token: {
    fontFamily: "DM Sans, sans-serif",           
  }, 
};

createRoot(document.getElementById("root")!).render(
  <ConfigProvider theme={themeSettings}>
    <App />
  </ConfigProvider>
);
