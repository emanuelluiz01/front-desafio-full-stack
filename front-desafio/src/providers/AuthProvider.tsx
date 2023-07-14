import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../pages/login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RegisterData } from "../pages/register/validator";

interface AuthProviderProps {
  children: ReactNode;
}

interface Contacts {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface UserRequest {
  map(arg0: (contact: any) => any): unknown;
  id: string;
  name: string;
  email: string;
  phone: string;
  contacts: [Contacts];
}

interface AuthContextValues {
  loginRequest: (data: LoginData) => void;
  loading: boolean;
  user: UserRequest[];
  userRequest: () => void;
  registerRequest: (data: RegisterData) => void;
}

export const AuthContext = createContext({} as AuthContextValues);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  const mensagem = "Email already exists";

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
  };

  const registerRequest = async (data: RegisterData) => {
    try {
      const response = await api.post("users", data);
      toast.success("Conta criada com sucesso!");

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (e: any) {
      if (e.response.data.message == mensagem) {
        toast.error("Email ja usado por outro usuário!");
      } else {
        toast.error(e.response.data.message);
      }
    }
  };

  const userRequest = async () => {
    try {
      const response = await api.get("users");
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ loginRequest, loading, user, userRequest, registerRequest }}
    >
      {children}
    </AuthContext.Provider>
  );
};
