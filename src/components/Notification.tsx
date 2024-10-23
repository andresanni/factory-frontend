import useAuthStore from "../stores/authStore";
import { Alert } from "antd";

const Notification = () => {
  const { notification, clearNotification } = useAuthStore();
  const { error, warning, success } = notification;
  return (
    <>
      {error && (
        <Alert
          message="Error"
          description={error}
          type="error"
          showIcon
          closable
          onClose={() => clearNotification()}
        />
      )}
      {warning && (
        <Alert
          message="Warning"
          description={warning}
          type="warning"
          showIcon
          closable
          onClose={() => clearNotification()}
        />
      )}
      {success && (
        <Alert
          message="Success"
          description={success}
          type="success"
          showIcon
          closable
          onClose={() => clearNotification()}
        />
      )}
    </>
  );
};

export default Notification;
