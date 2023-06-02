import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginData, loginSchema } from "./validator";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ContainerForm, LoginH2 } from "./style";

export const Login = () => {
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const { loginRequest } = useContext(AuthContext);

  return (
    <main>
      <LoginH2>LOGIN</LoginH2>
      <ContainerForm>
        <form onSubmit={handleSubmit(loginRequest)}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Seu email aqui ..."
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder="Sua senha aqui ..."
          />

          <button type="submit">Login</button>
        </form>
      </ContainerForm>
    </main>
  );
};
