import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../pages/login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface AuthProviderProps {
  children: ReactNode;
}

interface UserRequest {
  name: string;
  email: string;
  phone: string;
}

interface AuthContextValues {
  loginRequest: (data: LoginData) => void;
  loading: boolean;
  user: UserRequest[];
  // userRequest: () => void;
}

export const AuthContext = createContext({} as AuthContextValues);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("@user:token");

    if (!token) {
      setLoading(false);
      return;
    }

    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  const loginRequest = async (data: LoginData) => {
    try {
      const response = await api.post("login", data);

      const { token } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      localStorage.setItem("@user:token", token);

      toast.success("Login realizado com sucesso!");

      setTimeout(() => {
        navigate("dashboard");
      }, 3000);
    } catch (error) {
      toast.error("Usuário não encontrado!");
    }

    const userRequest = async () => {
      try {
        const response = await api.get("users");

        console.log(response.data);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    userRequest();
  };
  return (
    <AuthContext.Provider value={{ loginRequest, loading, user }}>
      {children}
    </AuthContext.Provider>
  );
};
