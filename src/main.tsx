import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App.tsx";

const themeSettings = {
  
   token: {
    fontFamily: "DM Sans, sans-serif",    
  }, 
};

createRoot(document.getElementById("root")!).render(
  <ConfigProvider theme={themeSettings}>
    <App />
  </ConfigProvider>
);
