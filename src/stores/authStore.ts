import { create } from "zustand";
import { jwtDecode } from "jwt-decode";

interface UserState {
  token: string | null;
  id: number | null;
  username: string | null;
  permissions: string[];
  role: string | null;
  notification: {
    error: string | null;
    success: string | null;
    warning: string | null;
  };
  login: (token: string) => void;
  logout: () => void;
  setNotification: (type: "error" | "success" | "warning" | null, message: string) => void;
  clearNotification: () => void;
}

interface JwtPayload {
  id: number;
  username: string;
  permissions: string[];
  role: string;
}

interface InitialState {
  token: string | null;
  id: number | null;
  username: string | null;
  role: string | null;
  permissions: string[];
  notification: {
    error: string | null;
    success: string | null;
    warning: string | null;
  };
}

const getInitialState = (): InitialState => {
  const tokenFromStorage = localStorage.getItem("token");

  let initialState: InitialState = {
    token: tokenFromStorage || null,
    id: null,
    username: null,
    role: null,
    permissions: [],
    notification:{
      error: null,
      success: null,
      warning: null
    }
  };

  if (tokenFromStorage) {
    try {
      const decodedTokenFromStorage = jwtDecode<JwtPayload>(tokenFromStorage);
      const { id, username, permissions, role } = decodedTokenFromStorage;

      initialState = {
        ...initialState,
        id,
        username,
        permissions,
        role,
      };
    } catch (error) {
      initialState.notification.error = (error as Error).message.includes(
        "Invalid token specified"
      )
        ? "Session expired"
        : "Error decoding token";
      localStorage.removeItem("token");
    }
  }
  return initialState;
};

const useAuthStore = create<UserState>((set) => {
  return {
    ...getInitialState(),
    login: (token: string) => {
      localStorage.setItem("token", token);
      const decodedToken = jwtDecode<JwtPayload>(token);
      set({
        token,
        id: decodedToken.id,
        username: decodedToken.username,
        permissions: decodedToken.permissions,
        role: decodedToken.role,
      });
    },
    setNotification: (type: "error" | "success" | "warning" | null, message: string)=>{
      set((state)=>({
        notification: {
          ...state.notification,
          [type!]: message
        }
      }));
    },
    clearNotification: ()=>{
      set({
        notification:{
          error:null,
          success: null,
          warning: null
        }
      })
    },
    logout: () => {
      localStorage.removeItem("token");
      set({
        token: null,
        id: null,
        username: null,
        role: null,
        permissions: [],
        notification:{
          error: null,
          success: null,
          warning: null
        }
      });
    },
  };
});

export default useAuthStore;
