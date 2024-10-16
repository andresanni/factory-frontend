import axios from "axios";

interface LoginRequest {
  username: string;
  password: string;
}

const API_URL = "http://localhost:3000/api/auth";

export const login = async (request: LoginRequest): Promise<string> => {
    const response = await axios.post(`${API_URL}/login`, request);
    return response.data.token;
};
