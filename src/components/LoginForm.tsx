import useAuthStore from "../stores/authStore";
import { login as loginService } from "../services/authService";
import { AxiosError } from "axios";
import { Form, Input, Button, Typography, Row, Col, Alert } from "antd";

const LoginForm = () => {
  const { login, setError, error } = useAuthStore();

  const onFinish = async (values: { username: string; password: string }) => {
    setError("");
    const { username, password } = values;
    try {
      const token = await loginService({ username, password });
      login(token);
    } catch (error) {
      console.log(error);
      let errorMessage = "An unknown error occurred";

      if (error instanceof AxiosError) {
        errorMessage = error.response?.data.error || "An unknown error occurred";
      }

      setError(errorMessage);
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Row justify="center">
        <Col span={24}>
          <Typography.Title
            level={1}
            style={{ fontWeight: "900", fontSize: "40px", textAlign: "center" }}
          >
            Let's get you in
          </Typography.Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} sm={18} md={12} lg={8}>
          <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="horizontal"
            size="large"
          >
            <Form.Item
              
              name="username"
              rules={[
                { required: true, message: "Really? You don't have a username?" },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>

            <Form.Item
              
              name="password"
              rules={[
                { required: true, message: "Have you ever logged into an app without a password?" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Row justify="space-evenly">
              <Col xs={24} sm={10} md={8}>
                <Form.Item>
                  <Button type="primary" htmlType="submit" size="large" block>
                    Login
                  </Button>
                </Form.Item>
              </Col>

              <Col xs={24} sm={10} md={8}>
                <Form.Item>
                  <Button type="primary" htmlType="button" size="large" block>
                    Register
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row justify={"center"}>
      {error && (
            <Alert
            
              message="Error"
              description={ error }
              type="error"
              showIcon
              closable
              onClose={() => setError("")} // Limpiar el error al cerrar la alerta
            />
          )}
      </Row>
      <Row justify="center">
      <Typography.Text>Forgot my password</Typography.Text>
      </Row>
    </>
  );
};

export default LoginForm;
